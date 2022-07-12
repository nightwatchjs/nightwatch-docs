---
title: Create and run a Nightwatch test with Selenium Server
description: Learn how to create and run tests using Nightwatch with Selenium Server
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Create and run a test with Selenium Server</h2></div>

In this quickstart, you will learn how to create and run a Nightwatch test using [Selenium Server][10]

<div class="alert alert-info">
Selenium Server allows the execution of WebDriver scripts on remote machines by routing commands sent by the client to remote browser instances. It aims to provide an easy way to run tests in parallel on multiple machines.
</div>


### Prerequisites 
Make sure [Node][1] is installed on the system. The version used for this tutorial is **v16.14.2**

### Setup Nightwatch
Create a new directory and initiate a Nightwatch project there.
<pre>
<code class="language-bash">mkdir &#60;directory-name&#62;
cd &#60;directory-name&#62;
npm init nightwatch</code></pre>

or directly create the project in a new directory with a single command

<pre>
<code class="language-bash">npm init nightwatch &#60;directory-name&#62;</code></pre>

Press `y` when you see the prompt to install create-nightwatch

<pre><code class="language-bash">❯ npm init nightwatch
Need to install the following packages:
  create-nightwatch
Ok to proceed? (y)</code></pre>

This installs Nightwatch, asks your preferences and sets up the nightwatch.config.js file based on your preferences as shown below

![Nightwatch setup using CLI Utility](https://user-images.githubusercontent.com/39924567/174841680-59664ff6-da2d-44a3-a1df-52d22c69b1e2.gif)

### Preferences
  
#### Test Runner

Nightwatch also supports other test runners. You can also pick [Mocha][15] or [Cucumber JS][16] as a test runner apart from Nightwatch.

#### Language - Javascript/Typescript

Nightwatch [supports typescript][17] for test files after v1.6.0. So you can choose to have the test setup in Javascript or Typescript.

<pre><code class="language-bash"> What is your Language - Test Runner setup? (Use arrow keys)
❯ JavaScript - Nightwatch Test Runner
  JavaScript - Mocha Test Runner
  JavaScript - CucumberJS Test Runner
  TypeScript - Nightwatch Test Runner
  TypeScript - Mocha Test Runner</code></pre>

#### Run on Local/Remote (Cloud)

You can configure Nightwatch to run locally on your machine, remotely on a cloud machine or both

<pre><code class="language-bash"> Where do you want to run your e2e tests? (Use arrow keys)
❯ On my local machine
  On a remote machine (cloud)
  Both</code></pre>

For remote testing, host and port details will be automatically added in case you select `BrowserStack` or `Sauce Labs`. However if you select to run on your own remote selenium server or any other cloud provider, you will have to manually configure the host & port details in the `nightwatch.conf.js` file. 

#### Browser Selection

You can pick the browsers you'll be testing on, and the config will be automatically created for them. We provide a multi-selection option so you can pick as many browsers you want to test on. You can also use the selenium-server when testing on the local machine.


<pre><code class="language-bash"> Where you'll be testing on? (Press &#60;space&#62; to select, &#60;a&#62; to toggle all, &#60;i&#62; to invert selection,
 and &#60;enter&#60; to proceed)
❯◯ Firefox
 ◯ Chrome
 ◯ Edge
 ◯ Safari
 ◯ Local selenium-server</code></pre>

 Check the `Local selenium-server` option from the list on top of the selected browsers.

#### Test Folder Name

Next you can name the folder where you want the tests to reside. The default value is tests.

<pre><code class="language-bash"> Where do you plan to keep your end-to-end tests? (tests)</code></pre>

#### Base URL

Add the base URL that the tests will run against. This preference will default to http://localhost

<pre><code class="language-bash"> What is the base_url of your project? (http://localhost)</code></pre>

Once you select this preference, Nightwatch setup will begin. It will also generate sample tests for you to get started. 

If you are running from a Mac, safaridriver is present by default but must be enabled. You will be presented with the following option.

<pre><code class="language-bash">? Enable safaridriver (requires sudo password)? (Use arrow keys)
 ❯Yes
  No, I'll do that later.</code></pre>

### Run a test

Once your setup is done, you can run tests with this command

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