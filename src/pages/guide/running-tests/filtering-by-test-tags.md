---
title: Running tests filtered by tags
description: Learn how to run specific tests that match particular tags.
summary_image: https://nightwatchjs.org/img/banner.png
---

## Filtering by test tags

### Overview

You can also selectively target tests to run based on tags, such that a test may be belong to multiple tags. For example, you might have a login test that belongs to a login suite as well as a sanity suite.

The tagging can be accomplished by adding the `@tags` property to a test module:

```js module.exports = {
  '@tags': ['login', 'sanity'],
  'demo login test': function (browser) {
     // test code
  }
};```
</div>

Or, if using the describe interface:


```js describe('testsuite', function() {
  this.tags = ['login', 'sanity'];

  it('demo login test', function(browser) {

  });
});```
</div>

### Run tagged tests

To select which tags to run, use the `--tag` command line flag:

```bash
nightwatch --tag login```

<br/>
Specify multiple tags as:

```bash
nightwatch --tag login --tag something_else```

<br/>

### Skip tagged tests

To skip running tests with a specific tag, use the `--skiptags` flag:

```bash
nightwatch --skiptags login```
<br/>
Or to skip multiple tags, add each tag you want to skip as comma-separated:

```bash
nightwatch --skiptags login,something_else```

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
