---
title: Session Capabilities
description: Session capabilities in the nightwatch.
---

<div class="page-header"><h2>Session Capabilities</h2></div>

Session capabilities is a request/response model used by Nightwatch (and other W3C WebDriver clients) to define which browser features it requires from the WebDriver implementation or Selenium server. 
The WebDriver/Selenium server will also provide its supported capabilities as part of the browser session initialization process.

Session capabilities can be divided in two categories:
### 1. Input capabilities
In order to create a new browser session, Nightwatch has to provide the desired capabilities to the WebDriver service. 

Here's an example capabilities that Nightwatch sends as part of the initial `/session` request:

<pre><code class="language-bash">Request POST /session  
{
 desiredCapabilities: {
   browserName: 'chrome',
   name: 'To-Do List End-to-End Test'
 }
}</code></pre>

### 2. Browser capabilities
The WebDriver service uses the received input capabilities to create a browser session and responds with the supported capabilities.

Here's an example browser capabilities that Nightwatch receives as part of the initial `/session` response:

<pre><code class="language-bash">Response 200 POST /session (724ms)
{
 value: {
   capabilities: {
     acceptInsecureCerts: false,
     browserName: 'chrome',
     browserVersion: '102.0.5005.61',
     chrome: {
       chromedriverVersion: '101.0.4951.41 (93c720...)'
     },
     'goog:chromeOptions': { debuggerAddress: 'localhost:52470' },
     networkConnectionEnabled: false,
     pageLoadStrategy: 'normal',
     platformName: 'mac os x',
     proxy: {},
     setWindowRect: true,
     strictFileInteractability: false,
     timeouts: { implicit: 0, pageLoad: 300000, script: 30000 },
     unhandledPromptBehavior: 'dismiss and notify',
     'webauthn:extension:credBlob': true,
     'webauthn:extension:largeBlob': true,
     'webauthn:virtualAuthenticators': true
   },
   sessionId: '15d21f2132ff0675a97ca419bf6fbd4'
 }</code></pre>


#### Shared capabilities

Some of the capabilities included in this set are standard and shared between all browsers, but the set may also contain browser-specific capabilities and these are always prefixed.

Capabilities can be used to require a driver that supports a certain subset of features. This can be used to require certain browser features, such as the ability to resize the window dimensions, but is also used in distributed environments to select a particular browser configuration from a matrix of choices.

### Recommended content
The Selenium docs provide apple documentation on all the capabilities, both shared and browser specific.

- [List of shared capabilities](https://www.selenium.dev/documentation/webdriver/capabilities/shared/)
- [Capabilities specific to Chromium browsers](https://www.selenium.dev/documentation/webdriver/capabilities/chromium/)
- [Capabilities specific to Firefox](https://www.selenium.dev/documentation/webdriver/capabilities/firefox/)
- [Capabilities specific to Safari](https://www.selenium.dev/documentation/webdriver/capabilities/safari/)
- [Capabilities specific to Internet Explorer](https://www.selenium.dev/documentation/webdriver/capabilities/internet_explorer/)
- [Capabilities negotiation](https://developer.mozilla.org/en-US/docs/Web/WebDriver/Capabilities#capabilities_negotiation)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/concepts/test-globals.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Test globals</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/concepts/parallel-testing-in-nightwatch.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Parallel testing in Nightwatch</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
