### Disabling Tests

To prevent a test module from running, simply set the `disabled` attribute in that module to `true`, like so:

<pre><code class="language-javascript">
module.exports = {
  '@disabled': true, // This will prevent the test module from running.

  'sample test': function (client) {
    // test code
  }
};
</code></pre>

This can be useful if you don't want to run certain tests that are known to be failing.
