---
title: Nightwatch Settings
description: Reference to list of settings received by nightwatch instance during test execution.
---

<div class="page-header"><h1>Config Settings</h1></div>

### Base settings

Below are the default settings that will be passed to the Nightwatch instance during test execution.

<table class="table table-bordered table-striped">
  <thead>
   <tr>
     <th style="width: 100px;">Name</th>
     <th style="width: 150px;">type</th>
     <th style="width: 50px;">default</th>
     <th>description</th>
   </tr>
  </thead>
  <tbody>
  <tr>
     <td><code>src_folders</code></td>
     <td>string | Array | <code>glob pattern</code></td>
     <td>none</td>
     <td>
      An array of folders (excluding subfolders) where the tests are located.
      <br><br>
      If this is not specified, the test source must be passed inline as the second argument to the <a href="/guide/running-tests/nightwatch-runner.html">test runner</a>.
     </td>
  </tr>
  <tr>
    <td><code>test_settings</code></td>
    <td>object</td>
    <td></td>
    <td>An object in which all the test environments are defined, each overwriting test settings as needed. A <code>default</code> environment is always required, from which the other environments inherit settings from. <br><br>See <a href="/guide/using-nightwatch/concepts.html#defining-test-environments">Defining Test Environments</a> for details.</td>
  </tr>
  <tr>
    <td><code>webdriver</code></td>
    <td>object</td>
    <td></td>
    <td>An object containing <strong>WebDriver</strong> related configuration options.</td>
  </tr>
  <tr>
    <td><code>selenium</code></td>
    <td>object</td>
    <td></td>
    <td>
    An object containing <strong>Selenium Server</strong> related configuration options. If Selenium Server is not used, <code>webdriver</code> options should be set instead.
    <br>
    Starting with Nightwatch 1.0, Selenium is only required when testing against a Grid setup or a cloud testing service (such as <a href="https://saucelabs.com/" target="_blank">SauceLabs</a> or <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a>).
    </td>
  </tr>
   <tr>
     <td><code>custom_commands_path</code></td>
     <td>string | Array | <code>glob pattern</code></td>
     <td>none</td>
     <td>Location(s) where custom commands will be loaded from.</td>
   </tr>
   <tr>
     <td><code>custom_assertions_path</code></td>
     <td>string | Array | <code>glob pattern</code></td>
     <td>none</td>
     <td>Location(s) where custom assertions will be loaded from.</td>
   </tr>
   <tr>
    <td><code>page_objects_path</code></td>
    <td>string | Array | <code>glob pattern</code></td>
    <td>none</td>
    <td>Location(s) where page object files will be loaded from.</td>
  </tr>
   <tr>
     <td><code>globals_path</code></td>
     <td>string</td>
     <td>none</td>
     <td>Location of an external globals module which will be loaded and made available to the test as a property <code>globals</code> on the main client instance. <br><br>Globals can also be defined/overwritten inside a <code>test_settings</code> environment.</td>
   </tr>
    <tr>
     <td><code>backwards_compatibility_mode</code><br><span class="optional">since v2.0</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>In Nightwatch v1.x, when used with <code>await</code> operator, API commands will return the full result object as <code>{value: `&lt;VALUE&gt;`}</code> whereas in v2, the value is return directly. If using a callback, the behaviour remains unchanged.</td>
   </tr>
    <tr>
     <td><code>disable_global_apis</code><br><span class="optional">since v2.0</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Disable the global apis like <code>"browser"</code>, <code>"element()"</code>, <code>"expect()"</code>; this might be needed if using Nightwatch with third-party libraries.</td>
   </tr>
  </tbody>
</table>

### Test Runner settings

