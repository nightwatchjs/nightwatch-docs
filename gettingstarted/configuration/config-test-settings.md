## Extended Settings

### Test Runner Settings
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
      <td>`test_runner` <br><span class="optional">Optional</span></td>
      <td>string|object</td>
      <td>"default"</td>
      <td>Specifies which test runner to use when running the tests. Values can be either `default` (built-in nightwatch runner) or `mocha`.  
        <br><br>Example: <code>"test_runner" : {"type" : "mocha", "options" : {"ui" : "tdd"}}</code></td>
     </tr>
    
    <tr>
     <td>`parallel_process_delay` <br><span class="optional">Optional</span></td>
     <td>integer</td>
     <td>10</td>
     <td>Specifies the delay(in milliseconds) between starting the child processes when running in parallel mode.</td>
   </tr>
   
   <tr>
     <td>`test_workers` <br><span class="optional">Optional</span></td>
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
     <td>`unit_tests_mode` <br><span class="optional">Optional</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Controls whether to run tests in unit testing mode, which means the session will not automatically be created.</td>
    </tr>
   
  </tbody>
</table>

### Test Session Settings
These settings are used to fine tune the behaviour of a test session and define properties which may be available during the course of it.

#### The `launch_url` property
This property will be made available to the main Nightwatch api which is used in the tests. Its value depends on which environment is used.
More on test environments under the [Nightwatch Runner](https://nightwatchjs.org/guide#test-environments) section.

If you run your tests specifying the `integration` environment (with `--env integration`) the `launch_url` will be set to `http://staging.host`, as per the configuration. Otherwise it will have the value defined in the `default` environment (i.e. `http://localhost`).

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test' : function (browser) {
    browser
      .url(browser.launchUrl)
      // ...
      .end();
  }
};</code></pre>
</div>
 
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
       <td>`launch_url`</td>
       <td>string</td>
       <td>none</td>
       <td>A url which can be used later in the tests as the main url to load. Can be useful if your tests will run on different environments, each one with a different url.</td>
     </tr>
    
    <tr>
      <td>`start_session`</td>
      <td>boolean</td>
      <td>true</td>
      <td>Whether or not to automatically start the WebDriver session. This will typically be set to `false` when running unit/integration tests that don't interact with the Webdriver server.</td>
    </tr>
    
    <tr>
      <td>`desiredCapabilities`</td>
      <td>object</td>
      <td></td>
      <td>The WebDriver capabilities when a new session will be created. You can specify browser name for instance along with other capabilities.
        <br>Example:<br><br>
  <code>"desiredCapabilities" : {<br>
  &nbsp;&nbsp;"browserName" : "firefox", <br>&nbsp;&nbsp;"acceptInsecureCerts" : true<br>}</code><br>
        You can view the complete list of capabilities <a href="https://w3c.github.io/webdriver/#capabilities" target="_blank">here</a>.
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
  
  Globals can also be defined in an external file. More on [External Globals](https://nightwatchjs.org/guide#external-globals).
       </td>
     </tr>
  
    <tr>
       <td>`persist_globals`</td>
       <td>boolean</td>
       <td>false</td>
       <td>Set this to `true` if you'd like to persist the same globals object between testsuite runs or have a (deep) copy of it per each testsuite.</td>
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
     <td>Set to true if connecting to a remote Grid server and terminating ssl (https). Set `port` to 443</td>
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
      <td>exclude</td>
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
    <td>filter</td>
    <td>string</td>
    <td></td>
    <td>Folder or file pattern to be used when loading the tests. Files that don't match this pattern will be ignored.<br>
      Example:<br><br>
       <code>"filter" : "tests/\*-smoke.js"</code><br>
    </td>
  </tr>    
  
  <tr>
     <td>skipgroup<br></td>
     <td>string</td>
     <td></td>
     <td>Skip a group of tests (a subfolder); can be a list of comma-separated values (no space).</td>
  </tr>
  
  <tr>
     <td>skiptags<br></td>
     <td>string</td>
     <td></td>
     <td>Skip tests by tag name; can be a list of comma-separated values (no space)</td>
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
