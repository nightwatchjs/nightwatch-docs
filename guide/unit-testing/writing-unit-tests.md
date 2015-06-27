### Writing Unit Tests

Since version `0.6` it's possible to also write unit or integration tests in Nightwatch for Node.js applications and APIs. 
This concept is still very new to Nightwatch so bear in mind this feature is not yet as stable or as feature-rich as a mature unit testing framework.

#### Disabling automatic selenium session
Nightwatch automatically attempts to connect to the specified selenium server and create a session. 
When running unit tests this needs to be disabled by setting the `start_session` property to `false` inside the `selenium` settings group either on the root level or inside a specific environment.

#### Assertion framework
The `client` object bundles the <a href="https://nodejs.org/api/assert.html" target="_blank">Node.js Assert</a> module, same way as for end-to-end testing.
Custom commands and assertions are also loaded and made available, together with globals.

#### Example
Below there's a unit test for the `utils.js` Nightwatch module:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
var Utils = require('lib/util/utils.js');
module.exports = {
  testFormatElapsedTime : function(client) {
    var test = client.assert;

    var resultMs = Utils.formatElapsedTime(999);
    var resultSec = Utils.formatElapsedTime(1999);
    var resultMin = Utils.formatElapsedTime(122299, true);
    
    test.equal(resultMs, '999ms');
    test.equal(resultSec, '1.999s');
    test.equal(resultMin, '2m 2s / 122299ms');
  },

  testMakeFnAsync : function(client) {
    function asynFn(done) {
      done();
    }

    function syncFn() {}

    var test = client.assert;

    test.equal(Utils.makeFnAsync(1, asynFn), asynFn);

    var convertedFn = Utils.makeFnAsync(1, syncFn);
    convertedFn(function() {
      test.ok('converted fn called');
    });
  }
};
</code></pre>
</div>
