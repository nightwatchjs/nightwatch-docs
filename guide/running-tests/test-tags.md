## Using Test Tags

You can also selectively target tests to run based on tags, such that a test may be belong to multiple tags. For example, you might have a login test that belongs to a login suite as well as a sanity suite.

The tagging can be accomplished by adding the `@tags` property to a test module:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  '@tags': ['login', 'sanity'],
  'demo login test': function (browser) {
     // test code
  }
};</code></pre>
</div>

Or, if using the describe interface:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">describe('testsuite', function() {
  this.tags = ['login', 'sanity'];

  it('demo login test', function(browser) {

  });
});</code></pre>
</div>

To select which tags to run, use the `--tag` command line flag:

<pre><code class="language-bash">nightwatch --tag login</code></pre>

<br>
Specify multiple tags as:

<pre><code class="language-bash">nightwatch --tag login --tag something_else</code></pre>

<br>
To skip running tests with a specific tag, use the `--skiptags` flag:

<pre><code class="language-bash">nightwatch --skiptags login</code></pre>
<br>
Or to skip multiple tags, add each tag you want to skip as comma-separated:

<pre><code class="language-bash">nightwatch --skiptags login,something_else</code></pre>

- Previous: [Using Test Groups](https://nightwatchjs.org/guide/running-tests/test-groups.html)
- Next: [Running in Parallel](https://nightwatchjs.org/guide/running-tests/parallel-running.html)
