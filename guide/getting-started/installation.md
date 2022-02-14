<div class="page-header"><h2>Installing Nightwatch</h2></div>

### Install Node.js

From [nodejs.org][1]:

> "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices."

There are installation packages and instructions for most major Operating systems on its website [nodejs.org][2]. Remember to install also the **npm** tool, which is the node package manager and is distributed with the Node.js installer.

<h3 id="install-nightwatch"><span>Install Nightwatch</span></h3>

To install the latest version using the <code>npm</code> command line tool, run the following:

<pre style="font-size:20px"><code class="language-bash">npm install nightwatch</code></pre>

<ul style="margin-top:20px">
<li>add **`-g`** option to make `nightwatch` runner available globally in your system.</li>
<li>add **`--save-dev`** option to save `nightwatch` as a `devDependency` in your <a href="https://docs.npmjs.com/files/package.json" target="_blank">package.json</a>.</li>
</ul>

<div class="row" id="video-container-section"></div>

<h3 id="install-webdriver"><span>Install Browser Drivers</span></h3>

Depending on your target browsers, you will need one or more specific WebDriver packages. You can install them from [NPM][3] or download separately. 

<h4 id="install-geckodriver">GeckoDriver</h4>

GeckoDriver can be simply installed from **[NPM][4]** and no further configuration is necessary.

<pre><code class="language-bash">npm install geckodriver --save-dev</code></pre>

Alternatively, it can be downloaded from the [GeckoDriver Releases][5] page on GitHub. Release notes are also available there.

<h4 id="install-chromedriver">ChromeDriver</h4>

Same as GeckoDriver, ChromeDriver can be simply installed from **[NPM][6]** and no further configuration is necessary.

Alternatively, it can be downloaded from the [ChromeDriver Downloads][7] page.

<pre><code class="language-bash">npm install chromedriver --save-dev</code></pre>

<h4 id="install-microsoftedge">Microsoft Edge Driver</h4>

The Edge Driver can be downloaded from the official [Microsoft Edge Driver][8] homepage.

<h4 id="install-safaridriver">SafariDriver</h4>

The `safaridriver` binary is already installed on recent versions of Mac OS, however some manual configuration is needed before tests can be run against Safari.

You will need to run the following once, before using the safaridriver:

<pre><code class="language-bash">safaridriver --enable</code></pre>

More details are available on the [Apple Developer website][9]. See also this tutorial: [Testing with WebDriver in Safari](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari).

<h3 id="install-selenium-server"><span>Install Selenium Server</span></h3>

Using Selenium Standalone Server used to be the de-facto standard for managing the various browser drivers and services, but starting with Nightwatch 1.0 is no longer required, nor is it recommended for testing against a single browser.

You will only need Selenium Server when testing against Internet Explorer, if you wish to run tests in parallel in multiple browsers, or in a [Selenium Grid][10] environment.

**Download Java**

Selenium Server is a Java application, which means you will also need to have the [Java Development Kit (JDK)][11] installed, minimum required version is 7. You can check this by running `java -version` from the command line.

#### Install From NPM
The easiest way to install the Selenium Server is from [NPM][12]. Nightwatch automatic configuration is already prepared for usage with this package against Chrome, Firefox, and Internet Explorer.

<pre><code class="language-bash">npm install selenium-server --save-dev</code></pre>

#### Download Selenium

You can find the latest Selenium Server stable and alpha version on the [Selenium downloads][13] page.

Download the `selenium-server-standalone-{VERSION}.jar` file and place it on the computer with the browser you want to test. In most cases this will be on your local machine and typically inside your project's source folder. A good practice is to create a separate subfolder (e.g. `bin`) and place it there as you might have to download other driver binaries if you want to test multiple browsers.

#### Running Selenium Automatically

If the server is on the same machine where Nightwatch is running, it can be started/stopped directly by the [Nightwatch Test Runner][14].

#### Running Selenium Manually

To run the Selenium Server manually, from the directory with the jar run the following:

<pre><code class="language-bash">java -jar selenium-server-standalone-{VERSION}.jar</code></pre>

#### Using Selenium Standalone Server
For viewing all the run-time options, run the previous command adding the `-help`:

<pre><code class="language-bash">java -jar selenium-server-standalone-{VERSION}.jar -help</code></pre>
<br>

More info about running the Selenium Server can be found here on the official [Selenium Docs](https://www.selenium.dev/documentation/)

[1]:	https://nodejs.org/
[2]:	https://nodejs.org/
[3]:	https://npmjs.com
[4]:	https://www.npmjs.com/package/geckodriver
[5]:	https://github.com/mozilla/geckodriver/releases
[6]:	https://www.npmjs.com/package/chromedriver
[7]:	https://chromedriver.chromium.org/downloads
[8]:	https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
[9]:	https://developer.apple.com/documentation/webkit/about_webdriver_for_safari/
[10]:	https://selenium.dev/documentation/en/grid/
[11]:	https://www.oracle.com/technetwork/java/javase/downloads/index.html
[12]:	https://www.npmjs.com/package/selenium-server
[13]:	https://selenium-release.storage.googleapis.com/index.html
[14]:	https://v2.nightwatchjs.org/guide/running-tests/nightwatch-runner.html
