### Writing Unit Tests

Unit testing in Nightwatch has been refined in version `0.9`. Unit tests now written in Nightwatch are also fully compatible with [Mocha's Exports](https://mochajs.org/#exports) interface, so you can use either test runners.

#### Unit Tests Mode
Nightwatch automatically attempts to connect to the WebDriver server and create a session. When running unit tests this needs to be disabled and the runner needs to be made aware that it is operating in unit testing mode.

This can be done in two ways:

#### Setting unit_tests_mode=true

This is a global option. Set the `unit_tests_mode` option to `true` in the `nightwatch.json`:

<pre><code class="language-javascript">{
  <strong>"src_folders"</strong> : ["tests"],
  
  "unit_tests_mode": true
}</code></pre>

#### Adding @unitTest property per test

You can set the `@unitTest` property to true if you'd like to have individual test suites as unit tests.

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
const assert = require('assert');

module.exports = {
  '@unitTest' : true,

  'demo UnitTest' : function (done) {
    assert.equal('TEST', 'TEST');
    setTimeout(function() {
      done();
    }, 10);
  }
};
</code></pre>
</div>

#### Assertion framework
Starting with `0.9`, in the improved support for unit tests, the `browser` object is no longer passed as an argument to the test. The only argument passed now is the `done` callback to be used for asynchronous tests.

You can use whatever assertion framework you like. [Chai.js](http://chaijs.com/) is quite a good one and very flexible.

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
