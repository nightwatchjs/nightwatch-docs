## Overview

### What is Nightwatch?

Nightwatch.js is an automated testing framework for web applications and websites, written in [Node.js](http://nodejs.org/) and using the [W3C WebDriver API](https://www.w3.org/TR/webdriver/) (formerly [Selenium WebDriver](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol)).

It is a complete _End-to-End_ testing solution which aims to simplify writing automated tests and setting up **Continuous Integration**. Nightwatch can also be used for writing Node.js unit and integration tests.

> The name Nightwatch was inspired by the famous painting [The Night Watch](http://en.wikipedia.org/wiki/The_Night_Watch) by Dutch artist [Rembrandt van Rijn](http://en.wikipedia.org/wiki/Rembrandt_Harmenszoon_van_Rijn). The masterpiece is prominently displayed in the Rijksmuseum, in Amsterdam - The Netherlands.

### Overview of WebDriver

WebDriver is a general purpose library for automating web browsers. It was started as part of the [Selenium](http://docs.seleniumhq.org/projects/webdriver/) project, which is a popular and comprehensive set of tools for browser automation, initially written for Java but now with support for most programming languages.

Nightwatch uses the [WebDriver API](https://www.w3.org/TR/webdriver) to perform the browser automation related tasks, like opening windows and clicking links for instance.

[WebDriver](https://www.w3.org/TR/webdriver) is now a W3C specification aiming to standardize browser automation. WebDriver is a remote control interface that enables introspection and control of user agents. It provides a platform and a restful HTTP api as a way for web browsers to be remotely controlled.

### Theory of Operation

Nightwatch works by communicating over a restful HTTP API with a WebDriver server (such as ChromeDriver or Selenium Server). The protocol is defined by the [W3C WebDriver spec](https://www.w3.org/TR/webdriver/), which is derived from [JSON Wire](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol) protocol. See below for an example workflow for browser initialization.

![Theory of Operation](http://nightwatchjs.org/img/operation.png)

Most of the times, Nightwatch needs to send at least 2 requests to the WebDriver server in order to perform a command or assertion, the first one being the request to locate an element given a CSS selector (or Xpath expression) and the next to perform the actual command/assertion on the given element.
