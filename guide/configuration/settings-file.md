The test runner expects a configuration file to be passed, using by default a`nightwatch.json` file from the current directory, if present. So let's create one in the same folder as the previous`nightwatch` runner file.

The `nightwatch.json` file will look like this:

<pre><code class="language-javascript">{
  <strong>"src_folders"</strong> : ["examples/tests"],
  <strong>"output_folder"</strong> : "examples/reports",
  <strong>"custom_commands_path"</strong> : "",
  <strong>"custom_assertions_path"</strong> : "",
  <strong>"globals_path"</strong> : "",

  <strong>"selenium"</strong> : {
    "start_process" : false,
    "server_path" : "",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.ie.driver" : ""
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
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}</code></pre>