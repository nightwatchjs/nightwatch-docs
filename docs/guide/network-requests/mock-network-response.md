---
title: Mock network response
description: Learn how to intercept the network requests going out of your browser and mock their responses.
---

<div class="page-header"><h1>Intercept network responses</h1></div>

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
      <td><code>status</code></td>
      <td>number</td>
      <td>200</td>
      <td>HTTP status of the mocked response.</td>
    </tr>
    <tr>
      <td><code>headers</code></td>
      <td>object</td>
      <td><code>{}</code></td>
      <td>HTTP headers in the mocked response.<br>E.g.: <code>headers = {'Connection': 'Keep-Alive', 'Content-Type': 'UTF-8'}</code></td>
    </tr>    
    <tr>
      <td><code>body</code><br><span class="optional">optional</span></td>
      <td>string</td>
      <td><code>''</code></td>
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
- [Capture network requests](/guide/network-requests/capture-network-calls.html)

