## Programmatic API

When included as a regular library package, Nightwatch exports an API through which it may be used programmatically. You don't need to specify a configuration file, although starting with v1.3, one will be created by default (nightwatch.conf.js).

### Syntax

Nightwatch 2 brings in a brand new programmatic api which makes it very easy to use Nightwatch externally, either by creating your custom runner or by using external test runners like Jest, Mocha, or Ava.

In depth examples of how to use Nightwatch with a third-party test runner will follow soon.

### Nightwatch.createClient([options])

  <p>Creates a new Nightwatch client that can be used to create WebDriver sessions.</p>

##### Syntax

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

### client.updateCapabilities([options])

  <p>Given an existing `client` created using the `createClient()` method listed above, this can be used to update the initially specified capabilities.</p>

##### Syntax

```js

client.updateCapabilities({
  testCapability: 'one, two, three'
});

```

### client.launchBrowser()

  <p>Given an existing `client` created using the `createClient()` method listed above, this can be used to create a new browser session.</p>
<p>The returned object will be the Nightwatch [browser API](https://v2.nightwatchjs.org/api/#the-browser-object) object.</p>

##### Syntax

```js

const browser = await client.launchBrowser();

```