The below settings are used to control the way the built-in CLI test runner works.
<table class="table table-bordered table-striped">
  <thead>
   <tr>
     <th style="width: 100px;">Name</th>
     <th style="width: 100px;">type</th>
     <th style="width: 50px;">default</th>
     <th>description</th>
   </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>test_runner</code></td>
      <td>string|object</td>
      <td>"default"</td>
      <td>Specifies which test runner to use when running the tests. Values can be either <code>default</code> (built-in nightwatch runner) or <code>mocha</code>.
        <br><br>Example: <code>"test_runner" : {"type" : "mocha", "options" : {"ui" : "tdd"}}</code></td>
     </tr>
    <tr>
     <td><code>parallel_process_delay</code></td>
     <td>integer</td>
     <td>10</td>
     <td>Specifies the delay(in milliseconds) between starting the child processes when running in parallel mode.</td>
   </tr>
  <tr>
     <td><code>enable_fail_fast</code><br><span class="optional">since v2.0</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Enable aborting the test run execution when the first test failure occurs; the remaining test suites will be skipped.</td>
   </tr>
   <tr>
     <td><code>test_workers</code></td>
     <td>boolean|object</td>
     <td>false</td>
     <td>Whether or not to run individual test suites in parallel using a test worker for each. If set to <code>true</code>, runs the tests in parallel and determines the number of workers automatically.
       <br><br>If set to an object, can specify specify the number of workers as <code>"auto"</code> or a <code>number</code>.
       <br><br>Example: <code>"test_workers" : {"enabled" : true, "workers" : "auto"}</code>
       <p>Since v1.3.7 you can specify node options to be passed to individual test worker processes, using the <code>node_options</code> property.
       <br>
       <br><br>Example:<br><br>- This will pass all of <code>process.execArgv</code>:<br><br>

<code>"test_workers": {<br>
&nbsp;&nbsp;"enabled": true,<br>
&nbsp;&nbsp;"workers": "auto",<br>
&nbsp;&nbsp;"node_options": "inherit"<br>
},</code>
       <br>
       <br><br>- This will pass only the specified cli options:<br><br>
<code>"test_workers": {<br>
&nbsp;&nbsp;"enabled": true,<br>
&nbsp;&nbsp;"workers": "auto",<br>
&nbsp;&nbsp;"node_options": ["--inspect"]<br>
},</code>
</p>
</td>
   </tr>
    <tr>
     <td><code>unit_tests_mode</code></td>
     <td>boolean</td>
     <td>false</td>
     <td>Controls whether to run tests in unit testing mode, which means the session will not automatically be created.</td>
    </tr>
  </tbody>
</table>

### Test Session Settings

These settings are used to fine tune the behaviour of a test session and define properties which may be available during the course of it.

### Setting the `baseUrl` property

This `baseUrl` (or `launchUrl`) property will be made available to the main Nightwatch api which is used in the tests. Its value depends on which environment is used.
More on test environments under the [Nightwatch Runner](/guide/concepts/test-environments.html#defining-test-environments) section.

If you run your tests specifying the `integration` environment (with `--env integration`) the `baseUrl` will be set to `http://staging.host`, as per the configuration. Otherwise it will have the value defined in the `default` environment (i.e. `http://localhost`).

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test' : function (browser) {
    browser
      .url(browser.baseUrl)
      // ...
      .end();
  }
};</code></pre>
</div>

<table class="table table-bordered table-striped" style="table-layout: fixed;">
  <thead>
   <tr>
     <th style="width: 110px;">Name</th>
     <th style="width: 100px;">type</th>
     <th style="width: 75px;">default</th>
     <th>description</th>
   </tr>
  </thead>
  <tbody>
    <tr>
       <td><code>baseUrl</code></td>
       <td>string</td>
       <td>none</td>
       <td>A url which can be used later in the tests as the main url to load. Can be useful if your tests will run on different environments, each one with a different url.<br><br>
        Aliases: <code>base_url</code>, <code>launch_url</code>, <code>launchUrl</code>.</td>
     </tr>
    <tr>
      <td><code>desiredCapabilities</code> <br>alias: <code>capabilities</code></td>
      <td>object | function | <a href="https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/capabilities_exports_Capabilities.html">Selenium Capabilities</a></td>
      <td></td>
      <td>The WebDriver capabilities for when a new session will be created. You can specify browser name for instance along with other capabilities.
        <br>Example:<br><br>
<code>"desiredCapabilities" : {<br>
&nbsp;&nbsp;"browserName" : "firefox", <br>&nbsp;&nbsp;"acceptInsecureCerts" : true<br>}</code><br>
You can view the complete list of capabilities <a href="https://w3c.github.io/webdriver/#capabilities" target="_blank">here</a>.
<br><br>
Since v2.0, <a href="https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/capabilities_exports_Capabilities.html">Selenium Capabilities</a> objects can also be specified. Example:<br>

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">const firefox = require('selenium-webdriver/firefox');
<br>
const options = new firefox.Options()
  .addExtensions('/path/to/extension.xpi');
