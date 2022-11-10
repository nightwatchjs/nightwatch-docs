---
title: Page Object Elements
description: Learn about how to define page object elements.
---

## Define Page Elements

### Declaring elements
Most of the time, you will want to define elements on your page that your tests will interact with through commands and assertions. This is made simple using the `elements` property so that all your elements are defined in a single place. Especially in larger integration tests, using `elements` will go a long way to keep test code DRY.

Switching between CSS and XPath locate strategies is handled internally so you don't need to call `useXpath()` or `useCss()` in your tests. The default `locateStrategy` is CSS but you can also specify XPath:

<div class="sample-test"><i>nightwatch/pages/examplePage.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
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
</code></pre></div>

<br>
Or if you're creating elements with the same locate strategy as is default, you can use the shorthand:

<div class="sample-test"><i>nightwatch/pages/examplePage.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  elements: {
    searchBar: 'input[type=text]'
  }
};
</code></pre>
</div>

### Using page elements

Using the `elements` property allows you to refer to the element by its name with an _"@" prefix_, rather than selector, when calling element commands and assertions (`click()`, etc).

Optionally, you can define an array of objects:

<div class="sample-test"><i>nightwatch/pages/examplePage.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">var sharedElements = {
  mailLink: 'a[href*="mail.google.com"]'
};

module.exports = {
  elements: [
    sharedElements,
    { searchBar: 'input[type=text]' }
  ]
};</code></pre></div>

<br>
Putting `elements` and `url` together, say you have the following defined above saved as a `googlePage.js` file:

<div class="sample-test"><i>nightwatch/pages/googlePage.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
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

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('sample test with page objects', function() {
  it('Test', function (browser) {
    var google = browser.page.google();

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');

    browser.end();
  });
});
</code></pre></div>

### Element properties

To support greater flexibility in interacting with page object elements, an element can be specified as an object, which needs to contain at least the `selector` property.
Next to the selector, other properties can be specified. Here's the full list:

- `selector` - the element selector name (e.g.: '@searchBar')
- `locateStrategy` - e.g. 'css selector'
- `index` - used to target a specific element in a query that results in multiple elements returned. Normally, only the first element is used (index = 0) but using the `index` property, you can specify any element within the result.
- `abortOnFailure` - used to overwrite this setting when using `waitForElement*` commands
- `timeout` - used to overwrite the default timeout for when using `waitForElement*` commands or assertions
- `retryInterval` - used to overwrite the default retry interval for when using `waitForElement*` commands or assertions
- `suppressNotFoundErrors` - Some element commands like `.click()` or `.getText()` will throw a `NoSuchElement` error if the element cannot be located, causing the test to fail. If this option is set to `true` then this error is ignored.

### Filter elements
Say in the example above, the `searchBar` element selector returns 3 elements and you are interested in the second element.

<div class="sample-test"><i>nightwatch/pages/googlePage.js</i><pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
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

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('sample test with page objects', function() {
  it('Test', function (browser) {
    var google = browser.page.google();

    google
      .navigate()
      .assert.title('Google');
      
    google.waitForElementVisible('@searchBar') // 2nd input element
    google.waitForElementVisible({selector:'@searchBar', index:1}, function(result){}); // 1st div
      
    google.click('@submit');

    browser.end();
 });
});
</code></pre></div>

<br>

### Pseudo-selectors

When using named page object elements (starting with '@') you can also use CSS pseudo-selectors (starting with `v1.1`).

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'Test': function (browser) {
    google.waitForElementVisible('@searchBar:first-child');

    google.waitForElementVisible('@searchBar:nth-child(1)');
  }
};
</code></pre></div>

### Recommended content
- [Getting started with page objects](https://nightwatchjs.org/guide/using-page-objects/getting-started.html)
- [Define sections](https://nightwatchjs.org/guide/using-page-objects/defining-sections.html)
- [Add page-specific commands](https://nightwatchjs.org/guide/using-page-objects/writing-page-specific-commands.html)
- [Concepts > Page object model](https://nightwatchjs.org/guide/concepts/page-object-model.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/using-page-objects/getting-started.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Getting Started</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/using-page-objects/defining-sections.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Define sections</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
