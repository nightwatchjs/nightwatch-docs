### Integration with BrowserStack

When you want to perform web testing on multiple browsers and operating systems, it can be quite complicated to maintain machines for each of the target environments. BrowserStack provides "remote web browsers as a service", making it easy to do this sort of matrix testing without having to maintain the multiple browser installations yourself.

#### From Nightwatch

You can use the BrowserStack infrastructure to run your tests directly from NightWatch. This is done by configuring `nightwatch.json`.

<div class="sample-test"> 
<pre><code class="language-javascript">
{
  ...

  "selenium" : {
    "start_process" : false,
    "host" : "hub.browserstack.com",
    "port" : 80
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://hub.browserstack.com",
      "selenium_port"  : 80,
      "selenium_host"  : "hub.browserstack.com",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "build": "Sample tests for Nightwatch",
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "browserstack.user": "BROWSERSTACK_USERNAME",
        "browserstack.key": "BROWSERSTACK_ACCESS_KEY"
      }
    }
  }
  ...
}
</code></pre>
</div>

You need to replace BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY with yur username and access key. 
Custom options can also be specified for BrowserStack in desiredCapabilties. A complete list of BrowserStack capabilities that are supported can be found [here](http://www.browserstack.com/automate/capabilities).

Also, if you can also run parallel tests on Browserstack.

<div class="sample-test">
<pre><code class="language-javascript">
{
  ...
   "selenium" : {
    "start_process" : false,
    "host" : "hub.browserstack.com",
    "port" : 80
  },

  "test_settings" : {
    "browserstack_firefox" : {
      "launch_url" : "http://hub.browserstack.com",
      "selenium_port"  : 80,
      "selenium_host"  : "hub.browserstack.com",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "build": "Sample tests for Nightwatch",
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "browserstack.user": "BROWSERSTACK_USERNAME",
        "browserstack.key": "BROWSERSTACK_ACCESS_KEY"
      }
    },
    "browserstack_chrome" : {
      "launch_url" : "http://hub.browserstack.com",
      "selenium_port"  : 80,
      "selenium_host"  : "hub.browserstack.com",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "build": "Sample tests for Nightwatch",
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "browserstack.user": "BROWSERSTACK_USERNAME",
        "browserstack.key": "BROWSERSTACK_ACCESS_KEY"
      }
    },
    "browserstack_safari" : {
      "launch_url" : "http://hub.browserstack.com",
      "selenium_port"  : 80,
      "selenium_host"  : "hub.browserstack.com",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "build": "Sample tests for Nightwatch",
        "browserName": "safari",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "browserstack.user": "BROWSERSTACK_USERNAME",
        "browserstack.key": "BROWSERSTACK_ACCESS_KEY"
      }
    },
    "browserstack_ie" : {
      "launch_url" : "http://hub.browserstack.com",
      "selenium_port"  : 80,
      "selenium_host"  : "hub.browserstack.com",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "build": "Sample tests for Nightwatch",
        "browserName": "ie",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "browserstack.user": "BROWSERSTACK_USERNAME",
        "browserstack.key": "BROWSERSTACK_ACCESS_KEY"
      }
    }
  }
  ...
}
</code></pre>
</div>

To run the parallel tests, use the command:

<pre><code class="language-bash">$ nightwatch -e browserstack_firefox,browserstack_chrome,browserstack_safari,browserstack_ie</code></pre>

#### Example
You can check out [BrowserStack's repository](https://github.com/browserstack/nightwatch-browserstack) for a sample test. 