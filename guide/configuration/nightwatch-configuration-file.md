<div class="page-header"><h2>Nightwatch Configuration File</h2></div>

### Overview
The Nightwatch test runner binary expects a configuration file, using by default either a `nightwatch.conf.js` or `nightwatch.json` file from the current working directory. `nightwatch.conf.js` is taking precedence if both files are found.

<div class="alert alert-info">
From Nightwatch 2, you can also specify the config file to return a Promise and the test runner will wait for it to resolve.
</div>

### Example
Here's an example config file which uses Firefox as target browser and assumes that the [`geckodriver`](https://www.npmjs.com/package/geckodriver) NPM package is installed.

<div class="sample-test"><i>nightwatch.conf.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: [],

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require('geckodriver').path,
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ]
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      desiredCapabilities : {
        browserName : 'firefox'
      }
    }
  }
};
</code></pre></div>

### Auto-generated Configuration
Since version **1.3**, Nightwatch will generate a `nightwatch.conf.js` config file on the first run or if no other config file has been found, based on the operation system and existing driver packages.
If a `nightwatch.json` or `nightwatch.conf.js` file is found in the current folder, nothing happens and the file is not generated.

Feel free to edit this file and adapt the settings however you see fit. So far, we have included support for Chrome, Firefox, Safari, and Internet Explorer.

The following packages can be used from NPM and, if installed, Nightwatch will automatically detect and configure the test runner:

- [geckodriver][2] – for running tests in Firefox
- [chromedriver][3] – for running tests in Chrome
- [@nightwatch/selenium-server][4] – for using Selenium Server
  
[1]:	/gettingstarted/installation/#install-webdriver
[2]:	https://www.npmjs.com/package/geckodriver
[3]:	https://www.npmjs.com/package/chromedriver
[4]:	https://www.npmjs.com/package/@nightwatch/selenium-server
