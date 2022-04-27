## ChromeDriver

#### Overview
ChromeDriver is a standalone server which implements the [JSON Wire Protocol](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol) for Chromium, however it is currently in the process of transitioning to the W3C WebDriver spec.

It is available for Chrome on Android and Chrome on Desktop (Mac, Linux, Windows and ChromeOS).


#### Download

ChromeDriver can be downloaded from the [ChromeDriver Downloads](https://chromedriver.chromium.org/downloads) page. Or you can use the [chromedriver](https://www.npmjs.com/package/chromedriver) NPM package as a dependency in your project:

<pre><code class="language-bash">npm install chromedriver --save-dev</code></pre>

#### Standalone Usage

Nightwatch can manage the ChromeDriver service automatically, as with other WebDriver services, such as GeckoDriver. To use ChromeDriver directly, configure Nightwatch as below:

<pre><code class="language-javascript">{ 
  <strong>"webdriver"</strong>: {
    "server_path": "node_modules/.bin/chromedriver",
    "cli_args": [
      "--verbose"
    ],
    "port": 9515
  },
  
  <strong>"test_settings"</strong> : {
    "default" : {
      "desiredCapabilities" : {
        "browserName" : "chrome"
      }
    }
  }
}
</code></pre>

#### Selenium Server Usage

If you're using ChromeDriver through Selenium Server, simply set the cli argument `"webdriver.chrome.driver"` to point to the location of the binary file. E.g.:

<pre><code class="language-javascript">{
  <strong>"selenium"</strong> : {
    "start_process" : true,
    "server_path" : "./bin/selenium-server-standalone-3.{VERSION}.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./bin/chromedriver"
    }
  }
}</code></pre>

<p></p>

#### ChromeOptions
You can specify Chrome options or switches using the `chromeOptions` dictionary, under the `desiredCapabilities`. Refer to the [ChromeDriver website](https://sites.google.com/chromium.org/driver/capabilities) for a fill list of supported capabilities and options.

##### Example of detailed config
<pre><code class="language-javascript">{ 
  <strong>"test_settings"</strong> : {
    "default" : {
      "desiredCapabilities" : {
        "browserName" : "chrome",
        "goog:chromeOptions": {
          "w3c": true,
          "args" : ["--no-sandbox"]
        },
        "loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "INFO"}
      }
    }
  }
}
</code></pre>

##### Command line usage

<pre><code>$ ./bin/chromedriver -h
Usage: ./bin/chromedriver [OPTIONS]

Options
  --port=PORT                     port to listen on
  --adb-port=PORT                 adb server port
  --log-path=FILE                 write server log to file instead of stderr, increases log level to INFO
  --verbose                       log verbosely
  --version                       print the version number and exit
  --silent                        log nothing
  --url-base                      base URL path prefix for commands, e.g. wd/url
  --port-server                   address of server to contact for reserving a port
  --whitelisted-ips               comma-separated whitelist of remote IPv4 addresses which are allowed to connect to ChromeDriver
</code></pre>
