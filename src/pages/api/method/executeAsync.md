#### Example

```js

module.exports = {
  before : function(browser) {
    // see <https://github.com/nightwatchjs/nightwatch/blob/main/examples/globalsModule.js#L12>
    browser.globals.waitForConditionTimeout = 5000;
  },

  'executeAsync example test' : function (browser) {

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

  after : function(browser) {
    browser.end();
  }
};

```
