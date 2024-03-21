## Defining Elements

Most of the time, you will want to define elements on your page that your tests will interact with through commands and assertions. This is made simple using the `elements` property so that all your elements are defined in a single place. Especially in larger integration tests, using `elements` will go a long way to keep test code DRY.

Switching between css and xpath locate strategies is handled internally so you don't need to call `useXpath` and `useCss` in your tests. The default `locateStrategy` is css but you can also specify xpath:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
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
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  elements: {
    searchBar: 'input[type=text]'
  }
};
</code></pre>
</div>

<br>
Using the <code>elements</code> property allows you to refer to the element by its name with an _"@" prefix_, rather than selector, when calling element commands and assertions (<code>click</code>, etc).

Optionally, you can define an array of objects:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">var sharedElements = {
  mailLink: 'a[href*="mail.google.com"]'
};
<br>
module.exports = {
  elements: [
    sharedElements,
    { searchBar: 'input[type=text]' }
  ]
};
</code></pre>
</div>

<br>
Putting <code>elements</code> and <code>url</code> together, say you have the following defined above saved as a <code>google.js</code> file:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  url: 'https://google.com',
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
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  'Test': function (browser) {
    var google = browser.page.google();
    <br>
    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');
    <br>
    browser.end();
  }
};
</code></pre>
</div>

### Element Properties

To support greater flexibility in interacting with page object elements, an element can be specified as an object, which needs to contain at least the `selector` property. 
Next to the selector, other properties can be specified. Here's the full list:

- **selector** - the element selector name (e.g.: '@searchBar')
- **locateStrategy** - e.g. 'css selector'
- **index** - used to target a specific element in a query that results in multiple elements returned. Normally, only the first element is used (index = 0) but using the `index` property, you can specify any element within the result. 
- **abortOnFailure** - used to overwrite this setting when using `waitForElement*` commands
- **timeout** - used to overwrite the default timeout for when using `waitForElement*` commands or assertions
- **retryInterval** - used to overwrite the default retry interval for when using `waitForElement*` commands or assertions
- **suppressNotFoundErrors** - Some element commands like `.click()` or `.getText()` will throw a `NoSuchElement` error if the element cannot be located, causing the test to fail. If this option is set to `true` then this error is ignored.

Say in the example above, the `searchBar` element selector returns 3 elements and you are interested in the second element.

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  elements: {
    searchBar: {
      selector: 'input[type=text]',
      index: 1
    }
  }
};
</code></pre>
</div>

You can also override what is defined in the page element by specifying the element as an object selectors in commands, which can also receive the `index`:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  'Test': function (browser) {
    var google = browser.page.google();
    <br>
    google
      .navigate()
      .assert.title('Google');
    <br>
    google.waitForElementVisible('@searchBar') // 2nd input element
    google.waitForElementVisible({selector:'@searchBar', index:1}, function(result){}); // 1st div
    <br>
    google.click('@submit');
    <br>
    browser.end();
  }
};
</code></pre>
</div>

<br>

#### Pseudo-selectors

When using named page object elements (starting with '@') you can also use CSS pseudo-selectors (starting with `v1.1`).

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  'Test': function (browser) {
    google.waitForElementVisible('@searchBar:first-child');
    <br>
    google.waitForElementVisible('@searchBar:nth-child(1)');
  }
};
</code></pre>
</div>
