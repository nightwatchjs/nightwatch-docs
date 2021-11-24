---
title: Using WebDriver BiDi in Nightwatch
author: Andrei Rusu
author_title: Author and maintainer of Nightwatch
author_url: https://github.com/beatfactor
author_image_url: https://avatars.githubusercontent.com/u/419506?v=4
tags: [nightwatch-v2]
description: Nightwatch v2.0 is now in alpha and available in NPM.
draft: true
date: 2021-09-08
image: https://nightwatchjs.org/img/blog/nightwatch-v2-alpha
link_to_discussions: https://github.com/nightwatchjs/nightwatch-docs/discussions/132
---

### Using WebDriver BiDi in Nightwatch
The `[WebDriver BiDi](https://www.selenium.dev/documentation/webdriver/bidi_apis/)` is the new protocol for 
communicating with browsers, defined as a new [W3C spec](https://w3c.github.io/webdriver-bidi/), currently in progress. 

Early support is available in Selenium 4 and it is already available in ChromeDriver via the [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/).

WebDriver Bidi allows users to capture events from the browser as they happen rather than using the traditional 
approach of request/response that WebDriver is using for other APIs.

Internally WebDriver will create a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) connection to the browser for events and commands to be transmitted.

**Example:**
```js
describe('demo webdriver bidirectional', function() {

  it('samepl test bidi', async function(browser) {
    await browser.url('http://local.nightwatchjs.org/__e2e/window/');
    
    
    browser
      .url('https://nightwatchjs.org')
      .waitForElementVisible('body')
      .perform(function() {
        this.driver.manage().logs().get('browser').then(result => {
          console.log('Browser logs:', result)
        })
      });
  });

  it('get browser logs – with ES6 async/await', async function() {
    await browser.url('https://nightwatchjs.org').waitForElementVisible('body');
    const logs = await browser.driver.manage().logs().get('browser');

    console.log('Browser logs:', logs)
  });
  
});
 ```