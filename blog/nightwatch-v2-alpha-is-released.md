---
title: Nightwatch v2.0-alpha is Released
author: Andrei Rusu
author_title: Author and maintainer of Nightwatch
author_url: https://github.com/beatfactor
author_image_url: https://avatars.githubusercontent.com/u/419506?v=4
tags:
    - nightwatch-v2
description: Nightwatch v2.0 is now in alpha and available in NPM.
draft: false
date: 2021-09-08
image: https://nightwatchjs.org/img/blog/nightwatch-v2-alpha.png
link_to_discussions: https://github.com/nightwatchjs/nightwatch/discussions/2889
---

We're delighted to announce that the next major version of Nightwatch is [available in NPM](https://www.npmjs.com/package/nightwatch/v/2.0.0-alpha.2) as an alpha pre-release. It contains a wide range of new features and improvements for writing and running tests as well as full cross-browser testing support for [W3C WebDriver](https://w3c.github.io/webdriver/) compliant browsers.

The underlying architecture has been completely reworked to use the official [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Node.js library in communicating with the browser drivers. This means better cross-browser integration, more reliable DOM element command handling, and overall more stable and faster tests.

The goal of the _alpha_ release is to gather some feedback, identify, and fix major bugs while at the same time finalize the new APIs and also update the documentation. So it's quite important that you let us know of any major issues encountered so we can make the upgrade from v1.x as smooth as possible. There are a few breaking changes that are mentioned at the end of this post, but they should be relatively small.

We'll also continue to issue patches and important fixes for the existing v1.7 version. Here's an overview of the new features, improvements, and other changes in v2.0.

To install the alpha version, run the following:

```bash
npm i nightwatch@alpha
```

### Support for the WebDriver Actions API

WebDriver provides a comprehensive API for generating complex user gestures called the [Actions API](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html). This is available and ready to use in Nightwatch via the existing `.perform()` command. The previous functionality of the perform() command is still there and working in the same way as before.

Here's a basic example on how to use the new actions api:

```js
try {
  const performResult = await browser.perform(function() {
    const actions = this.actions({async: true});

    return actions
       .keyDown(Key.SHIFT)
       .keyUp(Key.SHIFT);
  });

  console.log('perform', performResult)
} catch (err) {
  console.error(err)
}
```

More examples in the [API docs](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html) on the Selenium documentation website. In the example above, the `Actions` class instance is created using `this.actions(<options>)`. The `.perform()` at the end (which is needed in the selenium docs) should be omitted in Nightwatch, as it will be called automatically.

### Support for Chrome DevTools protocol

Both [ChromeDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html) and [EdgeDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/edge_exports_Driver.html) expose some specific commands for working with their respective browsers.

When using ChromeDriver or EdgeDriver it is now possible to execute commands via the [Chrome DevTools protocol](https://chromedevtools.github.io/devtools-protocol/). Here's the full list of commands available on the `chrome` namespace on the Nightwatch `browser` object:

**browser.chrome:**

- [.launchApp()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#launchApp)
- [.getNetworkConditions()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#getNetworkConditions)
- [.setNetworkConditions()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#setNetworkConditions)
- [.sendDevToolsCommand()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#sendDevToolsCommand)
- [.sendAndGetDevToolsCommand()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#sendAndGetDevToolsCommand)
- [.setPermission()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#setPermission)
- [.setDownloadPath()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#setDownloadPath)
- [.getCastSinks()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#getCastSinks)
- [.setCastSinkToUse()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#setCastSinkToUse)
- [.startCastTabMirroring()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#startCastTabMirroring)
- [.getCastIssueMessage()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#getCastIssueMessage)
- [.stopCasting()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#stopCasting)

More info:

- [selenium-webdriver/chrome](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome.html)
- [selenium-webdriver/edge](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/edge.html)

### New Firefox specific commands

The [FirefoxDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html) exposes some specific commands, such as for setting context to run "privileged" javascript code or for working with addons. These are now available on in Nightwatch directly, on the `firefox` namespace.

**browser.firefox:**

- [.getContext()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#getContext)
- [.setContext()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#setContext)
- [.installAddon()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#installAddon)
- [.uninstallAddon()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#uninstallAddon)

More info:

- [selenium-webdriver/firefox](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox.html)

### New .ensure assertions

The new `.ensure` namespace is based on the [until](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html) module from [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver).

**Example:**

```js
describe('demo test for .ensure', function() {
  test('basic test', function(browser) {
    browser
      .url('https://nightwatchjs.org')
      .ensure.titleMatches(/Nightwatch\.js/)
      .ensure.elementIsVisible('#index-container')
  });
});
```

### New element() global and support for using WebElements

The newly added `element()` global can be used to pre-construct element objects outside of test cases. It is also possible to use the newly added `by()` global utility which is equivalent to using the [`By()`](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html) class from selenium-webdriver to create element locators.

In addition, the `browser` object is also available as global, so it's not necessary to pass it as an argument to tests, as it is the case in Nightwatch v1.x.

It is also possible to disable the global apis by setting `disable_global_apis` to `true` in your nightwatch config file.

**Example:**

```js
const assert = require('assert');
const {WebElement} = require('selenium-webdriver');

describe('demo element() global', function() {
  const signupEl = element(by.css('#signupSection'));
  const loginEl = element('#weblogin');

  test('element globals command',  async function() {
    const tagName = await browser.waitForElementPresent(loginEl, 100).getTagName(loginEl);
    assert.strictEqual(tagName, 'div');

    // use elements created with element() to regular nightwatch assertions
    browser.assert.visible(loginEl);

    // use elements created with element() to expect assertions
    browser.expect.element(loginEl).to.be.visible;

    // retrieve the WebElement instance
    const loginWebElement = await loginEl.getWebElement();
    assert.ok(loginWebElement instanceof WebElement);
  });
});
```

### Using the Selenium WebDriver object directly

The [`WebDriver`](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html) instance is available as well on the Nightwatch api object as the `driver` property.

If you wish to chain WebDriver specific commands, you'll need to wrap them inside either a `perform()` or a `waitUntil()` command.

**Example:**

```js
describe('demo driver object', function() {

  it('get browser logs – classic',  function() {
    browser
      .url('<https://nightwatchjs.org>')
      .waitForElementVisible('body')
      .perform(function() {
        this.driver.manage().logs().get('browser').then(result => {
          console.log('Browser logs:', result)
        })
      });
  });

  it('get browser logs – with ES6 async/await', async function() {
    await browser.url('<https://nightwatchjs.org').waitForElementVisible('body>');
    const logs = await browser.driver.manage().logs().get('browser');

    console.log('Browser logs:', logs)
  });
});
```

### Using WebDriver BiDi in Nightwatch

Building on top of Selenium WebDriver means that the newest features and capabilities of WebDriver will be directly available in Nightwatch, such as the upcoming [Webdriver BiDi](https://developer.chrome.com/blog/webdriver-bidi/) protocol, deemed as "the future of cross-browser automation".

[WebDriver BiDi](https://www.selenium.dev/documentation/webdriver/bidi_apis/) is the new protocol for communicating with browsers, defined as a new [W3C spec](https://w3c.github.io/webdriver-bidi/), currently in progress.

Early support is available in Selenium 4 and it is already available in ChromeDriver via the [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/).

WebDriver Bidi allows users to capture events from the browser as they happen rather than using the traditional approach of request/response that WebDriver is using for other APIs.

Internally WebDriver will create a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) connection to the browser for events and commands to be transmitted.

**Example:**

The below example calls the [`Page.getLayoutMetrics`](https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-getLayoutMetrics) method from CDP via a WebDriver Bidirectional connection
over a WebSocket.

```js
describe('demo webdriver bidirectional', function() {

  it('samepl test bidi', async function(browser) {
    await browser.url('<http://nightwatchjs.org/>');

    const cdpConnection = await browser.driver.createCDPConnection('page');
    browser.assert.ok(cdpConnection._wsConnection && cdpConnection._wsConnection._url.startsWith('ws://'),
            `CDP connection is successful to: ${cdpConnection._wsConnection._url}`);

    const layoutMetrics = await browser.perform(function(callback) {
      const id = 99;
      cdpConnection._wsConnection.on('message', function getLayoutMetrics(message) {
        const params = JSON.parse(message)
        if (params.id === 99) {
          cdpConnection._wsConnection.off('message', getLayoutMetrics);
          callback(params.result);
        }
      });

      cdpConnection.execute('Page.getLayoutMetrics', id, {});
    });

    console.log('Layout Metrics:', layoutMetrics)
  });
});
```

### New API commands

A few new commands have been added and also compatibility has been improved for several existing commands.

- **browser.getAccessibleName(`<selector> | <WebElement>`)**

  > returns the computed WAI-ARIA label of an element.

  ```js
   const result = await browser.getAccessibleName('input[type=search]');
  ```

- **browser.getAriaRole(`<selector> | <WebElement>`)**

  > returns the computed WAI-ARIA role of an element.

   ```js
   const result = await browser.getAriaRole('input[type=search]');
   ```

- **browser.takeElementScreenshot(`<selector> | <WebElement>`)**

  > take a screenshot of the visible region encompassed by an element's bounding rectangle.

   ```js
   const data = await browser.takeElementScreenshot('#container');
   require('fs').writeFile('out.png', data, 'base64');
   ```

- **browser.uploadFile(`<selector> | <WebElement>`)**

   > uploads file to an element using absolute file path.

   ```js
   await browser.uploadFile('#myFile', '/path/to/file.pdf');
   ```

- **browser.waitUntil(`<conditionFunction>`, `[optionalMaxTimeout]`, `[optionalRetryInterval]`, `[optionalCallback]`)**

   > a generic command which can make the test runner wait for a condition to evaluate to a "truthy" value. The condition may be specified by any function which returns the value to be evaluated or a Promise to wait for. If the condition is not satisfied, a `TimeoutError` will be thrown and the test will fail.

   ```js
   let conditionValue;
   await browser.waitUntil(function() {
      return conditionValue === true;
   });

   await browser.waitUntil(async function() {
     const title = await this.execute(function() {
        return document.title;
     });
     return title === 'Nightwatch.js';
   }, 1000);
  ```

### Improved support for using async/await

We have changed the result format of Nightwatch commands to return the value directly when using the `await` operator.

The value passed to callback remains the same as in v1.x. This behaviour can be disabled by setting the `backwards_compatibility_mode` to `true` in your nightwatch config.

**Example:**

Getting the value when using `await`:

```js
const value = await browser.getText('#weblogin');
console.log('Value is:', value);
```

Getting the value when using a callback:

```js
browser.getText('#weblogin', function(result) {
  console.log('Value is:', result.value);
});
```

### More ways for defining WebDriver capabilities

It is now possible to define session capabilities by setting an instance of a [Selenium Capabilities](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Capabilities.html) object in your nightwatch.conf.js file as the `capabilities` value.

You can refer to the Selenium documentation for all the available capabilities. Here's an example for defining a `capabilities` object in your `nightwatch.conf.js` for Chrome in headless mode:

**Example:**

```js
// nightwatch.conf.js
const chrome = require('selenium-webdriver/chrome');
const capabilities = new chrome.Options();
capabilities.headless();

module.exports = {
  test_settings: {
    chrome: {
      capabilities,
      webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        cli_args: [
          // --verbose
        ]
      }
    }
  }
};
```

### New config settings

Below are new settings introduced in v2.0 and their default values:

```js
module.exports = {
  // Set this to true to use the v1.x response format for commands when using ES6 async/await

  backwards_compatibility_mode: false,

  // Set this to true to disable the global objects such as element(), browser, by(), expect()

  disable_global_apis: false,

  // Ignore network errors (e.g. ECONNRESET errors)

  report_network_errors: true,

  // Interactive element commands such as "click" or "setValue" can be retried if an error occurred (such as an "element not interactable" error)
  element_command_retries: 2,

  // Sets the initial window size, defined as an object with "width" and "height" numerical properties

  window_size: null

}
```

### New WebDriver config settings

Below are new `webdriver` settings introduced in v2.0 for various browser drivers:

```js
module.exports = {
  webdriver: {
    // Sets the path to the Chrome binary to use. On Mac OS X, this path should reference the actual Chrome executable, not just the application binary (e.g. "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome").
    chrome_binary: '',

    // Sets the path to Chrome's log file. This path should exist on the machine that will launch Chrome.

    chrome_log_file: '',

    // Configures the ChromeDriver to launch Chrome on Android via adb.

    android_chrome: false,

    // Sets the path to the Edge binary to use.

    edge_binary: '',

    // Sets the path to the Edge binary to use.

    edge_log_file: '',

    // Sets the binary to use. The binary may be specified as the path to a Firefox executable or a desired release Channel.

    firefox_binary: '',

    // Sets the path to an existing profile to use as a template for new browser sessions. This profile will be copied for each new session - changes will not be applied to the profile itself.

    firefox_profile: ''
  }
}```

### Breaking changes

We have tried to minimize the amount of breaking changes as much as possible but some of them were difficult to avoid. Some already deprecated functionality has also been removed.

Here's a summary. Let us know [on Github](https://github.com/nightwatchjs/nightwatch/discussions/categories/general) if something else doesn't work after upgrading from a 1.5 or higher version.

- when using ES6 async/await test cases, the result value of Nightwatch commands does not contain the `status` and `value` properties, but simply the value (this can be reversed by setting `backwards_compatibility_mode` to `true` in your nightwatch config)

- `setValue` now clears the value before sending the key strokes

- `sendKeys` is no longer an alias of `setValue`, since it's not clearing the value but instead simply sends the keys

- Changes to the result object in case of element locate errors:
  - contains an `error` property which is an Error object instance
  - no longer contains `httpStatusCode` property
  - no longer contains `value` property

- removed `proxy-agent` as dependency since it was frequently causing dependency issues; the [proxy-agent](https://www.npmjs.com/package/proxy-agent) package can be installed separately from NPM and used in the same way.

### Feedback

Please feel free to submit either bugs on our [Github Issues](https://github.com/nightwatchjs/nightwatch/issues) or general feedback on our [Discussions](https://github.com/nightwatchjs/nightwatch/discussions) page. We appreciate your help!
