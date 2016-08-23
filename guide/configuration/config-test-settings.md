### Test settings

Below are a number of settings that will be passed to the Nightwatch instance. You can define multiple sections (environments) of test settings so you could overwrite specific values per environment.

<p class="alert alert-info">A "default" environment is required. All the other environments are inheriting from default and can overwrite settings as needed.</p>


<pre><code class="language-bash">{
  ...
  <strong>"test_settings"</strong> : {
    "default" : {
      "launch_url" : "http://localhost",
      "globals" : {
        "myGlobalVar" : "some value",
        "otherGlobal" : "some other value"
      }
    },

    "integration" : {
      "launch_url" : "http://staging.host",
      "globals" : {
        "myGlobalVar" : "other value"
      }
    }
  }
}</code></pre>

The key of the settings group can be passed then to the runner as the `--env` argument to use the specified settings, like so:

<pre><code class="language-bash">$ nightwatch --env integration</code></pre>

This can be useful if you need to have different settings for your local machine and the Continuous Integration server.

#### The `launch_url` property
This property will be made available to the main Nightwatch api which is used in the tests. Its value depends on which environment is used.

If you run your tests as in the example above (with `--env integration`) `launch_url` will be set to `http://staging.host`, as per the configuration. Otherwise it will have the value defined in the `default` environment (i.e. `http://localhost`).

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Demo test' : function (browser) {
    browser
      .url(browser.launchUrl)
      // ...
      .end();
  }
};</code></pre>
</div>

#### Test globals
A very useful concept that Nightwatch provides is test globals. In its most simple form, this is a dictionary of name-value pairs which is defined in your `nightwatch.json` configuration file.
Like the `launch_url` property, this is made available directly on the Nightwatch api which is passed to the tests. It is also dependent on the environment used, having the ability to overwrite specific globals per environment.

If we still pass the `--env integration` option to the runner, then our globals object will look like below:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
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

#### Full list of settings

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
     <td>launch_url</td>
     <td>string</td>
     <td>none</td>
     <td>A url which can be used later in the tests as the main url to load. Can be useful if your tests will run on different environments, each one with a different url.</td>
   </tr>
   <tr>
     <td>selenium_host</td>
     <td>string</td>
     <td>localhost</td>
     <td>The hostname/IP on which the selenium server is accepting connections.</td>
   </tr>
   <tr>
     <td>selenium_port</td>
     <td>integer</td>
     <td>4444</td>
     <td>The port number on which the selenium server is accepting connections.</td>
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
     <td>disable_colors<br><span class="optional">since v0.4.13</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Use to disable colored output in the terminal.</td>
   </tr>
   <tr>
     <td>firefox_profile<br><span class="optional">deprecated</span></td>
     <td>string|boolean</td>
     <td>none</td>
     <td>
       <i>This options has been deprecated in favor of the <code>cli_args</code> object on the <code>selenium</code> settings object.</i>
     </td>
   </tr>
   <tr>
     <td>chrome_driver<br><span class="optional">deprecated</span></td>
     <td>string</td>
     <td>none</td>
     <td>
       <i>This options has been deprecated in favor of the <code>cli_args</code> object on the <code>selenium</code> settings object.</i>
     </td>
   </tr>
   <tr>
     <td>ie_driver<br><span class="optional">deprecated</span></td>
     <td>string</td>
     <td>none</td>
     <td>
       <i>This options has been deprecated in favor of the <code>cli_args</code> object on the <code>selenium</code> settings object.</i>
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
     <td>username</td>
     <td>string</td>
     <td>none</td>
     <td>In case the selenium server requires credentials this username will be used to compute the <code>Authorization</code> header. <br><br>The value can be also an environment variable, in which case it will look like this:<br>
       <code>"username" : "${SAUCE_USERNAME}"</code>
     </td>
   </tr>
   <tr>
     <td>access_key</td>
     <td>string</td>
     <td>none</td>
     <td>This field will be used together with <code>username</code> to compute the <code>Authorization</code> header. <br><br>Like <code>username</code>, the value can be also an environment variable:<br>
       <code>"access_key" : "${SAUCE_ACCESS_KEY}"</code>
     </td>
   </tr>

  <tr>
     <td>proxy<br><span class="optional">since v0.8.6</span></td>
     <td>string</td>
     <td>none</td>
     <td>Proxy requests to the selenium server. http, https, socks(v5), socks5, sock4, and pac are accepted. Uses <a href="https://github.com/TooTallNate/node-proxy-agent" target="_blank">node-proxy-agent</a>.<br><br>Example: <code>http://user:pass@host:port</code></td>
   </tr>

   <tr>
     <td>desiredCapabilities</td>
     <td>object</td>
     <td></td>
     <td>An object which will be passed to the Selenium WebDriver when a new session will be created. You can specify browser name for instance along with other capabilities.
       <br>Example:<br><br>
