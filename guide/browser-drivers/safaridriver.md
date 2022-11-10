---
title: Safari Driver
description: Learn about how to use Safari Driver with Nightwatch
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>SafariDriver</h2></div>

Run your Nightwatch.js tests in Safari using SafariDriver.

Starting Safari 10, the `safaridriver` is pre-installed if Safari is installed in your OS. You don't need to explicitly install the if you have the Safari browser installed. Support for the legacy `safaridriver` has been removed in recent versions of Selenium, which you can [track here][2].

### SafariDriver for pre-Selenium 2.45.0 version

In earlier versions, pre-Selenium 2.45.0, the SafariDriver acts as an extension to the Safari browser that can be downloaded from [here][1]. 

To install SafariDriver:

1. From folder that matches the version of Selenium you're using, search and download the `SafariDriver.safariextz` file. 
2. Open Safari and click the **File** menu.
3. Select the SafariDriver extension package,`SafariDriver.safariextz`, you downloaded and click **Open**.

You can now use Safari in your test scripts in the `browserName` key under your your `desiredCapabilities` key as a browser:
<pre data-language="javascript"><code class="language-javascript">
"desiredCapabilities" : {
  "browserName" : "safari",
  "javascriptEnabled" : true,
  "acceptSslCerts" : true
}
</code></pre>

### Safari specific capabilities

Learn more about [Safari-specific capabilities](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#safari-specific). 


[1]: http://selenium-release.storage.googleapis.com/index.html
[2]: https://github.com/SeleniumHQ/selenium/issues/2725

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/browser-drivers/chromedriver.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">ChromeDriver</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/browser-drivers/edgedriver.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">EdgeDriver</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>