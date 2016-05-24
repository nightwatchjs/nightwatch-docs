### Asynchronous Unit Tests

The argument to the test function is the optional `done` callback which signals the test is complete.
If present, the callback must be called when the async operation finishes.

#### Example
Here's unit test which checks if Nightwatch throws an error if you don't invoke the `done` callback within a set time (10 ms).

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  var path = require('path');
  var assert = require('assert');
  var common = require('../../common.js');
  var CommandGlobals = require('../../lib/globals/commands.js');
  var Runner = common.require('runner/run.js');

  module.exports = {
    'testRunner': {
      before: function (done) {
        CommandGlobals.beforeEach.call(this, done);
      },

      after: function (done) {
        CommandGlobals.afterEach.call(this, done);
      },

      beforeEach: function () {
        process.removeAllListeners('exit');
        process.removeAllListeners('uncaughtException');
      },

      'test async unit test with timeout error': function (done) {
        var testsPath = path.join(__dirname, '../../asynchookstests/unittest-async-timeout.js');
        var globals = {
          calls : 0,
          asyncHookTimeout: 10
        };

        process.on('uncaughtException', function (err) {
          assert.ok(err instanceof Error);
          assert.equal(err.message, 'done() callback timeout of 10 ms was reached while executing "demoTest". ' +
            'Make sure to call the done() callback when the operation finishes.');

          done();
        });

        var runner = new Runner([testsPath], {
          seleniumPort: 10195,
          silent: true,
          output: false,
          persist_globals : true,
          globals: globals,
          compatible_testcase_support : true
        }, {
          output_folder : false,
          start_session : false
        });

        runner.run().catch(function(err) {
          done(err);
        });
      }
    }
  };
};
</code></pre>
</div>

The complete test suite can be viewed on GitHub:
https://github.com/nightwatchjs/nightwatch/tree/master/test/src/runner/testRunner.js