<code>"desiredCapabilities" : {<br>
&nbsp;&nbsp;"browserName" : "firefox", <br>&nbsp;&nbsp;"acceptSslCerts" : true<br>}</code><br>
       You can view the complete list of capabilities <a href="https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities" target="_blank">here</a>.
     </td>
   </tr>

   <tr>
     <td>globals<br><span class="optional">since v0.4.8</span></td>
     <td>object</td>
     <td></td>
     <td>An object which will be made available within the test and can be overwritten per environment. Example:<br><br>
<code>"globals" : {<br>&nbsp;&nbsp;"myGlobal" : "some_global"<br>}</code>
     </td>
   </tr>

   <tr>
     <td>exclude<br><span class="optional">since v0.4.9</span></td>
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
     <td>filter<br><span class="optional">since v0.5.1</span></td>
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
     <td>use_xpath<br><span class="optional">since v0.5.1</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Use xpath as the default locator strategy</td>
   </tr>

   <tr>
     <td>cli_args<br><span class="optional">since v0.6.1</span></td>
     <td>object</td>
     <td>none</td>
     <td>Same as Selenium settings `cli_args`. You can override the global `cli_args` on a per-environment basis.</td>
   </tr>

   <tr>
     <td>end_session_on_fail<br><span class="optional">since v0.6.5</span></td>
     <td>boolean</td>
     <td>true</td>
     <td>End the session automatically when the test is being terminated, usually after a failed assertion.</td>
  </tr>

  <tr>
     <td>skip_testcases_on_fail<br><span class="optional">since v0.7.0</span></td>
     <td>boolean</td>
     <td>true</td>
     <td>Skip the remaining testcases (or test steps) from the same test suite (i.e. test file), when one testcase fails.</td>
  </tr>

  <tr>
     <td>output_folder<br><span class="optional">since v0.8.18</span></td>
     <td>string|boolean</td>
     <td></td>
     <td>Define the location where the JUnit XML report files will be saved. This will overwrite any value defined in the Basic Settings section. If you'd like to disable the reports completely inside a specific environment, set this to `false`.</td>
  </tr>

  <tr>
     <td>persist_globals<br><span class="optional">since v0.8.18</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Set this to `true` if you'd like to persist the same globals object between testsuite runs or have a (deep) copy of it per each testsuite.</td>
  </tr>

  <tr>
     <td>compatible_testcase_support<br><span class="optional">since v0.9.0</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Applies to unit tests. When set to `true` this allows for tests to be written in the standard Exports interface which is interchangeable with the Mocha framework. Prior unit tests interface support is deprecated and this will become the default in future releases.</td>
  </tr>

  <tr>
     <td>detailed_output<br><span class="optional">since v0.9.0</span></td>
     <td>boolean</td>
     <td>true</td>
     <td>By default detailed assertion output is displayed while the test is running. Set this to `false` if you'd like to only see the test case name displayed and pass/fail status. This is especially useful when running tests in parallel.</td>
  </tr>

  </tbody>
</table>
