---
title: Writing tests
description: Use the popular BDD interface to write tests in Nightwatch.
---

<div class="page-header"><h1>Writing tests using the BDD interface</h1></div>

### Overview
The popular BDD ([Behavior Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development)) interface for writing tests is available by default in Nightwatch, without additional configuration. It is also possible to run tests written using BDD `describe()` and `exports` interfaces together. 

The BDD interface in Nightwatch provides the following functions:
- `describe()` / `context()`
- `test()` / `it()` / `specify()`
- `before()`
- `after()`
- `beforeEach()`
- `afterEach()` 

All these are injected into the running script at run-time, so no imports are necessary.

<div class="alert alert-info">
Nightwatch doesn't support nested `describe`/`context` declarations currently. You can only use `describe` to define the name for the test suite. 
</div>

### Example

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('Ecosia', function() {

  // test() and specify() are equivalent

  it('demo test', function(browser) {
    browser
      .url('https://www.ecosia.org/')
      .setValue('input[type=search]', 'nightwatch')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  });
});
</code></pre>
</div>

In addition to the usual BDD syntax, Nightwatch provides a few ways for defining own behaviour.

#### Test suite-specific capabilities

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  // testsuite specific capabilities
  this.desiredCapabilities = {
    browserName: 'firefox'
  };
  
  it('example test', function(browser) {
    // testcase body here
  });
});
</code></pre></div>

#### Test suite-specific tags

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  // defining tags using bdd
  this.tags = ['login', 'authentication''];
  
    it('example test', function(browser) {
      // testcase body here
    });
});
</code></pre></div>

#### Test suite-specific retries

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  // how many time to retry a failed testcase inside this test suite
   this.retries(3);
   
   // how many times to retry the current test suite in case of an assertion failure or error
   this.suiteRetries(2);
   
   it('example test', function(browser) {
     // testcase body here
   });
   
});
</code></pre></div>

### Complete BDD syntax

#### Retrieving settings
All current settings are available via `this.settings`.

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  console.log('Settings', this.settings);
  
  it('example test', function(browser) {
    // testcase body here
  });

});
</code></pre></div>

#### Desired capabilities

Testsuite specific capabilities.

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.desiredCapabilities = {};

  it('example test', function(browser) {
    // testcase body here
  });

});
</code></pre></div>

#### Unit tests
Enable this if the current test is a unit/integration test (i.e. no Webdriver session will be created);

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.unitTest = true;

  it('example test', function(browser) {
    // testcase body here
  });
});
</code></pre></div>

#### Ending the session on fail
Set this to `false` if you'd like the browser window to be kept open in case of a failure or error (useful for debugging).

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
   this.endSessionOnFail = false

   it('example test', function(browser) {
     // testcase body here
   });
});
</code></pre></div>

#### Skip rest of test cases on fail
Set this to `false` if you'd like the rest of the test cases/test steps to be executed in the event of an assertion failure/error

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
   this.skipTestcasesOnFail = true

   it('example test', function(browser) {
     // testcase body here
   });
});
</code></pre></div>

#### Disable/skip a test suite
Set this to true if you'd like this test suite to be skipped by the test runner

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.disabled = true

  it('example test', function(browser) {
    // testcase body here
  });
});
</code></pre></div>

#### Retries

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.retries(3);
  this.suiteRetries(2);

  it('example test', function(browser) {
    // testcase body here
  });

});
</code></pre></div>

#### Control assertion timeout
Control the assertion and element commands timeout until when an element should be located or assertion passed

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.timeout(1000)

  it('example test', function(browser) {
    // testcase body here
  });
});
</code></pre></div>

#### Control polling interval
Control the polling interval between re-tries for assertions or element commands

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.retryInterval(100);

  it('example test', function(browser) {
    // testcase body here
  });
});
</code></pre></div>

#### Define tags
Define tags for this test suite.

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.tags = ['login']

  it('example test', function(browser) {
    // testcase body here
  });
});
</code></pre></div>

#### Test functions and hooks

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {

  before(function(browser) {
    this.homepage = browser.page.home();
  });

  it('startHomepage', () => {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.not.visible;
  });

  
  // Run only this testcase
  //*
  it.only('startHomepage', () => {
    this.homepage.navigate();
  });
  *// 
   
  // skipped testcase: equivalent to: test.skip(), it.skip(), and xit()
  xtest('async testcase', async browser => {
    const result = await browser.getText('#navigation');
    console.log('result', result.value)
  });

  test('version dropdown is enabled', browser => {
    const navigation = this.homepage.section.navigation;
    const navbarHeader = navigation.section.navbarHeader;

    navbarHeader.expect.element('@versionDropdown').to.be.enabled;
  });

  after(browser => browser.end());
});</code></pre></div>

### Recommended content
- [Exports test syntax](/guide/writing-tests/test-syntax-exports.html)
- [Using async/await](/guide/writing-tests/using-es-6-async-await.html)
- [Finding & interacting with DOM Elements](/guide/writing-tests/finding-interacting-with-dom-elements.html)

