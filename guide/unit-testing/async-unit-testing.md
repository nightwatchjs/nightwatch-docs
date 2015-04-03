### Asynchronous Unit Tests

The second argument to a test function, if provided, is the `done` callback which signals the test is complete.
If present, the callback must be called when the async operation finishes.

#### Example
Below there's a unit test for the `utils.js` Nightwatch module:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'demo UnitTest' : function (client, done) {
    client.assert.ok('TEST');
    
    setTimeout(function() {
      done();
    }, 500);
  }
};
</code></pre>
</div>