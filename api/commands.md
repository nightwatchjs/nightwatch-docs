## API Commands

Nightwatch provides the basic WebDriver protocol mappings and also various composite commands to ensure a more fluent and convenient syntax for writing tests.

- composite commands - such as `getValue` or `isVisible`, usually incorporate two or more WebDriver protocol commands
- protocol commands - are most of the times simple mappings to the <a href="https://www.w3.org/TR/webdriver/" target="_blank">W3C WebDriver</a> protocol or, in some cases, its predecessor - the <a href="https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol" target="_blank">Selenium JsonWireProtocol</a> protocol.

Some of them are basic commands (such as `url` and `execute`) and others are internal commands being used by Nightwatch commands and assertions.

### Callback function
Each method below allows a `callback` argument to be passed as the last argument. The callback function will then be called after the command is completed with the main API (`browser`) as the context and the response object as argument.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">this.demoTest = function (browser) {
  browser.click("#main ul li a.first", function(result) {
    this.assert.ok(browser === this);
    this.assert.ok(typeof result == "object");
  });
};</code></pre></div>

### Promises in callbacks
If the callback happens to return a `Promise`, the test runner will wait for the promise to settle (i.e. resolve or reject) before continuing with the rest of the commands.
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">module.exports = {
  demoTest: function (browser) {
    browser
      .init()
      .getText("#main ul li", function(result) {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            console.log('Value:', result.value);
            resolve();
          }, 1000);
        });
      })
      .click('#login button');
  },
  demoTestAsync: async function(browser) {
    await browser.init();
    const text = await browser.getText("#main ul li", function(result) {
      return Promise.resolve(result.value);
    });              
    console.log('text', text);
  }
};</code></pre></div>

<p class="alert alert-warning">
If you're missing the individual command usage details, please note it has been moved into the dedicated command page (e.g. <a href="/api/clearValue.html">/api/clearValue.html</a>).
Simply click a command name to open its page.
</p>
