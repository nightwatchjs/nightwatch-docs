### Asynchronous Unit Tests

The argument to the test function is the optional `done` callback which signals the test is complete.
If present, the callback must be called when the async operation finishes.

#### Example
Here's unit test which checks if Nightwatch throws an error if you don't invoke the `done` callback within a set time (10 ms).

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  const assert = require('assert');
  
  module.exports = {
    'demo UnitTest' : function (done) {
      assert.equal('TEST', 'TEST');
    
      setTimeout(function() {  
        done();
      }, 10);
    }
  };
};
</code></pre>
</div>
