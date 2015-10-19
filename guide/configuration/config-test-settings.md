### Test settings

Below are a number of options that will be passed to the Nightwatch instance. You can specify multiple groups of options so you could have different values per environment:

<pre><code class="language-bash">{
  ...
  <strong>"test_settings"</strong> : {
    "default" : {
      ...
    },
    "integration" : {
      ...
    }
  }
}</code></pre>

<p class="alert alert-info">A "default" environment is required. All the other environments are derived from default and their settings can be overridden as needed.</p>

The key of the settings group can be passed then to the runner as the `--env` argument to use the specified settings, like so:

<pre><code class="language-bash">$ nightwatch --env integration</code></pre>

This can be useful if you need to have different settings for your local machine and the Continuous Integration server.

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
     <td>proxy</td>
     <td>string</td>
     <td>none</td>
     <td>Proxy requests to the selenium server. http, https, socks(v5), socks5, sock4, and pac are accepted. Uses <a href="https://github.com/TooTallNate/node-proxy-agent" target="_blank">node-proxy-agent</a>.<br><br>Example: <code>http://user:pass@host:port</code></td>
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
     <td>desiredCapabilities</td>
     <td>object</td>
     <td></td>
     <td>An object which will be passed to the Selenium WebDriver when a new session will be created. You can specify browser name for instance along with other capabilities.
       <br>Example:<br><br>
<code>"desiredCapabilities" : {<br>
&nbsp;&nbsp;"browserName" : "firefox", <br>&nbsp;&nbsp;"acceptSslCerts" : true<br>}</code><br>
       You can view the complete list of capabilities <a href="https://code.google.com/p/selenium/wiki/DesiredCapabilities" target="_blank">here</a>.
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
     <td>Folder or file pattern to be used when loading the tests. Files that don't match this patter will be ignored.<br>
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
     <td>Skip the rest of testcases (if any) when one testcase fails..</td>
  </tr>

  </tbody>
</table>
