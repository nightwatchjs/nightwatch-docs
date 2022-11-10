---
title: Microsoft Edge WebDriver
description: Learn about how to use Microsoft Edge WebDriver with Nightwatch
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>EdgeDriver</h2></div>

Run your Nightwatch.js tests in Edge can be achieved using the  [Microsoft Edge WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/).

### Downloading EdgeDriver

**Step 1. Download Microsoft Edge WebDriver** - Depending on the version of your Edge Browser, download the relevant [Microsoft Edge WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/).

**Step 2. Configure the path** - You can either add the path to the Microsoft Edge WebDriver binary to the system PATH or set the location in the `cli_args` key under the `selenium` key in your `nightwatch.json` file as follows:
<pre data-language="javascript"><code class="language-javascript">
"localEdge": {
       selenium_host: "127.0.0.1",
       selenium_port: 4444,
       selenium: {
           start_process: true,
           host: "127.0.0.1",
           port: 4444,
           cli_args: {
               "webdriver.edge.driver": "C:\\Program Files (x86)\\Microsoft Web Driver\\MicrosoftWebDriver.exe",
           }
       },
        desiredCapabilities: {
           platform: "Windows 10",
           browserName: "MicrosoftEdge",
           javascriptEnabled: true
       }
}
</code></pre>

### Learn more

For more information about the Microsoft Edge WebDriver refer to the [Official documentation](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/dev-guide/tools/webDriver/).

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/browser-drivers/safaridriver.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">SafariDriver</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/nightwatch-cli/command-line-options.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Command-line Options</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>