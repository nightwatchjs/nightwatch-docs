## Disabling Tests

To prevent a test module from running, simply set the `disabled` attribute in that module to `true`, like so:

<div class="sample-test">
<pre><code class="language-javascript">module.exports = {
  '@disabled': true, // This will prevent the test module from running.

  'sample test': function (browser) {
    // test code
  }
};
</code></pre></div>

This can be useful if you don't want to run certain tests that are known to be failing.

#### Disabling Individual testcases

Disabling individual testcases isn't currently supported out of the box. However it can be achieved relatively straightforward with a simple work-around. By simply converting the test method to a string, Nightwatch will ignore it.

Here's an example:

<div class="sample-test">
<pre><code class="language-javascript">module.exports = {
  'sample test': function (browser) {
    // test code
  },

  // disabled
  'other sample test': ''+function (browser) {
    // test code
  }
};
</code></pre></div>
