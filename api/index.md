## Nightwatch APIs

Nightwatch works by loading all the necessary commands, settings, and other properties on a single API object which is made available at runtime to all test scripts as the single argument.
This is so that everything is ready to get started with writing the actual test script and not have to instantiate other objects.

### The "browser" object
We are referring to the main API object as `browser` – for consistency with other Selenium related JS test frameworks and also because since v2, it is also available as a `global`:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">module.exports = {
  demoTest: function (browser) {
    browser.init();
  }
};</code></pre></div>

You might also see examples from previous versions of Nightwatch, using `client`. It is of course perfectly fine, although it might be confusing to users who are new to JavaScript syntax. 

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">module.exports = {
  demoTest: function (client) {
    client.init();
  }
};</code></pre></div>

#### Using as Global
From Nightwatch 2, `browser` is available as a global, so this is also valid:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">module.exports = {
  demoTest: function () {
    browser.init();
  }
};</code></pre></div>

As well as this:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('Nightwatch APIs', function() {
  
  it('demoTest', function () {
    browser.init();
  })
};</code></pre></div>

### API Contents
Below is a list of all public properties and methods that are made available on the `browser` object. 

<div class="apimethod">
  <h3>`[String]` .WEBDRIVER_ELEMENT_ID</h3>

  <p>The W3C web element identifier, equals to the string constant: `"element-6066-11e4-a52e-4f735466cecf"`</p>
</div>

<div class="apimethod">
  <h3>`[String]` .browserName</h3>

  <p>The browserName specified in the capabilities object</p>
</div>

<div class="apimethod">
  <h3>`[Boolean]` .isChrome()</h3>

  <p>Returns `true`|`false` whether or not the browser used is Google Chrome.</p>
</div>

<div class="apimethod">
  <h3>`[Boolean]` .isFirefox()</h3>

  <p>Returns `true`|`false` whether or not the browser used is a Mozilla Firefox.</p>
</div>

<div class="apimethod">
  <h3>`[Boolean]` .isSafari()</h3>

  <p>Returns `true`|`false` whether or not the browser used is Apple Safari.</p>
</div>

<div class="apimethod">
  <h3>`[Boolean]` .isEdge()</h3>

  <p>Returns `true`|`false` whether or not the browser used is Microsoft Edge.</p>
</div>

<div class="apimethod">
  <h3>`[Boolean]` .isInternetExplorer()</h3>

  <p>Returns `true`|`false` whether or not the browser used is Microsoft InternetExplorer.</p>
</div>

<div class="apimethod">
  <h3>`[Boolean]` .isOpera()</h3>

  <p>Returns `true`|`false` whether or not the browser used is Opera.</p>
</div>

<div class="apimethod">
  <h3>`[String]` .baseUrl</h3>

  <p>The value of `baseUrl` as defined in the Nightwatch config and which will be used as the default url for the command `.init()`.</p>
<p>Other aliases are: `base_url`, `launch_url`, or `launchUrl`.</p>

</div>

<div class="apimethod">
  <h3>`[Function]` .actions()</h3>

  <p>Returns a new instance of the `Actions` class from Selenium. See the [User Actions API](https://v2.nightwatchjs.org/api/useractions/) section for details.</p>
</div>

<div class="apimethod">
  <h3>`[Object]` .capabilities</h3>

  <p>The WebDriver session capabilities, used by the browser driver to communicate the features supported.</p>
  
  <p>WebDriver capabilities are used to communicate the features supported by a session. A client may also use capabilities to define which features it requires the driver to satisfy when creating a new session.</p>

  <p>When a WebDriver session is created it returns a set of capabilities describing the negotiated, effective capabilities of the session. Some of the capabilities included in this set are standard and shared between all browsers, but the set may also contain browser-specific capabilities and these are always prefixed.
    More on [WebDriver Capabilities](https://developer.mozilla.org/en-US/docs/Web/WebDriver/Capabilities).
  </p>

<h6>Example:</h6>
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">{
  acceptInsecureCerts: false,
  browserName: 'chrome',
  browserVersion: '96.0.4664.55',
  'goog:chromeOptions': { debuggerAddress: 'localhost:50427' },
  // ... continued
}</code></pre></div>
        
</div>

<div class="apimethod">
  <h3>`[Object]` currentTest</h3>

  <p>An object containing information about the current running testcase.</p>

  <h6>Available properties:</h6>

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">{
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
}</code></pre></div>
</div>

<div class="apimethod">
  <h3>`[Object]` .desiredCapabilities</h3>

  <p>An object containing the capabilities sent by Nightwatch to WebDriver, as defined in the Nightwatch config file (see the [Configuration section](http://local-v2.nightwatchjs.org/guide/configuration/overview.html) for details).</p>

<h6>Example:</h6>
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">{
  browserName: 'chrome',
  'goog:chromeOptions': {},
  name: 'Example Test'
}</code></pre></div>
</div>

<div class="apimethod">
  <h3>`[Object]` .driver</h3>

  <p>The [Selenium WebDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html) instance which Nightwatch uses under the hood. Can be useful in custom commands when it is needed to extend the main functionality offered by Nightwatch.</p>
  <p>If uses in regular testcase scripts, this needs to be wrapped in a `.perform()` command.</p>  

<h6>Example:</h6>
In the below example we will retrieve the [WebDriver Session](see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/session_exports_Session.html) instance.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('Nightwatch APIs', function() {

  it('driver demoTest', async function () {
    const session = await browser
      .init()
      .perform(function() {
        return this.driver.getSession();
      });
  })
};</code></pre></div>

</div>

<div class="apimethod">
  <h3>`[String]` .sessionId</h3>

  <p>The WebDriver session ID. WebDriver gives each session a unique session ID that can be used to differentiate one session from another. More info on WebDriver session is available on the [W3C WebDriver page](https://w3c.github.io/webdriver/#sessions) and the [Selenium WebDriver Docs](https://www.selenium.dev/documentation/webdriver/).</p>

  <h6>Example:</h6>
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">console.log(browser.sessionId); // e0b40362dcec8ec501ac2b42b62bdce2
</code></pre></div>
</div>

<div class="apimethod">
  <h3>`[Object]` .globals</h3>

  <p>The processed Nightwatch globals object which contains all the currently global properties and methods. See the [Test Globals section](https://v2.nightwatchjs.org/guide/using-nightwatch/concepts.html#using-test-globals) for details.</p>

</div>

<div class="apimethod">
  <h3>`[Object]` .options</h3>

  <p>The processed Nightwatch config object which contains all the currently used properties and settings. See the [Configuration section](https://v2.nightwatchjs.org/guide/configuration/overview.html) for details.</p>

</div>

<div class="apimethod">
  <h3>`[Object]` .Keys</h3>

  <p>A link to the [Key](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Key.html) enumeration from Selenium, which contains all the pressable keys that aren't text. This is usually needed when working with commands that send text to a page, like `.sendKeys()`.</p>
</div>

<div class="apimethod">
  <h3>`[Object]` .page</h3>

  <p>Contains a dictionary of the current page objects, created for the currently running testcase.
    See [Working with Page Objects](https://v2.nightwatchjs.org/guide/working-with-page-objects/using-page-objects.html) section for details.
  </p>
</div>

<div class="apimethod">
  <h3>`[Object]` .assert</h3>

  <p>See [Assert API](https://v2.nightwatchjs.org/api/assert/) section for details.</p>
</div>

<div class="apimethod">
  <h3>`[Object]` .verify</h3>

  <p>See [Assert API](https://v2.nightwatchjs.org/api/verify/) section for details.</p>
</div>

<div class="apimethod">
  <h3>`[Object]` .ensure</h3>

  <p>See [Ensure API](https://v2.nightwatchjs.org/api/ensure/) section for details.</p>
</div>

<div class="apimethod">
  <h3>`[Object]` .expect</h3>

  <p>See [Expect API](https://v2.nightwatchjs.org/api/expect/) section for details.</p>
</div>

<div class="apimethod">
  <h3>`[Object]` .chrome</h3>

  <p>Chromium specific commands. See [API Commands](https://v2.nightwatchjs.org/api/commands/) section for details.</p>
</div>

<div class="apimethod">
  <h3>`[Object]` .firefox</h3>

  <p>Firefox specific commands. See [API Commands](https://v2.nightwatchjs.org/api/commands/) section for details.</p>
</div>