<br>
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
<br>Or as a function:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">module.exports = {
  src_folders: ['tests'],
  test_settings: {
    default: {
      browserName: 'firefox',
      desiredCapabilities() {
        const firefox = require('selenium-webdriver/firefox');
        <br>
        const options = new firefox.Options()
          .addExtensions('/path/to/extension.xpi');
        <br>
        return options;
      }
    }
  }
};
</code></pre></div>
</td>
</tr>
    <tr>
       <td><code>screenshots</code></td>
       <td>object</td>
       <td>none</td>
       <td>Selenium generates screenshots when command errors occur. With <code>on_failure</code> set to true, also generates screenshots for failing or erroring tests. These are saved on the disk. <br><br>Since `v0.7.5` you can disable screenshots for command errors by setting `"on_error"` to `false`.
      <br><br>Example:<br><br><code>"screenshots" : {<br>&nbsp;&nbsp;"enabled" : true,<br>&nbsp;&nbsp;"on_failure" : true,<br>&nbsp;&nbsp;"on_error" : false,<br>&nbsp;&nbsp;"path" : ""<br>}</code></td>
     </tr>
     <tr>
       <td><code>globals</code></td>
       <td>object</td>
       <td></td>
       <td>An object which will be made available within the test and can be overwritten per environment. Example:<br><br>
<code>"globals" : {<br>&nbsp;&nbsp;"myGlobal" : "some_global"<br>}</code>

<br><br>Globals can also be defined in an external file. More on [External Globals](/guide/concepts/test-globals.html).
</td>
</tr>
    <tr>
       <td><code>persist_globals</code></td>
       <td>boolean</td>
       <td>false</td>
       <td>Set this to <code>true</code> if you'd like to persist the same globals object between testsuite runs or have a (deep) copy of it per each testsuite.</td>
    </tr>
    <tr>
      <td><code>start_session</code></td>
      <td>boolean</td>
      <td>true</td>
      <td>Whether or not to automatically start the WebDriver session. This will typically be set to <code>false</code> when running unit/integration tests that don't interact with the Webdriver server.</td>
    </tr>
    <tr>
     <td><code>end_session_on_fail</code></td>
     <td>boolean</td>
     <td>true</td>
     <td>End the session automatically when the test is being terminated, usually after a failed assertion.</td>
   </tr>
    <tr>
       <td><code>skip_testcases_on_fail</code></td>
       <td>boolean</td>
       <td>true</td>
       <td>Skip the remaining testcases (or test steps) from the same test suite (i.e. test file), when one testcase fails.</td>
    </tr>
    <tr>
     <td><code>use_xpath</code></td>
     <td>boolean</td>
     <td>false</td>
     <td>Use xpath as the default locator strategy</td>
   </tr>
    <tr>
     <td><code>use_ssl</code></td>
     <td>boolean</td>
     <td>false</td>
     <td>Set to true if connecting to a remote Grid server via https. Also don't forget to set <code>port</code> to 443.</td>
   </tr>
   <tr>
      <td><code>sync_test_names</code><br></td>
      <td>boolean</td>
      <td>true</td>
      <td>A <code>name</code> property will be added to the <code>desiredCapabilities</code> containing the test suite name when this is enabled. It is useful when using cloud testing services.</td>
   </tr>
   <tr>
      <td><code>persist_globals</code></td>
      <td>boolean</td>
      <td>false</td>
      <td>Set this to <code>true</code> if you'd like to persist the same globals object between testsuite runs or have a (deep) copy of it per each testsuite.</td>
     </tr>
    <tr>
      <td><code>selenium_host</code> <br><span class="optional">Deprecated</span> - use <code>selenium.host</code></td>
      <td>string</td>
      <td>localhost</td>
      <td>The hostname/IP on which the Selenium Server is accepting connections.</td>
    </tr>
    <tr>
      <td><code>selenium_port</code> <br><span class="optional">Deprecated</span> - use <code>selenium.port</code></td>
      <td>integer</td>
      <td>4444</td>
      <td>The port number on which the Selenium Server is accepting connections.</td>
    </tr>
  </tbody>
