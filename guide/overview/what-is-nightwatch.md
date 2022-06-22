---
title: What is Nightwatch?
description: Nightwatch is an integrated framework for performing automated end-to-end testing on web applications and websites, across all major browsers.
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>What is Nightwatch?</h2></div>

<p><img src="/images/nightwatch-circle.png" alt="Nightwatch.js" title="Nightwatch.js" id="whatis-logo" />
Nightwatch.js is an integrated framework for performing automated end-to-end testing on web applications and websites, across all major browsers. It is written in [Node.js][1] and uses the [W3C WebDriver API][2] to interact with various browsers.</p>

<p>It is a complete solution for end-to-end and cross-browser testing. It aims to simplify the process of writing and running various types of tests, including:</p>

<ul class="introduction">
    <li>end-to-end tests on all major web browsers</li>
    <li>unit tests of Node.js services</li>
    <li>integration tests of HTTP APIs</li>
</ul>

<p class="secondary-text">Nightwatch was created in 2014 in Amsterdam, The Netherlands, and the name was inspired by the famous painting [The Night Watch](https://www.rijksmuseum.nl/en/collection/SK-C-5) by Dutch 17th century artist [Rembrandt van Rijn](https://www.rembrandthuis.nl/en/meet-rembrandt/). The masterpiece is prominently displayed in the Rijksmuseum, in Amsterdam. Read more about how Nightwatch was created [here][4].</p>

### Why choose Nightwatch?

<ul>
  <li class="syntax">
    <h4>Clean Syntax</h4>
    <p>
      Simple but powerful syntax which enables you to write tests very quickly, using Javascript (Node.js) and CSS or Xpath selectors. Typescript is supported as well.
    </p>
  </li>

  <li class="syntax">
    <h4>Integrated Test Runner</h4>
    <p>
      Built-in command-line test runner which runs the tests either sequentially or in parallel, with retries and implicit waits. Also supports grouping of test suites and tags. 
    </p>
  </li>

  <li class="cloudtesting">
    <h4>Cloud Testing Support</h4>
    <p>
      Works with <a href="https://www.browserstack.com" target="_blank" rel="noreferrer">BrowserStack</a> out of the box. Other cloud testing providers, such as <a href="https://saucelabs.com/" rel="noreferrer" target="_blank">SauceLabs</a> or <a href="https://www.lambdatest.com/" rel="noreferrer" target="_blank">LambdaTest</a> are easy to add as well.
    </p>
  </li>

  <li class="selectors">
    <h4>Page Objects Support</h4>
    <p>
      Fluent and easy to work with, has Page Object Model support to better organise elements and sections, and also supports both CSS or Xpath selectors.
    </p>
  </li>

  <li class="plugins">
    <h4>Plugin API</h4>
    <p>
      Flexible command and assertion framework, which makes it easy to implement your own plugins and extend the built-in commands and assertions APIs.
    </p>
  </li>

</ul>

### Architecture overview

Nightwatch is distributed as an easy to use CLI tool and has built-in support for all major browsers: Chrome, Firefox, Safari, and Edge.  

Nightwatch performs the browser automation by taking advantage of the industry standard protocol **WebDriver**, which is defined as a W3C standard specification.

![Theory of Operation][image-1]

Nightwatch is sometimes inaccurately described as a "Selenium binding" library. While it's true that Nightwatch can be (and is often) used together with the [Selenium Server][18] it's important to remember that Nightwatch is a complete testing solution which contains a built-in CLI test runner, an extendable command and assertion library, and support for page object model.

[1]:	https://nodejs.org/
[2]:	https://www.w3.org/TR/webdriver/
[3]:	https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
[4]:	/about
[5]:	https://selenium.dev/
[6]:	https://www.w3.org/TR/webdriver
[7]:	https://www.w3.org/TR/webdriver
[8]:	https://sites.google.com/a/chromium.org/chromedriver/
[9]:	https://github.com/mozilla/geckodriver
[10]:	https://www.w3.org/TR/webdriver/
[11]:	https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
[12]:	/gettingstarted/installation/#webdriver-service
[13]:	https://selenium.dev/downloads/
[14]:	https://www.browserstack.com/
[15]:	https://saucelabs.com/
[16]:	https://crossbrowsertesting.com/
[17]: https://www.lambdatest.com/
[18]:	https://selenium.dev/downloads/
[19]:	https://selenium.dev/downloads/

[image-1]:	/img/operation.png
[image-2]:	/img/operation-cloud.png
