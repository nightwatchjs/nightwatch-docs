The test runner expects a configuration file to be passed, using by default a `nightwatch.json` file from the current directory, if present. A `nightwatch.conf.js` file will also be loaded by default, if found.

Let's create the `nightwatch.json` in the project's root folder and add this inside:

<pre><code class="language-javascript">{
  <strong>"src_folders"</strong> : ["tests"],
  <strong>"output_folder"</strong> : "reports",
  <strong>"custom_commands_path"</strong> : "",
  <strong>"custom_assertions_path"</strong> : "",
  <strong>"page_objects_path"</strong> : "",
  <strong>"globals_path"</strong> : "",

  <strong>"selenium"</strong> : {
    "start_process" : false,
    "server_path" : "",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : ""
    }
  },

  <strong>"test_settings"</strong> : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}</code></pre>

<br>
Using both configuration files is also possible, with `nightwatch.conf.js` always taking precedence if both are found.

#### Example

<pre><code class="language-javascript">
module.exports = (function(settings) {
  settings.test_workers = false;
  return settings;
})(require('./nightwatch.json'));
</code></pre>
