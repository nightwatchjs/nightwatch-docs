## Using Mocha as a Test Runner

### Overview
In Nightwatch 2, the integrated Mocha runner has been upgraded to use **Mocha v9** and also the implementation has been updated to match most of the features that Nightwatch offers in its own default test runner, like the ability to use tags or global test hooks.

#### Why Mocha?
Even though Nightwatch supports writing tests using the BDD _describe_ interface out of the box since version `1.3`, Mocha can still be an appealing choice given its tremendous popularity, longevity, and ease of use.

Mocha's support for advanced reporting is still unparalleled and so we've gone to great lengths of making sure that Mocha works a lot better with Nightwatch 2.

### Configuration
In order to use Mocha in Nightwatch you need to set the `test_runner` config property and set the type to `mocha`. Custom options for Mocha can also be specified:

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">{
  // other settings...
  test_runner: {
    type : 'mocha',
    options : {
      ui : 'bdd',
      reporter : 'list'
    }
  }
}
</code></pre></div>

Or simply:

<div class="sample-test"><i>nightwatch.conf.js</i><pre><code class="language-javascript">{
  test_runner : 'mocha'
}
</code></pre></div>

A complete list of Mocha options that are supported can be found [here](https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically#set-options).

The `test_runner` option can also be specified at test environment level:

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">{
  test_settings : {
    default: {
      test_runner: 'default'
    },

    mocha_tests: {
      test_runner : {
        type : "mocha",
        options : {
          ui : "bdd",
          reporter : "list"
        }
      }
    }
  }
}
</code></pre></div>

### CLI Options
Nightwatch supports some Mocha specific CLI options specified as arguments to the main nightwatch CLI tool. Some of them (like `retries`) have also behaviour defined in Nightwatch and when Mocha is used, Nightwatch will delegate them.

Here's the list of supported arguments presently:

- `--reporter`
- `--grep`
- `--fail-fast` - defined in Mocha as `--bail`
- `--retries`
- `--fgrep`
- `--invert`

**Example**:
<div class="sample-test"><pre><code class="language-bash">npx nightwatch examples/tests/ --reporter mochawesome</code></pre></div>

### Extended describe() Syntax
The new Mocha support in Nightwatch 2 has been built to match as close as possible the extended syntax which is available in the [built-in Nightwatch `describes()` syntax](https://nightwatchjs.org/guide/writing-tests/test-syntax-bdd.html).

Here's the complete syntax available when using Mocha in Nightwatch:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  // All current settings are available via this.settings
  // console.log('Settings', this.settings);

  // All current cli arguments are available via this.argv
  // console.log('argv', this.argv);

  // The current mocha options object
  // console.log('mochaOptions', this.mochaOptions);

  // All current globals are available via this.globals
  // console.log('globals', this.globals);

  // testsuite specific capabilities
  // this.desiredCapabilities = {};

  // Enable this if the current test is a unit/integration test (i.e. no Webdriver session will be created)
  // this.unitTest = false

  // Set this to false if you'd like the browser window to be kept open in case of a failure or error (useful for debugging)
  // this.endSessionOnFail = true

  // Set this to false if you'd like the rest of the test cases/test steps to be executed in the event of an assertion failure/error
  // this.skipTestcasesOnFail = true

  // this.suiteRetries(2);

  // Control the assertion and element commands timeout until when an element should be located or assertion passed
  // this.waitForTimeout(1000)

  // Control the unit test timeout 
  // this.timeout(1000)

  // Controll the polling interval between re-tries for assertions or element commands
  // this.waitForRetryInterval(100);

  before(function(browser) {
    this.homepage = browser.page.home();
  });

  it('startHomepage', () => {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.not.visible;
  });


  // Run only this testcase
  // it.only('startHomepage', () => {
  //   this.homepage.navigate();
  // });

  // skipped testcase: equivalent to xit()
  it.skip('async testcase', async browser => {
    const result = await browser.getText('#navigation');
    console.log('result', result.value)
  });

  after(browser => browser.end());
});</code></pre></div>

### Example
Writing a test in Mocha is the same as writing it in Nightwatch. Each testcase receives the `browser` object, `hooks` also receiving a `done` callback for async operations.

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers"><code class="language-javascript">describe('Google demo test for Mocha', function() {

  describe('with Nightwatch', function() {

    before(function(browser, done) {
      done();
    });

    after(function(browser, done) {
      browser.end(function() {
        done();
      });
    });

    afterEach(function(browser, done) {
      done();
    });

    beforeEach(function(browser, done) {
      done();
    });

    it('uses BDD to run the Google simple test', function(browser) {
      browser
        .url('https://google.com')
        .expect.element('body').to.be.present.before(1000);

      browser.setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
        .pause(1000)
        .assert.containsText('#main', 'Night Watch');
    });
  });
});
</code></pre>
</div>

### Using the mochawesome Reporter
[Mochawesome](https://github.com/adamgruber/mochawesome) is a very popular custom reporter for use with Mocha and it works out of the box with Nightwatch as well, when Mocha is being used as a test runner.

To use Mochawesome, simply configure Mocha as the `test_runner` using the above info and then install it from NPM using:

<div class="sample-test"><pre><code class="language-bash">npm i mochawesome --save-dev</code></pre></div>

To use it as a reporter simply pass the `--reporter mochawesome` argument as follows:

<div class="sample-test"><pre><code class="language-bash">npx nightwatch examples/tests/ --reporter mochawesome</code></pre></div>

#### Configure Reporter Options
Mochawesome reporter options can be defined in main Nightwatch config under the `reporterOptions` dictionary, inside the `test_runner`:

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">
{
  // ...
  test_runner: {
    type : 'mocha',
    options : {
      ui : 'bdd',
      reporter : 'mochawesome',
      reporterOptions: {
        reporterDir: './output'
      }
    }
  }
}
</code></pre></div>

#### Parallel Running
When running tests in parallel using test workers, you'll need to install some additional packages which `mochawesome` requires:

<div class="sample-test"><pre><code class="language-bash">npm install mochawesome-report-generator mochawesome-merge --save-dev</code></pre></div>

### Using mocha-junit-reporter
When using Mocha, the default built-in JUnit reporter from Nightwatch is not available, but a perfectly fine alternative is to use the popular [`mocha-junit-reporter`](https://www.npmjs.com/package/mocha-junit-reporter) instead.

You only need to install it from NPM and it's ready to go. You may optionally configure its settings, if needed, in the same way as the `mochawesome` reporter:

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">{
  // ...
  test_runner: {
    type : 'mocha',
    options : {
      reporterOptions: {
        reporterDir: './output'
      }
    }
  }
}
</code></pre></div>

<div class="sample-test"><pre><code class="language-bash">npm i mocha-junit-reporter --save-dev</code></pre></div>

To use it as a reporter simply pass the `--reporter mocha-junit-reporter` argument as follows:

<div class="sample-test"><pre><code class="language-bash">npx nightwatch examples/tests/ --reporter mocha-junit-reporter</code></pre></div>

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/writing-tests/using-cucumberjs.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Use CucumberJS</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/using-test-hooks.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Use test hooks</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>


