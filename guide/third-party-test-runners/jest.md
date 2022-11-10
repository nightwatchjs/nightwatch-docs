---
title: Jest Test Runner
description: Learn how to use Jest Test Runner in Nightwatch.
---

<div class="page-header"><h2>Using Jest as a test runner</h2></div>

### Overview
**Jest** is a javascript testing framework which is used to easily write unit tests whereas ***Nightwatch.js*** is an integrated test framework for performing automated end-to-end testing on web applications and websites, across all major browsers.

So to specifically use Jest and Nightwatch functionalities simultaneously, Nightwatch has introduced a new dependency `jest-environment-nightwatch`.


### API
#### global.browser
The Nightwatch [browser API](https://v2.nightwatchjs.org/api/#the-browser-object) object. Unavailable when ***autoStartSession*** is off.

#### global.jestNightwatch
The Jest environment used the Nightwatch [programmatic API](https://v2.nightwatchjs.org/api/programmatic/) to create the Nightwatch instance and export the browser API.

Available properties/methods:
- `.element(<locator>)` - use the Nightwatch [.element() API](https://v2.nightwatchjs.org/api/element/) to locate elements in the page;

- `.updateCapabilities({ capabilities })` - used when ***autoStartSession*** is off in order to update the capabilities at run-time;

- `.launchBrowser()` - used when autoStartSession is off in order to start the session and open the browser;

- `.settings` - the Nightwatch settings object;

- `.nightwatch_client` - the Nightwatch (internal) instance.

### Configuration with Example
#### Step 0: install Nightwatch
Follow the [guide](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html#guide-container) or watch the [video](​​https://vimeo.com/714406223) to install Nightwatch from scratch.

#### Step 1: Install Jest
<div class="sample-test"><pre><code class="language-bash">npm i jest --save-dev</code></pre></div>

And make sure you have included the following script in your ***package.json*** file in order to run jest tests.

<pre class="line-numbers"><code class="json">{
 "scripts": {
   "test": "jest"
 }
}</code></pre>

#### Step 2: Install and configure the [jest-environment-nightwatch](https://github.com/nightwatchjs/jest-environment-nightwatch) package
In order to use Nightwatch with Jest, you need to install the  `jest-environment-nightwatch`. Install Jest and other dependencies needed for testing.

<div class="sample-test"><pre><code class="language-bash">npm i jest-environment-nightwatch --save-dev</code></pre></div>


The Nightwatch Jest environment comes with default settings. But, if needed, you can tweak the [Jest configuration](https://jestjs.io/docs/configuration):


<div class="sample-test"><i>jest.config.js</i>
<pre class="line-numbers"><code class="language-javascript">{
  testEnvironment: 'jest-environment-nightwatch',
  testEnvironmentOptions: {
    // Nightwatch related options
    headless: true,
    browserName: 'chrome',
    baseUrl: '',
    verbose: false,  
    output: true,
    env: null, 
    parallel: false,
    devtools: false,
    debug: false,
    autoStartSession: true,
    persistGlobals: true,
    configFile: './nightwatch.conf.js',
    globals: {}, 
    webdriver: {},
    timeout: null,
    enableGlobalApis: false,
    alwaysAsync: true,
    desiredCapabilities: {},
    async setup(browser) {},
    async teardown(browser) {},
  },

  testMatch: [
      "**/tests/*.[jt]s?(x)"
   ],
}</code></pre></div>

You can set your test folders directory in `testMatch`. 

#### Nightwatch options
The default behavior of Nightwatch can be modified by supplying any of the following configuration options. Below is a list of available options and their default values.


<div class="apimethod">
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th style="width: 60%;">Description</th>
        <th>Default</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>headless</code></td>
        <td>Boolean</td>
        <td>Run Nightwatch in headless mode (available in Firefox, Chrome, Edge)</td>
        <td>true</td>
      </tr>
      <tr>
        <td><code>browserName</code></td>
        <td>String</td>
        <td>Browser name to use; available options are: chrome, firefox, edge, safari</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>baseUrl</code></td>
        <td>String</td>
        <td>The base url to use for the when using .navigateTo() with relative urls. When doing component testing it needs to be set to the url running the Vite dev server.</td>
        <td>http://localhost:3000</td>
      </tr>
      <tr>
        <td><code>verbose</code></td>
        <td>Boolean</td>
        <td>Enable complete Nightwatch http logs.</td>
        <td>false</td>
      </tr>
      <tr>
        <td><code>output</code></td>
        <td>Boolean</td>
        <td>Show Nightwatch output</td>
        <td>true</td>
      </tr>
      <tr>
        <td><code>env</code></td>
        <td>String</td>
        <td>Nightwatch test environment to use, from nightwatch.conf.js. Learn more about test environments in the Nightwatch docs.</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>parallel</code></td>
        <td>Boolean</td>
        <td>Set this to true when running tests in parallel</td>
        <td>false</td>
      </tr>
      <tr>
        <td><code>devtools</code></td>
        <td>Boolean</td>
        <td>Chrome only: automatically open the chrome devtools</td>
        <td>false</td>
      </tr>
      <tr>
        <td><code>debug</code></td>
        <td>Boolean</td>
        <td>Component testing only: pause the test execution after rendering the component</td>
        <td>false</td>
      </tr>
      <tr>
        <td><code>autoStartSession</code></td>
        <td>Boolean</td>
        <td>Start the Nightwatch session automatically. If this is disabled, you'll need to call jestNightwatch.launchBrowser() in your tests.</td>
        <td>true</td>
      </tr>
      <tr>
        <td><code>persistGlobals</code></td>
        <td>Boolean</td>
        <td>Persist the same globals object between runs or have a (deep) copy of it per each test. Learn more about test globals in the Nightwatch docs.</td>
        <td>true</td>
      </tr>
      <tr>
        <td><code>configFile</code></td>
        <td>String</td>
        <td>The Nightwatch config file to use. A config file will be auto-generated by default, but this allows you to change that. Learn more about the Nightwatch config in the Nightwatch docs.</td>
        <td>./nightwatch.conf.js</td>
      </tr>
      <tr>
        <td><code>globals</code></td>
        <td>Object</td>
        <td>A list of globals to be used in Nightwatch. Globals are available on browser.globals. Learn more about the Nightwatch test globals in the Nightwatch docs.</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>webdriver</code></td>
        <td>Object</td>
        <td>A list of Webdriver related settings to configure the Nightwatch Webdriver service. Learn more about the Nightwatch webdriver settings in the Nightwatch docs. Nightwatch webdriver settings in the Nightwatch docs.</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>timeout</code></td>
        <td>Number</td>
        <td>Set the global timeout for assertion retries before an assertion fails.</td>
        <td>5000</td>
      </tr>
      <tr>
        <td><code>enableGlobalApis</code></td>
        <td>Boolean</td>
        <td>The Nightwatch global APIs (element(), expect()) are disable by default.</td>
        <td>false</td>
      </tr>
      <tr>
        <td><code>desiredCapabilities</code></td>
        <td>Object</td>
        <td>Define custom Selenium capabilities for the current session. Learn more about the specific browser driver that it is being used on the Nightwatch docs.</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>setup()</code></td>
        <td>Function</td>
        <td>Additional setup hook to be executed after Nightwatch has been started.</td>
        <td>none</td>
      </tr>
      <tr>
        <td><code>teardown()</code></td>
        <td>Function</td>
        <td>dditional teardown hook to be executed with the Nightwatch api object.</td>
        <td>none</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

#### Step 3: Run an example test
Consider the below example test :

<pre class="line-numbers"><code class="language-javascript">describe('duckduckgo example', function() {
  it('Search Nightwatch.js and check results', function(browser) {
    browser
      .navigateTo('https://duckduckgo.com')
      .waitForElementVisible('#search_form_input_homepage')
      .sendKeys('#search_form_input_homepage', ['Nightwatch.js'])
      .click('#search_button_homepage')
      .assert.visible('.results--main')
      .assert.textContains('.results--main', 'Nightwatch.js');
  }); 
});</code></pre>

**Note** : ***Jest has different naming conventions for hooks so you should confirm that your tests are following this guide.****

#### Step 4: View the results of Jest test runner

<img width="1266" src="https://user-images.githubusercontent.com/94462364/184708209-694f108c-f264-454a-b784-42a0a68211c4.png">


### Related articles
- [How-to guides > Write tests > Use Jest as a test runner](https://nightwatchjs.org/guide/writing-tests/using-ava.html)
- [How-to guides > Write tests > Use Mocha as a test runner](https://nightwatchjs.org/guide/writing-tests/using-mocha.html)
