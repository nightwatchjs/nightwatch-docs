## API Commands

Nightwatch provides the basic WebDriver protocol mappings and also various composite commands to ensure a more fluent and convenient syntax for writing tests.

- composite commands - such as `getValue` or `isVisible`, usually incorporate two or more WebDriver protocol commands
- protocol commands - are most of the times simple mappings to the <a href="https://www.w3.org/TR/webdriver/" target="_blank">W3C WebDriver</a> protocol or, in some cases, its predecessor - the <a href="https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol" target="_blank">Selenium JsonWireProtocol</a> protocol.

Some of them are basic commands (such as `url` and `execute`) and others are internal commands being used by Nightwatch commands and assertions.

### Callback function
Each method below allows a `callback` argument to be passed as the last argument. The callback function will then be called after the command is completed with the main API (`browser`) as the context and the response object as argument.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
this.demoTest = function (browser) {
  browser.click("#main ul li a.first", function(result) {
    this.assert.ok(browser === this);
    this.assert.ok(typeof result == "object");
  });
};</code></pre></div>

### Promises in callbacks
If the callback happens to return a `Promise`, the test runner will wait for the promise to settle (i.e. resolve or reject) before continuing with the rest of the commands.
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
module.exports = {
  demoTest: function (browser) {
    browser
      .init()
      .getText("#main ul li", function(result) {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            console.log('Value:', result.value);
            resolve();
          }, 1000);
        });
      })
      .click('#login button');
  },
  
  demoTestAsync: async function(browser) {
    const text = await browser.init().getText("#main ul li", function(result) {
      return Promise.resolve(result.value);
    });              
    
    console.log('The text is', text);
  }
};</code></pre></div>

### Using Chrome DevTools protocol
Both [ChromeDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html) and [EdgeDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/edge_exports_Driver.html) expose some specific commands for working with their respective browsers.

When using ChromeDriver or EdgeDriver it is now possible to execute commands via the [Chrome DevTools protocol](https://chromedevtools.github.io/devtools-protocol/). 

Here's the full list of commands available on the `chrome` namespace on the `browser` object:

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

**More info:**
- [selenium-webdriver/chrome](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome.html)
- [selenium-webdriver/edge](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/edge.html)

#### Example:
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('Chrome DevTools Example', function() {
  
  it ('using CDP DOM Snapshot', async function() {
    const dom = await browser.chrome.sendAndGetDevToolsCommand('DOMSnapshot.captureSnapshot', {
       computedStyles: []
    });
    
    console.log('DOM', dom)
  })
});</code></pre></div>

### Firefox Specific Commands

The [FirefoxDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html) exposes some specific commands, such as for setting context to run "privileged" javascript code or for working with addons. These are now available on in Nightwatch directly, on the `firefox` namespace.

**browser.firefox:**
- [.getContext()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#getContext)
- [.setContext()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#setContext)
- [.installAddon()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#installAddon)
- [.uninstallAddon()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#uninstallAddon)

More info:
- [selenium-webdriver/firefox](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox.html)

#### Customizing the Firefox Profile
Each [Firefox WebDriver](https://firefox-source-docs.mozilla.org/testing/geckodriver/index.html) instance will be created with an anonymous profile, ensuring browser historys do not share session data (cookies, history, cache, offline storage, etc.).

The profile used for each WebDriver session may be configured using the [Options](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Options.html) class from Selenium. Nightwatch 2 fully supports options objects created with the `selenium-webdriver` library.

<div class="alert alert-warning">
Pre-existing Firefox profile are not modified; instead WebDriver will create a copy for it to modify. Certain browser preferences are required for WebDriver to function properly and they will always be overwritten.
</div>


**Installing a Firefox extension:**

Let's say you need to install an extension, called Firebug. In your `nightwatch.conf.js`, you may use the [Options](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Options.html) class to configure the WebDriver session like so:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">const firefox = require('selenium-webdriver/firefox');

const options = new firefox.Options()
  .addExtensions('/path/to/firebug.xpi')
  .setPreference('extensions.firebug.showChromeErrors', true);

module.exports = {
  src_folders: ['tests'],
  test_settings: {
    default: {
      browserName: 'firefox',
      desiredCapabilities: options
    }
  }
};
</code></pre></div>

Or as a function:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">module.exports = {
  src_folders: ['tests'],
  test_settings: {
    default: {
      browserName: 'firefox',
      desiredCapabilities() {
        const firefox = require('selenium-webdriver/firefox');

        const options = new firefox.Options()
          .addExtensions('/path/to/firebug.xpi')
          .setPreference('extensions.firebug.showChromeErrors', true);
        
        return options;
      }
    }
  }
};
</code></pre></div>

