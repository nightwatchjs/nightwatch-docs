### Writing Custom Commands

Most of the time you will need to extend the Nightwatch commands to suit your own application needs. Doing that is only a matter of creating a separate folder and defining your own commands inside there, each one inside its own file.

Then specify the path to that folder inside the `nightwatch.json` file, as the `custom_commands_path` property. The command name is the name of the file itself.

There are two main ways in which you can define a custom command:

#### 1) Function-style commands
This is the simplest form in which commands are defined, however they are also quite limited. Your command module needs to export a `command` function, which needs to call at least one Nightwatch api method (such as `.execute()`). This is due to a limitation of how the asynchronous queueing system of commands works. You can also wrap everything in a `.perform()` call. Client commands like `execute` and `perform` are available via `this`.

<div class="sample-test" style="width: 600px">
<pre class="language-javascript" data-language="javascript"><code class="language-javascript">
exports.command = function(file, callback) {
  var self = this;
  var imageData;
  var fs = require('fs');

  try {
    var originalData = fs.readFileSync(file);
    var base64Image = new Buffer(originalData, 'binary').toString('base64');
    imageData = 'data:image/jpeg;base64,' + base64Image;
  } catch (err) {
    console.log(err);
    throw "Unable to open file: " + file;
  }

  this.execute(
    function(data) { // execute application specific code
      App.resizePicture(data);
      return true;
    },

    [imageData], // arguments array to be passed

    function(result) {
      if (typeof callback === "function") {
        callback.call(self, result);
      }
    }
  );

  return this;
};
</code>
</pre>
</div>

The example above defines a command (e.g. resizePicture.js) which loads an image file as `data-URI` and calls a method named `resizePicture` (via `.execute()`), defined inside the application.

With this command, the test will look something like:

<div class="sample-test" style="width: 600px">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  "testing resize picture" : function (browser) {
    browser
      .url("http://app.host")
      .waitForElementVisible("body")
      .resizePicture("/var/www/pics/moon.jpg")
      .assert.element(".container .picture-large")
      .end();
  }
};</code></pre>
</div>

#### 2) Class-style commands
This is how most of the Nightwatch's own commands are written. Your command module needs to export a class constructor with a `command` instance method representing the command function. Commands written like this should inherit from `EventEmitter` and manually signal the `complete` event, to indicate command completion.

Class-based `command` methods are run in the context (the value of `this`) of the class instance. The test `api` object is available as `this.api` or `this.client.api`, where `this.client` is the Nightwatch instance itself.

The example below is the `.pause()` command:

<div class="sample-test" style="width: 600px">
<pre data-language="javascript"><code class="language-javascript">
var util = require('util');
var events = require('events');

function Pause() {
  events.EventEmitter.call(this);
}

util.inherits(Pause, events.EventEmitter);

Pause.prototype.command = function(ms, cb) {
  var self = this;
  // If we don't pass the milliseconds, the client will
  // be suspended indefinitely
  if (!ms) {
    return this;
  }
  setTimeout(function() {
    // if we have a callback, call it right before the complete event
    if (cb) {
      cb.call(self.client.api);
    }

    self.emit('complete');
  }, ms);

  return this;
};

module.exports = Pause;</code></pre>
</div>

<br>
##### The "complete" event
Signaling the `complete` event needs to be done inside an asynchronous action (e.g. a `setTimeout` call). Command classes that do not extend `EventEmitter` will be treated similar to command functions, requiring that the `command` method calls at least one Nightwatch api method to be able to complete.

<p class="alert alert-warning">Using ES6 classes as custom commands is not supported at the moment. See [nightwatchjs#1199](https://github.com/nightwatchjs/nightwatch/issues/1199) for more details.</p>
