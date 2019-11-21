## Extending Nightwatch

### Writing Custom Commands

Most of the time you will need to extend the Nightwatch commands to suit your own application needs. Doing that is only a matter of creating a separate folder and defining your own commands inside, each in its own file.

Then specify the path to that folder in the `nightwatch.json` file, as the `custom_commands_path` property. The command name is the name of the file itself.

There are two main ways in which you can define a custom command:

#### 1. Function-style commands
This is the simplest form in which commands are defined, however they are also quite limited.

The command module needs to export a `command` function, which needs to call at least one Nightwatch api method (such as `.execute()`). This is due to a limitation of how the asynchronous queueing system of commands works. You can also wrap everything in a `.perform()` call. Client commands like `execute` and `perform` are available via `this`.

<div class="sample-test">
<pre class="language-javascript line-numbers" data-language="javascript"><code class="language-javascript">module.exports.command = function(file, callback) {
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

  this.execute(function(data) {
    // execute application specific code
    App.resizePicture(data);
    return true;
  },
  [imageData], // arguments array to be passed
  function(result) {
    if (typeof callback === "function") {
      callback.call(self, result);
    }
  });

  return this;
};
</code>
</pre>
</div>

The example above defines a command (e.g. resizePicture.js) which loads an image file as `data-URI` and calls a method named `resizePicture` (via `.execute()`), defined inside the application.

With this command, the test will look something like:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
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

#### Using async/await in custom commands
You can also use ES6 `async`/`await` syntax inside function-style custom commands. Here's an example:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  command: async function () {
    this.url('http://nightwatchjs.org');
    this.waitForElementVisible('section#index-container');

    const result = await this.elements('css selector', '#index-container ul.features li');
    this.assert.strictEqual(result.value.length, 7, 'Feature elements number is correct');
  }
};
</code></pre>
</div>

#### 2. Class-style commands
This is how most of the Nightwatch's own commands are written. Your command module needs to export a class constructor with a `command` instance method representing the command function. Class-based custom commands should inherit from `EventEmitter` and have to manually signal the `complete` in order to indicate command completion.

Class-based `command` methods are run in the context (the value of `this`) of the class instance. The `browser` object is available as `this.api`.

The example below is the `.pause()` command, written as an ES6 class:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
const Events = require('events');

module.exports = class CustomPause extends Events {
  command(ms, cb) {
    // If we don't pass the milliseconds, the client will
    // be suspended indefinitely
    if (!ms) {
      return this;
    }

    setTimeout(() => {
      // if we have a callback, call it right before the complete event
      if (cb) {
        cb.call(this.api);
      }

      this.emit('complete');
    }, ms);
  }
}</code></pre>
</div>
