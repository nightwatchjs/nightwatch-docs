## Nightwatch APIs

Nightwatch works by loading all the necessary commands, settings, and other properties on a single API object which is made available at runtime to all test scripts as the single argument.
This is so that everything is ready to get started with writing the actual test script and not have to instantiate other objects.

### The "browser" object

We are referring to the main API object as `browser` – for consistency with other Selenium related JS test frameworks and also because since v2, it is also available as a `global`:

```js
module.exports = {
  demoTest: function (browser) {
    browser.init();
  }
};
```

You might also see examples from previous versions of Nightwatch, using `client`. It is of course perfectly fine, although it might be confusing to users who are new to JavaScript syntax.

```js
module.exports = {
  demoTest: function (client) {
    client.init();
  }
};
```

#### Using as Global

From Nightwatch 2, `browser` is available as a global, so this is also valid:

```js
module.exports = {
  demoTest: function () {
    browser.init();
  }
};
```

As well as this:

```js
describe('Nightwatch APIs', function() {

  it('demoTest', function () {
    browser.init();
  })
};
```

### API Contents

Below is a list of all public properties and methods that are made available on the `browser` object.

<div class="apimethod">
  ### `[String]` .WEBDRIVER_ELEMENT_ID

  <p>The W3C web element identifier, equals to the string constant: `"element-6066-11e4-a52e-4f735466cecf"`</p>
</div>

<div class="apimethod">
  ### `[String]` .browserName

  <p>The browserName specified in the capabilities object</p>
</div>

<div class="apimethod">
  ### `[Boolean]` .isChrome()

  <p>Returns `true`|`false` whether or not the browser used is Google Chrome.</p>
</div>

<div class="apimethod">
  ### `[Boolean]` .isFirefox()

  <p>Returns `true`|`false` whether or not the browser used is a Mozilla Firefox.</p>
</div>

<div class="apimethod">
  ### `[Boolean]` .isSafari()

  <p>Returns `true`|`false` whether or not the browser used is Apple Safari.</p>
</div>

<div class="apimethod">
  ### `[Boolean]` .isEdge()

  <p>Returns `true`|`false` whether or not the browser used is Microsoft Edge.</p>
</div>

<div class="apimethod">
  ### `[Boolean]` .isInternetExplorer()

  <p>Returns `true`|`false` whether or not the browser used is Microsoft InternetExplorer.</p>
</div>

<div class="apimethod">
  ### `[Boolean]` .isOpera()

  <p>Returns `true`|`false` whether or not the browser used is Opera.</p>
</div>

<div class="apimethod">
  ### `[String]` .baseUrl

  <p>The value of `baseUrl` as defined in the Nightwatch config and which will be used as the default url for the command `.init()`.</p>
<p>Other aliases are: `base_url`, `launch_url`, or `launchUrl`.</p>

</div>

