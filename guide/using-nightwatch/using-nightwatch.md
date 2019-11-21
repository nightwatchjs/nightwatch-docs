## Using Nightwatch

<h3 id="writing-tests"><span>Writing Tests</span></h3>

Nightwatch makes it very easy to write automated End-to-End tests using the preferred CSS selector model to locate elements on a page.

Create a separate folder for tests in your project, e.g.: `tests`. Each file inside it will be loaded as a test suite by the Nightwatch test runner. 

#### Basic Example
Here's a basic test suite example which opens the search engine [Ecosia.org][1], searches for the term "nightwatch", then verifies if the term first result is the Nightwatch.js website.

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test ecosia.org' : function (browser) {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};</code></pre>
</div>
<br>

A test can have multiple steps, if needed:<br><br>

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'step one: navigate to ecosia.org': function (browser) {
    browser
      .url('https://www.ecosia.org')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]');
  },

  'step two: click submit' : function (browser) {
    browser
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};</code></pre></div>

<h3 id="finding-amp-interacting-with-elements"><span>Finding &amp; Interacting with Elements</span></h3>

Finding elements on a page is by far one of the most common functions during an end-to-end test. Nightwatch provides several techniques of locating elements and also an extensible assertion framework to perform verifications on them. 

Elements are searched for from the document root, using either a CSS selector or an Xpath selector. It is possible to use other locator strategies as well, refer to the [Webdriver docs][2] for details.

Elements are internally identified using a _[web element reference id][3]_. When interacting with elements, this step happens behind the scenes and Nightwatch has automatic retry mechanisms for locating the element before interacting with it or performing assertions.

<div class="alert alert-info">
<h5>Implicit Waits</h5>
When interacting with elements, Nightwatch polls the DOM for a configurable duration when trying to find any element. If the element is not found, a `NoSuchElementError` error is thrown. 
</div>

In the example above, the command `setValue` is first performing internally the element lookup and then calling the element set value command. The test can be simplified like so:  

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test ecosia.org': function (browser) {
    browser
      .url('https://www.ecosia.org/')
      .setValue('input[type=search]', 'nightwatch')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};</code></pre>
</div>

For more info on element related commands, see the [API Reference][4] pages.

<h3 id="writing-assertions"><span>Writing Assertions</span></h3>

Assertions are what determines if the test passes or not. Assertions are different than commands in the sense that assertions may use one or more commands internally. 
 
Assertions are also automatically retried using the same mechanism as for implicit waiting on finding elements. 

In the example above there are four assertions: `waitForElementVisible`, `assert.atitleContains`, `assert.visible` on two separate elements, and `assert.containsText`.
  
Assertions and their status (pass/fail) are displayed in the terminal. Commands (such as `setValue` or `url`) are only shown in the verbose output.

<div class="test-output"><img src="/images/demo-output.png" alt="Test Output" /></div>

#### Assertion Failures
When an assertion fails, an `AssertionError` is thrown and the Nightwatch test runner detects it and marks the entire test as failed. 

A single test can have multiple assertions and, by default, if an assertion happens to fail the rest of the test is aborted. If the test suite has multiple steps or multiple testcases, the rest of steps/testcases will also be skipped.

#### Controlling Behaviour on Failure

Sometimes it is desirable for the rest of the assertions to continue, even if an assertion happens to fail mid-way. This can be achieved in several ways:

1. Using `.verify` instead of `.assert` - the assertion failure will be logged but the test execution will continue; the test is still marked as failed at the end;
2. Using [element selector objects][5] and set `abortOnFailure` to `false`, e.g.:
   <pre>browser.setValue({selector: 'input[type=search]', abortOnFailure: false}, 'nightwatch')</pre>

Running the remaining test steps/test cases is possible by setting `"skip_testcases_on_fail"` to `false` in your configuration file. Refer to the [Configuration][6] section for details.

#### Ending the Session on Failure

By default, when an assertion fails, the test runner ends the session and closes the browser window so it can continue with the remaining test suites.

However, if you wish to keep the browser window open whenever an assertion failure occurs, you can set `"end_session_on_fail"` to `false`. This can be useful for performing debugging.

Refer to the [Configuration][7] section for details.

<h3 id="using-bdd-describe-beta-"><span>Using BDD describe [beta]</span></h3>

Version **1.3** brings native support in Nightwatch for using the popular BDD interface for writing tests. No further configuration is necessary. 

It is possible to run tests written in BDD describe and Exports interfaces together. Prior to this version, users had to use the Mocha test runner but now it is possible without additional plugins or libraries. The BDD interface in Nightwatch provides the common `describe()`, `context()`, `test()`, `it()`, `specify()`, `before()`, `after()`, `beforeEach()`, and `afterEach()` functions. 

At this point Nightwatch doesn't support nested `describe`/`context` declarations. Only the top-level one is supported, which defines the name for the test suite. 

