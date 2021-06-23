### Using Nightwatch with WebdriverIO (BETA)

[Webdriver.io](https://webdriver.io/) is another popular automated testing framework based on Node.js and the Selenium Webdriver protocol. It is generally considered to be more flexible and has more plugins available, but the framework itself appears to be more barebones and less integrated than Nightwatch.

Starting with **v1.5**, Nightwatch makes it possible to use the WebdriverIO versatile APIs directly into the Nightwatch tests, thus providing the ability to combine the two frameworks together instead of choosing one or the other.
You will need to disable the Nightwatch session before the test. The Nightwatch assertions accept now element objects which are retrieved using the WebdriverIO apis. See below for an example. 
 
The implementation is still in its early stage and we are relying on feedback from the community on how to move forward with this initiative, if it is indeed something that users require. Please feel free to drop us a line on [Twitter](https://twitter.com/nightwatchjs) or on the [Gitter Chat](https://gitter.im/nightwatchjs/nightwatch).

#### Example

<div class="sample-test">
<pre><code class="language-javascript">
const {remote} = require('webdriverio');

describe('Demo Test WebdriverIO', function() {
  let browser;
  this.settings.start_session = false;

  before(async () => {
    delete this.desiredCapabilities.name; // W3C protocol doesn't appear to like this capability

    browser = await remote({
      logLevel: this.argv.verbose ? 'trace' : 'warn', // if --verbose flag was passed to nightwatch cli tool
      capabilities: this.desiredCapabilities
    });
  });

  it('demo test', async function(nightwatch) {
    await browser.url('https://duckduckgo.com');
    const inputElem = await browser.$('#search_form_input_homepage')
    await inputElem.setValue('WebdriverIO')

    // The Nightwatch expect/assert APIs are now accepting elements retrieved using the WebdriverIO apis
    await nightwatch.assert.visible(inputElem);
    await nightwatch.expect.element(inputElem).visible;
    
    const submitBtn = await browser.$('#search_button_homepage')
    await submitBtn.click();

    // You can also use third-party assertion libraries; here the built-in assert library is used
    const titleResult = await browser.getTitle();
    assert.strictEqual(titleResult, 'Title is: WebdriverIO (Software) at DuckDuckGo');
  });

  after(async () => {
    await browser.deleteSession();
    this.settings.start_session = true;
  });
});
</code></pre>
</div>

- Previous: [Using Nightwatch with the selenium-webdriver Library](/guide/extending-nightwatch/using-with-selenium-webdriver.html)
