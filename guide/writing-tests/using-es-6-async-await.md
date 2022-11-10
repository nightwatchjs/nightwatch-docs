---
title: ES6 async/await
description: Learn how to use the `async` function with Nightwatch
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Using ES6 async/await</h2></div>

### Overview
Starting with Nightwatch version `1.1`, you can write tests as an ES6 [async function][8].

The `async` function enables the API commands to return a promise and makes it possible to use the [`await`][9] operator to retrieve the result, instead of the callback, as it is by default.

Use of `async` function greatly improves the readability and ease of writing of tests. Starting Nightwatch version 1.7, chaining the API commands when using an `async` function is also supported.

### Example
<div class="sample-test"><i>tests/exampleTest.js</i>
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

### Using Callbacks with async

Callbacks can still be used as before and if the callback returns a `Promise`, the result of the promise is the result of the command as shown in the following exammple code:

<div class="sample-test"><i>tests/exampleTest.js</i>
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

### Recommended content
- [Writing tests > BDD describe test syntax](https://nightwatchjs.org/guide/writing-tests/test-syntax-bdd.html)
- [Writing tests > Exports test syntax](https://nightwatchjs.org/guide/writing-tests/test-syntax-exports.html)
- [Finding & interacting with DOM Elements](https://nightwatchjs.org/guide/writing-tests/finding-interacting-with-dom-elements.html)


[8]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
[9]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/writing-tests/test-syntax-exports.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Exports test syntax</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/finding-interacting-with-dom-elements.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Find & interact with DOM elements</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
