## Programmatic API
When included as a regular library package, Nightwatch exports an API through which it may be used programmatically. You don't need to specify a configuration file, although starting with v1.3, one will be created by default (nightwatch.conf.js).

### Syntax
Nightwatch 2 brings in a brand new programmatic api which makes it very easy to use Nightwatch externally, either by creating your custom runner or by using external test runners like Jest, Mocha, or Ava. 

In depth examples of how to use Nightwatch with a third-party test runner will follow soon. 

<div class="apimethod">
  <h3>Nightwatch.createClient([options])</h3>

  <p>Creates a new Nightwatch client that can be used to create WebDriver sessions.</p>

<h5>Syntax:</h5>

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="default-theme language-javascript"><code class="default-theme language-javascript">
const Nightwatch = require('nightwatch');
<br>
const client = Nightwatch.createClient({
  headless: true,
  output: true,
  silent: true, // set to false to enable verbose logging
  browserName: 'firefox', // can be either: firefox, chrome, safari, or edge
  <br>
  // set the global timeout to be used with waitFor commands and when retrying assertions/expects
  timeout: 10000,
  <br>
  // set the current test environment from the nightwatch config
  env: null,
  <br>
  // any additional capabilities needed
  desiredCapabilities: {
    <br>
  },
  <br>
  // can define/overwrite test globals here; 
  // when using a third-party test runner only the global hooks onBrowserNavigate/onBrowserQuit are supported
  globals: {},
  <br>
  // when the test runner used supports running tests in parallel; 
  // set to true if you need the webdriver port to be randomly generated
  parallel: false, 
  <br>
  // All other Nightwatch config settings can be overwritten here, such as:
  disable_colors: false
});
</code></pre></div>
</div>

<div class="apimethod">
  <h3>client.updateCapabilities([options])</h3>

  Given an existing `client` created using the `createClient()` method listed above, this can be used to update the initially specified capabilities.

<h5>Syntax:</h5>

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="default-theme language-javascript"><code class="default-theme language-javascript">
client.updateCapabilities({
  testCapability: 'one, two, three'
});
</code></pre></div>
</div>

<div class="apimethod">
  <h3>client.launchBrowser()</h3>

  Given an existing `client` created using the `createClient()` method listed above, this can be used to create a new browser session.

The returned object will be the Nightwatch [browser API](https://nightwatchjs.org/api/#the-browser-objec) object.

<h5>Syntax:</h5>

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="default-theme language-javascript"><code class="default-theme language-javascript">
const browser = await client.launchBrowser();
</code></pre></div>
</div>
