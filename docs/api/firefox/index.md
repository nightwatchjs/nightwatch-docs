## Firefox Specific Commands

The [FirefoxDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html) exposes some specific commands, such as for setting context to run "privileged" javascript code or for working with addons. These are now available on in Nightwatch directly, on the `firefox` namespace.

**browser.firefox:**
- [.getContext()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#getContext)
- [.setContext()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#setContext)
- [.installAddon()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#installAddon)
- [.uninstallAddon()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Driver.html#uninstallAddon)

More info:
- [selenium-webdriver/firefox](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox.html)

### Customizing the Firefox Profile
Each [Firefox WebDriver](https://firefox-source-docs.mozilla.org/testing/geckodriver/index.html) instance will be created with an anonymous profile, ensuring browser historys do not share session data (cookies, history, cache, offline storage, etc.).

The profile used for each WebDriver session may be configured using the [Options](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/firefox_exports_Options.html) class from Selenium. Nightwatch 2 fully supports options objects created with the `selenium-webdriver` library.

<div class="alert alert-warning">
Pre-existing Firefox profile are not modified; instead WebDriver will create a copy for it to modify. Certain browser preferences are required for WebDriver to function properly and they will always be overwritten.
</div>


#### Installing a Firefox extension:

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