### Using before[Each] and after[Each] hooks

Nightwatch provides the standard `before`/`after` and `beforeEach`/`afterEach` hooks to be used in the tests.

The `before` and `after` will run before and after the execution of the test suite respectively, while `beforeEach` and `afterEach` are ran before and after each testcase (test step).

All methods have the Nightwatch instance passed as argument.

#### Example:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  beforeEach : function(browser) {

  },

  afterEach : function(browser) {
  
  },

  'step one' : function (browser) {
    browser
     // ...
  },

  'step two' : function (browser) {
    browser
    // ...
      .end();
  }
};</code></pre>
</div>

In the example above the sequence of method calls will be as follows: `before(), beforeEach(), "step one", afterEach(), beforeEach(), "step two", afterEach(), after()`.