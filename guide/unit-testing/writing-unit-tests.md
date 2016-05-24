### Writing Unit Tests

Unit testing in Nightwatch has been refined in version `0.9`. Unit tests now written in Nightwatch are also fully compatible with [Mocha's Exports](https://mochajs.org/#exports) interface, so you can use either test runners. In fact, all Nightwatch's unit tests have been rewritten so they can be ran with either Nightwatch or Mocha.

<div class="alert alert-info">
For backwards compatibility reasons, to take advantage of the improved unit testing support you need to set the toggle setting `compatible_testcase_support` to `true` in your test settings.
</div>

Unit tests written in versions prior to `0.9` will still continue to work however we recommend upgrading them.

#### Disabling automatic selenium session
Nightwatch automatically attempts to connect to the specified selenium server and create a session.
When running unit tests this needs to be disabled by setting the `start_session` property to `false` inside the `selenium` settings group either on the root level or inside a specific environment.

#### Assertion framework
Starting with `0.9`, in the improved support for unit tests, the `client` object is no longer passed as an argument to the test. The only argument passed now is the `done` callback to be used for asynchronous tests.

You can use whatever assertion framework you like. [Chai.js](http://chaijs.com/) is quite a good one and very flexible. We use the internal Node.js `assert` module in the Nightwatch unit tests.

You can still refer the `client` object via `this.client` in your tests.

#### Example
Here's a subset of the unit test for the `utils.js` Nightwatch module:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
var assert = require('assert');
var common = require('../../common.js');
var Utils = common.require('util/utils.js');

module.exports = {
  'test Utils' : {
    testFormatElapsedTime : function() {

      var resultMs = Utils.formatElapsedTime(999);
      assert.equal(resultMs, '999ms');

      var resultSec = Utils.formatElapsedTime(1999);
      assert.equal(resultSec, '1.999s');

      var resultMin = Utils.formatElapsedTime(122299, true);
      assert.equal(resultMin, '2m 2s / 122299ms');
    },

    testMakeFnAsync : function() {
      function asyncFn(cb) {
        cb();
      }

      function syncFn() {}

      var convertedFn = Utils.makeFnAsync(1, syncFn);
      var called = false;
      convertedFn(function() {
        called = true;
      });

      assert.equal(Utils.makeFnAsync(1, asyncFn), asyncFn);
      assert.ok(called);
    }
  }
};

</code></pre>
</div>
