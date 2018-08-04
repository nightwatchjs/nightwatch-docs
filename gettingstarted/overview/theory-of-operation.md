### Theory of Operation

Nightwatch works by communicating over a restful HTTP API with a WebDriver server (such as ChromeDriver or Selenium Server). The protocol is defined by the [W3C WebDriver spec](https://www.w3.org/TR/webdriver/), which is derived from [JSON Wire](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol) protocol. See below for an example workflow for browser initialization.

![Theory of Operation](http://nightwatchjs.org/img/operation.png)

Most of the times, Nightwatch needs to send at least 2 requests to the WebDriver server in order to perform a command or assertion, the first one being the request to locate an element given a CSS selector (or Xpath expression) and the next to perform the actual command/assertion on the given element.
