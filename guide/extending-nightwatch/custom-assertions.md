## Writing Custom Assertions

Nightwatch allows you to even define your own assertions, extending the available `.assert` and `.verify` namespaces.

<p class="alert alert-info">Custom assertions also inherit from <a href="https://nodejs.org/api/events.html" target="_blank">EventEmitter</a>. To see some examples, check the assertions module on Github:<br><a href="https://github.com/nightwatchjs/nightwatch/tree/main/lib/api/assertions" target="_blank">/nightwatch/tree/main/lib/selenium/assertions</a></p>

Assertions implement a simple interface which is shared between built-in assertions and custom ones:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
exports.assertion = function(definition, expectedText, msg) {
  
  // If the custom commands operates with DOM elements, this options should be set
  // this.options = {
  //   elementSelector: true
  // };
  
  /\*\*
   \* Returns the message format which will be used to output the message in the console and also
   \*  the arguments which will be used for replace the place holders, used in the order of appearance
   \* 
   \* The message format also takes into account whether the .not negate has been used
   \*
   \* @return {{args: [], message: string}}
   \*/
   this.formatMessage = function() {
     // Use this.negate to determine if ".not" is in use
     // Example: 
     const message = \`Testing if the page title ${this.negate ? 'doesn\'t equal %s' : 'equals %s'}\`;
 
     return {
       message,
       args: [\`'${expected}'\`]
     }
   };
 
  /\*\*
    \* Returns the expected value of the assertion which is displayed in the case of a failure
    \*
    \* @return {string}
    \*/
   this.expected = function() {
     return this.negate ? \`is not '${expectedText}'\` : \`is '${expectedText}'\`;
   };
 
   /\*\*
    \* Given the value, the condition used to evaluate if the assertion is passed
    \* @param {\*} value
    \* @return {Boolean}
    \*/
   this.evaluate = function(value) {
     if (typeof value != 'string') {
       return false;
     }
 
     return value.includes(expectedText);
   };
 
  /\*\*
    \* Called with the result object of the command to retrieve the value which is to be evaluated
    \*
    \* @param {Object} result
    \* @return {\*}
    \*/
   this.value = function(result) {
     return result.value;
   };
   
  /\*\*
    \* When defined, this method is called by the assertion runner with the command result, to determine if the
    \*  value can be retrieved successfully from the result object
    \*
    \* @param result
    \* @return {boolean|\*}
    \*/
   this.failure = function(result) {
     return result === false || result && result.status === -1;
   };
   
   /\*\*
    \* When defined, this method is called by the assertion runner with the command result to determine the actual
    \*  state of the assertion in the event of a failure
    \*
    \* @param {Boolean} passed
    \* @return {string}
    \*/
   this.actual = function(passed) {
     return passed ? \`contains '${expectedText}'\` : \`does not contain '${expectedText}'\`;
   };
 
  /\*\*
    \* The command which is to be executed by the assertion runner; Nightwatch api is available as this.api
    \* @param {function} callback
    \*/
  this.command = function(callback) {
     // Example: this.api.getText(definition, callback);
     
     setTimeout(function() {
       // The object containing a "value" property will be passed to the .value() method to determine the value w
       // which is to be evaluated (by the .evaluate() method)
       callback({
         value: ''
       });
       
     }, 1000);   
     
  };

};</code></pre></div>

