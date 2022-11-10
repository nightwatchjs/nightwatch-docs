<div class="page-header"><h2>Writing Unit Tests with Nightwatch</h2></div>

### Overview

Unit testing in Nightwatch has been available since version `0.9` and unit tests written in Nightwatch are also fully compatible with [Mocha's Exports](https://mochajs.org/#exports) interface, so you can use either test runners.

### Unit Tests Mode
Nightwatch automatically attempts to connect to the WebDriver server and create a session. When running unit tests this needs to be disabled and the runner needs to be made aware that it is operating in unit testing mode.

This can be done in two ways:

#### 1. Setting unit_tests_mode=true

This is a global option. Set the `unit_tests_mode` option to `true` in the `nightwatch.json`:

<pre><code class="language-javascript">{
  <strong>"src_folders"</strong> : ["tests"],
  
  "unit_tests_mode": true
}</code></pre>

#### 2. Adding @unitTest property per test

You can set the `@unitTest` property to true if you'd like to have individual test suites as unit tests.

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">const assert = require('assert');

module.exports = {
  '@unitTest': true,

  'demo UnitTest' : function (done) {
    assert.equal('TEST', 'TEST');
    setTimeout(function() {
      done();
    }, 10);
  }
};
</code></pre>
</div>

### Choose an assertion framework
For unit tests, the `browser` object is not passed as an argument to the test case. The only argument passed is the `done` callback to be used for asynchronous tests.

You can use whatever assertion framework you like. [Chai.js](https://chaijs.com/) is quite a good one and very flexible.

### Example
Here's a subset of the unit test for the `utils.js` Nightwatch module:

<div class="sample-test"><i>tests/utilsTest.js</i>
<pre data-language="javascript"><code class="language-javascript">const assert = require('assert');
const common = require('../../common.js');
const Utils = common.require('util/utils.js');

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

### Using a Combined Configuration

Below is an example of how you can combine end-to-end tests and unit tests in the same `nightwatch.json` configuration file.
Notice the usage of `exclude` and `filter` properties.

An empty `exclude` means we want to reset its value and rely only on `filter`.
<div class="sample-test"><i>nightwatch.json</i>
<pre><code class="language-javascript">{
  <strong>"src_folders"</strong> : ["./examples/tests", "./examples/unittests"],
  <strong>"output_folder"</strong> : "./examples/reports",

  
  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  <strong>"test_settings"</strong> : {
    "default" : {
      "launch_url" : "http://localhost",
      "desiredCapabilities": {
        "browserName": "chrome"
      },
      "exclude" : "./examples/unittests/*"
    },

    "unittests" : {
      "unit_tests_mode" : true,
      "filter" : "./examples/unittests/*",
      "exclude" : ""
    }
  }
}</code></pre></div>

### Code Coverage
At the moment, Nightwatch doesn't provide a coverage reporter but it is something that's being planned for a future release.
In the meantime you can write a custom reporter which will output coverage data. See the [custom reporter](https://nightwatchjs.org/guide#custom-reporter) section for details and the [Mocha HTMLCov](https://mochajs.org/#htmlcov) reporter for how the reporter should look like.

#### 3rd party coverage service
There are some hosted services which provide the reporting and metrics for you in a modern web interface. These services will typically require coverage data in LCOV format. Nightwatch uses [coveralls.io](https://coveralls.io/github/nightwatchjs/nightwatch?branch=main).

For details on how an LCOV reporter should look like and how to integrate with your project, you can check out the [mocha-lcov-reporter](https://www.npmjs.com/package/mocha-lcov-reporter).

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/writing-tests/write-component-tests-for-react.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Write component tests (React)</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/chrome-devtools-recorder.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Using Chrome Devtools Recorder</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