</table>

### Filtering Settings

The below settings can be used to define ways of filtering test files.
<table class="table table-bordered table-striped">
  <thead>
   <tr>
     <th style="width: 100px;">Name</th>
     <th style="width: 100px;">type</th>
     <th style="width: 50px;">default</th>
     <th>description</th>
   </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>exclude</code></td>
      <td>array</td>
      <td></td>
      <td>An array of folders or file patterns to be skipped (relative to the main source folder).<br>
        Example:<br><br>
         <code>"exclude" : ["excluded-folder"]</code><br>
        or:<br>
         <code>"exclude" : ["test-folder/\*-smoke.js"]</code><br>
      </td>
    </tr>
  <tr>
    <td><code>filter</code></td>
    <td>string</td>
    <td></td>
    <td>Folder or file pattern to be used when loading the tests. Files that don't match this pattern will be ignored.<br>
      Example:<br><br>
       <code>"filter" : "tests/\*-smoke.js"</code><br>
    </td>
  </tr>
  <tr>
     <td><code>skipgroup</code><br></td>
     <td>string</td>
     <td></td>
     <td>Skip a group of tests (a subfolder); can be a list of comma-separated values (no space).</td>
  </tr>
  <tr>
     <td><code>skiptags</code><br></td>
     <td>string</td>
     <td></td>
     <td>Skip tests by tag name; can be a list of comma-separated values (no space).</td>
  </tr>
  </tbody>
</table>

### Output Settings

The below settings can be used to control the output and logging when running tests.
<table class="table table-bordered table-striped">
  <thead>
   <tr>
     <th style="width: 100px;">Name</th>
     <th style="width: 100px;">type</th>
     <th style="width: 50px;">default</th>
     <th>description</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td><code>output_folder</code></td>
     <td>string</td>
     <td>tests_output</td>
     <td>The location where the JUnit XML report files will be saved.</td>
   </tr>
   <tr>
     <td><code>disable_colors</code></td>
     <td>boolean</td>
     <td>false</td>
     <td>Controls whether or not to disable coloring of the CLI output globally.</td>
   </tr>
   <tr>
    <td><code>live_output</code></td>
    <td>boolean</td>
    <td>false</td>
    <td>This option is only useful when running tests in parallel. Controls whether or not to buffer the output.</td>
  </tr>
  <tr>
    <td><code>silent</code></td>
    <td>boolean</td>
    <td>true</td>
    <td>Whether to show the extended HTTP traffic command logs from the WebDriver or Selenium server.</td>
  </tr>
  <tr>
    <td><code>output</code></td>
    <td>boolean</td>
    <td>true</td>
    <td>Used to disable CLI output completely.</td>
  </tr>
  <tr>
    <td><code>detailed_output</code></td>
    <td>boolean</td>
    <td>true</td>
    <td>By default detailed assertion output is displayed while the test is running. Set this to <code>false</code> if you'd like to only see the test case name displayed and pass/fail status. Detailed output is disabled by default when running tests in parallel.</td>
  </tr>
  <tr>
    <td><code>disable_error_log</code></td>
    <td>boolean</td>
    <td>false</td>
    <td>Set this to true if you'd like to not display errors during the execution of the test (they are shown at the end always).</td>
  </tr>
  <tr>
    <td><code>output_timestamp</code></td>
    <td>boolean</td>
    <td>false</td>
    <td>Set this to true if you'd like to see timestamps next to the logging output.</td>
  </tr>
  <tr>
    <td><code>log_screenshot_data</code></td>
    <td>boolean</td>
    <td>false</td>
    <td>Used to enable showing the Base64 image data in the (verbose) log when taking screenshots.</td>
  </tr>
  </tbody>
</table>

### WebDriver Settings

Below are a number of options for the Webdriver service. Nightwatch can start and stop the Webdriver process automatically which is very convenient as you don't have to manage this yourself and focus only on the tests.

If you'd like to enable this, set `start_process` to `true` and specify the location of the binary file inside `server_path`.

