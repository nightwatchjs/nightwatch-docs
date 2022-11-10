---
title: Override device dimensions
description: Learn how to test your website on different device dimensions, while running your tests on the same device.
---

<div class="page-header"><h2>Override device dimensions</h2></div>

### Overview

The variety of devices users access the internet with are increasing rapidly and it becomes more important to ensure that your website or web application works as expected across all devices with varying screen sizes.

With [Chrome DevTools Protocol support](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/) now available in Selenium 4, Nightwatch supports testing on varying screen dimensions. You can override the values of the screen dimensions in a test with just a single command. Along with that, you can also emulate a mobile device for loading your website, and change the device-scale-factor/device-pixel-ratio of your website as well.

<div class="alert alert-info">
  The `setDeviceDimensions()` command only works with Chromium based browsers such as Google Chrome and Microsoft Edge.
</div>

### Override device dimensions

Overriding the device dimensions while running your tests allows you to test how your website loads on different screen dimensions, without actually testing them on devices with different screen sizes. This is especially useful while testing the responsiveness of your website.

All you need to do is call the `browser.setDeviceDimensions()` command with the required parameters before navigating to your website.

`setDeviceDimensions()` accepts an object as its first argument. The specifications of the object are as follows:

<table class="table table-bordered table-striped">
  <thead>
   <tr>
     <th style="width: 100px;">key</th>
     <th style="width: 100px;">type</th>
     <th style="width: 50px;">default</th>
     <th>description</th>
   </tr>
  </thead>
  <tbody>
    <tr>
      <td>`width`</td>
      <td>number</td>
      <td>0</td>
      <td>Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override.</td>
    </tr>
    <tr>
      <td>`height`</td>
      <td>number</td>
      <td>0</td>
      <td>Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override.</td>
    </tr>    
    <tr>
      <td>`deviceScaleFactor`<br><span class="optional">optional</span></td>
      <td>number</td>
      <td>0</td>
      <td>Overriding device scale factor value. 0 disables the override.</td>
    </tr>
    <tr>
      <td>`mobile`<br><span class="optional">optional</span></td>
      <td>boolean</td>
      <td>false</td>
      <td>Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text autosizing and more.</td>
    </tr>
  </tbody>
</table>

### Example

<div class="sample-test"><i>tests/modify-device-dimensions.js</i>
<pre class="line-numbers language-javascript">
<code class="language-javascript">describe('modify device dimensions', function() {
  it('modifies the device dimensions', function() {
    browser
      .setDeviceDimensions({
        width: 400,
        height: 600,
        deviceScaleFactor: 50,
        mobile: true
      })
      .navigateTo('https://www.google.com')
      .pause(1000);
  });
});
</code>
</pre></div>

### Reset device dimensions

To reset the device dimensions back to original, you can again call the `browser.setDeviceDimensions()` command, but without any arguments this time.

#### Example:

<div class="sample-test"><i>tests/modify-and-reset-device-dimensions.js</i>
<pre class="line-numbers language-javascript">
<code class="language-javascript">describe('modify device dimensions', function() {
  it('modifies the device dimensions and then resets it', function() {
    browser
      .setDeviceDimensions({
        width: 400,
        height: 600,
        deviceScaleFactor: 50,
        mobile: true
      })
      .navigateTo('https://www.google.com')
      .pause(1000)
      .setDeviceDimensions()  // resets the device dimensions
      .navigateTo('https://www.google.com')
      .pause(1000);
  });
});
</code>
</pre></div>

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/mobile-web-testing/with-appium.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Use Nightwatch with Appium</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Define custom commands</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
