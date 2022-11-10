---
title: Chrome Driver
description: Learn about how to use Chrome Driver with Nightwatch
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>ChromeDriver</h2></div>

### Overview
Run your Nightwatch.js tests in Chrome using ChromeDriver.

In this guide, you will learn about:

* Downloading ChromeDriver
* Supported Chrome capabilities
* Supported Chrome preferences
* Working with Chrome in Docker

### Download


**Step 1. Download ChromeDriver** - Download the latest version of the ChromeDriver for your platform from the [Downloads page](http://chromedriver.storage.googleapis.com/index.html).

**Step 2. Configure the path** - Set the location of the ChromeDriver binary under the `webdriver` object in your `nightwatch.json` file as follows:

<pre data-language="javascript"><code class="language-javascript">
"webdriver" : {
  "server_path" : "/path/to/chromedriver"
}
</code></pre>

### Supported Chrome Capabilities

The following table provides a list of all the Chrome-specific desired capabilities, which are all under the ChromeOptions dictionary.

<div class="apimethod">
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>`args`</td>
        <td>array of strings</td>
        <td>List of command-line arguments to use when starting Chrome. Arguments with an associated value should be separated by a '=' sign (e.g., `["start-maximized", "user-data-dir=/tmp/temp_profile"]`).</td> 
      </tr>
      <tr>
        <td>`binary`</td>
        <td>string</td>
        <td>Path to the Chrome executable to use (on Mac OS X, this should be the actual binary, not just the app. e.g., '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')</td> 
      </tr>
      <tr>    
        <td>`extensions`</td>
        <td>array of strings</td>
        <td>A list of Chrome extensions to install on startup. Each item in the list should be a base-64 encoded packed Chrome extension (.crx)</td> 
      </tr>
      </tbody>
    </table>
  </div>
</div>

Nightwatch supports all arguments and capabilities that ChromeDriver provides.

Check out [the official ChromeDriver documentation](https://sites.google.com/a/chromium.org/chromedriver/capabilities) to learn more about these capabilities.

You can refer to [this list of command line switches](http://peter.sh/experiments/chromium-command-line-switches/) that you can pass as `args` to the `chromeOptions` key under your `desiredCapabilities` key in your `nightwatch.json` file as follows: 

<pre data-language="javascript"><code class="language-javascript">
"desiredCapabilities" : {
  "browserName" : "chrome",
  "javascriptEnabled" : true,
  "acceptSslCerts" : true,
  "chromeOptions" : {
    "args" : ["start-fullscreen"]
  }
}
</code></pre>

### Supported User Preferences

Apart from the command line switches that you set using the `args` key, you can also pass the Chrome profile preferences using the `prefs` key. 

The following code snippet shows how to set the preferences if you want to disable the browser's password manager feature in the `nightwatch.json` file:

<pre data-language="javascript"><code class="language-javascript">
"desiredCapabilities" : {
  "browserName" : "chrome",
  "javascriptEnabled" : true,
  "acceptSslCerts" : true,
  "chromeOptions" : {
    "prefs" : {
      "credentials_enable_service" : false,
      "profile.password_manager_enabled" : false
    }
  }
}
</code></pre>

### Using Chrome running in a Docker container
If your tests require a Chrome instance running inside a [Docker](https://www.docker.com/) container, ensure that you add the `--no-sandbox` value to the `args` object to access the Chrome binary from the docker container. 
<pre data-language="javascript"><code class="language-javascript">
"chromeOptions" : {
  "args" : ["--no-sandbox"]
} 
</code></pre>


<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/browser-drivers/geckodriver.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">GeckoDriver (Firefox)</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/browser-drivers/safaridriver.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">SafariDriver</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>