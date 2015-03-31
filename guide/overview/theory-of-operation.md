### Theory of Operation

Nightwatch works by sending HTTP requests to the Selenium server with the right parameters and interpreting the response. The restful API protocol is defined by the [Selenium JsonWireProtocol](http://code.google.com/p/selenium/wiki/JsonWireProtocol#/session). See below for an example workflow for browser initialization.

![Theory of Operation](http://nightwatchjs.org/img/operation.png)

Most of the times, Nightwatch needs to send at least 2 requests to the Selenium server in order to perform a command or assetion, the first one being the request to locate an element given a CSS selector (or Xpath expression) and the next to perform the actual command/assertion on the given element.