## Programmatic API

When included as a regular library package, Nightwatch exports an API through which it may be used programmatically. 

You don't need to specify a configuration file, although starting with v1.3, one will be created by default (`nightwatch.conf.js`). The `runTests()` public method which may be used for running tests inside a custom runner or a script. The return value is a `Promise`. 

#### Syntax
<pre><code class="language-javascript">Nightwatch.runTests([testSource], [settings]);</code></pre>

##### Options:
- **testSource**: can be a an array of files or a single file name/directory where tests are loaded from 
- **settings**: additional config settings which can be used to overwrite existing ones (which are either defaults or loaded from a config file, e.g. nightwatch.json)

If you need to pass settings, please note that you cannot specify environment related settings and the settings passed here are merged onto the final configuration, after the current [test environment](/guide/running-tests/test-environments.html) (or the "default" one) is parsed.   

The programmatic api is used extensively in the Nightwatch's own unit tests (which use mocha as a test runner). For example, have a look at this unit test which covers various basic functions of the Nightwatch runner: [test/src/runner/testRunTestcase.js](https://github.com/nightwatchjs/nightwatch/blob/main/test/src/runner/testRunTestcase.js). Keep in mind that when using the programmatic api, you have to manage the Webdriver/Selenium server yourself. See below for a custom runner example.

#### Examples

Without specifying the source:

<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">const Nightwatch = require('nightwatch');

Nightwatch.runTests({
  // various settings
}).then(function() {
  // Tests finished
}).catch(function(err) {
  // An error occurred
});
</code></pre></div>

With specifying both the source and additional settings:

<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">const Nightwatch = require('nightwatch');

Nightwatch.runTests('/path/to/tests_folder', {
  // various settings
}).then(function() {
  // Tests finished
}).catch(function(err) {
  // An error occurred
});
</code></pre></div>

#### Custom Runner Example
You can also build your complete custom runner, based on the Nightwatch CLI runner. Using the `startWebDriver` and `stopWebDriver` methods available on the `CliRunner` instance, you can also manage the webdriver server.

<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">const Nightwatch = require('nightwatch');

const settings = {
  webdriver: {
    //...
  },
  desiredCapabilities: {
    browserName: 'firefox'
  }
};

(async function() {
  const runner = Nightwatch.CliRunner({
    // optionally specify the test source (will overwrite the value of src_folders config setting)
    &lowbar;source: &lbrack;'testFile1.js', 'testFile2.js'&rbrack;
  });

  await runner.setup(settings).startWebDriver();

  try {
    await runner.runTests();
  } catch (err) {
    console.error('An error occurred:', err);
  }

  await runner.stopWebDriver();
})();
</code></pre></div>

#### Reading the CLI options
If you need to read and pass on to Nightwatch the arguments from the CLI, you can use the `Nightwatch.cli()` method, like so:

<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">const Nightwatch = require('nightwatch');
// read the CLI arguments
Nightwatch.cli(async function(argv) {
  argv.&lowbar;source = argv&lbrack;'&lowbar;'&rbrack;.slice(0);

  const runner = Nightwatch.CliRunner(argv);
  await runner.setup(settings).startWebDriver();
  
  try {
    await runner.runTests();
  } catch (err) {
    console.error('An error occurred:', err);
  }
  
  await runner.stopWebDriver();
});
</code></pre></div>

- Previous: [Disabling or skipping Tests](/guide/running-tests/disabling-tests.html)
- Next: [Using mocha as a test runner](/guide/third-party-runners/using-mocha.html)
