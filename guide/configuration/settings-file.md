The test runner expects a configuration file to be passed, using by default a `nightwatch.json` file from the current directory, if present. Let's create one in the project's root folder.

The `nightwatch.json` file will look like this:

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
        "acceptSslCerts": true,
		"loggingPrefs": {
		 "browser":"ALL"
		}
		"chromeOptions": {
		 "args":["--incognito"]
		}
      }
    }
  }
}</code></pre>
