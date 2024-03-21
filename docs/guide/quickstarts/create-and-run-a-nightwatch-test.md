---
title: Getting Started
description: Get started with Nightwatch and run your first end-to-end test.
---

<div class="page-header"><h1>Install Nightwatch</h1></div>

Getting started with Nightwatch takes only a few short minutes. You can perform the following types of testing with Nightwatch

1. End to end testing of web apps on desktop & mobile browsers
2. Component testing with top frameworks such as React, Vue, Storybook & Angular
3. Mobile app testing on Android & iOS
4. API testing
5. Visual regression testing (VRT)
6. Accessibility testing

For all types of testing, you have to start by installing Nightwatch itself. Let’s begin!

### Prerequisites 
Make sure [Node][1] is installed on the system. 

<div class="alert alert-info">
Nightwatch supports all Node versions above V14.20
</div>

### Setup Nightwatch

Nightwatch can be installed with just one command line, either as a new project or in an existing location. 

##### 1. As a new project:

To setup Nightwatch as a new project, simply run:

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash">npm init nightwatch</code> <code style="color: #aaa9a2; font-size: 20px">&#60;directory-name&#62;</code></pre>

##### 2. In an existing project:

<pre class="hide-indicator"><code class="language-bash">cd &#60;directory-name&#62; 
npm init nightwatch
</code></pre>

Press __y__ when you see the prompt to install create-nightwatch

<pre class="hide-indicator"><code>❯ npm init nightwatch
Need to install the following packages:
  create-nightwatch
Ok to proceed? (y)</code></pre>

This installs Nightwatch, asks your preferences and sets up the `nightwatch.conf.js` file based on your preferences as shown below

<a href="https://github-production-user-asset-6210df.s3.amazonaws.com/1677755/242005915-a270e3c5-04ff-48e8-9f21-0a72c2b47756.gif"><img alt="Nightwatch setup using CLI Utility" src="https://github-production-user-asset-6210df.s3.amazonaws.com/1677755/242005915-a270e3c5-04ff-48e8-9f21-0a72c2b47756.gif" class="img-with-dropshadow"></a>

</br>

Answer the simple set of questions to complete the Nightwatch installation. In case you need more info around these questions please refer to the guide below. Otherwise please skip to Run your end to end tests section post completion of installation. 

### Preferences

#### Testing Types

This will setup Nightwatch along with all the required dependencies for the type of testing selected. Nightwatch base version will be installed irrespective of the choice.

<pre class="hide-indicator"><code>? Select testing type to setup for your project (Press &#60;space&#62; 
to select, &#60;a&#62; to toggle all, &#60;i&#62; to invert selection, and 
<enter> to proceed) </br>
❯◉ End-to-End testing </br>
 ◯ Component testing </br>
 ◯ Mobile app testing</code></pre>

<div class="alert alert-info">
You can select any 1 option and setup other types of testing later as well. 
</div>

#### Test runner & Language

Nightwatch also supports other test runners. You can pick [Mocha][15] or [Cucumber JS][16] as a test runner apart from Nightwatch.

Nightwatch [supports TypeScript][17] for test files after v1.6.0. So you can choose to have the test setup in Javascript or Typescript.

<pre class="hide-indicator"><code>? Select language + test runner variant (Use arrow keys) </br>
❯ JavaScript / default </br>
  TypeScript / default  </br>
  JavaScript / Mocha  </br>
  JavaScript / CucumberJS </code></pre>

#### Browser Selection

You can pick the browsers you'll be testing on, and the config will be automatically created for them. 

