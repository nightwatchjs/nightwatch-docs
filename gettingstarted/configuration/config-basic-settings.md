## Base Settings
Below are the default settings that will be passed to the Nightwatch instance. 

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
    <td>`webdriver`</td>
    <td>object</td>
    <td></td>
    <td>An object containing **WebDriver** related configuration options. See the next section for details.</td>
  </tr>
  <tr>
     <td>`src_folders` <span class="optional">Optional</span></td>
     <td>string|array</td>
     <td>none</td>
     <td>
      An array of folders (excluding subfolders) where the tests are located.
      <br><br>
      If this is not specified, the test source must be passed inline as the second argument to the [test runner](http://nightwatchjs.org/guide#nightwatch-runner).
     </td>
  </tr>
  <tr>
    <td>`test_settings`</td>
    <td>object</td>
    <td></td>
    <td>This object contains all the test related options and can contain multiple environments. See below for details.</td>
  </tr>

  <tr>
    <td>`selenium` <span class="optional">Optional</span></td>
    <td>object</td>
    <td></td>
    <td>
    An object containing **Selenium Server** related configuration options. If Selenium is not used, `webdriver` options should be set instead.
    <br> 
    Starting with Nightwatch 1.0, Selenium is only required when testing against a Grid setup or a cloud testing service (such as <a href="https://saucelabs.com/" target="_blank">SauceLabs</a> or <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a>).
    </td>
  </tr>
  
   <tr>
     <td>output_folder <br><span class="optional">Optional</span></td>
     <td>string</td>
     <td>tests_output</td>
     <td>The location where the JUnit XML report files will be saved.</td>
   </tr>
   
   <tr>
     <td>custom_commands_path <span class="optional">Optional</span></td>
     <td>string|array</td>
     <td>none</td>
     <td>Location(s) where custom commands will be loaded from.</td>
   </tr>
   
   <tr>
     <td>custom_assertions_path <span class="optional">Optional</span></td>
     <td>string|array</td>
     <td>none</td>
     <td>Location(s) where custom assertions will be loaded from.</td>
   </tr>
   
   <tr>
    <td>page_objects_path <br><span class="optional">Optional</span></td>
    <td>string|array</td>
    <td>none</td>
    <td>Location(s) where page object files will be loaded from.</td>
  </tr>
  
   <tr>
     <td>globals_path <br><span class="optional">Optional</span></td>
     <td>string</td>
     <td>none</td>
     <td>Location of an external globals module which will be loaded and made available to the test as a property <code>globals</code> on the main client instance. <br><br>Globals can also be defined/overwritten inside a <code>test_settings</code> environment.</td>
   </tr>
   
   <tr>
     <td>live_output <br><span class="optional">Optional</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Whether or not to buffer the output in case of parallel running. See below for details.</td>
   </tr>
   
   <tr>
     <td>disable_colors <br><span class="optional">Optional</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Controls whether or not to disable coloring of the cli output globally.</td>
   </tr>
   
   <tr>
     <td>parallel_process_delay <br><span class="optional">Optional</span></td>
     <td>integer</td>
     <td>10</td>
     <td>Specifies the delay(in milliseconds) between starting the child processes when running in parallel mode.</td>
   </tr>
   
   <tr>
     <td>test_workers <br><span class="optional">Optional</span></td>
     <td>boolean|object</td>
     <td>false</td>
     <td>Whether or not to run individual test files in parallel. If set to `true`, runs the tests in parallel and determines the number of workers automatically. <br>If set to an object, can specify specify the number of workers as `"auto"` or a `number`.
       <br><br>Example: <code>"test_workers" : {"enabled" : true, "workers" : "auto"}</code></td>
   </tr>
   
   <tr>
    <td>test_runner <br><span class="optional">Optional</span></td>
    <td>string|object</td>
    <td>"default"</td>
    <td>Specifies which test runner to use when running the tests. Values can be either `default` (built-in nightwatch runner) or `mocha`.  
      <br><br>Example: <code>"test_runner" : {"type" : "mocha", "options" : {"ui" : "tdd"}}</code></td>
   </tr>
    
   <tr>
     <td>unit_tests_mode <br><span class="optional">Optional</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Controls whether to run tests in unit testing mode, which means the session will not automatically be created.</td>
   </tr>
       
  </tbody>
</table>

#### Environment specific settings
It is likely you will run your tests against multiple environments, and so Nightwatch makes it convenient to define environment specific test settings (under the `"test_settings"` dictionary). 
You can overwrite any test setting for each environment as needed. More on test environments under the [Nightwatch Runner](http://nightwatchjs.org/guide#test-environments) section. 

Nightwatch includes a sample configuration file, which contains multiple environments for various type of requirements. It is located inside the [Github repo](https://github.com/nightwatchjs/nightwatch/blob/master/bin/nightwatch.json):

Here's an extract. By default it is using Firefox as the target browser, but it includes configuration for Chrome and Selenium Server as well:

<pre><code class="language-javascript">
{
  "src_folders" : ["./examples/tests", "./examples/mocha", "./examples/unittests"],
  "custom_commands_path" : "./examples/custom-commands",
  "custom_assertions_path" : "./examples/custom-assertions",
  "page_objects_path" : "./examples/pages",
  "globals_path" : "./examples/globalsModule.js",
  
  "webdriver" : {
    "start_process": true
  },

  "test_settings" : {
    "default" : {
      "webdriver": {
        "server_path": "./bin/geckodriver-0.23",
        "port": 4444,
        "cli_args": [
          "--log", "debug"
        ]
      },
      "filter": ["./examples/tests"],
      "desiredCapabilities" : {
        "browserName" : "firefox",
        "acceptInsecureCerts" : true
      }
    },

    "chrome" : {
      "webdriver": {
        "port": 9515,
        "server_path": "./bin/chromedriver-2.32",
        "cli_args": [
          "--verbose"
        ]
      },
      
      "desiredCapabilities" : {
        "browserName" : "chrome",
        "loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "INFO"}
      }
    },
    
    "selenium_server" : {
      "selenium" : {
        "start_process": true,
        "host": "localhost",
        "server_path": "./bin/selenium-server-standalone-3.10.0.jar",
        "cli_args": {
          "webdriver.gecko.driver": "./bin/geckodriver-0.23",
          "webdriver.chrome.driver": "./bin/chromedriver-2.32"
        }
      },

      "desiredCapabilities" : {
        "browserName" : "firefox",
        "acceptSslCerts": true
      }
    }
  }
}</code></pre>
