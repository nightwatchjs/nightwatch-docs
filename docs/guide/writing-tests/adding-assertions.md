---
title: Nightwatch assertions  
description: Learn how to do assertions with Nightwatch
---

<div class="page-header"><h1>Adding assertions to tests</h1></div>

### Overview

Nightwatch provides built-in extendable `assert`/`verify` library as two namespaces containing the same methods that perform assertions on elements. 

### .assert

With the `.assert` namespace, when an assertion fails, the test ends, thus skipping all other assertions in the test.

The following example code snippet uses the `assert` namespace to assert whether an element with class `non_existing` is visible on the page. If the assertion fails, the test ends:<br>
<div class="sample-test">
  <pre data-language="javascript">
    <code class="language-javascript">browser.element.find('selector').assert.visible('.non_existing');</code>
  </pre>
</div> 

### .verify

With the `.verify` namespace, when an assertion fails, the test logs the failure and continues with other assertions in the test.

The following example code snippet uses the `verify` namespace to check whether an element with class `non_existing` is visible on the page. If the assertion fails, a failure is logged and the test continues: <br>
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">browser.verify.visible('.non_existing');</code></pre></div>

### Basic Assertions

The methods from the <a href="https://nodejs.org/api/assert.html" target="_blank">Node.js assert module</a> are also available on the `.assert`/`.verify` namespaces to be used as required.

### Negate (".not") Assertions

Starting Nightwatch version **1.3**, all the assertions including custom-defined assertions have a `".not"` counterpart, which can be used to assert the opposite condition.

<div class="alert alert-info">
Assertions such as, `elementNotPresent`, `cssClassNotPresent`, `hidden` are obsolete and deprecated.
</div>

The following example code snippet shows the `".not"` assertions:

<div class="sample-test"><i>tests/sampleTest.js</i><pre data-language="javascript"><code class="language-javascript">describe('Demo .not assertion', function() {
  it('demo test', function(browser) {
    browser.init();
    <br>
    browser
      .element.find('.not_present')
      .assert.not.elementPresent();
    <br>
    browser 
      .assert.not.urlContains('http://');
    <br>
    // ...
  })
})</code></pre></div>

### Automatic Retries

By default, Nightwatch automatically retries failed assertions for up to `5000` milliseconds. This can be configured by setting the  `retryAssertionTimeout` (in milliseconds) property in your `globals` object in your `nightwatch.json` file. Check out [working with test globals](/guide/concepts/test-globals.html) for more details.  

If the given timeout is reached, the test runner stops retrying and marks the assertion as failed.

The following example code snippet shows the `retryAssertionTimeout` property defined in the configuration file: 

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="line-numbers" data-language="javascript"><code class="language-javascript">{
  src_folders: ['tests'],
  <br>
  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      <br>
      globals: {
        myGlobalVar: 'some value',
        retryAssertionTimeout: 5000
      }
    }
  }
}
</code></pre></div>

### Expect assertions

In addition to the `assert` namespace, the Nightwatch API supports out of the box a BDD-style `expect` assertion library which greatly improves the flexibility as well as readability of the assertions.

The `expect` assertions use a subset of the `Expect` api from the [Chai framework][12] and at this point are available for elements, cookies, page title, and url.

#### Example
Here a basic example that uses various `expect.element([...])` assertions: 

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test Ecosia.org': function (browser) {
    browser.url('https://www.ecosia.org/');
    <br>
    // expect element header to be present in 1000ms
    expect(browser.element.find('header')).to.be.present.before(1000);
    <br>
    browser.end();
  }
};
</code></pre>
</div>

#### Expecting a specific elements count
In this example, the test is expecting that a specified number of elements exist on the page, using the `expect.elements([...]).count` assertion:  

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'demo test ecosia.org'(browser) {
    browser
      .url('https://www.ecosia.org/')
      .expect(browser.element.findAll('section').count()).to.equal(5);
  },
  <br>
  after(browser) {
    browser.end();
  }
};
</code></pre>
</div>

<br>

The `expect` interface provides a much more flexible and fluid language for defining assertions, significantly improved over the existing `assert` interface. The only downside is that it's not possible to chain assertions anymore.

<br>

For a complete list of available `expect` assertions, refer to the [API docs][13].

[12]:   https://chaijs.com/api/bdd/
[13]:   /api/#expect-api

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/writing-tests/commands.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Commands</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/running-tests/using-the-cli-test-runner.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Run tests</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>