<table class="table table-bordered table-striped">
<thead>
 <tr>
   <th style="width: 100px;">Name</th>
   <th style="width: 100px;">type</th>
   <th style="width: 50px;">default</th>
   <th>description</th>
 </tr>
</thead>
<tbody>
 <tr>
   <td><code>start_process</code></td>
   <td>boolean</td>
   <td>false</td>
   <td>When this is enabled, the Webdriver server is run in background in a <a href="https://nodejs.org/api/child_process.html">child process</a> and started/stopped automatically.
    <br>Nightwatch includes support for managing Chromedriver, Geckodriver (Firefox), Safaridriver, and Selenium Server.
   </td>
 </tr>

 <tr>
    <td><code>server_path</code></td>
    <td>string</td>
    <td>none</td>
    <td>Only useful if <code>start_process</code> is enabled. </td>
  </tr>

  <tr>
    <td><code>host</code></td>
    <td>string</td>
    <td></td>
    <td>Only needed when the Webdriver service is running on a different machine.</td>
  </tr>

  <tr>
     <td><code>port</code></td>
     <td>integer</td>
     <td></td>
     <td>The port number on which the Webdriver service will listen and/or on which Nightwatch will attempt to connect.</td>
  </tr>

  <tr>
     <td><code>ssl</code></td>
     <td>boolean</td>
     <td></td>
     <td>Should be set to <code>true</code> if connecting to a remote (cloud) service via HTTPS. Also don't forget to set port to 443.</td>
  </tr>

   <tr>
     <td><code>log_path</code></td>
     <td>string|boolean</td>
     <td>none</td>
     <td>The location where the Webdriver service log file <code>output.log</code> file will be placed. Defaults to current directory.<br>To disable Webdriver logging, set this to <code>false</code></td>
   </tr>

   <tr>
     <td><code>log_file_name</code></td>
     <td>string|none</td>
     <td>none</td>
     <td>By default, the log file name will be the same as the testsuite file name, but a different filename can be specified as well.</td>
   </tr>

   <tr>
     <td><code>cli_args</code></td>
     <td>object</td>
     <td>none</td>
     <td>List of cli arguments to be passed to the Webdriver process. This varies for each Webdriver implementation.</td>
   </tr>

   <tr>
    <td><code>keep_alive</code></td>
    <td>boolean|object</td>
    <td>false</td>
    <td>Enable <a href="https://nodejs.org/api/http.html#http_new_agent_options">HTTP Keep-Alive</a>. If set to <code>true</code> the keepAlive option is enabled with default settings (<code>keepAliveMsecs</code> = 3000).
    <br>If set to an object, can specify specify the <code>keepAliveMsecs</code> value.
     <br><br>Example: <code>"keep_alive" : {"enabled" : true, "keepAliveMsecs" : 2000}</code></td>
  </tr>

  <tr>
    <td><code>timeout_options</code></td>
    <td>object</td>
    <td>
      timeout: 60000
      <br>
      retry_attempts: 0
    </td>
    <td>Requests to the Webdriver service will timeout in <code>timeout</code> miliseconds; a retry will happen <code>retry_attempts</code> number of times.
    <br><br>Example:<br>
    <code>{timeout: 15000, retry_attempts: 5}</code>
    </td>
  </tr>

  <tr>
    <td><code>status_poll_interval</code><br><span class="optional">since v1.2.2</span></td>
    <td>integer</td>
    <td>100</td>
    <td>Interval (in ms) to use between status ping checks when checking if the Webdriver server is up and running</td>
  </tr>

   <tr>
     <td><code>max_status_poll_tries</code><br><span class="optional">since v1.2.2</span></td>
     <td>integer</td>
     <td>5</td>
     <td>Maximum number of ping status check attempts when checking if the Webdriver server is up and running before returning a timeout error.</td>
   </tr>

   <tr>
     <td><code>process_create_timeout</code><br><span class="optional">since v1.2.2</span></td>
     <td>integer</td>
     <td>120000</td>
     <td>The entire time (in ms) to wait for the Node.js process to be created and running (default is 2 min), including spawning the child process and checking the status</td>
   </tr>

   <tr>
     <td><code>username</code></td>
     <td>string</td>
     <td>none</td>
     <td>Usually only needed for cloud testing Selenium services. In case the server requires credentials this username will be used to compute the <code>Authorization</code> header. <br><br>The value can be also an environment variable, in which case it will look like this:<br>
       <code>"username" : "${SAUCE_USERNAME}"</code>
     </td>
   </tr>

   <tr>
     <td><code>access_key</code></td>
     <td>string</td>
     <td>none</td>
     <td>This field will be used together with <code>username</code> to compute the <code>Authorization</code> header. <br><br>Like <code>username</code>, the value can be also an environment variable:<br>
       <code>"access_key" : "${SAUCE_ACCESS_KEY}"</code>
     </td>
   </tr>

   <tr>
      <td><code>proxy</code></td>
      <td>string</td>
      <td>none</td>
      <td>Proxy requests to the Webdriver (or Selenium) service. http, https, socks(v5), socks5, sock4, and pac are accepted.
