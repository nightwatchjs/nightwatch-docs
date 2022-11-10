## Using XPath selectors

<a href="https://developer.mozilla.org/en-US/docs/Web/XPath" target="_blank">XPath</a> stands for XML Path Language. It uses a non-XML syntax to provide a flexible way of finding elements in a web page. 
 
Nightwatch supports XPath selectors in locating elements. CSS selectors are used by default if no strategy is specified, and there are several ways in which to make use of XPath, depending on the use case: 

#### 1. Using .useXpath() command

Using `useXpath()` command, as seen in the example below, is a convenient way. You don't need to bother with using multiple parameters on element commands, or you may have more than one subsequent element commands/assertions in the same test which use XPath expressions. To switch back to CSS, call `useCss()`.

<div class="sample-test"><pre data-language="javascript">
<code class="language-javascript">module.exports = {
  demoTest: function (browser) {
    browser
      .useXpath() // every selector now must be xpath
      .click("//tr[@data-recordid]/span[text()='Search Text']")
      .useCss() // we're back to CSS now
      .setValue('input[type=text]', 'nightwatch')
  }
};</code></pre></div>

#### 2. Directly finding elements with Xpath selectors

You can also use Xpath directly on a single command or assertion, by either passing an [element selector object][11], or specifying `'xpath'` strategy as first argument:

<div class="sample-test"><pre data-language="javascript">
<code class="language-javascript">module.exports = {
  demoTest(browser) {
    // using element selector objects
    browser.click({
      selector: '//tr[@data-recordid]/span[text()='Search Text']',
      locateStrategy: 'xpath'
    });
    
    // specifying xpath strategy as first argument
    browser.click('xpath', '//tr[@data-recordid]/span[text()='Search Text']');
  }
};</code></pre></div>

#### 3. Always use XPath by default

If you mostly are using XPath expressions and you want to avoid configuring the strategy in your tests all the time, you can also use XPath by default by setting the property `use_xpath: true` in your [config][10].

- Previous: [Using expect assertions](https://nightwatchjs.org/guide/using-nightwatch/expect-assertions.html)
- Next: [Using test hooks](https://nightwatchjs.org/guide/using-nightwatch/using-test-hooks.html)

[10]:	/gettingstarted/configuration/#extended-settings
[11]:	https://nightwatchjs.org/guide/working-with-page-objects/#element-properties
