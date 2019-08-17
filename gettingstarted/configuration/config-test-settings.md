## Test Settings

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

### Test Globals
A useful concept that Nightwatch provides is test globals. In its most simple form, this is a dictionary of name-value pairs which is defined in your `nightwatch.json` configuration file.
Like the `launch_url` property, this is made available directly on the Nightwatch api which is passed to the tests. It is also dependent on the environment used, having the ability to overwrite specific globals per environment.

If we still pass the `--env integration` option to the runner, then our globals object will look like below:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test' : function (browser) {

    console.log(browser.globals);
    // {
    //   "myGlobalVar" : "some value",
    //   "otherGlobal" : "some other value"
    // }

  }
};</code></pre>
</div>

<br>

<p class="alert alert-info">By default, a deep object copy will be created for each test suite run. If you'd like to maintain the same object throughout the entire tests run, set the `persist_globals` option to `true`, as detailed below.</p>

#### External Test Globals
Test globals can also be defined in an external file, specified in the `globals_path` property. 

The external globals file can also contain global test hooks, a custom reporter and other test specific settings. More on [External Globals](https://nightwatchjs.org/guide#external-globals). 

### Full list of settings

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
    <td>desiredCapabilities</td>
    <td>object</td>
    <td></td>
    <td>The WebDriver when a new session will be created. You can specify browser name for instance along with other capabilities.
      <br>Example:<br><br>
<code>"desiredCapabilities" : {<br>
&nbsp;&nbsp;"browserName" : "firefox", <br>&nbsp;&nbsp;"acceptSslCerts" : true<br>}</code><br>
      You can view the complete list of capabilities <a href="https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities" target="_blank">here</a>.
    </td>
  </tr>
        
   <tr>
     <td>launch_url</td>
     <td>string</td>
     <td>none</td>
     <td>A url which can be used later in the tests as the main url to load. Can be useful if your tests will run on different environments, each one with a different url.</td>
   </tr>
      
   <tr>
     <td>start_session</td>
     <td>boolean</td>
     <td>true</td>
     <td>Whether or not to automatically start the WebDriver session. This will typically be set to `false` when running unit/integration tests that don't interact with the Selenium server.</td>
   </tr>
   
   <tr>
    <td>unit_tests_mode</td>
    <td>boolean</td>
    <td>false</td>
    <td>
    Run Nightwatch in unit testing mode, that is no WebDriver session will be created and the tests will not receive the `browser` api object. 
    
    More on [writing unit tests](https://new.nightwatchjs.org/guide/#unit-testing) in Nightwatch.
    </td>
   </tr>
    
   <tr>
     <td>screenshots</td>
     <td>object</td>
     <td>none</td>
     <td>Selenium generates screenshots when command errors occur. With <code>on_failure</code> set to true, also generates screenshots for failing or erroring tests. These are saved on the disk. <br><br>Since `v0.7.5` you can disable screenshots for command errors by setting `"on_error"` to `false`.
    <br><br>Example:<br><br><code>"screenshots" : {<br>&nbsp;&nbsp;"enabled" : true,<br>&nbsp;&nbsp;"on_failure" : true,<br>&nbsp;&nbsp;"on_error" : false,<br>&nbsp;&nbsp;"path" : ""<br>}</code></td>
   </tr>

   <tr>
     <td>globals</td>
     <td>object</td>
     <td></td>
     <td>An object which will be made available within the test and can be overwritten per environment. Example:<br><br>
<code>"globals" : {<br>&nbsp;&nbsp;"myGlobal" : "some_global"<br>}</code>

Globals can also be defined in an external file. More on [External Globals](https://nightwatchjs.org/guide#external-globals).
     </td>
   </tr>

  <tr>
     <td>persist_globals</td>
     <td>boolean</td>
     <td>false</td>
     <td>Set this to `true` if you'd like to persist the same globals object between testsuite runs or have a (deep) copy of it per each testsuite.</td>
  </tr>
  
   <tr>
     <td>cli_args</td>
     <td>object</td>
     <td>none</td>
     <td>Same as WebDriver/Selenium settings `cli_args`. You can override the global `cli_args` on a per-environment basis.</td>
   </tr>

   <tr>
     <td>end_session_on_fail</td>
     <td>boolean</td>
     <td>true</td>
     <td>End the session automatically when the test is being terminated, usually after a failed assertion.</td>
   </tr>

  <tr>
     <td>skip_testcases_on_fail</td>
     <td>boolean</td>
     <td>true</td>
     <td>Skip the remaining testcases (or test steps) from the same test suite (i.e. test file), when one testcase fails.</td>
  </tr>

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
      <td>log_screenshot_data</td>
      <td>boolean</td>
      <td>false</td>
      <td>Do not show the Base64 image data in the (verbose) log when taking screenshots.</td>
   </tr>

  <tr>
     <td>silent</td>
     <td>boolean</td>
     <td>true</td>
     <td>Whether to show extended Selenium command logs.</td>
   </tr>
   
   <tr>
     <td>output</td>
     <td>boolean</td>
     <td>true</td>
     <td>Use to disable terminal output completely.</td>
   </tr>
   <tr>
     <td>disable_colors</td>
     <td>boolean</td>
     <td>false</td>
     <td>Use to disable colored output in the terminal.</td>
   </tr>
   
   <tr>
     <td>use_xpath</td>
     <td>boolean</td>
     <td>false</td>
     <td>Use xpath as the default locator strategy</td>
   </tr>
   
  <tr>
     <td>output_folder</td>
     <td>string|boolean</td>
     <td></td>
     <td>Define the location where the JUnit XML report files will be saved. This will overwrite any value defined in the Basic Settings section. If you'd like to disable the reports completely inside a specific environment, set this to `false`.</td>
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
  
  <tr>
     <td>sync_test_names<br></td>
     <td>boolean</td>
     <td>true</td>
     <td>A `name` property will be added to the `desiredCapabilities` containing the test suite name when this is enabled. It is useful when using cloud testing services.</td>
  </tr>
  
  <tr>
     <td>detailed_output</td>
     <td>boolean</td>
     <td>true</td>
     <td>By default detailed assertion output is displayed while the test is running. Set this to `false` if you'd like to only see the test case name displayed and pass/fail status. This is especially useful when running tests in parallel.</td>
  </tr>

   <tr>
     <td>selenium_host</td>
     <td>string</td>
     <td>localhost</td>
     <td>The hostname/IP on which the Selenium Server is accepting connections.</td>
   </tr>
   
   <tr>
     <td>selenium_port</td>
     <td>integer</td>
     <td>4444</td>
     <td>The port number on which the Selenium Server is accepting connections.</td>
   </tr>
   
  </tbody>
</table>
