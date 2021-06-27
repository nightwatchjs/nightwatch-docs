---
title: A First Look at Nightwatch v2.0
author: Andrei Rusu
author_title: Author and maintainer of Nightwatch
author_url: https://github.com/beatfactor
author_image_url: https://avatars.githubusercontent.com/u/419506?v=4
tags: [nightwatch-v2]
description: A new chapter for Nightwatch.js awaits.
draft: false
date: 2021-06-23
image: https://nightwatchjs.org/img/blog/first-look-nightwatch-v2-preview.png
hide_table_of_contents: false
---

Welcome to the new Nightwatch engineering blog, which will contain the latest updates and developments around the Nightwatch project. It will also serve as a resource for tutorials and other kinds of related material. The content will be written and curated by the Nightwatch team, but it may also feature occasional guests posts written by our friends and collaborators.

### Background

Nightwatch was published at the beginning of 2014 and was created as a complete and integrated framework which would enable engineers to write end-to-end tests quickly and without headaches. While writing it, we were guided by the belief that writing and running automated UI tests should be a straightforward and pleasant task, and should require as little configuration and maintenance as possible. 

The task of interacting with browser internals was already handled by the [Selenium][1] project and working with the Selenium server via an HTTP based api was a straightforward task. And so Nightwatch was born by bringing together various existing tools and techniques into one easy-to-use integrated solution.

Seven years later, the open-source testing space for Node.js looks quite different. Several new frameworks appeared over the past few years, each of which is bringing their own set of capabilities to the table and their own interpretation over how automated testing should be done. 

Meanwhile, the Selenium [json-wire protocol][2] has transition into the [W3C Webdriver][3] standard which is now implemented by all major  browsers. As far as Nightwatch is concerned, the strategy hasn’t changed that much. In fact, I personally am even more confident to say that, as an open-source project, Nightwatch has now entered the next major phase in its development and maturity.

The strategy for Nightwatch still remains that we should build the solution using tried-and-tested existing tools and techniques in the automation space instead of going our separate way. The Selenium project (which also includes Webdriver) has been around for more than a decade and has consistently refined and evolved how browser automation works, both on local development environments but also at scale, on large distributed cloud infrastructures. That’s why working in collaboration with the Selenium ecosystem makes me confident to say that Nightwatch will not only deliver on its promises but will even surpass expectations.

### Nightcloud.io

Another important update perhaps is that we have stopped developing our own cloud testing platform – [Nightcloud.io][4]. We were supposed to launch an initial public beta last year, but we've pulled the plug on it I'm afraid. This is due to various reasons, but the main one I suppose is that we – the team at [Pineview.io][5] – didn't see enough demand for it to justify the investment. We decided to focus on Nightwatch alone and try and make it the most sophisticated and user-friendly open-source testing framework out there.

### Nightwatch V2

Which brings me to the most exciting part of this article I believe. Work is already under way for the next major update – Nightwatch v2, which should land in the public NPM channel by this fall. An alpha version will be available this August. 

We are completely reworking the transport layer to use the official [Selenium Webdriver][6] bindings for Node.js, which means more seamless browser integration, better and more reliable DOM element handling, and overall more stable and faster tests. Nightwatch v1.x will still be supported and we’ll issue regular patch updates for critical issues. We’ll also try to make the upgrade from Nightwatch v1.5 or higher to v2 as smooth as possible and we’ll try to not introduce any major breaking changes.

Here’s some of the new features in v2 which you might find attractive:
##### • Support for Actions API
The [Actions api][7] provides a more reliable method for generating complex user gestures and will be a built-in feature in Nightwatch (via the existing `.perform()` command).

##### • Expanded automatic command retries
In the current version, Nightwatch only supports retrying failed element retrieval operations, but in v2 it will also retry failed element commands (such as when click encounters errors like `element click intercepted`).

##### • New relative element locators
The new Selenium 4 [relative locators][8] will be available by default in Nightwatch as well as improved existing locators via the Selenium [By()][9] api. 

##### • Built-in support for working with file uploads
Currently uploading files with Nightwatch can be cumbersome, but in v2 we’ll add a built-in command which works with the [FileDetector api][10].

##### • Support for extended Capabilities objects
The primary way of defining capabilities will still be as part of the `nightwatch.conf.js` config file, but in v2, all capabilities objects created with the Selenium [Capabilities][11] api will be also be supported by default. 

##### • Setting network conditions in Chrome
Manipulating network conditions is a regularly needed feature when working with browser automation and we’ll be able to support it in v2 for Chrome and Edge initially.

##### • Support for working with Devtools Protocol
The [Chrome DevTools Protocol][12] allows for tools to instrument, inspect, debug and profile Chromium-based browsers, such as Chrome and Edge, and we’ll add this capability in Nightwatch v2. 

##### • Ready for Webdriver BiDi
The new [BiDirectional WebDriver Protocol][13] is by far one of the most exciting recent developments in the Selenium project and it likely to deliver improvements in speed and stability that far outweigh expectations. As soon as it is available, it will become part of Nightwatch as well. You can follow the development on the [Selenium website][14]. 

##### • Various new command APIs
Nightwatch v2 will also bring a new `.ensure` assert api which will mirror the [Selenium until][15] apis, global `element()`, `expect()`, `by()`, and `browser` objects which will enhance the experience of writing tests and provide more flexibility.

##### • Test runner improvements
Nightwatch v2 will also bring some improvements to the test runner, like ability to re-run only failed tests and improved support for parallel test execution.

The list above is not exhaustive and it might change until the initial public release of version 2. You can also review the updates published in [Nightwatch v1.7][16] in case you may have missed anything. 

### Tell Us Your Opinion
We are also considering other new features, APIs, and integration with other tools like Appium or Playwright. It would be very helpful if you’d take the time to fill in [this short survey][17] and tell us about features you are using or would like to see in the new version. Please do share it with your team.

Thanks for reading. Please make sure to [star the project][18] on Github and also to follow us on Twitter; we're at [@nightwatchjs][19].

[1]:	https://selenium.dev
[2]:	https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
[3]:	https://www.w3.org/TR/webdriver/
[4]:	https://nightcloud.io
[5]:	https://pineview.io
[6]:	https://www.npmjs.com/package/selenium-webdriver
[7]:	https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html
[8]:	https://www.selenium.dev/documentation/en/webdriver/locating_elements/#relative-locators
[9]:	https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html
[10]:	https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_FileDetector.html
[11]:	https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Capabilities.html
[12]:	https://chromedevtools.github.io/devtools-protocol/
[13]:	https://w3c.github.io/webdriver-bidi/
[14]:	https://www.selenium.dev/documentation/en/webdriver/bidi_apis/
[15]:	https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html
[16]:	https://github.com/nightwatchjs/nightwatch/releases/tag/v1.7.3
[17]:	https://forms.gle/ahi2bTk7Kz4og8VK9
[18]:	https://github.com/nightwatchjs/nightwatch
[19]:	https://twitter.com/nightwatchjs