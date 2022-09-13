## Write complex user actions

### Overview
Nightwatch v2 brings support for working with the newer [Actions API](https://www.selenium.dev/documentation/webdriver/actions_api/) from Selenium WebDriver for performing complex user gestures.

The Actions API provides granular control over exactly what designated input devices can do. Selenium provides an interface for 3 kinds of input sources: 
- a key input for keyboard devices
- a pointer input for a mouse, pen or touch devices
- wheel inputs for scroll wheel devices (introduced in Selenium 4.2)

More information is available on the [W3C Webdriver spec page](https://w3c.github.io/webdriver/#dfn-actions).

### Example
The Selenium [Actions API](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html) is available and ready to use in Nightwatch via the existing [`.perform()`](https://nightwatchjs.org/api/perform.html) command. 

The previous functionality of the `perform()` command is still there and working in the same way as before.

<div class="sample-test copy-to-clipboard-button line-numbers"><i>tests/sampleTest.js</i>
<pre data-language="javascript"><code class="language-javascript">describe('example with user actions api', function () {

  before(browser => browser.navigateTo('https://nightwatchjs.org'));

  it('demo test', async function (browser) {
    // retrieve the element; the actions api requires Selenium WebElement objects, 
    //  which can be retrieved using the global element() utility
    const btnElement = await element('a.btn-github').findElement();

    await browser.perform(function() {
      // initiate the actions chain
      const actions = this.actions({async: true});

      return actions
        .dragAndDrop(btnElement, {x: 100, y: 100})
        .pause(500)
        .contextClick(btnElement)
        .pause(500)
        .doubleClick(btnElement)
        .pause(500)
    });
  });
});
</code></pre></div>

Refer to the [User actions API reference](https://nightwatchjs.org/api/useractions/) page for complete details.

### Recommended content
- [User actions API reference](https://nightwatchjs.org/api/useractions/)
- [Selenium API Docs](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html)
- [Webdriver W3C spec](https://w3c.github.io/webdriver/#dfn-actions)
