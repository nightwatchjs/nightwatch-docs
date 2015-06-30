### Writing Custom Assertions

Nightwatch allows you to even define your own assertions, extending the available `.assert` and `.verify` namespaces.

Beginning with v0.4 assertions have a very simple interface which is shared between built-in assertions and custom ones. Therefore, custom assertions must implement the following interface:

<div class="sample-test" style="width: 500px">

<pre data-language="javascript"><code class="language-javascript">
exports.assertion = function() {

  /\*\*
   \* The message which will be used in the test output and
   \* inside the XML reports
   \* @type {string}
   \*/
  this.message;

  /\*\*
   \* A value to perform the assertion on. If a function is
   \* defined, its result will be used.
   \* @type {function|\*}
   \*/
  this.expected;

  /\*\*
   \* The method which performs the actual assertion. It is
   \* called with the result of the value method as the argument.
   \* @type {function}
   \*/
  this.pass = function(value) {

  };

  /\*\*
   \* The method which returns the value to be used on the
   \* assertion. It is called with the result of the command's
   \* callback as argument.
   \* @type {function}
   \*/
  this.value = function(result) {

  };

  /\*\*
   \* Performs a protocol command/action and its result is
   \* passed to the value method via the callback argument.
   \* @type {function}
   \*/
  this.command = function(callback) {

    return this;
  };

};</code></pre>

</div>

<p class="alert alert-success">Both custom assertions and custom commands inherit from <a href="http://nodejs.org/api/events.html" target="_blank">EventEmitter</a> if defined in the form above.<br>
If, however, your command/assertion is defined in the constructor style, then you must inherit manually, similarly to the <a href="https://github.com/beatfactor/nightwatch/blob/master/lib/api/client-commands/pause.js" target="_blank">pause command</a>.</p>

<p class="alert alert-info">To see some examples, check the assertions module source-code on Github:<br><a href="https://github.com/beatfactor/nightwatch/tree/master/lib/api/assertions" target="_blank">/nightwatch/tree/master/lib/selenium/assertions</a></p>
