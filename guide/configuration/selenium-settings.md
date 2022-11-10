---
title: Selenium Settings
description: List of Selenium settings in Nightwatch.
---

<div class="page-header"><h1>Selenium Settings</h1></div>

If Selenium Server is being used, then the connection related settings should be placed under the `"selenium""`. If both `webdriver` and `selenium` dictionaries are present, the `selenium` options will be merged with the `webdriver` ones.

The `"selenium"` settings should also be used when configuring connections to cloud-based testing providers.

<table class="table table-bordered table-striped">
<thead>
 <tr>
   <th style="width: 100px;">Name</th>
   <th style="width: 100px;">type</th>
   <th style="width: 50px;">default</th>
   <th>description</th>
 </tr>
</thead>
<tbody>
 <tr>
   <td>`start_process`</td>
   <td>boolean</td>
   <td>false</td>
   <td>Whether or not to manage the Selenium process automatically.</td>
 </tr>

 <tr>
   <td>`server_path`</td>
   <td>string</td>
   <td>none</td>
   <td>The location of the Selenium <code>jar</code> file. This needs to be specified if <code>start_process</code> is enabled.<br>E.g.: <code>bin/selenium-server-standalone-2.43.0.jar</code></td>
 </tr>

 <tr>
   <td>`log_path`</td>
   <td>string|boolean</td>
   <td>none</td>
   <td>The location where the Selenium <code>output.log</code> file will be placed. Defaults to current directory.<br>To disable Selenium logging, set this to <code>false</code></td>
 </tr>

 <tr>
   <td>`version2`</td>
   <td>boolean</td>
   <td>false</td>
   <td>Set this to `true` if you need to use legacy Selenium Server 2.</td>
 </tr>

 <tr>
   <td>`port`</td>
   <td>integer</td>
   <td>4444</td>
   <td>The port number Selenium will listen on and/or Nighwatch will attempt to connect to.</td>
 </tr>

 <tr>
   <td>`cli_args`</td>
   <td>object</td>
   <td>none</td>
   <td>List of cli arguments to be passed to the Selenium process. Here you can set various options for browser drivers, such as:<br><br>
     <ul>
       <li>
         <code>webdriver.firefox.profile</code>: Selenium will by default create a new Firefox profile for each session. If you wish to use an existing Firefox profile you can specify its name here.<br>
         Complete list of Firefox Driver arguments available <a href="https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver" target="_blank">here</a>.
       </li>
       <li>
         <code>webdriver.chrome.driver</code>: Nightwatch can run the tests using <strong>Chrome</strong> browser also. To enable this you have to download the <a href="http://chromedriver.storage.googleapis.com/index.html" target="_blank">ChromeDriver binary</a> and specify it's location here.
     Also don't forget to specify chrome as the browser name in the <code>desiredCapabilities</code> object.<br>
     More information can be found on the <a href="https://sites.google.com/a/chromium.org/chromedriver/" target="_blank">ChromeDriver website</a>.<br>
       </li>
       <li>
         <code>webdriver.ie.driver</code>:
         Nightwatch works with <strong>Internet Explorer</strong> also. To enable this you have to download the <a href=
         "https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver" target="_blank">IE Driver binary</a> and specify it's location here.<br><br>
         Alternatively you can install the package [`iedriver`](https://www.npmjs.com/package/iedriver) from NPM.<br><br>
     Also you need to specify "internet explorer" as the browser name in the <code>desiredCapabilities</code> object.
       </li>
     </ul>
   </td>
 </tr>
 </tbody>
</table>

### Selenium Example Configuration

Here's an example configuration as part of the `nightwatch.conf.js` which uses a local Selenium Server with support for Firefox, Chrome, and Internet Explorer.

The following **NPM** packages are assumed to be installed in the current project:

- [geckodriver][5]
- [chromedriver][6]
- [selenium-server][7]
- [iedriver][8]

<div class="sample-test">
<pre><code class="language-javascript">module.exports = {
  src_folders: [],

  test_settings: {
    default: {
    launch_url: 'https://nightwatchjs.org'
  },

  selenium: {
    // Selenium Server is running locally and is managed by Nightwatch
    selenium: {
      start_process: true,
      port: 4444,
      server_path: require('selenium-server').path,
      cli_args: {
        'webdriver.gecko.driver': require('geckodriver').path,
        'webdriver.chrome.driver': require('chromedriver').path,
        'webdriver.ie.driver': process.platform === 'win32' ? require('iedriver').path : ''
      }
    },
    webdriver: {
      start_process: false
    }
  },

  'selenium.chrome': {
    extends: 'selenium',
    desiredCapabilities: {
      browserName: 'chrome',
      chromeOptions: {
        w3c: false
      }
    }
  },

  'selenium.firefox': {
    extends: 'selenium',
    desiredCapabilities: {
      browserName: 'firefox'
    }
  },

  'selenium.ie': {
    extends: 'selenium',
    desiredCapabilities: {
      browserName: 'internet explorer'
    }
  }
}
}</code></pre></div>

### Recommended content
- [Reference > All configuration settings](https://nightwatchjs.org/guide/reference/settings.html)
- [Reference > Configuration defaults](https://nightwatchjs.org/guide/reference/defaults.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/configuration/web-driver-settings.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">WebDriver settings</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/configuration/browser-stack-settings.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Configure BrowserStack settings</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>