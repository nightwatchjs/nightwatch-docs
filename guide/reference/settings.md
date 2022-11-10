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
     <td>`src_folders`</td>
     <td>string | Array | `glob pattern`</td>
     <td>none</td>
     <td>
      An array of folders (excluding subfolders) where the tests are located.
      <br><br>
      If this is not specified, the test source must be passed inline as the second argument to the [test runner](/guide/running-tests/nightwatch-runner.html).
     </td>
  </tr>
  <tr>
    <td>`test_settings`</td>
    <td>object</td>
    <td></td>
    <td>An object in which all the test environments are defined, each overwriting test settings as needed. A `default` environment is always required, from which the other environments inherit settings from. <br><br>See [Defining Test Environments](https://nightwatchjs.org/guide/using-nightwatch/concepts.html#defining-test-environments) for details.</td>
  </tr>
  <tr>
    <td>`webdriver`</td>
    <td>object</td>
    <td></td>
    <td>An object containing **WebDriver** related configuration options.</td>
  </tr>
  <tr>
    <td>`selenium`</td>
    <td>object</td>
    <td></td>
    <td>
    An object containing **Selenium Server** related configuration options. If Selenium Server is not used, `webdriver` options should be set instead.
    <br>
    Starting with Nightwatch 1.0, Selenium is only required when testing against a Grid setup or a cloud testing service (such as <a href="https://saucelabs.com/" target="_blank">SauceLabs</a> or <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a>).
    </td>
  </tr>

   <tr>
     <td>`custom_commands_path`</td>
     <td>string | Array | `glob pattern`</td>
     <td>none</td>
     <td>Location(s) where custom commands will be loaded from.</td>
   </tr>

   <tr>
     <td>`custom_assertions_path`</td>
     <td>string | Array | `glob pattern`</td>
     <td>none</td>
     <td>Location(s) where custom assertions will be loaded from.</td>
   </tr>

   <tr>
    <td>`page_objects_path`</td>
    <td>string | Array | `glob pattern`</td>
    <td>none</td>
    <td>Location(s) where page object files will be loaded from.</td>
  </tr>

   <tr>
     <td>`globals_path`</td>
     <td>string</td>
     <td>none</td>
     <td>Location of an external globals module which will be loaded and made available to the test as a property <code>globals</code> on the main client instance. <br><br>Globals can also be defined/overwritten inside a <code>test_settings</code> environment.</td>
   </tr>

    <tr>
     <td>`backwards_compatibility_mode`<br><span class="optional">since v2.0</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>In Nightwatch v1.x, when used with `await` operator, API commands will return the full result object as `{value: `<VALUE>`}` whereas in v2, the value is return directly. If using a callback, the behaviour remains unchanged.</td>
   </tr>
    <tr>
     <td>`disable_global_apis`<br><span class="optional">since v2.0</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Disable the global apis like `"browser"`, `"element()"`, `"expect()"`; this might be needed if using Nightwatch with third-party libraries.</td>
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
      <td>`test_runner`</td>
      <td>string|object</td>
      <td>"default"</td>
      <td>Specifies which test runner to use when running the tests. Values can be either `default` (built-in nightwatch runner) or `mocha`.  
        <br><br>Example: <code>"test_runner" : {"type" : "mocha", "options" : {"ui" : "tdd"}}</code></td>
     </tr>

    <tr>
     <td>`parallel_process_delay`</td>
     <td>integer</td>
     <td>10</td>
     <td>Specifies the delay(in milliseconds) between starting the child processes when running in parallel mode.</td>
   </tr>

  <tr>
     <td>`enable_fail_fast`<br><span class="optional">since v2.0</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Enable aborting the test run execution when the first test failure occurs; the remaining test suites will be skipped.</td>
   </tr>

   <tr>
     <td>`test_workers`</td>
     <td>boolean|object</td>
     <td>false</td>
     <td>Whether or not to run individual test suites in parallel using a test worker for each. If set to `true`, runs the tests in parallel and determines the number of workers automatically.
       <br><br>If set to an object, can specify specify the number of workers as `"auto"` or a `number`.
       <br><br>Example: <code>"test_workers" : {"enabled" : true, "workers" : "auto"}</code>
       <p>Since v1.3.7 you can specify node options to be passed to individual test worker processes, using the `node_options` property.

       <br><br>Example:<br><br>- This will pass all of `process.execArgv`:<br><br>

<code>"test_workers": {<br>
&nbsp;&nbsp;"enabled": true,<br>
&nbsp;&nbsp;"workers": "auto",<br>
&nbsp;&nbsp;"node_options": "inherit"<br>
},</code>

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
     <td>`unit_tests_mode`</td>
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
More on test environments under the [Nightwatch Runner](https://v2.nightwatchjs.org/guide/using-nightwatch/concepts.html#defining-test-environments) section.

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
       <td>`baseUrl`</td>
       <td>string</td>
       <td>none</td>
       <td>A url which can be used later in the tests as the main url to load. Can be useful if your tests will run on different environments, each one with a different url.<br><br>
        Aliases: `base_url`, `launch_url`, `launchUrl`.</td>
     </tr>

    <tr>
      <td>`desiredCapabilities` <br>alias: `capabilities`</td>
      <td>object | function | [Selenium Capabilities](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/capabilities_exports_Capabilities.html)</td>
      <td></td>
      <td>The WebDriver capabilities for when a new session will be created. You can specify browser name for instance along with other capabilities.
        <br>Example:<br><br>
<code>"desiredCapabilities" : {<br>
&nbsp;&nbsp;"browserName" : "firefox", <br>&nbsp;&nbsp;"acceptInsecureCerts" : true<br>}</code><br>
You can view the complete list of capabilities <a href="https://w3c.github.io/webdriver/#capabilities" target="_blank">here</a>.
<br><br>
Since v2.0, [Selenium Capabilities](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/capabilities_exports_Capabilities.html) objects can also be specified. Example:<br>

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">const firefox = require('selenium-webdriver/firefox');

const options = new firefox.Options()
  .addExtensions('/path/to/extension.xpi');

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

        const options = new firefox.Options()
          .addExtensions('/path/to/extension.xpi');

        return options;
      }
    }
  }
};
</code></pre></div>
</td>
</tr>

    <tr>
       <td>`screenshots`</td>
       <td>object</td>
       <td>none</td>
       <td>Selenium generates screenshots when command errors occur. With <code>on_failure</code> set to true, also generates screenshots for failing or erroring tests. These are saved on the disk. <br><br>Since `v0.7.5` you can disable screenshots for command errors by setting `"on_error"` to `false`.
      <br><br>Example:<br><br><code>"screenshots" : {<br>&nbsp;&nbsp;"enabled" : true,<br>&nbsp;&nbsp;"on_failure" : true,<br>&nbsp;&nbsp;"on_error" : false,<br>&nbsp;&nbsp;"path" : ""<br>}</code></td>
     </tr>

     <tr>
       <td>`globals`</td>
       <td>object</td>
       <td></td>
       <td>An object which will be made available within the test and can be overwritten per environment. Example:<br><br>
