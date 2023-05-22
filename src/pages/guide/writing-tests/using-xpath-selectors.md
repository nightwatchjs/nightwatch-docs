## Find an element by Xpath

### Overview

<a href="https://developer.mozilla.org/en-US/docs/Web/XPath" target="_blank">XPath</a> stands for XML Path Language. It uses a non-XML syntax to provide a flexible way of finding elements in a web page.

Nightwatch supports XPath selectors in locating elements. CSS selectors are used by default if no strategy is specified, and there are several ways in which to make use of XPath, depending on the use case:

### 1. Using .useXpath() command

Using `useXpath()` command, as seen in the example below, is a convenient way. You don't need to bother with using multiple parameters on element commands, or you may have more than one subsequent element commands/assertions in the same test which use XPath expressions. To switch back to CSS, call `useCss()`.

tests/sampleTest.js

```js
module.exports = {
  demoTest: function (browser) {
    browser
      .useXpath() // every selector now must be xpath
      .click("//tr[@data-recordid]/span[text()='Search Text']")
      .useCss() // we're back to CSS now
      .setValue('input[type=text]', 'nightwatch')
  }
};```

### 2. Find elements with Xpath selectors

You can also use Xpath directly on a single command or assertion, by either passing an [element selector object][11], or specifying `'xpath'` strategy as first argument:

tests/sampleTest.js
```js
module.exports = {
  demoTest(browser) {
    // using element selector objects
    browser.click({
      selector: '//tr[@data-recordid]/span[text()='Search Text']',
      locateStrategy: 'xpath'
    });

    // specifying xpath strategy as first argument
    browser.click('xpath', '//tr[@data-recordid]/span[text()='Search Text']');
}
};```

### 3. Always use XPath by default

If you mostly are using XPath expressions and you want to avoid configuring the strategy in your tests all the time, you can also use XPath by default by setting the property `use_xpath: true` in your [config][10].

<i>nightwatch.json```js
{
  "use_xpath": true
}

```

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/writing-tests/adding-assertions.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Add assertions</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/writing-tests/write-complex-user-actions.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Write complex user actions</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
