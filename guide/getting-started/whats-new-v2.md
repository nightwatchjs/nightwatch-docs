<div class="page-header"><h2>Nightwatch 2.0</h2></div>

<h3><span>What's New in v2</span></h3><p class="whatis-logo"><img src="/images/nightwatch-circle.png" alt="Nightwatch.js" title="Nightwatch.js" class="whatis"></p>

<p>Nightwatch 2.0 contains a wide range of new features and improvements for writing and running tests as well as full cross-browser testing support for [W3C WebDriver](https://w3c.github.io/webdriver/) compliant browsers.</p>

<p>The underlying architecture for communicating with the browsers has been completely reworked in order to build on top of the official [Selenium-Webdriver](https://www.npmjs.com/package/selenium-webdriver) Node.js library. This means that Nightwatch is now much better equipped for cross-browser integration and DOM element handling, and overall is able to deliver more stable and faster tests.</p>

<p>Since Nightwatch 2 builds on top of [Selenium](https://www.selenium.dev/) now, it is never behind any new WebDriver API. </p>

<h3 class="whatsnew-h3">Nightwatch 2.0.0-beta.1</h3>

### New Features:

- ##### [New user actions API](/api/useractions/)
Nightwatch 2 brings support for working with the newer Actions API from Selenium WebDriver for performing complex user gestures.

- ##### [Integrated test runner for CucumberJS](/guide/third-party-runners/cucumberjs-nightwatch-integration.html)
Nightwatch 2 brings integrated support for using Cucumber.js directly as an alternative test runner. No other plugins are necessary, other than the Cucumber library itself (version 7.3 or higher).

- ##### [Improved Mocha test runner](/guide/third-party-runners/using-mocha.html)
The integrated Mocha runner has been upgraded to use Mocha v9 and also the implementation has been updated to match most of the features that Nightwatch offers in its own default test runner, like the ability to use tags or global test hooks. You can now also use reporters like [Mochawesome](/guide/third-party-runners/using-mocha.html#using-the-mochawesome-reporter).

- ##### [Support for Chrome DevTools Protocol](/api/commands/#using-chrome-devtools-protocol)
When using ChromeDriver or EdgeDriver it is now possible to execute commands via the [Chrome DevTools protocol](https://chromedevtools.github.io/devtools-protocol/).

- ##### [New .ensure assertions API](/api/ensure/)
The new `.ensure` API is a direct mapping to the existing [until](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html) module from Selenium and provides an extra level of flexibility for performing assertions in tests.

- ##### [New programmatic API](/api/programmatic/)
A brand new programmatic api is available in Nightwatch 2, which makes it very easy to use Nightwatch externally, either by creating your custom runner or by using external test runners like Jest, Mocha, or Ava.

- ##### [New element() global and support for using WebElements](/api/element/)
The newly added element() global object adds to Nightwatch 2 the commands from the [Selenium WebElement](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html) instance.

### New Commands:
- [.getAccessibleName(`<selector>` | `<WebElement>`)](https://v2.nightwatchjs.org/api/getAccessibleName.html)
- [.getAriaRole(`<selector>` | `<WebElement>`)](https://v2.nightwatchjs.org/api/getAriaRole.html)
- [.dragAndDrop(`<selector>` | `<WebElement>`)](https://v2.nightwatchjs.org/api/dragAndDrop.html)
- [.navigateTo(`<url>`, `[callback]`)](https://v2.nightwatchjs.org/api/navigateTo.html)
- [.getCurrentUrl(`<url>`, `[callback]`)](https://v2.nightwatchjs.org/api/getCurrentUrl.html)
- [.quit(`[callback]`)](https://v2.nightwatchjs.org/api/quit.html)
- [.setAttribute(`<selector>` | `<WebElement>`)](https://v2.nightwatchjs.org/api/setAttribute.html)
- [.takeElementScreenshot(`<selector>` | `<WebElement>`)](https://v2.nightwatchjs.org/api/takeElementScreenshot.html)
- [.uploadFile(`<selector>` | `<WebElement>`)](https://v2.nightwatchjs.org/api/uploadFile.html)
- [.waitUntil(`<conditionFunction>`, `[optionalMaxTimeout]`, `[optionalRetryInterval]`, `[optionalCallback]`)](https://v2.nightwatchjs.org/api/waitUntil.html)
- [.firefox specific commands](https://v2.nightwatchjs.org/api/commands/#firefox-specific-commands)
- [.chrome specific commands](https://v2.nightwatchjs.org/api/commands/#using-chrome-devtools-protocol)

### Improvements:
- specify [page commands](guide/working-with-page-objects/writing-commands.html) as an ES6 class ([details](guide/working-with-page-objects/writing-commands.html));
- added `enable_fail_fast` setting and `--fail-fast` cli argument to abort the test runner after a failed test suite;
- added support to use the config file as Promise;
- added support to use glob patterns in config for `src_folders`, `page_object_path`, `custom_commands_path`, `custom_assertion_path` options;
- `browser` is now available as a global; other globals: `element()`, `by()`, `expect()`, `Keys`
- added support to use Selenium Capabilities objects in Nightwatch config

#### Breaking changes:
We have tried to keep the breaking changes to a minimum, however some changes were unavoidable. See the [migrate to v2 guide](https://github.com/nightwatchjs/nightwatch/wiki/Migrating-to-Nightwatch-2.0) for details.

#### From the Blog:
<ul>
<li>[A First Look at Nightwatch v2.0](https://nightwatchjs.org/blog/a-first-look-at-nightwatch-v2.html)</li>
<li>[Nightwatch v2.0-alpha is Released](https://nightwatchjs.org/blog/nightwatch-v2-alpha-is-released.html)</li>
<li>[Nightwatch v2 is Now in Beta](https://nightwatchjs.org/blog/nightwatch-v2-beta-is-available.html)</li>
</ul>