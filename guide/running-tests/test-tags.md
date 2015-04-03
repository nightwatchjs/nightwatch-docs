### Test Tags

You can also selectively target tests to run based on tags, such that a test may be belong to multiple tags. For example, you might have a login test that belongs to a login suite as well as a sanity suite.

The tagging can be accomplished by adding the`tags` property to a test module:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  tags: ['login', 'sanity'],
  'demo login test': function (client) {
     // test code
  }
};</code></pre>
</div>

To select which tags to run, use the `--tag` command line flag:

<pre><code class="language-bash">$ nightwatch --tag login</code></pre>

Specify multiple tags as:

<pre><code class="language-bash">$ nightwatch --tag login --tag something_else</code></pre>