**Basic Example:**
<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">
describe('Ecosia', function() {

  test('demo test', function(browser) {
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

**- Test suite specific capabilities**
<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
describe('homepage test with describe', function() {
  // testsuite specific capabilities
  this.desiredCapabilities = {
    browserName: 'firefox'
  };
  
  test('...', function() {...});
});
</code></pre></div>

**- Test suite specific retries**
<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
describe('homepage test with describe', function() {
  // how many time to retry a failed testcase inside this test suite
   this.retries(3);
   
   // how many times to retry the current test suite in case of an assertion failure or error
   this.suiteRetries(2);
   
   test('...', function() {...});
});
</code></pre></div>

#### Complete BDD Syntax

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
describe('homepage test with describe', function() {
  // testsuite specific capabilities
  // this.desiredCapabilities = {};
  
  // Enable this if the current test is a unit/integration test (i.e. no Webdriver session will be created)
  // this.unitTest = false

  // Set this to false if you'd like the browser window to be kept open in case of a failure or error (useful for debugging)
  // this.endSessionOnFail = true
  
  // Set this to false if you'd like the rest of the test cases/test steps to be executed in the event of an assertion failure/error
  // this.skipTestcasesOnFail = true
  
  // Set this to true if you'd like this test suite to be skipped by the test runner
  // this.disabled = false
        
  // this.retries(3);
  // this.suiteRetries(2);
  
  // Control the assertion and element commands timeout until when an element should be located or assertion passed
  // this.timeout(1000)
  
  // Controll the polling interval between re-tries for assertions or element commands
  // this.retryInterval(100);

  before(function(browser) {
    this.homepage = browser.page.home();
  });

  test('startHomepage', () => {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.not.visible;
  });

  
  // Run only this testcase
  /*
  test.only('startHomepage', () => {
    this.homepage.navigate();
  });
  */ 
   
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
});
</code></pre></div>

<h3 id="using-es6-async-await-beta-"><span>Using ES6 async/await [beta]</span></h3>

Starting with version `v1.1` it is also possible to write tests as an ES6 [async function][8].
Simply by doing so, it will enable the API commands to return a promise and thus making it possible to use the [`await`][9] operator to retrieve the result, instead of the callback, as it is now.

This greatly improves the readability and ease of writing of tests. However, please note that it will no longer be possible to chain the API commands when using an async function.

<div class="alert alert-info">
  The `assert` and `expect` APIs will still work as before `v1.1` and they will support chaining, since the assertions do not return anything.
</div>

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'demo test async': async function (browser) {
    // get the available window handles
    const result = await browser.windowHandles();
    console.log('result', result);

    // switch to the second window
    // await is not necessary here since we're not interested in the result
    browser.switchWindow(result.value[1]);
  }
};</code></pre></div>

#### Callbacks and async testcases

Callbacks can still be used as before and if the callback returns a `Promise`, the result of the promise will be the result of the command. See below for an example:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'demo test async': async function (browser) {
    // get the available window handles
    const value = await browser.windowHandles(function(result) {
      // we only want the value, not the entire result object
      return Promise.resolve(result.value);
    });
    
    console.log('value', value);

    // switch to the second window
    browser.switchWindow(value[1]);
  }
};</code></pre></div>

<h3 id="using-xpath-selectors"><span>Using XPath selectors</span></h3>

Nightwatch supports xpath selectors also. To switch to xpath instead of css selectors as the locate strategy, in your test call the method `useXpath()`, as seen in the example below. To switch back to CSS, call `useCss()`.

To always use xpath by default set the property `"use_xpath": true` in your [Configuration][10].

<div class="sample-test"><pre class="line-numbers" data-language="javascript">
<code class="language-javascript">module.exports = {
  demoTest: function (browser) {
    browser
      .useXpath() // every selector now must be xpath
      .click("//tr[@data-recordid]/span[text()='Search Text']")
      .useCss() // we're back to CSS now
      .setValue('input[type=text]', 'nightwatch')
  }
};</code></pre></div>

You can also use xpath directly on a single command or assertion, by passing an [element selector object][11], like so:

<div class="sample-test"><pre class="line-numbers" data-language="javascript">
<code class="language-javascript">module.exports = {
  demoTest: function (browser) {
    browser
      .click({
        selector: '//tr[@data-recordid]/span[text()='Search Text']',
        locateStrategy: 'xpath'
      })
      .setValue('input[type=text]', 'nightwatch');
  }
};</code></pre></div>

<h3 id="expect-assertions"><span>Expect Assertions</span></h3>

The Nightwatch API supports out of the box a BDD-style `expect` assertion library which greatly improves the flexibility as well as readability of the assertions.

The `expect` assertions use a subset of the `Expect` api from the [Chai framework][12] and are available for elements only at this point. Here's an example:

<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://google.no')
      .pause(1000);

    // expect element <body> to be present in 1000ms
    browser.expect.element('body').to.be.present.before(1000);

    // expect element <#lst-ib> to have css property 'display'
    browser.expect.element('#lst-ib').to.have.css('display');

    // expect element <body> to have attribute 'class' which contains text 'vasq'
    browser.expect.element('body').to.have.attribute('class').which.contains('vasq');

    // expect element <#lst-ib> to be an input tag
    browser.expect.element('#lst-ib').to.be.an('input');

    // expect element <#lst-ib> to be visible
    browser.expect.element('#lst-ib').to.be.visible;

    browser.end();
  }
};
</code></pre>
</div>

<br>
The `expect` interface provides a much more flexible and fluid language for defining assertions, significantly improved over the existing `assert` interface. The only downside is that it's not possible to chain assertions anymore.

<br>
For a complete list of available `expect` assertions, refer to the [API docs][13].

[1]:	https://www.ecosia.org/
[2]:	https://www.w3.org/TR/webdriver/#locator-strategies
[3]:	https://www.w3.org/TR/webdriver/#elements
[4]:	https://nightwatchjs.org/api/commands/#elements-headline
[5]:	/guide/working-with-page-objects/#element-properties
[6]:	/gettingstarted/configuration/#extended-settings
[7]:	/gettingstarted/configuration/#extended-settings
[8]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
[9]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
[10]:	/gettingstarted/configuration/#extended-settings
[11]:	/guide/working-with-page-objects/#element-properties
[12]:	https://chaijs.com/api/bdd/
[13]:	/api/#expect-api
