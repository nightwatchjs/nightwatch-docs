---
title: Mock network response
description: Learn how to intercept the network requests going out of your browser and mock their responses.
---

<div class="page-header"><h2>Intercept network responses</h2></div>

### Overview

While testing you website, there might be a case where your website sends an HTTP request to a particular URL, but you do not want to send a request to that URL during the test run, and instead you just want to mock the response from that URL. Doing so is now possible with Nightwatch.

With [Chrome DevTools Protocol support](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/) now available in Selenium 4, Nightwatch now supports intercepting the HTTP request and mocking the response from a particular URL.

<div class="alert alert-info">
  This command only works with Chromium based browsers such as Google Chrome and Microsoft Egde.
</div>

### Mock network response

This command allows you to mock the HTTP response from a particular URL. After running this command, whenever the URL of an HTTP request **strictly** matches with the URL passed into the command, the request is intercepted and the provided mock is sent back to the browser as the response.

All you need to do is call the `browser.mockNetworkResponse()` command with the required parameters before navigating to your website.

`mockNetworkResponse()` accepts a `url` (`string` type) as the first argument and a `response` object as the second argument. The specification of the `response` object are as follows:

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
      <td>`status`</td>
      <td>number</td>
      <td>200</td>
      <td>HTTP status of the mocked response.</td>
    </tr>
    <tr>
      <td>`headers`</td>
      <td>object</td>
      <td>`{}`</td>
      <td>HTTP headers in the mocked response.<br>E.g.: `headers = {'Connection': 'Keep-Alive', 'Content-Type': 'UTF-8'}`</td>
    </tr>    
    <tr>
      <td>`body`<br><span class="optional">optional</span></td>
      <td>string</td>
      <td>`''`</td>
      <td>Body of the mocked response.</td>
    </tr>
  </tbody>
</table>

### Example

<div class="sample-test"><i>tests/mock-network-response.js</i>
<pre class="line-numbers language-javascript">
<code class="language-javascript">describe('mock network response', function() {
  it('intercepts the request made to Google search and mocks its response', function() {
    browser
      .mockNetworkResponse('https://www.google.com/', {
        status: 200,
        headers: {
          'Content-Type': 'UTF-8'
        },
        body: 'Hello there!'
      })
      .navigateTo('https://www.google.com/')
      .pause(2000);
  });
});
</code>
</pre></div>

### Recommended content
- [Chrome DevTools Protocol in Selenium 4](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/)
- [Capture network requests](https://nightwatchjs.org/guide/network-requests/capture-network-calls.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/network-requests/capture-network-calls.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Capture network calls</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/network-requests/mock-geolocation.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Mock geolocation</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>