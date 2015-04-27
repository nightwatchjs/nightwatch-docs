### Using Page Objects

The Page Objects methodology is a popular pattern to write end-to-end tests by wrapping the pages or page fragments of a web app into objects.
The purpose of a page object is to allow a software client to do anything and see anything that a human can by abstracting away the underlying html actions needed to access and manipulate the page.

#### A Simple Page Object

As of [TODO insert version] Nightwatch provides a qclean and simple DSL for creating a page objects. The page object is simply an object containing properties that describe the page. Each page object needs to be located in a separate file, located into a designated folder.
Nightwatch reads the page objects from the folder specified in the `page_objects_path` configuration property.

The `page_objects_path` property can also be an array of folders, allowing you thus to logically split the page objects into smaller groups.

##### Elements

Most of the time, you will want to define elements on your page that your tests will interact with. This is made simple using the `elements` property so that all your elements are defined in a single place. Especially in larger integrationt tests, using `elements` will go a long way to keep your test code DRY.

Internally Nightwatch handles logic for each element like switching between css and xpath locate strategies. The default `locateStrategy` is css but you can also provide others (currently, xpath).

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  elements: {
    searchBar: { selector: 'input[type=text]' },
    submit: { selector: '//*[@name="q"]', locateStrategy: 'xpath' }
  }
};
</code></pre>
</div>

##### Url

You can optionally define a url property that designates the URL that you will use to navigate to your page.

The URL can be a string:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  url: 'http://google.com'
};
</code></pre>
</div>

Or it can be a function:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  url: function() { return this.api.defaultUrl }
};
</code></pre>
</div>

Putting this together, say you have the following defined above saved as a google.js file:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  url: 'https://google.com',
  elements: {
    searchBar: { selector: 'input[type=text]' },
    submit: { selector: '//*[@name="q"]', locateStrategy: 'xpath' }
  }
};
</code></pre>
</div>

In your tests you will use it as follows:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (client) {
    // Each action and assertion returns the page object for easy chaining
    var google = client.page.google();
    google.goTo() // If no arguments are passed, navigates to the URL defined on the page
      .assert.title('Google')
      .assert.visible('searchBar')
      .setValue('searchBar', 'nightwatch')
      .click('submit');

  client.end();
  }
};
</code></pre>
</div>

#### More Advanced Page Object Usage

##### Sections

Sometimes it is useful to define sections of a page. This is easily done using the `sections` property:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  sections: {
    menu: {
    selector: '#gb',
    elements: {
      mail: { selector: 'a[href*="mail"]' }
      images: { selector: 'a[href*="imghp"]' }
  }
};
</code></pre>
</div>

Nightwatch will nest the child elements under their resepective section. This is done internally by combining the css selector of xpath. For example in the example above the selectors for `mail` and `images` elements become `#gb a[href*="mail"]` and `#gb a[href*="imghp"]` respectively.
Currently, you can only create elements under a section for the same locate strategy (css or xpath).

Your tests would use it as follows:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (client) {
    var google = client.page.google();
    // Each action and assertion on a section returns that section for easy chaining
    var menuSection = google.section.menu;
    menu.assert.visible('mail')
      .assert.visible('images')
      .click('mail');

  client.end();
  }
};
</code></pre>
</div>

If desired, you can nest sections under other sections for complex DOM tree structures.

##### Mixins


Finally, you can add mixin functions to your page object using the `mixins` property. This is another useful way to encapsulate logic about the page that would otherwise live in the test, or a way to share logic across multiple pages.

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">

var googleMixins = {
  submit: function() {
    // For chaining, return the page object
    return this.waitForElementVisible('submitButton', 1000)
      .click('submitButton')
      .waitForElementNotPresent('submitButton');
  }
};

module.exports = {
  mixins: [googleMixins],
  elements: {
    searchBar: { selector: 'input[type=text]' },
    submitButton: { selector: 'button[name=btnG]' }
  }
};
</code></pre>
</div>

Nightwatch mixes each function into the page object. So the test would become:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (client) {
    var google = client.page.google();
      .setValue('searchBar', 'nightwatch')
      .submit();

  client.end();
  }
};
</code></pre>
</div>


#### Further reading
A comprehensive introduction to Page Objects can be found in <a href="http://martinfowler.com/bliki/PageObject.html" target="_blank">this article</a>.
