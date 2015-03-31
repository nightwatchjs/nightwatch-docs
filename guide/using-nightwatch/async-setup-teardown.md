### Asynchronous before[Each] and after[Each]

All the `before[Each]` and `after[Each]` methods can also perform asynchronous operations, in which case they will require the `callback` passed as the second argument.

<div class="alert alert-warning">
The <code>done</code> function <strong>must be called</strong> as the last step when the async operation completes. Not calling it will hang the test runner.
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