<br>Uses <a href="https://www.npmjs.com/package/proxy-agent" target="_blank">proxy-agent</a> which needs to be installed as a separate package from NPM.
<br><br>Example: <code>http://user:pass@host:port</code></td>
   </tr>

   <tr>
    <td><code>default_path_prefix</code></td>
    <td>string</td>
    <td></td>
    <td>Needed sometimes when using a Selenium Server. The prefix to be added to to all requests (e.g. /wd/hub).
    </td>
  </tr>

 </tbody>
</table>

### Selenium Server Settings

If Selenium Server is being used, then the connection related settings should be placed under the `"selenium""`. If both `webdriver` and `selenium` dictionaries are present, the `selenium` options will be merged with the `webdriver` ones.

The `"selenium"` settings should also be used when configuring connections to cloud-based testing providers, such as [BrowserStack][1], [SauceLabs][2], [CrossBrowserTesting][3], or [LambdaTest][4].

<table class="table table-bordered table-striped">
<thead>
 <tr>
   <th style="width: 100px;">Name</th>
   <th style="width: 100px;">type</th>
   <th style="width: 50px;">default</th>
   <th>description</th>
 </tr>
</thead>
<tbody>
 <tr>
   <td><code>start_process</code></td>
   <td>boolean</td>
   <td>false</td>
   <td>Whether or not to manage the Selenium process automatically.</td>
 </tr>

 <tr>
   <td><code>server_path</code></td>
   <td>string</td>
   <td>none</td>
   <td>The location of the Selenium <code>jar</code> file. This needs to be specified if <code>start_process</code> is enabled.<br>E.g.: <code>bin/selenium-server-standalone-2.43.0.jar</code></td>
 </tr>

 <tr>
   <td><code>log_path</code></td>
   <td>string|boolean</td>
   <td>none</td>
   <td>The location where the Selenium <code>output.log</code> file will be placed. Defaults to current directory.<br>To disable Selenium logging, set this to <code>false</code></td>
 </tr>

 <tr>
   <td><code>version2</code></td>
   <td>boolean</td>
   <td>false</td>
   <td>Set this to <code>true</code> if you need to use legacy Selenium Server 2.</td>
 </tr>

 <tr>
   <td><code>port</code></td>
   <td>integer</td>
   <td>4444</td>
   <td>The port number Selenium will listen on and/or Nighwatch will attempt to connect to.</td>
 </tr>

 <tr>
   <td><code>cli_args</code></td>
   <td>object</td>
   <td>none</td>
   <td>List of cli arguments to be passed to the Selenium process. Here you can set various options for browser drivers, such as:<br><br>
     <ul>
       <li>
         <code>webdriver.firefox.profile</code>: Selenium will by default create a new Firefox profile for each session. If you wish to use an existing Firefox profile you can specify its name here.<br>
         Complete list of Firefox Driver arguments available <a href="https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver" target="_blank">here</a>.
       </li>
       <li>
         <code>webdriver.chrome.driver</code>: Nightwatch can run the tests using <strong>Chrome</strong> browser also. To enable this you have to download the <a href="http://chromedriver.storage.googleapis.com/index.html" target="_blank">ChromeDriver binary</a> and specify it's location here.
     Also don't forget to specify chrome as the browser name in the <code>desiredCapabilities</code> object.<br>
     More information can be found on the <a href="https://sites.google.com/a/chromium.org/chromedriver/" target="_blank">ChromeDriver website</a>.<br>
       </li>
       <li>
         <code>webdriver.ie.driver</code>:
         Nightwatch works with <strong>Internet Explorer</strong> also. To enable this you have to download the <a href=
         "https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver" target="_blank">IE Driver binary</a> and specify it's location here.<br><br>
         Alternatively you can install the package <a href="https://www.npmjs.com/package/iedriver"><code>iedriver</code></a> from NPM.<br><br>
     Also you need to specify "internet explorer" as the browser name in the <code>desiredCapabilities</code> object.
       </li>
     </ul>
   </td>
 </tr>
 </tbody>
