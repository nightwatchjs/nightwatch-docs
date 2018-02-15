### Global before[Each] and after[Each]

You can also have global `before` and `after` [asynchronous] methods that can perform an operation before starting the test runner and right before exiting, when all the tests have finished executing.

Similarly global `beforeEach` and `afterEach` will be invoked before and after each test suite (module).

The methods are defined in the external `globals` file and invoked using the `globals` object as context. The `callback` is the only argument passed and **must be called** when the operation finishes.

#### Example of the globals file with before & after:

```js
module.exports = {
  someGlobal : 'Here I am',

  before: function(done) {
    // performing an async operation
    setTimeout(function() {
      // finished async duties
      done();
    }, 100);
  },

  after: function(done) {
    // performing an async operation
    setTimeout(function() {
      // finished async duties
      done();
    }, 200);
  }
};
```

Refer to the [External Globals](#config-external-globals) section for more info on globals.
