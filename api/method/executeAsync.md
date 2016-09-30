#### Example

<div class="sample-test">
<pre data-language="javascript" class=" language-javascript"><code class=" language-javascript">
module.exports = {
  before : function(client) {
    // see https://github.com/nightwatchjs/nightwatch/blob/master/examples/globalsModule.js#L12
    client.globals.waitForConditionTimeout = 5000;
  },

  'executeAsync example test' : function (client) {

    client
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

  after : function(client) {
    client.end();
  }
};
</code></pre></div>
