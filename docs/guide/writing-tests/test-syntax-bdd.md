---
title: BDD test syntax
description: Reference to complete BDD syantx.
---

<div class="page-header"><h1>BDD test syntax</h1></div>

### Overview
Starting with Nightwatch version **1.3**, you can use the popular BDD interfaces for writing tests. You don't need additional configuration to use BDD interfaces. These are now supported out of the box.

You can also run tests written in BDD describe and Exports interfaces together. Prior to this version, you had to use the Mocha test runner for enabling this functionality, which is now possible without additional plugins or libraries. 

The BDD interface in Nightwatch provides the following functions:
- `describe()` / `context()`
- `test()` / `it()` / `specify()`
- `before()`
- `after()`
- `beforeEach()`
- `afterEach()` 

<div class="alert alert-info">
Nightwatch doesn't support nested <code>describe`/`context</code> declarations currently. You can only use <code>describe</code> to define the name for the test suite. 
</div>

### Example

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('Ecosia', function() {
  <br>
  // test() and specify() is also available
  <br>
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
<pre data-language="typescript"><code class="language-typescript">
import {NightwatchTests} from 'nightwatch';
<br>
const Ecosia: NightwatchTests = {
  'demo test': () => {
    browser
      .url('https://www.ecosia.org/')
      .setValue('input[type=search]', 'nightwatch')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};
<br>
export default Ecosia;
</code></pre></div>

In addition to the usual BDD syntax, Nightwatch provides a few ways for defining own behaviour.

### Test suite-specific capabilities

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">
describe('homepage test with describe', function() {
  // testsuite specific capabilities
  this.desiredCapabilities = {
    browserName: 'firefox'
  };
  <br>
  it('...', function() {...});
});
</code></pre></div>

#### Test suite-specific tags

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">
describe('homepage test with describe', function() {
  // defining tags using bdd
  this.tags = ['login', 'authentication''];
  <br>
  it('...', function() {...});
});
</code></pre></div>

#### Test suite-specific retries

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">
describe('homepage test with describe', function() {
  // how many time to retry a failed testcase inside this test suite
   this.retries(3);
   <br>
   // how many times to retry the current test suite in case of an assertion failure or error
   this.suiteRetries(2);
   <br>
   it('...', function() {...});
});
</code></pre></div>

### Complete BDD syntax

#### Retrieving settings
All current settings are available via `this.settings`.

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  console.log('Settings', this.settings);
  <br>
  it('...', function() {
    // ...
  });
});
</code></pre></div>

#### Desired capabilities

Testsuite specific capabilities.

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.desiredCapabilities = {};
  <br>
  it('...', function() {
    // ...
  });
});
</code></pre></div>

#### Unit tests
Enable this if the current test is a unit/integration test (i.e. no Webdriver session will be created);

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
   this.unitTest = true;
   <br>
   it('...', function() {
     // ...
   });
});
</code></pre></div>

#### Ending the session on fail
Set this to `false` if you'd like the browser window to be kept open in case of a failure or error (useful for debugging).

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
   this.endSessionOnFail = false
   <br>
   it('...', function() {
     // ...
   });
});
</code></pre></div>

#### Skip rest of test cases on fail
Set this to `false` if you'd like the rest of the test cases/test steps to be executed in the event of an assertion failure/error

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
   this.skipTestcasesOnFail = true
   <br>
   it('...', function() {
     // ...
   });
});
</code></pre></div>

#### Disable/skip a test suite
Set this to true if you'd like this test suite to be skipped by the test runner

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
   this.disabled = true
   <br>
   it('...', function() {
     // ...
   });
});
</code></pre></div>

#### Retries

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.retries(3);
  this.suiteRetries(2);
  <br>
  it('...', function() {
    // ...
    });
});
</code></pre></div>

#### Control assertion timeout
Control the assertion and element commands timeout until when an element should be located or assertion passed

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.timeout(1000)
  <br>
  it('...', function() {
    // ...
  });
});
</code></pre></div>

#### Control polling interval
Control the polling interval between re-tries for assertions or element commands

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.retryInterval(100);
  <br>
  it('...', function() {
    // ...
  });
});
</code></pre></div>

#### Define tags
Define tags for this test suite.

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  this.tags = ['login']
  <br>
  it('...', function() {
    // ...
  });
});
</code></pre></div>

#### Test functions and hooks

<div class="sample-test"><pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('homepage test with describe', function() {
  <br>
  before(function(browser) {
    this.homepage = browser.page.home();
  });
  <br>
  it('startHomepage', () => {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.not.visible;
  });
  <br>
  <br>
  // Run only this testcase
  //*
  it.only('startHomepage', () => {
    this.homepage.navigate();
  });
  *// 
  <br>
  // skipped testcase: equivalent to: test.skip(), it.skip(), and xit()
  xtest('async testcase', async browser => {
    const result = await browser.getText('#navigation');
    console.log('result', result.value)
  });
  <br>
  test('version dropdown is enabled', browser => {
    const navigation = this.homepage.section.navigation;
    const navbarHeader = navigation.section.navbarHeader;
    <br>
    navbarHeader.expect.element('@versionDropdown').to.be.enabled;
  });
  <br>
  after(browser => browser.end());
});</code></pre></div>

### Example Github repo

We've put together a complete [Github template repo](https://github.com/nightwatchjs/nightwatch-examples) with several examples which we're periodically updating, including a Github Actions workflow for you to get started with.  

<div style="text-align: center; max-width: 80%; margin-bottom: 30px; ">
<a href="https://github.com/nightwatchjs/nightwatch-examples"><img class="github-embed" src="https://opengraph.githubassets.com/default/nightwatchjs/nightwatch-examples" alt="nightwatch-examples on Github" /></a>
</div>

### Recommended content
- [Exports test syntax](/guide/writing-tests/test-syntax-exports.html)
- [Using async/await](/guide/writing-tests/using-es-6-async-await.html)
- [Finding & interacting with DOM Elements](/guide/writing-tests/finding-interacting-with-dom-elements.html)

[1]:    https://www.ecosia.org/

