### Programmatic API

Since v1.0, Nightwatch exports an API through which it may be used without a configuration file. The `runTests()` public method which may be used for running the tests inside a custom runner.

The return value is a promise.

#### Syntax
<pre><code class="language-javascript">
  Nightwatch.runTests([testSource], [settings]);
</code></pre>

#### Example

<pre><code class="language-javascript">
  const Nightwatch = require('nightwatch');
  
  Nightwatch.runTests('/path/to/tests_folder', {
    // various settings
  }).then(function() {
    // Tests finished
  }).catch(function(err) {
    // An error occurred
  });
</code></pre>

You can also build your complete custom runner, based on the Nightwatch CLI runner:

#### Custom Runner Example

<pre><code class="language-javascript">
  const Nightwatch = require('nightwatch');
  
  // read the CLI arguments
  Nightwatch.cli(function(argv) {
    argv._source = argv['_'].slice(0);
  
    // create the Nightwatch CLI runner
    const runner = Nightwatch.CliRunner(argv);
    
    // setup and run tests
    runner
      .setup()
      .startWebDriver()
      .then(_ => runner.runTests())
      .then(_ => runner.stopWebDriver())
      .catch(err => console.error(err));
  });
</code></pre>