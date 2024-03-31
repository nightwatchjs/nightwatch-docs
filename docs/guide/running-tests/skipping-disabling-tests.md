---
title: Skipping or disabling tests
description: Learn how to skip/disable a test module or individual test cases with Nightwatch.
---

<div class="page-header"><h1>Skipping / disabling tests</h1></div>

### Overview
To prevent a test module from running, simply set the `disabled` attribute in that module to `true`, like so:

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  '@disabled': true, // This will prevent the test module from running.
  <br>
  'sample test': function (browser) {
    // test code
  }
};
</code></pre></div>

This can be useful if you don't want to run certain tests that are known to be failing.

### Skipping individual test cases

Disabling/skipping individual testcases is supported only when using [BDD Describes](/guide/writing-tests/test-syntax-bdd.html) interface. To skip a testcase, simply mark it as such, using one of:
`test.skip()`, `it.skip()`, `xtest()`, or `xit()`, which are all equivalent. 

### Example
<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  <br>
  // skipped testcase: equivalent to: test.skip(), it.skip(), and xit()
  it.skip('async testcase', async browser => {
    const result = await browser.getText('#navigation');
    console.log('result', result.value)
  });
});
<br>
</code></pre></div>

If using the default interface, it can be achieved relatively straightforward with a simple work-around. By simply converting the test method to a string, Nightwatch will ignore it.

Here's an example:
<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'sample test': function (browser) {
    // test code
  },
  <br>
  // disabled
  'other sample test': ''+function (browser) {
    // test code
  }
};
</code></pre></div>

### Running only a certain test case

If you're interested in running a particular test case inside an entire test suite (i.e. an `it()` or `test()` function inside a `describe()` block), use either the `it.only()`
or the `test.only()` functions, which are equivalent.

##### Example
The below will only run the `startHomepage` testcase and ignore the rest.

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  <br>
  test.only('startHomepage', () => {
    // ...
  });
  <br>
  test('other testcase', () => {
    // ...
  });
});
<br>
</code></pre></div>

 