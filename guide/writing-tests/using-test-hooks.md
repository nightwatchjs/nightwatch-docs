---
title: Nightwatch test hooks 
description: Learn how to Nightwatch standard test hooks such as before, after, before each and after each.
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Using test hooks</h2></div>

Nightwatch provides the standard `before`/`after` and `beforeEach`/`afterEach` hooks to be used in the tests.

### before, beforeEach, after, afterEach

The `before` and `after` will run before and after the execution of the test suite respectively, while `beforeEach` and `afterEach` are ran before and after each testcase (test step).

All methods have the Nightwatch instance passed as argument.

#### Example:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  beforeEach : function(browser) {

  },

  afterEach : function(browser) {

  },

  'step one' : function (browser) {
    browser
     // ...
  },

  'step two' : function (browser) {
    browser
    // ...
      .end();
  }
};</code></pre>
</div>

In the example above the sequence of method calls will be as follows: `before(), beforeEach(), "step one", afterEach(), beforeEach(), "step two", afterEach(), after()`.

<h3 id="asynchronous-test-hooks">Asynchronous before[Each] and after[Each]</h3>

All the `before[Each]` and `after[Each]` methods can also perform asynchronous operations, in which case they will require the `callback` passed as the second argument.

<div class="alert alert-warning">
The <code>done</code> function <strong>must be called</strong> as the last step when the async operation completes. Not calling it will result in a timeout error.
</div>

<h4>Example with beforeEach &amp; afterEach:</h4>
<div class="sample-test">
<pre class="line-numbers"><code class="language-javascript">module.exports = {
  beforeEach: function(browser, done) {
    // performing an async operation
    setTimeout(function() {
      // finished async duties
      done();
    }, 100);
  },

  afterEach: function(browser, done) {
    // performing an async operation
    setTimeout(function() {
      // finished async duties
      done();
    }, 200);
  }
};</code></pre>
</div>

#### Controlling the `done` invocation timeout
By default the `done` invocation timeout is set to 10 seconds (2 seconds for unit tests). In some cases this might not be sufficient and to avoid a timeout error, you can increase this timeout by defining an `asyncHookTimeout` property (in milliseconds) in your external globals file (see below for details on external globals).

For an example, refer to the provided [globalsModule](https://github.com/nightwatchjs/nightwatch/blob/main/examples/globalsModule.js#L20) example.

#### Explicitly failing the test
Failing the test intentionally in a test hook can be achieved by calling `done` with an `Error` argument:

<div class="sample-test">
<pre class="line-numbers"><code class="language-javascript">module.exports = {
  afterEach: function(browser, done) {
    // performing an async operation
    performAsync(function(err) {
      if (err) {
        done(err);
        return;
      }
      // ...
    });
  }
};</code></pre>
</div>

### Global Test Hooks

The same set of test hooks as per test suite is also available globally, outside the scope of the test. Refer to the next section for details.

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/writing-tests/using-mocha.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Use Mocha as a test runner</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/using-test-globals.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Use test globals</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>