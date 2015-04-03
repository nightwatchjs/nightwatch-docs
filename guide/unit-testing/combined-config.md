### Using a Combined Configuration

Below it's an example of how you can combine end-to-end tests and unit tests in the same `nightwatch.json` configuration file.
Notice the usage of `exclude` and `filter` properties.

An empty `exclude` means we want to reset its value and rely only on `filter`.

<pre><code class="language-javascript">{
  <strong>"src_folders"</strong> : ["./examples/tests", "./examples/unittests"],
  <strong>"output_folder"</strong> : "./examples/reports",

  <strong>"selenium"</strong> : {
    "start_process" : true,
    "server_path" : "./bin/selenium-server-standalone.jar",
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
      },
      "exclude" : "./examples/unittests/*"
    },

    "unittests" : {
      "selenium" : {
        "start_process" : false,
        "start_session" : false
      },
      "filter" : "./examples/unittests/*",
      "exclude" : ""
    }
  }
}</code></pre>