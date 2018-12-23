### External Globals

Most of the time it's more useful to have your globals defined in an external file, specified in the `globals_path` property, instead of having them defined in `nightwatch.json`.

You can overwrite globals per environment as needed. Say you have your tests running locally and also against a remote staging server. Most of the times you will need some different setting up.

#### Global Hooks
The same set of hooks as per test suite is also available globally, outside the scope of the test. See the below example for more details.
In the case of global hooks, the `beforeEach` and `afterEach` refers to a test suite (i.e. test file), and are ran before and after a _test suite_.

#### Global Settings
There are a number of globals which are holding test settings and can control test execution. These are detailed in the provided [globalsModule](https://github.com/nightwatchjs/nightwatch/blob/master/examples/globalsModule.js) sample.

#### Example:
<div class="sample-test">
<pre><code class="language-javascript">
module.exports = {
  'default' : {
    isLocal : true,
  },

  'integration' : {
    isLocal : false
  },

  // External before hook is ran at the beginning of the tests run, before creating the Selenium session
  before: function(done) {
    // run this only for the local-env
    if (this.isLocal) {
      // start the local server
      App.startServer(function() {
        // server listening
        done();
      });
    } else {
      done();
    }
  },

  // External after hook is ran at the very end of the tests run, after closing the Selenium session
  after: function(done) {
    // run this only for the local-env
    if (this.isLocal) {
      // start the local server
      App.stopServer(function() {
        // shutting down
        done();
      });
    } else {
      done();
    }
  },

  // This will be run before each test suite is started
  beforeEach: function(browser, done) {
    // getting the session info
    browser.status(function(result) {
      console.log(result.value);
      done();
    });
  },

  // This will be run after each test suite is finished
  afterEach: function(browser, done) {
    console.log(browser.currentTest);
    done();
  }
};</code></pre>
</div>

#### Global Reporter
The global reporter is invoked before calling the built-in junit reporter (or a custom reporter specified using the `--reporter` CLI option).

#### Example:
<div class="sample-test">
<pre><code class="language-javascript">
module.exports = {
  reporter : function(results, cb) {
    console.log('results', results);
    cb();
  }
};</code></pre>
</div>
