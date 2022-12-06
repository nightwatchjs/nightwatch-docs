---
title: Running Nightwatch on remote machines or cloud providers
description: Learn how to run Nightwatch tests on remote Selenium grids or Cloud providers such as BrowserStack and Sauce Labs
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h1>Run a Nightwatch test with a cloud provider</h1></div>

Nightwatch can be configured to run on remote Selenium grids or cloud providers such as BrowserStack and Sauce Labs.

### Running on BrowserStack

If you are installing Nightwatch using the CLI utility and you select to run on BrowserStack remote machine, it will auto-generate the BrowserStack settings block in the `nightwatch.conf.js` under the `test_settings` property.

If you are trying to run Nightwatch on BrowserStack for an existing project, you will have to add a `browserstack` block in the `nightwatch.conf.js` file as a child property to `test_settings`.

<div class="sample-test">
<i>nightwatch.json</i><pre class="line-numbers"><code class="language-javascript">module.exports = {
    ...,
    test_settings: {
        ...,
        browserstack: {
            selenium: {
                host: 'hub.browserstack.com',
                port: 443
            },
            // More info on configuring capabilities can be found on:
            // https://www.browserstack.com/automate/capabilities?tag=selenium-4
            desiredCapabilities: {
                'bstack:options': {
                    userName: '${BROWSERSTACK_USERNAME}',
                    accessKey: '${BROWSERSTACK_ACCESS_KEY}'
                }
            },

            disable_error_log: true,
            webdriver: {
                    timeout_options: {
                        timeout: 15000,
                        retry_attempts: 3
                    },
                    keep_alive: true,
                    start_process: false
                }
            },

            'browserstack.local': {
                extends: 'browserstack',
                desiredCapabilities: {
                    'browserstack.local': true
                }
            },

            'browserstack.firefox': {
                extends: 'browserstack',
                desiredCapabilities: {
                    browserName: 'firefox'
                }
            },

            'browserstack.local_firefox': {
                extends: 'browserstack.local',
                desiredCapabilities: {
                    browserName: 'firefox'
                }
            },
        ...
    }
}

</code></pre></div>

Once the BrowerStack block is present in the Nightwatch configuration file, replace the BrowserStack username and access key with your credentials and you are ready to run your tests on the BrowserStack infrastructure.

### Running on Sauce Labs

If you select Sauce Labs as the cloud provider while setting up Nightwatch via the CLI utility, the test settings will be automatically added.

If you are trying to run Nightwatch on Sauce Labs for an existing project, you will have to add the following block in the `nightwatch.conf.js` file as shown below.

<div class="sample-test">
<i>nightwatch.json</i><pre class="line-numbers"><code class="language-javascript">module.exports = {
    ...,
    test_settings: {
        ...,
        saucelabs: {
            selenium: {
                host: 'ondemand.saucelabs.com',
                port: 443
            },
            // More info on configuring capabilities can be found on:
            // https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
            desiredCapabilities: {
                'sauce:options': {
                username: '${SAUCE_USERNAME}',
                accessKey: '${SAUCE_ACCESS_KEY}',
                screenResolution: '1280x1024'
                // https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/#--region
                // region: 'us-west-1'
                // https://docs.saucelabs.com/dev/test-configuration-options/#tunnelidentifier
                // parentTunnel: '',
                // tunnelIdentifier: '',
                },
                javascriptEnabled: true,
                acceptSslCerts: true,
                // https://docs.saucelabs.com/dev/test-configuration-options/#timezone
                timeZone: 'London'
            },
            disable_error_log: false,
            webdriver: {
                start_process: false
            }
        },

        'saucelabs.firefox': {
            extends: 'saucelabs',
            desiredCapabilities: {
                browserName: 'firefox',
                browserVersion: 'latest',
                platformName: 'Windows 10'
            }
        },
        ...
    }
}

</code></pre></div>

Once the Sauce Labs block is present in the Nightwatch configuration file, replace the Sauce Labs username and access key with your credentials.

### Running on remote Selenium server

If you are installing Nightwatch using the `create-nightwatch` utility and you select to run against a remote selenium server or other cloud providers, the remote host settings will be automatically added to test_settings with place holder values.

If you are trying to set this up for an existing project, you will have to add the following block in the `nightwatch.conf.js` file under the `test_settings` property as shown below.

<div class="sample-test">
<i>nightwatch.json</i><pre class="line-numbers"><code class="language-javascript">module.exports = {
    ...,
    test_settings : {
        ...,
        remote: {
            // Info on all the available options with "selenium":
            // https://nightwatchjs.org/guide/configuration/settings.html#selenium-server-settings
            selenium: {
                start_process: false,
                server_path: '',
                host: '<remote-hostname>',
                port: 4444
            },

            username: '${REMOTE_USERNAME}',
            access_key: '${REMOTE_ACCESS_KEY}',

            webdriver: {
                keep_alive: true,
                start_process: false
            }
        },

        'remote.firefox': {
            extends: 'remote',
            desiredCapabilities: {
                browserName: 'firefox',
                'moz:firefoxOptions': {
                    args: [
                        // '-headless',
                        // '-verbose'
                    ]
                }
            }
        },
        ...
    }
}

</code></pre></div>

Once the configuration block is added, replace the remote host, port & credentials with yours and get started!

<div class="alert alert-info">
For additional help you can jump on to our [Discord Server](https://discord.gg/SN8Da2X).
</div>

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/quickstarts/create-and-run-a-test-with-selenium-server.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Run a test with Selenium server</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/concepts/test-environments.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Test environments</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>