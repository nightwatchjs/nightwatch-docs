---
title: Define custom assertions
description: Learn how to extend Nightwatch capabilities by adding custom assertions.
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Define custom assertions</h2></div>

### Overview
Nightwatch allows you to even define your own assertions, extending the available `.assert` and `.verify` namespaces. To do so, create a new folder (e.g. `nightwatch/assertions`) and start defining your own assertions inside, each in its own file.

Then specify the path to that folder in the `nightwatch.json` file, as the `custom_assertions_path` property.

<div class="sample-test"><i>nightwatch.json</i>
<pre class="line-numbers" data-language="javascript"><code class=" language-javascript">{
  "custom_assertions_path" : "nightwatch/assertions"
}
</code></pre>
</div>

<p class="alert alert-info">Custom assertions also inherit from <a href="https://nodejs.org/api/events.html" target="_blank">EventEmitter</a>. To see some examples, check the assertions module on Github:<br><a href="https://github.com/nightwatchjs/nightwatch/tree/main/lib/api/assertions" target="_blank">/nightwatch/tree/main/lib/selenium/assertions</a></p>

### Define a custom assertion
Assertions implement a simple interface which is shared between built-in assertions and custom ones:

<div class="sample-test"><i>nightwatch/assertions/customAssert.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">exports.assertion = function(definition, expectedText, msg) {
  
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

### Recommended content
- [Define custom commands](https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Define custom commands</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-reporters.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Create custom reporters</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
