### Page Objects

The Page Objects methodology is a popular pattern to write end-to-end tests by wrapping the pages or page fragments of a web app into objects.
The purpose of a page object is to allow a software client to do anything and see anything that a human can by abstracting away the underlying html actions needed to access and manipulate the page.

As of version `0.7` Nightwatch provides a clean and simple DSL for creating a page objects.


#### Configuration

To create a page object simply create an object with properties that describe the page. Each page object should be located in a separate file, located in a designated folder. Nightwatch reads the page objects from the folder specified in the `page_objects_path` configuration property.

The `page_objects_path` property can also be an array of folders, allowing you thus to logically split the page objects into smaller groups.


#### Using Page Objects

##### Url

You can optionally add a `url` property that designates the page's URL. To navigate to the page, you can call the `navigate` method on the page object.

The URL can be a string:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  url: 'http://google.com'
};
</code></pre>
</div>

It can also be a function in case the URL is dynamic. One use case for this is to support different test environments. You can create a function that gets called in the context of the page, thus allowing you to do:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  url: function() { return this.api.defaultUrl + '/fooPage'; }
};
</code></pre>
</div>

##### Elements

Most of the time, you will want to define elements on your page that your tests will interact with through commands and assertions. This is made simple using the `elements` property so that all your elements are defined in a single place. Especially in larger integration tests, using `elements` will go a long way to keep test code DRY.

Switching between css and xpath locate strategies is handled internally so you don't need to call `useXpath` and `useCss` in your tests. The default `locateStrategy` is css but you can also specify xpath:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  elements: {
    searchBar: { selector: 'input[type=text]' },
    submit: { selector: '//[@name="q"]', locateStrategy: 'xpath' }
  }
};
</code></pre>
</div>

Using the `elements` property allows you to refer to the element by its name with an "@" prefix, rather than selector, when calling element commands and assertions (`click`, etc).

Putting `elements` and `url` together, say you have the following defined above saved as a google.js file:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  url: 'http://google.com',
  elements: {
    searchBar: { selector: 'input[type=text]' },
    submit: { selector: '//[@name="q"]', locateStrategy: 'xpath' }
  }
};
</code></pre>
</div>

In your tests you will use it as follows:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (client) {
    var google = client.page.google();
    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');

    client.end();
  }
};
</code></pre>
</div>


##### Sections

Sometimes it is useful to define sections of a page. Sections do 2 things:
*    Provide a level of namespacing under the page
*    Provide element-level nesting so that any element defined within a section is a descendant of its parent section in the DOM

You can create sections using the `sections` property:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  sections: {
    menu: {
      selector: '#gb',
      elements: {
        mail: { selector: 'a[href*="mail"]' },
        images: { selector: 'a[href*="imghp"]' }
      }
    }
  }
};
</code></pre>
</div>

Your tests would use it as follows:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (client) {
    var google = client.page.google();
    google.expect.section('@menu').to.be.visible;

    var menuSection = google.section.menu;
    menuSection.expect.element('@mail').to.be.visible;
    menuSection.expect.element('@images').to.be.visible;

    menuSection.click('@mail');

    client.end();
  }
};
</code></pre>
</div>

Note that every command and assertion on a section (except Chai assertions) returns that section for chaining. If desired, you can nest sections under other sections for complex DOM structures.

##### Commands

You can add commands to your page object using the `commands` property. This is a useful way to encapsulate logic about the page that would otherwise live in a test, or multiple tests.

Nightwatch will call the command on the context of the page or section. Client commands like `pause` are available via `this.api`. For chaining, each function should return the page object or section.

In this case, a mixin is used to encapsulate logic for clicking the submit button:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
var googleCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@submitButton', 1000)
      .click('@submitButton')
      .waitForElementNotPresent('@submitButton');
  }
};

module.exports = {
  commands: [googleCommands],
  elements: {
    searchBar: { selector: 'input[type=text]' },
    submitButton: { selector: 'button[name=btnG]' }
  }
};
</code></pre>
</div>

Then the test is simply:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (client) {
    var google = client.page.google();
    google.setValue('@searchBar', 'nightwatch')
      .submit();

    client.end();
  }
};
</code></pre>
</div>


#### Further reading
A comprehensive introduction to Page Objects can be found in <a href="http://martinfowler.com/bliki/PageObject.html" target="_blank">this article</a>.
