### External Globals

In addition to having globals defined in your `nightwatch.json`, sometimes it's useful to have also an external globals file, specified in the `globals_path` property.

You can overwrite globals per environment as needed. Say you have your tests running locally and also against a remote cloud selenium server. Most of the times you will need some different setting up.

#### Example:
<div class="sample-test">
<pre><code class="language-javascript">
module.exports = {
  'local-env' : {
    isLocal : true,
  },

  'remote-env' : {
    isLocal : false
  },

  before: function(done) {
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

  after: function(done) {
    // run this only for the local-env
    if (this.isLocal) {
      // start the local server
      App.stopServer(function() {
        // shutting down
        done();
      });
    } else {
      done();
    }
  },
  
  // This will be run before each test suite is started
  beforeEach: function(browser, done) {
    // getting the session info
    browser.status(function(result) {
      console.log(result.value);
      done();
    });
  },
  
  // This will be run after each test suite is finished
  afterEach: function(browser, done) {
    console.log(browser.currentTest);
    done();
  }
};</code></pre>
</div>

You can refer to the provided [globalsModule.js](https://github.com/beatfactor/nightwatch/blob/master/examples/globalsModule.js) for an example.
