### ChromeDriver

#### Overview
[ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/) is a standalone server which implements the W3C WebDriver wire protocol for Chromium. ChromeDriver is available for Chrome on Android and Chrome on Desktop (Mac, Linux, Windows and ChromeOS).  

#### Download

Binaries are available for download on the [ChromeDriver Downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads) page, for various platforms.

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




#### Standalone Usage

If you're only running your tests against Chrome, running ChromeDriver standalone is easier and slightly faster. Also there is no dependency on Java.

This requires a bit more configuration:<br><br>

##### 1) First, disable Selenium Server, if applicable:

<pre><code class="language-javascript">{
  <strong>"selenium"</strong> : {
    "start_process" : false
  }
}
</code></pre>


##### 2) Configure the port and default path prefix.

ChromeDriver runs by default on port 9515. We also need to clear the `default_path_prefix`, as it is set by default to `/wd/hub`, which is what selenium is using.

<pre><code class="language-javascript">{
  <strong>"test_settings"</strong> : {
    "default" : {
      "selenium_port"  : 9515,
      "selenium_host"  : "localhost",
      "default_path_prefix" : "",

      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions" : {
          "args" : ["--no-sandbox"]
        },
        "acceptSslCerts": true
      }
    }
  }
}
</code></pre>

##### 3) Start the ChromeDriver server

The easiest way to manage the ChromeDriver process is by using the `chromedriver` [NPM package](https://www.npmjs.com/package/chromedriver), which is a third-party wrapper against the binary. This will abstract the downloading of the chromedriver binary and will make it easy to manage starting and stopping of the process.

You can add this to your `external globals` file, like so:

<pre><code class="language-javascript">
var chromedriver = require('chromedriver');
module.exports = {
  before : function(done) {
    chromedriver.start();

    done();
  },

  after : function(done) {
    chromedriver.stop();

    done();
  }
};  
</code></pre>

#### Using a fixed ChromeDriver version

In some situations you may need to use a specific version of ChromeDriver. For instance, the CI server runs an older version of Chrome. Then you will need an older version of ChromeDriver.

Here's what your globals file might look like:
<br>
<pre><code class="language-javascript">
var chromedriver = require('chromedriver');
var path = require('path');
var driverInstanceCI;

function isRunningInCI() {
  return this.test_settings.globals.integration;
}

function startChromeDriver() {
  if (isRunningInCI.call(this)) {
    var location = path.join(__dirname, '../bin/chromedriver-linux64-2.17');
    driverInstanceCI = require('child_process').execFile(location, []);
    return;
  }

  chromedriver.start();
}

function stopChromeDriver() {
  if (isRunningInCI.call(this)) {
    driverInstanceCI && driverInstanceCI.kill();
    return;
  }

  chromedriver.stop();
}

module.exports = {
  'ci-server' : {
    integration : true
  },

  before : function(done) {
    startChromeDriver.call(this);

    done();
  },

  after : function(done) {
    stopChromeDriver.call(this);

    done();
  }
};</code></pre>
<br><br>

Run your tests then with (on the CI server):

<pre><code class="language-bash">$ ./node_modules/.bin/nightwatch --env ci-server</code></pre>

#### ChromeOptions
You can specify Chrome options or switches using the `chromeOptions` dictionary, under the `desiredCapabilities`. Refer to the [ChromeDriver website](https://sites.google.com/a/chromium.org/chromedriver/capabilities#TOC-chromeOptions-object) for a fill list of supported capabilities and options.

#### Command line usage

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
