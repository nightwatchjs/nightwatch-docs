---
title: Using the programmatic API
description: Learn how to build a custom test runner programmatically using Nightwatch APIs
summary_image: https://nightwatchjs.org/img/banner.png
---

## Using the programmatic API

### Overview

When Nightwatch is imported as a regular library package, an API is exported so that you can use Nightwatch programmatically. When doing so, individual config settings can be supplied inline. So, there is no need to supply a configuration file. However, starting with version 1.3, a nightwatch.conf.js is created by default for your project.

### Syntax

Nightwatch 2 brings in a brand new programmatic API, which makes it very easy to use Nightwatch externally. You can use it either by creating your custom runner or by using external test runners such as Jest, Mocha, or Ava.

#### Nightwatch.createClient([options])

  Creates a new Nightwatch client that can be used to create WebDriver sessions.

##### Syntax

custom_test_runner.js

```js
const Nightwatch = require('nightwatch');

const client = Nightwatch.createClient({
  headless: true,
  output: true,
  silent: true, // set to false to enable verbose logging
  browserName: 'firefox', // can be either: firefox, chrome, safari, or edge

  // set the global timeout to be used with waitFor commands and when retrying assertions/expects
  timeout: 10000,

  // set the current test environment from the nightwatch config
  env: null,

  // any additional capabilities needed
  desiredCapabilities: {

  },

  // can define/overwrite test globals here;
  // when using a third-party test runner only the global hooks onBrowserNavigate/onBrowserQuit are supported
  globals: {},

  // when the test runner used supports running tests in parallel;
  // set to true if you need the webdriver port to be randomly generated
  parallel: false,

  // All other Nightwatch config settings can be overwritten here, such as:
  disable_colors: false
});

```

#### client.updateCapabilities([options])

  <p>Given an existing `client` created using the `createClient()` method listed above, this can be used to update the initially specified capabilities.</p>

##### Syntax

```js
client.updateCapabilities({
  testCapability: 'one, two, three'
});
```

#### client.launchBrowser()

  <p>Given an existing `client` created using the `createClient()` method listed above, this can be used to create a new browser session.</p>
<p>The returned object will be the Nightwatch [browser API](https://v2.nightwatchjs.org/api/#the-browser-object) object.</p>

##### Syntax

```js

const browser = await client.launchBrowser();
```

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/running-tests/using-with-test-groups.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Use test groups</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/running-tests/capture-console-messages.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Capture browser logs</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
