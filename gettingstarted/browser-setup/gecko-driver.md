### GeckoDriver

#### Overview
[GeckoDriver](https://github.com/mozilla/geckodriver) is a standalone application used to interact with Gecko-based browsers, such as Firefox. It is written in Rust and maintained by Mozilla.

Starting with Firefox 48, GeckoDriver is the only way to automate Firefox, the legacy FirefoxDriver which used to be part of Selenium is no longer supported. Internally it translates the HTTP calls into [Marionette](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Marionette), Mozilla's automation protocol built into Firefox.

#### Download

Binaries are available for download on the [GeckoDriver Releases](https://github.com/mozilla/geckodriver/releases) page on GitHub, for various platforms.

Selenium 2.x users are advised to use version __v0.9__, whereas Selenium 3 users should use the latest version.

#### Usage

If you're using GeckoDriver through Selenium Server, simply set the cli argument `"webdriver.gecko.driver"` to point to the location of the binary file. E.g.:

<pre><code class="language-javascript">{
  <strong>"selenium"</strong> : {
    "start_process" : true,
    "server_path" : "./bin/selenium-server-standalone-3.{VERSION}.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.gecko.driver" : "./bin/geckodriver"
    }
  }
}
</code></pre>

GeckoDriver can also be used as a standalone application. Usage steps are documented on GitHub: https://github.com/mozilla/geckodriver#usage.
<br><br>
##### Command line usage

<pre><code>$ ./bin/geckodriver-0.10 -help
geckodriver 0.10.0

USAGE:
    geckodriver-0.10 [FLAGS] [OPTIONS]

FLAGS:
        --connect-existing    Connect to an existing Firefox instance
    -h, --help                Prints help information
        --no-e10s             Start Firefox without multiprocess support (e10s) enabled
    -V, --version             Prints version information
    -v                        Set the level of verbosity. Pass once for debug level logging and twice for trace level logging

OPTIONS:
    -b, --binary <BINARY>           Path to the Firefox binary, if no binary capability provided
        --log <LEVEL>               Set Gecko log level [values: fatal, error, warn, info, config, debug, trace]
        --marionette-port <PORT>    Port to use to connect to gecko (default: random free port)
        --host <HOST>               Host ip to use for WebDriver server (default: 127.0.0.1)
    -p, --port <PORT>               Port to use for WebDriver server (default: 4444)
</code></pre>

#### Firefox Capabilities
GeckoDriver supports a capability named `firefoxOptions` which takes Firefox-specific preference values. Details are available on the GeckoDriver GitHub page: https://github.com/mozilla/geckodriver#firefox-capabilities.

#### Firefox Profile
Specifying the firefox profile can be done by setting the `profile` property in the `firefoxOptions` dictionary, as detailed above. This can be the base64-encoded zip of a profile directory and it may be used to install extensions or custom certificates.

#### Implementation Status
GeckoDriver is not yet feature complete, which means it does not yet offer full conformance with the WebDriver standard or complete compatibility with Selenium. Implementation status can be tracked on the [Marionette MDN page](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Marionette/WebDriver/status).
