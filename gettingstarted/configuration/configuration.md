## Configuration

### nightwatch.json
The `nightwatch` test runner binary expects a configuration file, using by default a `nightwatch.json` file from the current working directory. A `nightwatch.conf.js` file will also be loaded by default, if found.

At this point you should have at least one WebDriver package installed in your project. Refer to the [WebDriver installation][1] section for details.

### Auto-generated Configuration
Since version **1.3**, Nightwatch will generate a `nightwatch.conf.js` config file by default, based on the operation system and existing driver packages. If a `nightwatch.json` or `nightwatch.conf.js` file is found in the current folder, nothing happens and the file is not generated.

So far, we have included support for Chrome, Firefox, Safari, and Internet Explorer. The following packages can be used from NPM and, if installed, Nightwatch will automatically detect and configure the test runner:

- [geckodriver][2] – for running tests in Firefox
- [chromedriver][3] – for running tests in Chrome
- [selenium-server][4] – for using Selenium Server

### Manual Configuration
Create the `nightwatch.json` in the project's root folder.

Assuming you have downloaded or installed the ChromeDriver service, the simplest `nightwatch.json` file will look like this, where `node_modules/.bin/chromedriver` is the path where ChromeDriver is installed:
<pre><code class="language-javascript">{
  <strong>"src_folders"</strong> : ["tests"],

  <strong>"webdriver"</strong> : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  <strong>"test_settings"</strong> : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}</code></pre>

### nightwatch.conf.js
Using a `.js` configuration files is also possible, with `nightwatch.conf.js` always taking precedence if both files are found. A `.js` file is often more desirable as it provides more capabilities which come useful in large projects that need to test on several browsers.

Here's an example config file which uses Firefox as target browser.

<div class="sample-test"><pre><code class="language-javascript">module.exports = {
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
        browserName : 'firefox',
        alwaysMatch: {
          // Enable this if you encounter unexpected SSL certificate errors in Firefox
          // acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ],
          }
        }
      }
    }
  }
};
</code></pre></div>

### Defaults
Nightwatch has a default configuration object with pre-defined values. These values can be overwritten as needed. 
You can view the entire defaults config [on Github](https://github.com/nightwatchjs/nightwatch/blob/main/lib/settings/defaults.js). 

[1]:	/gettingstarted/installation/#install-webdriver
[2]:	https://www.npmjs.com/package/geckodriver
[3]:	https://www.npmjs.com/package/chromedriver
[4]:	https://www.npmjs.com/package/selenium-server
