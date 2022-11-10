---
title: What's new in Nightwatch 2?
description: Nightwatch 2.0 contains a wide range of new features and improvements for writing and running tests as well as full cross-browser testing support.
summary_image: https://nightwatchjs.org/img/banner.png
---


<div class="page-header"><h2>What's new in Nightwatch v2?</h2></div>

<p>Nightwatch v2 contains a wide range of new features and improvements for writing and running tests as well as full cross-browser testing support for [W3C WebDriver](https://w3c.github.io/webdriver/) compliant browsers.</p>

<p>We have reworked the underlying architecture, which communicates with the browsers, to build on top of the official [Selenium-Webdriver](https://www.npmjs.com/package/selenium-webdriver) Node.js library. It means that Nightwatch is now much better equipped for cross-browser integration and DOM element handling, and can deliver more stable and faster tests overall.</p>

<p>Since Nightwatch v2 builds on top of [Selenium](https://www.selenium.dev/) now, it is never behind any new WebDriver API. </p>

### New Features

- ##### [New user actions API](/api/useractions/)
Nightwatch 2 brings support for working with the newer Actions API from Selenium WebDriver for performing complex user gestures.

- ##### [Integrated test runner for CucumberJS](https://nightwatchjs.org/guide/third-party-runners/cucumberjs-nightwatch-integration.html)
Nightwatch 2 brings integrated support for using Cucumber.js directly as an alternative test runner. No other plugins are necessary, other than the Cucumber library itself (version 7.3 or higher).

- ##### [Improved Mocha test runner](https://nightwatchjs.org/guide/third-party-runners/using-mocha.html)
We have upgraded the integrated Mocha runner to Mocha v9. We have also updated the implementation to match most of the features that Nightwatch offers in its own default test runner, such as the ability to use tags or global test hooks. You can now also use reporters such as [Mochawesome](https://nightwatchjs.org/guide/third-party-runners/using-mocha.html#using-the-mochawesome-reporter).

- ##### [Support for Chrome DevTools Protocol](/api/commands/#using-chrome-devtools-protocol)
When using ChromeDriver or EdgeDriver it is now possible to execute commands via the [Chrome DevTools protocol](https://chromedevtools.github.io/devtools-protocol/).

- ##### [New .ensure assertions API](/api/ensure/)
The new `.ensure` API is a direct mapping to the existing [until](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html) module from Selenium and provides an extra level of flexibility for performing assertions in tests.

- ##### [New programmatic API](/api/programmatic/)
A brand new programmatic API is available in Nightwatch 2, which makes it very easy to use Nightwatch externally, either by creating your custom runner or by using external test runners like Jest, Mocha, or Ava.

- ##### [New element() global and support for using WebElements](/api/element/)
The newly added element() global object adds to Nightwatch 2 the commands from the [Selenium WebElement](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html) instance.

### New commands
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

### Improvements
- specify [page commands](guide/using-page-objects/writing-page-specific-commands.html) as an ES6 class ([details](guide/using-page-objects/writing-page-specific-commands.html))
- added `enable_fail_fast` setting and `--fail-fast` cli argument to abort the test runner after a failed test suite;
- added support to use the config file as Promise
- added support to use glob patterns in config for `src_folders`, `page_object_path`, `custom_commands_path`, `custom_assertion_path` options
- `browser` is now available as a global; other globals: `element()`, `by()`, `expect()`, `Keys`
- added support to use Selenium Capabilities objects in Nightwatch config

### Breaking changes
We have tried to keep the breaking changes to a minimum, however some changes were unavoidable. See the [migrate to v2 guide](https://github.com/nightwatchjs/nightwatch/wiki/Migrating-to-Nightwatch-2.0) for details.

#### Release notes
Please refer to the release notes section for information about the latest changes.
[Releases Notes](https://nightwatchjs.org/guide/overview/whats-new.html).

### Recommended content
- [Nightwatch release notes](https://nightwatchjs.org/guide/overview/whats-new.html)
- [A First Look at Nightwatch v2.0](https://nightwatchjs.org/blog/a-first-look-at-nightwatch-v2.html)
- [Nightwatch v2 is Now in Beta](https://nightwatchjs.org/blog/nightwatch-v2-beta-is-available.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/overview/what-is-nightwatch.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">What is Nightwatch?</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/overview/whats-new.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Release notes</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
