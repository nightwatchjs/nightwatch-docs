<h3 id="using-bdd-describe-beta-"><span>BDD describe</span></h3>

Starting with version **1.3** Nightwatch has native support for using the popular BDD interface for writing tests. No further configuration is necessary. 

It is also possible to run tests written in BDD describe and Exports interfaces together. Prior to this version, users had to use the Mocha test runner but now it is possible without additional plugins or libraries. The BDD interface in Nightwatch provides the common `describe()`, `context()`, `test()`, `it()`, `specify()`, `before()`, `after()`, `beforeEach()`, and `afterEach()` functions. 

At this point Nightwatch doesn't support nested `describe`/`context` declarations. Only the top-level one is supported, which defines the name for the test suite. 

**Basic Example:**
<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
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

**• Test suite specific capabilities**
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

**• Test suite specific tags**
<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
describe('homepage test with describe', function() {
  // defining tags using bdd
  this.tags = ['login', 'authentication''];
  
  test('...', function() {...});
});
</code></pre></div>
  
**• Test suite specific retries**
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
  // All current settings are available via this.settings
  // console.log('Settings', this.settings);
  
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

- Previous: [Writing Tests](/guide/using-nightwatch/writing-tests.html)
- Next: [Using ES6 async/await](/guide/using-nightwatch/using-es6-async.html)