<div class="apimethod">
  ### `[Function]` .actions()

  <p>Returns a new instance of the `Actions` class from Selenium. See the [User Actions API](https://v2.nightwatchjs.org/api/useractions/) section for details.</p>
</div>

<div class="apimethod">
  ### `[Object]` .capabilities

  <p>The WebDriver session capabilities, used by the browser driver to communicate the features supported.</p>

  <p>WebDriver capabilities are used to communicate the features supported by a session. A client may also use capabilities to define which features it requires the driver to satisfy when creating a new session.</p>

  <p>When a WebDriver session is created it returns a set of capabilities describing the negotiated, effective capabilities of the session. Some of the capabilities included in this set are standard and shared between all browsers, but the set may also contain browser-specific capabilities and these are always prefixed.
    More on [WebDriver Capabilities](https://developer.mozilla.org/en-US/docs/Web/WebDriver/Capabilities).
  </p>

###### Example

```js
{
  acceptInsecureCerts: false,
  browserName: 'chrome',
  browserVersion: '96.0.4664.55',
  'goog:chromeOptions': { debuggerAddress: 'localhost:50427' },
  // ... continued
}
```

</div>

<div class="apimethod">
  ### `[Object]` currentTest

  <p>An object containing information about the current running testcase.</p>

###### Available properties

```js
{
  // name of the current running testcase
  name: ' ... ',

  // name of the current running testsuite, i.e. the test file
  module: ' ... ',

  // name of the current running test group, if any
  group: '',

  // the results object is shared among all testcases in the current testsuite
  results: {
    time: 0,
    assertions: [Array],
    passed: 0,
    errors: 0,
    failed: 0,
    retries: [Number],
    skipped: 0,
    tests: 0,
    steps: [],
    stackTrace: '',
    // an object accumulating the results of each testcase
    testcases: [Object]
  },

  // the current timestamp, in the format: Wed, 01 Dec 2021 08:34:00 GMT
  timestamp: ''
}
```

</div>

<div class="apimethod">
  ### `[Object]` .desiredCapabilities

  <p>An object containing the capabilities sent by Nightwatch to WebDriver, as defined in the Nightwatch config file (see the [Configuration section](http://local-v2.nightwatchjs.org/guide/configuration/overview.html) for details).</p>

###### Example

```js
{
  browserName: 'chrome',
  'goog:chromeOptions': {},
  name: 'Example Test'
}
```

</div>

<div class="apimethod">
  ### `[Object]` .driver

  <p>The [Selenium WebDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html) instance which Nightwatch uses under the hood. Can be useful in custom commands when it is needed to extend the main functionality offered by Nightwatch.</p>
  <p>If uses in regular testcase scripts, this needs to be wrapped in a `.perform()` command.</p>

###### Example

In the below example we will retrieve the [WebDriver Session](see <https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/session_exports_Session.html>) instance.

```js
describe('Nightwatch APIs', function() {

  it('driver demoTest', async function () {
    const session = await browser
      .init()
      .perform(function() {
        return this.driver.getSession();
      });
  })
};
```

</div>

<div class="apimethod">
  ### `[String]` .sessionId

  <p>The WebDriver session ID. WebDriver gives each session a unique session ID that can be used to differentiate one session from another. More info on WebDriver session is available on the [W3C WebDriver page](https://w3c.github.io/webdriver/#sessions) and the [Selenium WebDriver Docs](https://www.selenium.dev/documentation/webdriver/).</p>

###### Example

```js
console.log(browser.sessionId); // e0b40362dcec8ec501ac2b42b62bdce2

```

</div>

<div class="apimethod">
  ### `[Object]` .globals

  <p>The processed Nightwatch globals object which contains all the currently global properties and methods. See the [Test Globals section](https://v2.nightwatchjs.org/guide/using-nightwatch/concepts.html#using-test-globals) for details.</p>

</div>

<div class="apimethod">
  ### `[Object]` .options

  <p>The processed Nightwatch config object which contains all the currently used properties and settings. See the [Configuration section](https://nightwatchjs.org/guide/reference/settings.html) for details.</p>

</div>

<div class="apimethod">
  ### `[Object]` .Keys

  <p>A link to the [Key](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Key.html) enumeration from Selenium, which contains all the pressable keys that aren't text. This is usually needed when working with commands that send text to a page, like `.sendKeys()`.</p>
</div>

<div class="apimethod">
  ### `[Object]` .page

  <p>Contains a dictionary of the current page objects, created for the currently running testcase.
    See [Working with Page Objects](https://v2.nightwatchjs.org/guide/working-with-page-objects/using-page-objects.html) section for details.
  </p>
</div>

<div class="apimethod">
  ### `[Object]` .assert

  <p>See [Assert API](https://v2.nightwatchjs.org/api/assert/) section for details.</p>
</div>

<div class="apimethod">
  ### `[Object]` .verify

  <p>See [Assert API](https://v2.nightwatchjs.org/api/verify/) section for details.</p>
</div>

<div class="apimethod">
  ### `[Object]` .ensure

  <p>See [Ensure API](https://v2.nightwatchjs.org/api/ensure/) section for details.</p>
</div>

<div class="apimethod">
  ### `[Object]` .expect

  <p>See [Expect API](https://v2.nightwatchjs.org/api/expect/) section for details.</p>
</div>

<div class="apimethod">
  ### `[Object]` .chrome

  <p>Chromium specific commands. See [API Commands](https://v2.nightwatchjs.org/api/commands/) section for details.</p>
</div>

<div class="apimethod">
  ### `[Object]` .firefox

  <p>Firefox specific commands. See [API Commands](https://v2.nightwatchjs.org/api/commands/) section for details.</p>
</div>
