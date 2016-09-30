### Writing Custom Assertions

Nightwatch allows you to even define your own assertions, extending the available `.assert` and `.verify` namespaces.

Assertions implement a simple interface which is shared between built-in assertions and custom ones:

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

<p class="alert alert-info">Custom assertions also inherit from <a href="http://nodejs.org/api/events.html" target="_blank">EventEmitter</a>. To see some examples, check the assertions module on Github:<br><a href="https://github.com/beatfactor/nightwatch/tree/master/lib/api/assertions" target="_blank">/nightwatch/tree/master/lib/selenium/assertions</a></p>
