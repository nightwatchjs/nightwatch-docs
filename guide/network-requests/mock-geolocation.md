---
title: Mock Geolocation
description: Learn how to mock or override the geolocation of your browser while running your Nightwatch tests.
---

<div class="page-header"><h2>Mock Geolocation</h2></div>

### Overview
When your website or web-application is changing based on the location from which it is being accessed, it becomes important to test your website for all these locations. With [Chrome DevTools Protocol support](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/) now available in Selenium 4, Nightwatch supports mocking the geolocation of the browser during the test run with just one command.

This will allow you to access and test the different versions of your website served at different locations, while testing from a single location.

<div class="alert alert-info">
  This command only works with Chromium based browsers such as Google Chrome and Microsoft Egde.
</div>

### Mock Geolocation

Mocking the geolocation of your browser allows you to override the location sent by your browser to your website, so that your website can respond with a version meant to be served at that location.

All you need to do is call the `browser.setGeolocation()` command with the required parameters before navigating to your website and the version of website meant for the requested location will be served back to you.

`setGeolocation()` accepts an object as its first argument. The specifications of the object are as follows:

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
      <td>`latitude`</td>
      <td>number</td>
      <td></td>
      <td>Latitude of the geolocation to be set.</td>
    </tr>
    <tr>
      <td>`longitude`</td>
      <td>number</td>
      <td></td>
      <td>Longitude of the geolocation to be set.</td>
    </tr>
    <tr>
      <td>`accuracy`<br><span class="optional">Optional</span></td>
      <td>number</td>
      <td>100</td>
      <td>Expected accuracy while mocking the geolocation.</td>
    </tr>
  </tbody>
</table>

### Example

<div class="sample-test"><i>tests/mock-geolocation.js</i>
<pre class="line-numbers language-javascript">
<code class="language-javascript">describe('mock geolocation', function() {
  it('sets the geolocation to Tokyo, Japan', () => {
    browser
      .setGeolocation({
        latitude: 35.689487,
        longitude: 139.691706,
        accuracy: 100
      })
      .navigateTo('https://www.gps-coordinates.net/my-location')
      .pause(3000);
  });
});
</code>
</pre></div>


### Reset Geolocation

After overriding the geolocation of your browser, if you now want to reset the geolocation of the browser back to the original during the same test run, you can do so by using the command `browser.setGeolocation()` again, but without any arguments this time.

#### Example:

<div class="sample-test"><i>tests/mock-and-reset-geolocation.js</i>
<pre class="line-numbers language-javascript">
<code class="language-javascript">describe('mock and reset geolocation', function() {
  it('sets the geolocation to Tokyo, Japan and then resets it', () => {
    browser
      .setGeolocation({
        latitude: 35.689487,
        longitude: 139.691706,
        accuracy: 100
      })  // sets the geolocation to Tokyo, Japan
      .navigateTo('https://www.gps-coordinates.net/my-location')
      .pause(3000)
      .setGeolocation()  // resets the geolocation
      .navigateTo('https://www.gps-coordinates.net/my-location')
      .pause(3000);
  });
});
</code>
</pre></div>

### Recommended content
- [Chrome DevTools Protocol in Selenium 4](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/network-requests/mock-network-response.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Mock network response</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/reporters/use-junit-reporter.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">JUnit XML Reporter</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>

