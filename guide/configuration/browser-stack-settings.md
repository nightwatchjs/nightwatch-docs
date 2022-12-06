---
title: BrowserStack Settings
description: Learn how to configure BrowserStack settings in Nightwatch
---

<div class="page-header"><h1>BrowserStack Settings</h1></div>

[BrowserStack][1] is one of the most popular cloud testing platforms. Using it with Nightwatch is very straightforward and there is configuration in the auto-generated `nightwatch.conf.js` file.

Once you have an account, you can set the following environment variables. [Dotenv][2] files are also supported by Nightwatch.
- `BROWSERSTACK_USERNAME`
- `BROWSERSTACK_ACCESS_KEY`

Remember to also enable HTTP keepalive for improved network performance.

Nightwatch supports these integration features out-of-the-box with BrowserStack:
- setting test names on BrowserStack
- marking tests as "passed" or "failed"
- displaying the link to BrowserStack Build page at the end of the test run.

### Example Configuration

Use this example configuration to try running your tests on BrowserStack.

<div class="sample-test"><i>nightwatch.conf.js</i>
<pre class="line-numbers"><code class="language-javascript">module.exports = {
  src_folders: [],

  webdriver: {
    keep_alive: true,
    timeout_options: {
      timeout: 60000,
      retry_attempts: 3
    }
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack: {
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443
      },
    
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'bstack:options' : {
          local: 'false',
          userName: '${BROWSERSTACK_USERNAME}',
          accessKey: '${BROWSERSTACK_ACCESS_KEY}',
        }
      }
    },
  
    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: false
        }
      }
    },
  
    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
  
    'browserstack.ie': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'IE',
        browserVersion: '11.0',
        'bstack:options' : {
          os: 'Windows',
          osVersion: '10',
          local: 'false',
          seleniumVersion: '3.5.2',
          resolution: '1366x768'
        }
      }
    }
  }
}</code></pre></div>

### Integrating BrowserStack Local

BrowserStack Local is a feature that lets you test your localhost, staging or other private websites not accessible publicly. In order to use this feature, you need to download the [browserstack-local][4] package and run it with your test suite.

Note: BrowserStack Local needs to be instantiated only once at the beginning of your build and stopped once all the tests execution has completed.

You can refer to this [sample implementation][3] maintained by the BrowserStack team.


### Connecting to BrowserStack via a proxy server

You can specify proxy settings in Nightwatch by adding the `proxy` key in your `nightwatch.conf.js`

<div class="sample-test"><i>nightwatch.conf.js</i>
<pre class="line-numbers"><code class="language-javascript">
  test_settings: {
    default: {
      desiredCapabilities: {
        // Your capabilities
      },
      proxy: {
        "host": "",     // "127.0.0.1"
        "port": "",     // "8081"
        "protocol": ""  // "http"
      }
    }
  }
</code></pre></div>

[1]:	https://browserstack.com
[2]:	https://www.npmjs.com/package/dotenv
[3]:    https://github.com/browserstack/nightwatch-browserstack/blob/master/scripts/local.runner.js
[4]:    https://www.npmjs.com/package/browserstack-local

### Recommended content
- [Reference > All configuration settings](https://nightwatchjs.org/guide/reference/settings.html)
- [Reference > Configuration defaults](https://nightwatchjs.org/guide/reference/defaults.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/configuration/selenium-settings.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Selenium settings</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/configuration/aws-devicefarm-settings.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Configure AWS Device Farm</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
