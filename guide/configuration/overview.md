<div class="page-header"><h1>Nightwatch Configuration</h1></div>

### nightwatch.conf.js

The Nightwatch test runner binary expects a configuration file, using by default either a `nightwatch.conf.js` or `nightwatch.json` file from the current working directory. `nightwatch.conf.js` is taking precedence if both files are found.

<div class="alert alert-info">
From Nightwatch 2, you can also specify the config file to return a Promise and the test runner will wait for it to resolve.
</div>

Here's an example config file which uses Firefox as target browser and assumes that the [`geckodriver`](https://www.npmjs.com/package/geckodriver) NPM package is installed.

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
- [selenium-server][4] – for using Selenium Server

### Working with Test Environments
It is likely you will run your tests against multiple environments and/or different browsers. Nightwatch provides a concept for defining different _environments_, in which you can set specific test settings.

The environments are located under the `"test_settings"` dictionary in the configuration file. A `default` environment is always required from which the other environments inherit the settings. You can overwrite any test setting for each environment as needed.

The auto-generated `nightwatch.conf.js` contains several pre-defined test environments for running tests against several different browsers (Firefox, Chrome, Safari), and also for running tests using Selenium Server or popular cloud testing provider Browserstack.

Here’s an extract:

<div class="sample-test">
<pre><code class="language-javascript">module.exports = {
  src_folders: [],

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    safari: {
      desiredCapabilities : {
        browserName : 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        port: 4445,
        start_process: true,
        server_path: '/usr/bin/safaridriver'
      }
    },

    firefox: {
      desiredCapabilities : {
        browserName : 'firefox'
      },

      webdriver: {
        start_process: true,
        port: 4444,
        server_path: require('geckodriver').path
      }
    }
  }
}</code></pre></div>

Considering this setup, to run tests, for instance, against Safari, we would run the following the command-line:

<pre><code class="language-bash">nightwatch --env safari</code></pre>

Refer to the [Defining Test Environments](https://nightwatchjs.org/guide/using-nightwatch/concepts.html#defining-test-environments) page to learn more about how to use test environments.

### Working with Test Globals
Another useful concept that Nightwatch provides is test globals. In its most simple form, it is a dictionary of name-value pairs which is defined in your configuration file.

Globals can be defined either as a `"globals"` property or as an external file which is specified as the `"globals_path"` property.

Here's an example definition using the `"globals"` property in `nightwatch.json`:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">{
  "src_folders": [],

  "test_settings": {
    "default": {
      "launch_url": "https://nightwatchjs.org",

      "globals": {
        "myGlobalVar" : "some value",
        "otherGlobal" : "some other value"
      }
    }
}
}</code></pre>
</div>

Like the `launch_url` property, the `globals` object is made available directly on the Nightwatch api which is passed to the tests.

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test' : function (browser) {

    console.log(browser.globals.myGlobalVar); // myGlobalVar == "some value"
}
};</code></pre>
</div>

Refer to the [Using Test Globals](https://nightwatchjs.org/guide/using-nightwatch/concepts.html#using-test-globals) page to learn more about how to use test globals.

### Using Env variables
Any config value in either `nightwatch.conf.js` or `nightwatch.json` can be specified as the name of an environment variables. Nightwatch will automatically populate the value, if found, from `process.env`.

[Dotenv](https://www.npmjs.com/package/dotenv) files are also supported and will be used if an `.env` file is found in the current working directory.

Here's an example from the generated `nightwatch.conf.js`:

<div class="sample-test">
<pre><code class="language-javascript">module.exports = {
  src_folders: [],

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack: {
      webdriver: {
        start_process: false
      },
  
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443
      },
  
      desiredCapabilities: {
         browserName: 'chrome',
        'bstack:options' : {
          userName: '${BROWSERSTACK_USER}',
          accessKey: '${BROWSERSTACK_KEY}',
        }
      }
    }
  }
}</code></pre></div>

### Manual Configuration
At this point you should have at least one WebDriver package installed in your project. Refer to the [WebDriver installation][1] section for details. Create the `nightwatch.json` in the project's root folder.

Assuming you have downloaded or installed the ChromeDriver service, the simplest `nightwatch.json` file will look like this, where `node_modules/.bin/chromedriver` is the path where ChromeDriver is installed:
<div class="sample-test"><pre><code class="language-javascript">{
  "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}</code></pre></div>

#### Further Reading

<ul class="introduction">
    <li>[Defining Test Environments](https://nightwatchjs.org/guide/using-nightwatch/concepts.html#using-test-globals)</li>
    <li>[Using Test Globals](https://nightwatchjs.org/guide/using-nightwatch/concepts.html#using-test-globals)</li>
</ul>

[1]:	/gettingstarted/installation/#install-webdriver
[2]:	https://www.npmjs.com/package/geckodriver
[3]:	https://www.npmjs.com/package/chromedriver
[4]:	https://www.npmjs.com/package/selenium-server

### Recommended content
- [Reference > All configuration settings](https://nightwatchjs.org/guide/reference/settings.html)
- [Reference > Configuration defaults](https://nightwatchjs.org/guide/reference/defaults.html)