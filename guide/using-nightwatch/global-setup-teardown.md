### Global before[Each] and after[Each]

You can also have global `before` and `after` [asynchronous] methods that can perform an operation before starting the test runner and right before exiting, when all the tests have finished executing.

Similarly global `beforeEach` and `afterEach` will be invoked before and after each test suite (module).

The methods are defined in the external `globals` file and invoked using the `globals` object as context. For `before` and `after`, the `callback` is the only argument passed and **must be called** when the operation finishes. For `beforeEach` and `afterEach` the arity of your function is assessed. If two arguments are present the function will be passed `client` and `done`, if one argument is present only `done` will be passed.

#### Example of the globals file with before & after:

<div class="sample-test">
<pre><code class="language-javascript">
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
};</code></pre>
</div>

#### Example of the globals file with beforeEach & afterEach
<div class="sample-test">
<pre><code class="language-javascript">
// globals.js beforeEach
beforeEach: (done) {
    // no browser, just a done
}
// or...
beforeEach: (browser, done) {
    // browser and a done
}
// globals.js afterEach
afterEach: (done) {
    // no browser, just a done
}
// or...
afterEach: (browser, done) {
    // browser and a done
}
</code></pre>
</div>
Refer to the [External Globals](#config-external-globals) section for more info on globals.
