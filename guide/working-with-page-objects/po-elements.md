### Defining Elements

Most of the time, you will want to define elements on your page that your tests will interact with through commands and assertions. This is made simple using the `elements` property so that all your elements are defined in a single place. Especially in larger integration tests, using `elements` will go a long way to keep test code DRY.

Switching between css and xpath locate strategies is handled internally so you don't need to call `useXpath` and `useCss` in your tests. The default `locateStrategy` is css but you can also specify xpath:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submit: {
      selector: '//[@name="q"]',
      locateStrategy: 'xpath'
    }
  }
};
</code></pre>
</div>

<br>
Or if you're creating elements with the same locate strategy as is default, you can use the shorthand:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  elements: {
    searchBar: 'input[type=text]'
  }
};
</code></pre>
</div>

<br>
Using the `elements` property allows you to refer to the element by its name with an _"@" prefix_, rather than selector, when calling element commands and assertions (`click`, etc).

Optionally, you can define an array of objects:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
var sharedElements = {
  mailLink: 'a[href*="mail.google.com"]'
};

module.exports = {
  elements: [
    sharedElements,
    { searchBar: 'input[type=text]' }
  ]
};
</code></pre>
</div>

<br>
Putting `elements` and `url` together, say you have the following defined above saved as a `google.js` file:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  url: 'http://google.com',
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submit: {
      selector: '//[@name="q"]',
      locateStrategy: 'xpath'
    }
  }
};
</code></pre>
</div>

<br>
In your tests you will use it as follows:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (browser) {
    var google = browser.page.google();

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');

    browser.end();
  }
};
</code></pre>
</div>

#### Using the Element index Property

The index is used to target a specific element in a query that results in multiple elements returned. Normally, only the first element is used (index = 0) but using the `index` property, you can specify any element within the result.

Say in the example above, the `searchBar` element selector returns 3 elements and you are interested in the second element.

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  elements: {
    searchBar: {
      selector: 'input[type=text]',
      index: 2
    }
  }
};
</code></pre>
</div>

You can also override what the page element defined by specifying the element as an object selectors in commands, which can also receive the `index`:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (browser) {
    var google = browser.page.google();

    google
      .navigate()
      .assert.title('Google');
      
    google.waitForElementVisible('@searchBar') // 2nd input element
    google.waitForElementVisible({selector:'@searchBar', index:1}, function(result){}); // 1st div
      
    google.click('@submit');

    browser.end();
  }
};
</code></pre>
</div>