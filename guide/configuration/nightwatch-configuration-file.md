---
title: Nightwatch Configuration File
description: Learn how to write the Nightwatch configuration file.
---

<div class="page-header"><h1>Nightwatch Configuration File</h1></div>

### Overview
The Nightwatch test runner binary expects a configuration file located in the current working directory. The following is a list of possible file names that are loaded by default, if found:
- `nightwatch.conf.js`
- `nightwatch.conf.cjs` (when using ES Modules)
- `nightwatch.conf.ts` (when using TypeScript)
- `nightwatch.json`

You can always specify a config file location via the `--config` CLI argument. Read more about CLI options on the [Reference > Nightwatch CLI](https://nightwatchjs.org/guide/nightwatch-cli/command-line-options.html) page.

<div class="alert alert-info">
From Nightwatch 2, you can also specify the config file to return a Promise and the result will be `await`-ed.
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


### Recommended content
- [Reference > All configuration settings](https://nightwatchjs.org/guide/reference/settings.html)
- [Reference > Configuration defaults](https://nightwatchjs.org/guide/reference/defaults.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/concepts/component-testing.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Component Testing</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/configuration/define-test-environments.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Define test environments</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>