## Overview

<h3 id="what-is-nightwatch-"><span>What is Nightwatch?</span></h3><p class="whatis-logo"><img src="/images/nightwatch-circle.png" alt="Nightwatch.js" title="Nightwatch.js" class="whatis"></p>

Nightwatch.js is an automated end-to-end testing framework for web applications and websites. It is written in [Node.js][1] and uses the [W3C WebDriver API][2] (formerly [Selenium WebDriver][3]) for interacting with various browsers.

<p>It is a complete testing solution which aims to simplify writing tests and setting up **Continuous Integration** and **Continuous Delivery**. Nightwatch can also be used for writing Node.js unit and integration tests. Read more about how Nightwatch was created [here][4].</p>

<div class="alert alert-warning nightwatch">
<i>Nightwatch was created in Amsterdam, The Netherlands, and the name was inspired by the famous painting [The Night Watch][4] by Dutch 17th century artist [Rembrandt van Rijn][5]. The masterpiece is prominently displayed in the Rijksmuseum, in Amsterdam.</i>
</div>

<h3 id="overview-of-webdriver"><span>Overview of WebDriver</span></h3><p class="whatis-logo w3c-logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C WebDriver" title="W3C WebDriver" class="whatis"></p>

<p>WebDriver is a general purpose library for automating web browsers. It was started as part of the [Selenium][5] project, which is a popular and comprehensive set of tools for browser automation, initially written for Java but now with support for most programming languages.</p>

<div class="alert alert-warning">
Nightwatch uses the [WebDriver API][6] to perform the browser automation related tasks, like opening windows or clicking links.
</div>

<p>[WebDriver][7] is now a W3C specification aiming to standardise browser automation, providing a platform and a restful HTTP api as a way for web browsers to be remotely controlled.</p>

<h3 id="theory-of-operation"><span>Theory of Operation</span></h3>

Nightwatch works by interacting with a WebDriver-compatible HTTP server (such as [ChromeDriver][8] for Chrome or [GeckoDriver][9] for Firefox). The HTTP protocol is defined by the [W3C WebDriver spec][10], which is derived from [JSON Wire][11] protocol. 

All major browsers have a specific WebDriver implementation, called a driver, which Nightwatch uses behind the scenes to communicate with the browser. See the [Install Webdriver][12] section for details on the particular browser drivers.  

Most of the times, Nightwatch needs to send at least 2 requests to the WebDriver server in order to perform a command or assertion, the first one being the request to locate an element given a CSS selector (or Xpath expression) and the next to perform the actual command/assertion on the given element. See below for an example workflow for browser initialisation.

![Theory of Operation][image-1]

<h3 id="nightwatch-selenium-server"><span>Nightwatch &amp; Selenium Server</span></h3>

The communication can also be facilitated by the [Selenium Server][13] (also known as Selenium Grid) or a compatible cloud-based testing platform (like [Browserstack][14], [SauceLabs][15], [CrossBrowserTesting][16], [LambdaTest][17] or [TestingBot][19]).

![Selenium Server Operation][image-2]

Nightwatch is sometimes incorrectly described as a "Selenium binding" library. While it's true that Nightwatch can be (and is often) used together with the [Selenium Server][18] it's important to remember that Nightwatch is a complete testing solution which contains a built-in CLI test runner, an extendible command and assertion library, and support for page object model.  


[1]:	https://nodejs.org/
[2]:	https://www.w3.org/TR/webdriver/
[3]:	https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
[4]:	/about
[5]:	https://selenium.dev/projects/
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
[19]:	https://testingbot.com/

[image-1]:	/img/operation.png
[image-2]:	/img/operation-cloud.png
