---
title: Running tests filtered by tags
description: Learn how to run specific tests that match particular tags.
---

<div class="page-header"><h1>Filtering by test tags</h1></div>

### Overview
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
  <br>
  it('demo login test', function(browser) {
     <br>
  });
});</code></pre>
</div>

### Run tagged tests
To select which tags to run, use the `--tag` command line flag:

<pre><code class="language-bash">nightwatch --tag login</code></pre>

<br>
Specify multiple tags as:

<pre><code class="language-bash">nightwatch --tag login --tag something_else</code></pre>

<br>

### Skip tagged tests
To skip running tests with a specific tag, use the `--skiptags` flag:

<pre><code class="language-bash">nightwatch --skiptags login</code></pre>
<br>
Or to skip multiple tags, add each tag you want to skip as comma-separated:

<pre><code class="language-bash">nightwatch --skiptags login,something_else</code></pre>

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/running-tests/parallel-running.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Run tests in parallel</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/running-tests/using-with-test-groups.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Use test groups</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
