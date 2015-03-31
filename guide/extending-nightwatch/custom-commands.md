### Writing Custom Commands

Most of the time you will need to extend the Nightwatch commands to suit your own application needs. Doing that is only a matter of creating a separate folder and defining your commands in that folder, each one inside its own file.

Then specify the path to that folder inside the `nightwatch.json` file, as the `custom_commands_path` property. The command name is the name of the file itself, and it needs to follow the following pattern:

<div class="sample-test" style="width: 500px">
<pre class="language-javascript" data-language="javascript"><code class="language-javascript">
exports.command = function(file, callback) {
  var self = this, imageData, fs = require('fs');

  try {
    var originalData = fs.readFileSync(file);
    var base64Image = new Buffer(originalData, 'binary')
      .toString('base64');
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

  return this; // allows the command to be chained.
};
</code>
</pre>
</div>

The example below defines a command (e.g. resizePicture.js) which loads an image file as `data-URI` and calls a method named `resizePicture` defined inside the application.

With this command, the test will look something like:

<div class="sample-test">
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