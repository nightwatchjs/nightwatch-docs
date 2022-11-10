---
title: Ava Test Runner
description: Learn how to use Ava Test Runner in Nightwatch.
---

<div class="page-header"><h2>Using Ava as a test runner</h2></div>

### Overview
**Ava** is a test runner for Node.js with a concise API, which embraces new language features, has detailed error output and process isolation. While Ava is mostly used to run unit tests, it can be configured with ***Nightwatch.js*** to function as an integrated test framework for performing automated end-to-end tests on web applications across all major browsers.

### Configuration with Example
#### Step 0: install Nightwatch
Follow the [guide](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html#guide-container) or watch the [video](​​https://vimeo.com/714406223) to install Nightwatch from scratch.

#### Step 1: Install Ava
<div class="sample-test"><pre><code class="language-bash">npm i ava --save-dev</code></pre></div>

And make sure you have included the following script in your ***package.json*** file in order to run ava tests.

<pre class="line-numbers"><code class="json">{
 "scripts": {
   "test": "ava"
 }
}</code></pre>

#### Step 2: Configure Ava
You can configure all the CLI options in either `package.json` file or can create a file `ava.config.js`. Follow the [guide](https://github.com/avajs/ava/blob/main/docs/06-configuration.md) for more details :

<pre class="line-numbers"><code class="json">{
	"ava": {
		"files": [
			"test/**/*",
			"!test/exclude-files-in-this-directory",
			"!**/exclude-files-with-this-name.*"
		],
		"match": [
		//	"*oo",
		//	"!foo"
		],
		"concurrency": 5,
		"failFast": true,
		"failWithoutAssertions": false,
		"environmentVariables": {
			"MY_ENVIRONMENT_VARIABLE": "some value"
		},
		"verbose": true,
		"nodeArguments": [
			"--trace-deprecation",
			"--napi-modules"
		]
	}
}</code></pre>

#### Step 3: Nightwatch environment setup for Ava
You have to create an environment of Nightwatch to make it compatible with Ava. You need to write a `_setup-nightwatch-env.js` file and make sure it has been included in your tests files :

<pre class="line-numbers"><code class="language-javascript">const Nightwatch = require('nightwatch');

const createNightwatchClient = function({
  headless = true,
  browserName = undefined,
  silent = true,
  verbose = false,
  output = true,
  env = null,
  parallel = false,
  devtools = false,
  debug = false,
  persistGlobals = true,
  configFile = './nightwatch.conf.js',
  globals = {},
  webdriver = {},
  timeout = null,
  enableGlobalApis = false,
  reporter = null,
  alwaysAsync = true,
  desiredCapabilities = {}
} = {}) {

  const client = Nightwatch.createClient({
    headless,
    browserName,
    reporter,
    env,
    timeout,
    parallel,
    output,
    devtools,
    debug,
    enable_global_apis: enableGlobalApis,
    silent: silent && !verbose,
    always_async_commands: alwaysAsync,
    webdriver,
    persist_globals: persistGlobals,
    config: configFile,
    globals,
    desiredCapabilities
  });

  client.updateCapabilities(desiredCapabilities);

  return client.launchBrowser();
};

module.exports = async (t, run) => {
 global.browser = await createNightwatchClient();
 try {
   await run(t);
 } finally {
   await global.browser.end();
 }
};</code></pre>

#### Nightwatch options
The default behavior of Nightwatch can be modified by supplying any of the following configuration options. Below is a list of available options and their default values.


<div class="apimethod">
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th style="width: 60%;">Description</th>
        <th>Default</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>headless</code></td>
        <td>Boolean</td>
        <td>Run Nightwatch in headless mode (available in Firefox, Chrome, Edge)</td>
        <td>true</td>
      </tr>
      <tr>
        <td><code>browserName</code></td>
        <td>String</td>
        <td>Browser name to use; available options are: chrome, firefox, edge, safari</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>baseUrl</code></td>
        <td>String</td>
        <td>The base url to use for the when using .navigateTo() with relative urls. When doing component testing it needs to be set to the url running the Vite dev server.</td>
        <td>http://localhost:3000</td>
      </tr>
      <tr>
        <td><code>verbose</code></td>
        <td>Boolean</td>
        <td>Enable complete Nightwatch http logs.</td>
        <td>false</td>
      </tr>
      <tr>
        <td><code>output</code></td>
        <td>Boolean</td>
        <td>Show Nightwatch output</td>
        <td>true</td>
      </tr>
      <tr>
        <td><code>env</code></td>
        <td>String</td>
        <td>Nightwatch test environment to use, from nightwatch.conf.js. Learn more about test environments in the Nightwatch docs.</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>parallel</code></td>
        <td>Boolean</td>
        <td>Set this to true when running tests in parallel</td>
        <td>false</td>
      </tr>
      <tr>
        <td><code>devtools</code></td>
        <td>Boolean</td>
        <td>Chrome only: automatically open the chrome devtools</td>
        <td>false</td>
      </tr>
      <tr>
        <td><code>debug</code></td>
        <td>Boolean</td>
        <td>Component testing only: pause the test execution after rendering the component</td>
        <td>false</td>
      </tr>
      <tr>
        <td><code>autoStartSession</code></td>
        <td>Boolean</td>
        <td>Start the Nightwatch session automatically. If this is disabled, you'll need to call jestNightwatch.launchBrowser() in your tests.</td>
        <td>true</td>
      </tr>
      <tr>
        <td><code>persistGlobals</code></td>
        <td>Boolean</td>
        <td>Persist the same globals object between runs or have a (deep) copy of it per each test. Learn more about test globals in the Nightwatch docs.</td>
        <td>true</td>
      </tr>
      <tr>
        <td><code>configFile</code></td>
        <td>String</td>
        <td>The Nightwatch config file to use. A config file will be auto-generated by default, but this allows you to change that. Learn more about the Nightwatch config in the Nightwatch docs.</td>
        <td>./nightwatch.conf.js</td>
      </tr>
      <tr>
        <td><code>globals</code></td>
        <td>Object</td>
        <td>A list of globals to be used in Nightwatch. Globals are available on browser.globals. Learn more about the Nightwatch test globals in the Nightwatch docs.</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>webdriver</code></td>
        <td>Object</td>
        <td>A list of Webdriver related settings to configure the Nightwatch Webdriver service. Learn more about the Nightwatch webdriver settings in the Nightwatch docs. Nightwatch webdriver settings in the Nightwatch docs.</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>timeout</code></td>
        <td>Number</td>
        <td>Set the global timeout for assertion retries before an assertion fails.</td>
        <td>5000</td>
      </tr>
      <tr>
        <td><code>enableGlobalApis</code></td>
        <td>Boolean</td>
        <td>The Nightwatch global APIs (element(), expect()) are disable by default.</td>
        <td>false</td>
      </tr>
      <tr>
        <td><code>desiredCapabilities</code></td>
        <td>Object</td>
        <td>Define custom Selenium capabilities for the current session. Learn more about the specific browser driver that it is being used on the Nightwatch docs.</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>setup()</code></td>
        <td>Function</td>
        <td>Additional setup hook to be executed after Nightwatch has been started.</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>teardown()</code></td>
        <td>Function</td>
        <td>dditional teardown hook to be executed with the Nightwatch api object.</td>
        <td>none</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

#### Step 4: Run an example test
Consider the below example test :

<pre class="line-numbers"><code class="language-javascript">const test = require('ava');
const await_nightwatch_browser = require('../../../_setup-nightwatch-env.js');

test('duckduckgo example', await_nightwatch_browser, async function(t) {
 browser
   .navigateTo('https://www.ecosia.org/')
   .waitForElementVisible('body')

 const titleContains = await browser.assert.titleContains('Ecosia');
 t.is(titleContains.passed, true);

 const visible =  await browser.assert.visible('input[type=search]')
 t.is(visible.passed, true);

 t.pass();
});</code></pre>

To run the tests you can use the following commands :
<div class="sample-test"><pre><code class="language-bash">npm test</code></pre></div>

or

<div class="sample-test"><pre><code class="language-bash">npx ava</code></pre></div>

**Note :** ***Ava has different naming conventions so you should confirm that your tests are following this [guide](https://github.com/avajs/ava/blob/main/docs/01-writing-tests.md)***


#### Step 5: View the results of Ava test runner
<img width="1266" src="https://user-images.githubusercontent.com/94462364/184708209-694f108c-f264-454a-b784-42a0a68211c4.png">


Related articles
- [How-to guides > Write tests > Use Jest as a test runner](https://nightwatchjs.org/guide/writing-tests/using-jest.html)
- [How-to guides > Write tests > Use Mocha as a test runner](https://nightwatchjs.org/guide/writing-tests/using-mocha.html)
