---
title: Nightwatch DOM interactions  
description: Learn about how to find DOM elements and interact with them in Nightwatch
summary_image: https://nightwatchjs.org/img/banner.png
---


<div class="page-header"><h2>Finding & interacting with DOM Elements</h2></div>

### Overview
Finding elements on a page is by far one of the most common and critical functions during an end-to-end test. Nightwatch provides several techniques of locating elements and also an extensible assertion framework to perform verifications on them. 

Elements are searched for from the document root, using either a CSS selector or an XPath selector. You can also use other locator strategies. Check out the [Webdriver documentation][2] for more information.

Elements are internally identified using a unique _[web element reference id][3]_. When interacting with elements, Nightwatch manages this step of identifying the IDs internally and uses its automatic retry mechanisms for locating the element before interacting with it or performing any assertions.

<div class="alert alert-info"><h5 style="margin-top: 0">Element Retries</h5>
When interacting with elements, Nightwatch polls the DOM for a configurable duration when trying to find any element. If the element is not found, a `NoSuchElementError` error is thrown. 
</div>

### Example
In the following example, the `setValue` command internally performs the element lookup, and then calls the element that is set in the `setValue` command.

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test ecosia.org': function (browser) {
    browser
      .url('https://www.ecosia.org/')
      .setValue('input[type=search]', 'nightwatch')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};
</code></pre>
<pre data-language="typescript"><code class="language-typescript">import {NightwatchTests} from 'nightwatch';

const ecosiaTest: NightwatchTests = {
'Demo test ecosia.org': () => {
  browser
    .url('https://www.ecosia.org/')
    .setValue('input[type=search]', 'nightwatch')
    .click('button[type=submit]')
    .assert.containsText('.mainline-results', 'Nightwatch.js')
    .end();
},

export default ecosiaTest;
</code></pre>
</div>

### Relative locators

These locators are helpful when it is not easy to construct a locator for the required element, but easy to describe spatially where the element is in relation to another element that does have an easily constructed locator.

If you want to find the `password` field that exists below the `username` field, you would use the following example:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test ecosia.org': function (browser) {
    const passwordElement = locateWith(By.tagName('input')).below(By.css('input[type=email]'));

    browser
      .navigateTo('https://archive.org/account/login')
      .setValue(passwordElement, 'password')
      .assert.valueEquals('input[type=password]', 'password');
  }
};
</code></pre>
<pre class="line-numbers" data-language="typescript"><code class="language-typescript">import {NightwatchTests} from 'nightwatch';

const ecosiaTest: NightwatchTests = {
'Demo test ecosia.org': () => {
  const passwordElement = locateWith(By.tagName('input')).below(By.css('input[type=email]'));

  browser
    .navigateTo('https://archive.org/account/login')
    .setValue(passwordElement, 'password')
    .assert.valueEquals('input[type=password]', 'password');
},

export default ecosiaTest;
</code></pre></div>

Apart from the commands from the example, you can also use the following commands:

* `above`
* `below`
* `toRightOf`
* `toLeftOf`
* `near`

##### Chaining Relative Locators

For some complex layouts, such as, where an element might exist above and to the right of the starting element, you can chain relative locators as shown in the following example code snippet:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">locateWith(By.tagName('button'))
  .below(By.id('email')
  .toRightOf(By.css('#cancel')));
</code></pre></div>

### Element Properties

An element can also be specified as an object if greater flexibility in locating and interacting with elements is required. The object definition must contain at least the `selector` property. 
Apart from the `selector` property, you can use any of the following properties: 

- **selector** - the element selector name (e.g.: '#input-element')
- **locateStrategy** - e.g. 'css selector'
- **index** - used to target a specific element in a query that results in multiple elements returned. Normally, only the first element is used (index = 0) but using the `index` property, you can specify any element within the result. 
- **abortOnFailure** - used to overwrite this setting when using `waitForElement*` commands
- **timeout** - used to overwrite the default timeout for when using `waitForElement*` commands or assertions
- **retryInterval** - used to overwrite the default retry interval for when using `waitForElement*` commands or assertions
- **suppressNotFoundErrors** - Some element commands like `.click()` or `.getText()` will throw a `NoSuchElement` error if the element cannot be located, causing the test to fail. If this option is set to `true` then this error is ignored.


In the earlier example, the `input[type=search]` element selector returns 3 elements. If you are want to use the second element, see the following example code snippet:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">
module.exports = {
  'Demo test ecosia.org': function (browser) {
    browser.setValue({selector: 'input[type=search]', index: 1}, 'nightwatch')
  }
};</code></pre>

<pre class="line-numbers" data-language="typescript"><code class="language-typescript">import {NightwatchTests} from 'nightwatch';

const ecosiaTest: NightwatchTests = {
'Demo test ecosia.org': () => {
  browser.setValue({selector: 'input[type=search]', index: 1}, 'nightwatch');
},

</code></pre>
</div>

### Recommended content
- [BDD test syntax](https://nightwatchjs.org/guide/writing-tests/test-syntax-bdd.html)
- [Using async/await](https://nightwatchjs.org/guide/writing-tests/using-es-6-async-await.html)

[2]:	https://www.w3.org/TR/webdriver/#locator-strategies
[3]:	https://www.w3.org/TR/webdriver/#elements

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/writing-tests/using-es-6-async-await.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Use ES6 async/await</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/adding-assertions.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Add assertions</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
