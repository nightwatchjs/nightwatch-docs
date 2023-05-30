#### Example

<div class="sample-test">
<pre data-language="javascript" class=" language-javascript"><code class=" language-javascript">
module.exports = {
  before : function(browser) {
    // see https://github.com/nightwatchjs/nightwatch/blob/main/examples/globalsModule.js#L12
    browser.globals.waitForConditionTimeout = 5000;
  },
  <br>
  'executeAsync example test' : function (browser) {
    <br>
    browser
      .timeoutsAsyncScript(10000)
      .executeAsync(function (inputVal, done) {
          // ... do stuff with window ...
          setTimeout(done, 5000, 'result');
        },
        ['input'],
        function (resultVal) {
          console.log('result =', resultVal);
        }
      );
  },
  <br>
  after : function(browser) {
    browser.end();
  }
};
</code></pre></div>
