### Using a Combined Configuration

Below it's an example of how you can combine end-to-end tests and unit tests in the same `nightwatch.json` configuration file.
Notice the usage of `exclude` and `filter` properties.

An empty `exclude` means we want to reset its value and rely only on `filter`.

<pre><code class="language-javascript">{
  <strong>"src_folders"</strong> : ["./examples/tests", "./examples/unittests"],
  <strong>"output_folder"</strong> : "./examples/reports",

  
  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  <strong>"test_settings"</strong> : {
    "default" : {
      "launch_url" : "http://localhost",
      "desiredCapabilities": {
        "browserName": "chrome"
      },
      "exclude" : "./examples/unittests/*"
    },

    "unittests" : {
      "unit_tests_mode" : true,
      "filter" : "./examples/unittests/*",
      "exclude" : ""
    }
  }
}</code></pre>