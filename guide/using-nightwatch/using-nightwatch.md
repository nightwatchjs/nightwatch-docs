## Using Nightwatch

### Writing Tests

Using the preferred CSS selector model to locate elements on a page, Nightwatch makes it very easy to write automated End-to-End tests.

Create a separate folder for tests in your project, e.g.: `tests`. Each file inside it will be loaded as a test suite by the Nightwatch test runner. Here's a basic test suite example:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};</code></pre>
</div>
<br>
<p class="alert alert-warning">
Remember **always** to call the `.end()` method when you want to close your test, in order for the browser session to be properly closed.
</p>

A test can have multiple steps, if needed:<br><br>

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'step one: navigate to google' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]', 1000)
  },

  'step two: click input' : function (browser) {
    browser
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};</code></pre></div>

Tests could also be written in this format:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">this.demoTestGoogle = function (browser) {
  browser
    .url('https://www.google.com')
    .waitForElementVisible('body', 1000)
    .setValue('input[type=text]', 'nightwatch')
    .waitForElementVisible('input[name=btnK]', 1000)
    .click('input[name=btnK]')
    .pause(1000)
    .assert.containsText('#main', 'The Night Watch')
    .end();
};</code></pre>
</div>

### Using ES6 async/await [beta]

Starting with version `v1.1` it is also possible to write tests as an ES6 [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).
Simply by doing so, it will enable the API commands to return a promise and thus making it possible to use the [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator to retrieve the result, instead of the callback, as it is now.

This greatly improves the readability and ease of writing of tests. However, please note that it will no longer be possible to chain the API commands when using an async function.

<div class="alert alert-info">
  The `assert` and `expect` APIs will still work as before `v1.1` and they will support chaining, since the assertions do not return anything.
</div>

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'demo test async': async function (browser) {
    // get the available window handles
    const result = await browser.windowHandles();
    console.log('result', result);

    // switch to the second window
    // await is not necessary here since we're not interested in the result
    browser.switchWindow(result.value[1]);
  }
};</code></pre></div>

#### Callbacks and async testcases

Callbacks can still be used as before and if the callback returns a `Promise`, the result of the promise will be the result of the command. See below for an example:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'demo test async': async function (browser) {
    // get the available window handles
    const value = await browser.windowHandles(function(result) {
      // we only want the value, not the entire result object
      return Promise.resolve(result.value);
    });
    
    console.log('value', value);

    // switch to the second window
    browser.switchWindow(value[1]);
  }
};</code></pre></div>

### Using XPath selectors

Nightwatch supports xpath selectors also. To switch to xpath instead of css selectors as the locate strategy, in your test call the method `useXpath()`, as seen in the example below. To switch back to CSS, call `useCss()`.

To always use xpath by default set the property `"use_xpath": true` in your test settings.

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">this.demoTestGoogle = function (browser) {
  browser
    .useXpath() // every selector now must be xpath
    .click("//tr[@data-recordid]/span[text()='Search Text']")
    .useCss() // we're back to CSS now
    .setValue('input[type=text]', 'nightwatch')
};</code></pre>
</div>

### Expect Assertions

The Nightwatch API supports out of the box a BDD-style `expect` assertion library which greatly improves the flexibility as well as readability of the assertions.

The `expect` assertions use a subset of the `Expect` api from the [Chai framework](https://chaijs.com/api/bdd/) and are available for elements only at this point. Here's an example:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://google.no')
      .pause(1000);

    // expect element <body> to be present in 1000ms
    browser.expect.element('body').to.be.present.before(1000);

    // expect element <#lst-ib> to have css property 'display'
    browser.expect.element('#lst-ib').to.have.css('display');

    // expect element <body> to have attribute 'class' which contains text 'vasq'
    browser.expect.element('body').to.have.attribute('class').which.contains('vasq');

    // expect element <#lst-ib> to be an input tag
    browser.expect.element('#lst-ib').to.be.an('input');

    // expect element <#lst-ib> to be visible
    browser.expect.element('#lst-ib').to.be.visible;

    browser.end();
  }
};
</code></pre>
</div>

<br>
The `expect` interface provides a much more flexible and fluid language for defining assertions, significantly improved over the existing `assert` interface. The only downside is that it's not possible to chain assertions anymore and at this point custom messages aren't yet supported.

<br>
For a complete list of available `expect` assertions, refer to the [API docs](/api/#expect-api).