<code>"globals" : {<br>&nbsp;&nbsp;"myGlobal" : "some_global"<br>}</code>

<br><br>Globals can also be defined in an external file. More on [External Globals](https://v2.nightwatchjs.org/guide/using-nightwatch/external-globals.html).
</td>
</tr>

    <tr>
       <td>`persist_globals`</td>
       <td>boolean</td>
       <td>false</td>
       <td>Set this to `true` if you'd like to persist the same globals object between testsuite runs or have a (deep) copy of it per each testsuite.</td>
    </tr>
    <tr>
      <td>`start_session`</td>
      <td>boolean</td>
      <td>true</td>
      <td>Whether or not to automatically start the WebDriver session. This will typically be set to `false` when running unit/integration tests that don't interact with the Webdriver server.</td>
    </tr>
    <tr>
     <td>`end_session_on_fail`</td>
     <td>boolean</td>
     <td>true</td>
     <td>End the session automatically when the test is being terminated, usually after a failed assertion.</td>
   </tr>

    <tr>
       <td>`skip_testcases_on_fail`</td>
       <td>boolean</td>
       <td>true</td>
       <td>Skip the remaining testcases (or test steps) from the same test suite (i.e. test file), when one testcase fails.</td>
    </tr>

    <tr>
     <td>`use_xpath`</td>
     <td>boolean</td>
     <td>false</td>
     <td>Use xpath as the default locator strategy</td>
   </tr>

    <tr>
     <td>`use_ssl`</td>
     <td>boolean</td>
     <td>false</td>
     <td>Set to true if connecting to a remote Grid server via https. Also don't forget to set `port` to 443.</td>
   </tr>

   <tr>
      <td>`sync_test_names`<br></td>
      <td>boolean</td>
      <td>true</td>
      <td>A `name` property will be added to the `desiredCapabilities` containing the test suite name when this is enabled. It is useful when using cloud testing services.</td>
   </tr>

   <tr>
      <td>`persist_globals`</td>
      <td>boolean</td>
      <td>false</td>
      <td>Set this to `true` if you'd like to persist the same globals object between testsuite runs or have a (deep) copy of it per each testsuite.</td>
     </tr>

    <tr>
      <td>`selenium_host` <br><span class="optional">Deprecated</span> - use `selenium.host`</td>
      <td>string</td>
      <td>localhost</td>
      <td>The hostname/IP on which the Selenium Server is accepting connections.</td>
    </tr>

    <tr>
      <td>`selenium_port` <br><span class="optional">Deprecated</span> - use `selenium.port`</td>
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
      <td>`exclude`</td>
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
    <td>`filter`</td>
    <td>string</td>
    <td></td>
    <td>Folder or file pattern to be used when loading the tests. Files that don't match this pattern will be ignored.<br>
      Example:<br><br>
       <code>"filter" : "tests/\*-smoke.js"</code><br>
    </td>
  </tr>    

  <tr>
     <td>`skipgroup`<br></td>
     <td>string</td>
     <td></td>
     <td>Skip a group of tests (a subfolder); can be a list of comma-separated values (no space).</td>
  </tr>

  <tr>
     <td>`skiptags`<br></td>
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
     <td>`output_folder`</td>
     <td>string</td>
     <td>tests_output</td>
     <td>The location where the JUnit XML report files will be saved.</td>
   </tr>

   <tr>
     <td>`disable_colors`</td>
     <td>boolean</td>
     <td>false</td>
     <td>Controls whether or not to disable coloring of the CLI output globally.</td>
   </tr>

   <tr>
    <td>`live_output`</td>
    <td>boolean</td>
    <td>false</td>
    <td>This option is only useful when running tests in parallel. Controls whether or not to buffer the output.</td>
  </tr>

  <tr>
    <td>`silent`</td>
    <td>boolean</td>
    <td>true</td>
    <td>Whether to show the extended HTTP traffic command logs from the WebDriver or Selenium server.</td>
  </tr>

  <tr>
    <td>`output`</td>
    <td>boolean</td>
    <td>true</td>
    <td>Used to disable CLI output completely.</td>
  </tr>

  <tr>
    <td>`detailed_output`</td>
    <td>boolean</td>
    <td>true</td>
    <td>By default detailed assertion output is displayed while the test is running. Set this to `false` if you'd like to only see the test case name displayed and pass/fail status. Detailed output is disabled by default when running tests in parallel.</td>
  </tr>

  <tr>
    <td>`disable_error_log`</td>
    <td>boolean</td>
    <td>false</td>
    <td>Set this to true if you'd like to not display errors during the execution of the test (they are shown at the end always).</td>
  </tr>

  <tr>
    <td>`output_timestamp`</td>
    <td>boolean</td>
    <td>false</td>
    <td>Set this to true if you'd like to see timestamps next to the logging output.</td>
  </tr>

  <tr>
    <td>`log_screenshot_data`</td>
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
   <td>`start_process`</td>
   <td>boolean</td>
   <td>false</td>
   <td>When this is enabled, the Webdriver server is run in background in a [child process](https://nodejs.org/api/child_process.html) and started/stopped automatically.
    <br>Nightwatch includes support for managing Chromedriver, Geckodriver (Firefox), Safaridriver, and Selenium Server. Please refer to the [Install Webdriver](https://v2.nightwatchjs.org/gettingstarted/installation/#webdriver-service) section for details.  
   </td>
 </tr>

 <tr>
    <td>`server_path`</td>
    <td>string</td>
    <td>none</td>
    <td>Only useful if <code>start_process</code> is enabled. </td>
  </tr>

  <tr>
    <td>`host`</td>
    <td>string</td>
    <td></td>
    <td>Only needed when the Webdriver service is running on a different machine.</td>
  </tr>

  <tr>
     <td>`port`</td>
     <td>integer</td>
     <td></td>
     <td>The port number on which the Webdriver service will listen and/or on which Nightwatch will attempt to connect.</td>
  </tr>

  <tr>
     <td>`ssl`</td>
     <td>boolean</td>
     <td></td>
     <td>Should be set to `true` if connecting to a remote (cloud) service via HTTPS. Also don't forget to set port to 443.</td>
  </tr>

   <tr>
     <td>`log_path`</td>
     <td>string|boolean</td>
     <td>none</td>
     <td>The location where the Webdriver service log file <code>output.log</code> file will be placed. Defaults to current directory.<br>To disable Webdriver logging, set this to <code>false</code></td>
   </tr>

   <tr>
     <td>`log_file_name`</td>
     <td>string|none</td>
     <td>none</td>
     <td>By default, the log file name will be the same as the testsuite file name, but a different filename can be specified as well.</td>
   </tr>

   <tr>
     <td>`cli_args`</td>
     <td>object</td>
     <td>none</td>
     <td>List of cli arguments to be passed to the Webdriver process. This varies for each Webdriver implementation.</td>
   </tr>

   <tr>
    <td>`keep_alive`</td>
    <td>boolean|object</td>
    <td>false</td>
    <td>Enable [HTTP Keep-Alive](https://nodejs.org/api/http.html#http_new_agent_options). If set to `true` the keepAlive option is enabled with default settings (`keepAliveMsecs` = 3000).
    <br>If set to an object, can specify specify the `keepAliveMsecs` value.
     <br><br>Example: <code>"keep_alive" : {"enabled" : true, "keepAliveMsecs" : 2000}</code></td>
  </tr>

  <tr>
    <td>`timeout_options`</td>
    <td>object</td>
    <td>
      timeout: 60000
      <br>
      retry_attempts: 0
    </td>
    <td>Requests to the Webdriver service will timeout in `timeout` miliseconds; a retry will happen `retry_attempts` number of times.
    <br><br>Example:<br>
    <code>{timeout: 15000, retry_attempts: 5}</code>
    </td>
  </tr>

  <tr>
    <td>`status_poll_interval`<br><span class="optional">since v1.2.2</span></td>
    <td>integer</td>
    <td>100</td>
    <td>Interval (in ms) to use between status ping checks when checking if the Webdriver server is up and running</td>
  </tr>

   <tr>
     <td>`max_status_poll_tries`<br><span class="optional">since v1.2.2</span></td>
     <td>integer</td>
     <td>5</td>
     <td>Maximum number of ping status check attempts when checking if the Webdriver server is up and running before returning a timeout error.</td>
   </tr>

   <tr>
     <td>`process_create_timeout`<br><span class="optional">since v1.2.2</span></td>
     <td>integer</td>
     <td>120000</td>
     <td>The entire time (in ms) to wait for the Node.js process to be created and running (default is 2 min), including spawning the child process and checking the status</td>
   </tr>

   <tr>
     <td>`username`</td>
     <td>string</td>
     <td>none</td>
     <td>Usually only needed for cloud testing Selenium services. In case the server requires credentials this username will be used to compute the <code>Authorization</code> header. <br><br>The value can be also an environment variable, in which case it will look like this:<br>
       <code>"username" : "${SAUCE_USERNAME}"</code>
     </td>
   </tr>

   <tr>
     <td>`access_key`</td>
     <td>string</td>
     <td>none</td>
     <td>This field will be used together with <code>username</code> to compute the <code>Authorization</code> header. <br><br>Like <code>username</code>, the value can be also an environment variable:<br>
       <code>"access_key" : "${SAUCE_ACCESS_KEY}"</code>
     </td>
   </tr>

   <tr>
      <td>`proxy`</td>
      <td>string</td>
      <td>none</td>
      <td>Proxy requests to the Webdriver (or Selenium) service. http, https, socks(v5), socks5, sock4, and pac are accepted. 
<br>Uses <a href="https://www.npmjs.com/package/proxy-agent" target="_blank">proxy-agent</a> which needs to be installed as a separate package from NPM.
<br><br>Example: <code>http://user:pass@host:port</code></td>
   </tr>

   <tr>
    <td>`default_path_prefix`</td>
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
   <td>`start_process`</td>
   <td>boolean</td>
   <td>false</td>
   <td>Whether or not to manage the Selenium process automatically.</td>
 </tr>

 <tr>
   <td>`server_path`</td>
   <td>string</td>
   <td>none</td>
   <td>The location of the Selenium <code>jar</code> file. This needs to be specified if <code>start_process</code> is enabled.<br>E.g.: <code>bin/selenium-server-standalone-2.43.0.jar</code></td>
 </tr>

 <tr>
   <td>`log_path`</td>
   <td>string|boolean</td>
   <td>none</td>
   <td>The location where the Selenium <code>output.log</code> file will be placed. Defaults to current directory.<br>To disable Selenium logging, set this to <code>false</code></td>
 </tr>

 <tr>
   <td>`version2`</td>
   <td>boolean</td>
   <td>false</td>
   <td>Set this to `true` if you need to use legacy Selenium Server 2.</td>
 </tr>

 <tr>
   <td>`port`</td>
   <td>integer</td>
   <td>4444</td>
   <td>The port number Selenium will listen on and/or Nighwatch will attempt to connect to.</td>
 </tr>

 <tr>
   <td>`cli_args`</td>
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
         Alternatively you can install the package [`iedriver`](https://www.npmjs.com/package/iedriver) from NPM.<br><br>
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

  test_settings: {
    default: {
    launch_url: 'https://nightwatchjs.org'
  },

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

  'selenium.chrome': {
    extends: 'selenium',
    desiredCapabilities: {
      browserName: 'chrome',
      chromeOptions: {
        w3c: false
      }
    }
  },

  'selenium.firefox': {
    extends: 'selenium',
    desiredCapabilities: {
      browserName: 'firefox'
    }
  },

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

  webdriver: {
    keep_alive: true,
    timeout_options: {
      timeout: 60000,
      retry_attempts: 3
    }
  }

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack: {
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443
      },

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

    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: false
        }
      }
    },

    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },

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



[1]:	https://browserstack.com
[2]:	https://saucelabs.com/
[3]:	https://crossbrowsertesting.com/
[4]:  https://www.lambdatest.com/
[5]:	https://www.npmjs.com/package/geckodriver
[6]:	https://www.npmjs.com/package/chromedriver
[7]:	https://www.npmjs.com/package/selenium-server
[8]:	https://www.npmjs.com/package/iedriver
[9]:	https://browserstack.com
[10]:	https://www.npmjs.com/package/dotenv

[1]:	https://v2.nightwatchjs.org/guide/using-nightwatch/concepts.html#defining-test-environments
[2]:	https://github.com/nightwatchjs/nightwatch/blob/main/bin/nightwatch.json

### Recommended content
- [Default configuration](https://nightwatchjs.org/guide/reference/defaults.html)
- [CLI options](https://nightwatchjs.org/guide/nightwatch-cli/command-line-options.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/nightwatch-cli/command-line-options.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Command-line Options</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/reference/defaults.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Default Settings</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
