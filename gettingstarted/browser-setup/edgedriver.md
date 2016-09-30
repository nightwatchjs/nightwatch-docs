### Microsoft WebDriver

#### Overview
[Microsoft WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) is a standalone server which implements the W3C WebDriver wire protocol for the Edge browser. It is supported by Windows 10 and onwards.

#### Download

Binaries are available for download on the [Microsoft WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) homepage.

#### Selenium Server Usage

If you're using Microsoft WebDriver through Selenium Server, simply set the cli argument `"webdriver.edge.driver"` to point to the location of the binary file. E.g.:

<pre><code class="language-javascript">{
  <strong>"selenium"</strong> : {
    "start_process" : true,
    "server_path" : "bin/selenium-server-standalone-3.{VERSION}.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "bin/MicrosoftWebDriver.exe"
    }
  },
  <strong>"test_settings"</strong> : {
    "default" : {
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",

      "desiredCapabilities": {
        "browserName": "MicrosoftEdge",
        "acceptSslCerts": true
      }
    }
  }
}</code></pre>




#### Standalone Usage

If you're only running your tests against Edge, running the EdgeDriver standalone can be slightly faster. Also there is no dependency on Java.

This requires a bit more configuration and you will need to start/stop the EdgeDriver:<br><br>

##### 1) First, disable Selenium Server, if applicable:

<pre><code class="language-javascript">{
  <strong>"selenium"</strong> : {
    "start_process" : false
  }
}
</code></pre>


##### 2) Configure the port and default path prefix.

Microsoft WebDriver runs by default on port 9515. We also need to clear the `default_path_prefix`, as it is set by default to `/wd/hub`, which is what selenium is using.

<pre><code class="language-javascript">{
  <strong>"test_settings"</strong> : {
    "default" : {
      "selenium_port"  : 17556,
      "selenium_host"  : "localhost",
      "default_path_prefix" : "",

      "desiredCapabilities": {
        "browserName": "MicrosoftEdge",
        "acceptSslCerts": true
      }
    }
  }
}
</code></pre>

##### 3) Start the MicrosoftWebDriver server
From the Windows CMD prompt, simply CD to the folder where the `MicrosoftWebDriver.exe` binary is located and run:

<pre><code>C:\nightwatch\bin>MicrosoftWebDriver.exe
[13:44:49.515] - Listening on http://localhost:17556/
</code></pre>


Full command line usage:

<pre><code>C:\nightwatch\bin>MicrosoftWebDriver.exe -h
Usage:
 MicrosoftWebDriver.exe --host=<HostName> --port=<PortNumber> --package=<Package> --verbose</code></pre>

#### Implementation Status
EdgeDriver is not yet feature complete, which means it does not yet offer full conformance with the WebDriver standard or complete compatibility with Selenium. Implementation status can be tracked on the [Microsoft WebDriver homepage](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/webdriver-commands/).
