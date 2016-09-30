### Theory of Operation

Nightwatch works by communicating over a restful HTTP api with a WebDriver server (typically the Selenium server). The restful API protocol is defined by the [W3C WebDriver API](https://www.w3.org/TR/webdriver/). See below for an example workflow for browser initialization.

![Theory of Operation](http://nightwatchjs.org/img/operation.png)

Most of the times, Nightwatch needs to send at least 2 requests to the WebDriver server in order to perform a command or assertion, the first one being the request to locate an element given a CSS selector (or Xpath expression) and the next to perform the actual command/assertion on the given element.
