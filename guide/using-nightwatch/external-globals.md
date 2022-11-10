## External Globals

Globals are a useful concept which Nightwatch provides to be used for data operations between or outside of test runs. For a complete overview of what globals are and how they can be used, please refer to the [Using test globals](https://v2.nightwatchjs.org/guide/using-nightwatch/concepts.html#using-test-globals) page in the Getting Started section. 

Most of the time it's more useful to have your globals defined in an external file, specified in the `globals_path` config settings, instead of having them defined directly in the config file.

<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">module.exports = {
  globals_path: './nightwatch/globals.js'
};</code></pre></div>

You can overwrite globals per environment as needed. Say you have your tests running locally and also against a remote staging server. Most of the times you will need some different setting up.

#### Example:
<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">module.exports = {
  'default' : {
    isLocal : true,
  },

  'integration' : {
    isLocal : false
  }
};</code></pre></div>

#### Global Test Settings

For scenarios where greater flexibility is needed, there are a number of globals which are holding test settings and can control test execution.

Here's the entire global object with the default values, which can be overwritten as needed. You can also view the source code on Github: [github.com/nightwatchjs/nightwatch/blob/main/lib/settings/defaults.js](https://github.com/nightwatchjs/nightwatch/blob/main/lib/settings/defaults.js).

<div class="sample-test">

<pre class="line-numbers"><code class="language-javascript">module.exports = {
  // An object which will be made available on the main test api, throughout the test execution
  globals: {
    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: true,

    // this controls whether to abort the test execution when an element cannot be located; an error
    // is logged in all cases, but this also enables skipping the rest of the testcase;
    // it's being used in element commands such as .click() or .getText()
    abortOnElementLocateError: false,

    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval: 500,

    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout: 5000,

    // since 1.4.0 – this controls whether to abort the test execution when an element cannot be located; an error
    // is logged in all cases, but this also enables skipping the rest of the testcase;
    // it's being used in element commands such as .click() or .getText()
    abortOnElementLocateError: false,
    
    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned: false,

    // By default a warning is printed if multiple elements are found using the given locate strategy
    // and selector; set this to true to suppress those warnings
    suppressWarningsOnMultipleElementsReturned: false,

    // controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout : 10000,

    // controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
    // or an error is thrown
    unitTestsTimeout : 2000,

    // controls the timeout value for when executing the global async reporter. Expects the done() callback to be invoked within this time
    // or an error is thrown
    customReporterCallbackTimeout: 20000,

    // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
    retryAssertionTimeout: 5000,

    reporter: function(results, cb) {cb(results);}
  }
};</code></pre>

</div>

### Global Test Hooks
The same set of hooks as per test suite is also available globally, outside the scope of the test. In the case of global hooks, the `beforeEach` and `afterEach` refers to a test suite (i.e. test file), and are ran before and after a _test suite_.

#### Global before[Each] and after[Each]

You can also have global `before` and `after` [asynchronous] methods that can perform an operation before starting the test runner and right before exiting, when all the tests have finished executing.

Similarly, global `beforeEach` and `afterEach` will be invoked before and after each test suite (i.e. test file). These ones do receive the Nightwatch `browser` object.

The methods are defined in the external `globals` file and invoked using the `globals` object as context. The `callback` is the only argument passed and **must be called** when the operation finishes.

#### Example:
<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">module.exports = {
  'default' : {
    isLocal : true,
  },

  'integration' : {
    isLocal : false
  },

  // External before hook is ran at the beginning of the tests run, before creating the Selenium session
  before(done) {
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
  after(done) {
    // run this only for the local-env
    if (this.isLocal) {
      // stop the local server
      App.stopServer(function() {
        // shutting down
        done();
      });
    } else {
      done();
    }
  },

  // This will be run before each test suite is started
  beforeEach(browser, done) {
    // getting the session info
    browser.status(function(result) {
      console.log(result.value);
      done();
    });
  },

  // This will be run after each test suite is finished
  afterEach(browser, done) {
    console.log(browser.currentTest);
    done();
  },
  
  // Called right after the command .navigateTo() is finished
  async onBrowserNavigate(browser) {
    return Promise.resolve();
  },

  // Called right before the command .quite() is finished
  async onBrowserQuit(browser) {
    return Promise.resolve();
  }
};</code></pre></div>

#### Global Reporter
The global reporter is invoked at the end of the test run, before calling the built-in jUnit reporter (or a custom reporter specified using the `--reporter` CLI option). An object containing the test results is passed as an argument.

#### Example:
<div class="sample-test">
<pre class="line-numbers"><code class="language-javascript">module.exports = {
  reporter : function(results, cb) {
    console.log('results', results);
    cb();
  }
};</code></pre>
</div>

### Further Reading:
- [Using Test Globals](https://nightwatchjs.org/guide/using-nightwatch/concepts.html#using-test-globals)
- Previous: [Test Hooks](https://nightwatchjs.org/guide/using-nightwatch/using-test-hooks.html)
