### Asynchronous before[Each] and after[Each]

All the `before[Each]` and `after[Each]` methods can also perform asynchronous operations, in which case they will require the `callback` passed as the second argument.

<div class="alert alert-warning">
The <code>done</code> function <strong>must be called</strong> as the last step when the async operation completes. Not calling it will result in a timeout error.
</div>

<h4>Example with beforeEach &amp; afterEach:</h4>
<div class="sample-test">
<pre><code class="language-javascript">
module.exports = {
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

For an example, refer to the provided [globalsModule](https://github.com/nightwatchjs/nightwatch/blob/master/examples/globalsModule.js#L20) example.

#### Explicitly failing the test
Failing the test intentionally in a test hook is achievable by simply calling `done` with an `Error` argument:

<div class="sample-test">
<pre><code class="language-javascript">
module.exports = {
  afterEach: function(browser, done) {
    // performing an async operation
    performAsync(function(err) {
      if (err) {
        done(err);
      }
      // ...
    });
  }
};</code></pre>
</div>