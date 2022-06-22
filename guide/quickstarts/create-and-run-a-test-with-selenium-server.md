<div class="page-header"><h2>Create and run a test with Selenium Server</h2></div>

In this quickstart, you will learn how to create and run a Nightwatch test using [Selenium Server][10]

<div class="alert alert-info">
Selenium Server allows the execution of WebDriver scripts on remote machines by routing commands sent by the client to remote browser instances. It aims to provide an easy way to run tests in parallel on multiple machines.
</div>

### Prerequisites 
1. Make sure [Node][1] is installed on the system. The version used for this tutorial is **v16.14.2**
2. Make sure [Java][11] is installed on the system. The version used for this tutorial is **openjdk 11.0.14**

### Step 0: create a new project
Create a new directory and initiate a node project there.
<pre>
<code class="language-bash">mkdir nightwatch-project
cd nightwatch-project
npm init</code></pre>

### Step 1: install Nightwatch and dependencies
Install the latest version of nightwatch
<pre><code class="language-bash">npm install nightwatch --save-dev</code></pre>

<h4 id="install-browser-drivers">Browser Drivers</h4>

Depending on your target browsers (make sure you have the browser installed and updated), you will need one or more specific WebDriver packages. Dependenging on you browser run one of the following:

<h4 id="install-geckodriver">Firefox</h4>

<pre><code class="language-bash">npm install geckodriver --save-dev</code></pre>

<h4 id="install-chromedriver">Chrome</h4>

<pre><code class="language-bash">npm install chromedriver --save-dev</code></pre>

<h4 id="install-microsoftedge">Microsoft Edge Driver</h4>

Follow the [Download Microsoft Edge Driver][8] section on the official Microsoft Edge documentation page to download the Edge Driver.


<h4 id="install-safaridriver">SafariDriver</h4>

The `safaridriver` binary is already installed on recent versions of Mac OS, however some manual configuration is needed before tests can be run against Safari.

You will need to run the following once, before using the safaridriver:

<pre><code class="language-bash">safaridriver --enable</code></pre>

### Step 2: install Selenium Server
<div class="alert alert-warning">Selenium Server is a Java application, which means you will also need to have the [Java Development Kit (JDK)][11] installed, minimum required version is 7. You can check this by running `java -version` from the command line.</div>

The easiest way to install the Selenium Server is from [NPM][12] using the `@nightwatch/selenium-server` package which is maintained by the Nightwatch team. Nightwatch automatic configuration is already prepared for usage with this package against Chrome, Firefox, and Internet Explorer.

<pre><code class="language-bash">npm install @nightwatch/selenium-server</code></pre>

### Step 3: write a test
Create a new folder called `tests` inside `nightwatch-project` folder.

<pre><code class="language-bash">mkdir tests</code></pre>

Then create a file called `ecosia.js` inside the tests folder and put the following code in that file:
<div class="sample-test">
<i>tests/ecosia.js</i>
<pre class="line-numbers language-javascript"  data-language="javascript"><code class="language-javascript">describe('Ecosia.org Demo', function() {

  before(browser => browser.navigateTo('https://www.ecosia.org/'));

  it('Demo test ecosia.org', function(browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.textContains('.layout__content', 'Nightwatch.js');
  });

  after(browser => browser.end());
});
</code></pre>
</div>

<div class="alert alert-info">
The above test opens the search engine [Ecosia.org](https://www.ecosia.org/), types the term "nightwatch" into the search input field, then verifies if the results page contains the text "Nightwatch.js".
</div>

### Step 4: run the test

Use the bundled `npx` tool from NPM to quickly run the `nightwatch` command:

##### Firefox
<pre><code class="language-bash">npx nightwatch tests/ecosia.js --env selenium.firefox</code></pre>

##### Chrome
<pre><code class="language-bash">npx nightwatch tests/ecosia.js --env selenium.chrome</code></pre>

##### Safari
<pre><code class="language-bash">npx nightwatch tests/ecosia.js --env selenium.safari</code></pre>

The output should look similar to this:
<pre class="hide-indicator" ><code class="language-bash">
[Ecosia.org Demo] Test Suite
============================
ℹ Connected to localhost on port 4444 (2153ms).
  Using: firefox (94.0.1) on mac 20.6.0 platform.

✔ Running Demo test ecosia.org:

✔ Element <body> was visible after 24 milliseconds.
✔ Testing if the page title contains 'Ecosia' (10ms)
✔ Testing if element <input[type=search]> is visible (51ms)
✔ Testing if element <button[type=submit]> is visible (12ms)
✔ Testing if element <.mainline-results> contains text 'Nightwatch.js' (197ms)

OK. 5 assertions passed. (1.838s)
</code></pre>



[1]:	https://nodejs.org/
[2]:	https://nodejs.org/
[3]:	https://npmjs.com
[4]:	https://www.npmjs.com/package/geckodriver
[5]:	https://github.com/mozilla/geckodriver/releases
[6]:	https://www.npmjs.com/package/chromedriver
[7]:	https://chromedriver.chromium.org/downloads
[8]:	https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/?tabs=c-sharp#download-microsoft-edge-driver
[9]:	https://developer.apple.com/documentation/webkit/about_webdriver_for_safari/
[10]:	https://selenium.dev/documentation/en/grid/
[11]:	https://www.java.com/en/
[12]:	https://www.npmjs.com/package/selenium-server
[13]:	https://github.com/SeleniumHQ/selenium/releases
[14]:	https://v2.nightwatchjs.org/guide/running-tests/nightwatch-runner.html