<pre class="hide-indicator"><code>? Select target browsers (Press &#60;space&#62; to select, &#60;a&#62; to toggle all, &#60;i&#62; to invert selection,
 and &#60;enter&#60; to proceed) </br>
❯◯ Firefox </br>
 ◯ Chrome </br>
 ◯ Edge </br>
 ◯ Safari</code></pre>

 <div class="alert alert-info">
 You can add additional browsers later as well by installing the driver and adding a corresponding environment
</div>

#### Test Folder

Next you can name the folder where you want the tests to reside. The default value is tests.

<pre class="hide-indicator"><code>? Enter source folder where test files are stored (tests)</code></pre>

#### Base URL

This is a very important configuration that should be used as a variable in your tests so that you can switch between different testing environment & URLs with a simple config change. This preference will default to http://localhost

<pre class="hide-indicator"><code>? Enter the base_url of the project (http://localhost)</code></pre>

#### Run on Local/Remote (Cloud)

You can configure Nightwatch to run locally on your machine, remotely on a cloud machine or both

<pre class="hide-indicator"><code>? Select where to run Nightwatch tests (Use arrow keys) </br>
❯ On localhost </br>
  On a remote/cloud service </br>
  Both </code></pre>

For remote testing, host and port details will be automatically added in case you select `BrowserStack` or `Sauce Labs`. However if you select to run on your own remote selenium server or any other cloud provider, you will have to manually configure the host & port details in the `nightwatch.conf.js` file. 

#### Anonymous Metrics

Allow Nightwatch to collect anonymous metrics. The preference will default to `no` as we respect our user’s privacy. 

<pre class="hide-indicator"><code>? Allow Nightwatch to collect completely anonymous usage 
metrics? (y/N)</code></pre>

#### Run tests on Mobile web

Nightwatch supports running of tests on real and virtual mobile devices. Nightwatch will also take care of the setup of all underlying SDK, libraries & virtual devices. 

<pre class="hide-indicator"><code>Setup testing on Mobile devices as well? (Use arrow keys) </br>
  Yes </br>
❯ No, skip for now </code></pre>


Once you select this preference, Nightwatch setup will begin. It will also generate sample tests for you to get started. 

If you are running from a Mac, safaridriver is present by default but must be enabled. You will be presented with the following option.

<pre class="hide-indicator"><code>? Enable safaridriver (requires sudo password)? (Use arrow keys)
 ❯Yes
  No, I'll do that later.</code></pre>


### Run your first end-to-end test

Once your setup is done, you can run example tests with this command

<pre><code class="language-bash">npx nightwatch ./nightwatch/examples</code></pre>

The output should look similar to this:

<pre class="hide-indicator"><code>
 Running:  default: examples/accessibilty-tests/websiteAccessibility.js </br>
 Running:  default: examples/basic/duckDuckGo.js </br>
 Running:  default: examples/basic/ecosia.js </br>
 Running:  default: examples/basic/todoList.js </br>
 Running:  default: examples/with-custom-assertions/todoList.js </br>
 Running:  default: examples/with-custom-commands/angularTodo.js </br>
 Running:  default: examples/with-page-objects/google.js </br> </br>

✔  default: examples/with-custom-assertions/todoList.js    </br>
 [To-Do List End-to-End Test] Test Suite </br>
 ────────────────────────────────────────────────────────────────────────────── </br>
 Using: chrome (110.0.5481.177) on MAC OS X. </br></br>
  
 – should add a new todo element </br>
 ✔ Testing if element &lt;#todo-list ul li&gt; has count: 4 (10ms) </br>
 ✔ Testing if element &lt;#todo-list ul li&gt; has count: 5 (59ms) </br>
 ✔ default: examples/with-custom-assertions/todoList.js [To-Do List End-to-End Test] should add a new todo element (2.531s)  </br>
. </br>
. </br>
. </br>
  ✨ PASSED. 22 total assertions (16.68s) </br>
 Wrote HTML report file to: &lt;path to Nightwatch project folder&gt;/tests_output/nightwatch-html-report/index.html
</code></pre>


### View the report

Simply, copy-paste the HTML path at the end of the output in your browser address bar to view the report

![HTML report](https://github.com/nightwatchjs/nightwatch-docs/assets/1677755/6fa81ef5-59f2-4562-8075-1aabb04e593f)

Congratulations! You have installed Nightwatch, run a test & viewed the HTML report. 

<div class="alert alert-info">
Please join our <a href="https://discord.gg/SN8Da2X">Discord Server</a> to connect with the growing Nightwatch community and seek help in case you face any issues.
</div>

### Recommended Next Steps

Now that you have installed Nightwatch

1. [Learn how to write end to end tests for web applications][18]
2. [Learn how to do mobile app testing][19]
3. [Learn API testing with Nightwatch][20]
4. [Learn how to do visual regression testing][21]
5. [Learn how to do accessibility testing][22]

[1]:    https://nodejs.org/
[2]:    https://nodejs.org/
[3]:    https://npmjs.com
[4]:    https://www.npmjs.com/package/geckodriver
[5]:    https://github.com/mozilla/geckodriver/releases
[6]:    https://www.npmjs.com/package/chromedriver
[7]:    https://chromedriver.chromium.org/downloads
[8]:    https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/?tabs=c-sharp#download-microsoft-edge-driver
[9]:    https://developer.apple.com/documentation/webkit/about_webdriver_for_safari/
[10]:   https://selenium.dev/documentation/en/grid/
[11]:   https://www.oracle.com/technetwork/java/javase/downloads/index.html
[12]:   https://www.npmjs.com/package/selenium-server
[13]:   https://github.com/SeleniumHQ/selenium/releases
[15]:   https://nightwatchjs.org/guide/third-party-runners/using-mocha.html
[16]:   https://nightwatchjs.org/blog/running-cucumber-tests-with-nightwatch/
[17]:   https://github.com/nightwatchjs/nightwatch/releases/tag/v1.6.0
[18]:   /guide/writing-tests/introduction.html
[19]:   /guide/mobile-app-testing/introduction.html
[20]:   /guide/writing-tests/api-testing.html
[21]:   /guide/writing-tests/visual-regression-testing.html
[22]:   /guide/using-nightwatch/accessibility-testing.html

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/overview/whats-new.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Release notes</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/quickstarts/create-and-run-a-test-with-selenium-server.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Run a test with Selenium Server</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>