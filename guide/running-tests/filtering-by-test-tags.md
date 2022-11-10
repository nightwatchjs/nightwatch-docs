---
title: Running tests filtered by tags
description: Learn how to run specific tests that match particular tags.
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Filtering by test tags</h2></div>

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

  it('demo login test', function(browser) {

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
    <a href="https://nightwatchjs.org/guide/running-tests/parallel-running.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Run tests in parallel</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/running-tests/using-with-test-groups.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Use test groups</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
