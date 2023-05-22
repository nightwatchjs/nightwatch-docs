---
title: Firefox WebDriver (Gecko)
description: Learn about how to use Gecko Driver with Nightwatch.
---

## GeckoDriver

### Overview

[GeckoDriver](https://github.com/mozilla/geckodriver) is a standalone application used to interact with Gecko-based browsers, such as Firefox. It is written in Rust and maintained by Mozilla.

Starting with Firefox 48, GeckoDriver is the only way to automate Firefox, the legacy FirefoxDriver which used to be part of Selenium is no longer supported. Internally it translates the HTTP calls into [Marionette](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Marionette), Mozilla's automation protocol built into Firefox.

### Download

GeckoDriver can be downloaded from the [Releases page](https://github.com/mozilla/geckodriver/releases) on GitHub. Release notes are also available there. Or you can use the [geckodriver](https://www.npmjs.com/package/geckodriver) NPM package as a dependency in your project:

```js
npm install geckodriver --save-dev
```

Selenium 2.x users are advised to use version __v0.9__, whereas Selenium 3 users should use the latest version.

### Standalone Usage

Nightwatch can manage the GeckoDriver service automatically, as with other WebDriver services, such as ChromeDriver. To use GeckoDriver directly, add this to your `nightwatch.json`:

```js
{
  <strong>"webdriver"</strong>: {
    "start_process" : true,
    "server_path": "./bin/geckodriver-0.23",
    "cli_args": [
      "--log", "debug"
    ],
    "port": 4444
  },

  <strong>"test_settings"</strong> : {
    "default" : {
      "desiredCapabilities": {
        "browserName" : "firefox",
        "acceptInsecureCerts": true
      }
    }
  }
}
```

### Usage with Selenium Server

If you're using GeckoDriver through Selenium Server, simply set the cli argument `"webdriver.gecko.driver"` to point to the location of the binary file. E.g.:

```js
{
  <strong>"selenium"</strong> : {
    "start_process" : true,
    "server_path" : "./bin/selenium-server-standalone-3.{VERSION}.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.gecko.driver" : "./bin/geckodriver"
    }
  }
}
```

##### Firefox Capabilities

GeckoDriver supports a capability named 'firefoxOptions' which takes Firefox-specific preference values. Details are available on the GeckoDriver GitHub page: <https://github.com/mozilla/geckodriver#firefox-capabilities>.

##### Firefox Profile

Specifying the firefox profile can be done by setting the 'profile' property in the 'firefoxOptions' dictionary, as detailed above. This can be the base64-encoded zip of a profile directory and it may be used to install extensions or custom certificates.

##### Implementation Status

GeckoDriver is not yet feature complete, which means it does not yet offer full conformance with the WebDriver standard or complete compatibility with Selenium. Implementation status can be tracked on the [Marionette MDN page](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Marionette/WebDriver/status).