</table>

### Selenium Example Configuration

Here's an example configuration as part of the `nightwatch.conf.js` which uses a local Selenium Server with support for Firefox, Chrome, and Internet Explorer.

The following **NPM** packages are assumed to be installed in the current project:

- [geckodriver][5]
- [chromedriver][6]
- [selenium-server][7]
- [iedriver][8]

<div class="sample-test">
<pre><code class="language-javascript">module.exports = {
  src_folders: [],
  <br>
  test_settings: {
    default: {
    launch_url: 'https://nightwatchjs.org'
  },
  <br>
  selenium: {
    // Selenium Server is running locally and is managed by Nightwatch
    selenium: {
      start_process: true,
      port: 4444,
      server_path: require('selenium-server').path,
      cli_args: {
        'webdriver.gecko.driver': require('geckodriver').path,
        'webdriver.chrome.driver': require('chromedriver').path,
        'webdriver.ie.driver': process.platform === 'win32' ? require('iedriver').path : ''
      }
    },
    webdriver: {
      start_process: false
    }
  },
  <br>
  'selenium.chrome': {
    extends: 'selenium',
    desiredCapabilities: {
      browserName: 'chrome',
      chromeOptions: {
      }
    }
  },
  <br>
  'selenium.firefox': {
    extends: 'selenium',
    desiredCapabilities: {
      browserName: 'firefox'
    }
  },
  <br>
  'selenium.ie': {
    extends: 'selenium',
    desiredCapabilities: {
      browserName: 'internet explorer'
    }
  }
}
}</code></pre></div>

### BrowserStack Example Configuration

[Browserstack][9] is one of the most popular cloud testing platforms. Using it with Nightwatch is very straightforward and there is configuration in the auto-generated `nightwatch.conf.js` file.

Once you have an account, you need to set the following environment variables. [Dotenv][10] files are also supported by Nightwatch.

- `BROWSERSTACK_USER`
- `BROWSERSTACK_KEY`

Remember to also enable HTTP keepalive for improved network performance.

<div class="sample-test">
<pre><code class="language-javascript">module.exports = {
  src_folders: [],
  <br>
  webdriver: {
    keep_alive: true,
    timeout_options: {
      timeout: 60000,
      retry_attempts: 3
    }
  }
  <br>
  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },
    <br>
    browserstack: {
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443
      },
      <br>
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'bstack:options' : {
          local: 'false',
          userName: '${BROWSERSTACK_USER}',
          accessKey: '${BROWSERSTACK_KEY}',
        }
      }
    },
    <br>
    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
        }
      }
    },
    <br>
    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
    <br>
    'browserstack.ie': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'IE',
        browserVersion: '11.0',
        'bstack:options' : {
          os: 'Windows',
          osVersion: '10',
          local: 'false',
          seleniumVersion: '3.5.2',
          resolution: '1366x768'
        }
      }
    }
  }
}</code></pre></div>

[1]:    https://browserstack.com
[2]:    https://saucelabs.com/
[3]:    https://crossbrowsertesting.com/
[4]:    https://www.lambdatest.com/
[5]:    https://www.npmjs.com/package/geckodriver
[6]:    https://www.npmjs.com/package/chromedriver
[7]:    https://www.npmjs.com/package/selenium-server
[8]:    https://www.npmjs.com/package/iedriver
[9]:    https://browserstack.com
[10]:   https://www.npmjs.com/package/dotenv

### Recommended content

- [Default configuration](/guide/reference/defaults.html)
- [CLI options](/guide/nightwatch-cli/command-line-options.html)


