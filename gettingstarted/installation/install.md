## Installation

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

<h3 id="install-webdriver"><span>Install Browser Drivers</span></h3>

Depending on your target browser(s), you will need one or more specific WebDriver packages. Below there are the most popular ones that you can install from [NPM][3] or download and configure separately.

<div class="alert alert-info" style="margin-top:20px">
Since version **`1.3`**, a configuration file `nightwatch.conf.js` is generated automatically if no config file is found in the current folder. The file contains all the necessary settings for the available browser drivers, including setup for running with Selenium Server.
</div>

<table class="table table-bordered table-striped">
<thead>
 <tr>
   <th style="width: 200px;">Browser Driver</th>
   <th style="width: 100px; text-align:center">Browser</th>
   <th>Description</th>
 </tr>
</thead>
<tbody>
  <tr>
    <td><a class="local-nav" href="/gettingstarted/installation/#install-geckodriver">GeckoDriver</a></td>
    <td class="browser"><img alt="Mozilla Firefox" src="https://nightwatchjs.org/img/logos/Firefox_Logo_2017.png"/></td>
    <td>Standalone application which implements the [W3C WebDriver protocol](https://w3c.github.io/webdriver/#protocol) to communicate with Gecko browsers, such as Firefox.</td>
  </tr>
  
  <tr>
    <td><a class="local-nav" href="/gettingstarted/installation/#install-chromedriver">ChromeDriver</a></td>
    <td class="browser"><img alt="Google Chrome" src="https://nightwatchjs.org/img/logos/1200px-Google_Chrome_icon.svg.png"/></td>
    <td>Standalone application which implements the [JSON Wire Protocol](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol) for Chromium, however it is currently in the process of transitioning to the W3C WebDriver spec.<br><br>Available for Chrome on Android and Chrome on Desktop (Mac, Linux, Windows and ChromeOS).</td>
  </tr>
  
  <tr>
     <td><a class="local-nav" href="/gettingstarted/installation/#install-microsoftedge">Microsoft Edge Driver</a></td>
     <td class="browser"><img alt="Microsoft Edge" src="https://nightwatchjs.org/img/logos/Microsoft_Edge_logo.svg.png"/></td>
     <td>Standalone application which is used to drive the recent Edge browser, based on Chromium, which works similar to ChromeDriver.</td>
  </tr>
  
  <tr>
    <td><a class="local-nav" href="/gettingstarted/installation/#install-safaridriver">SafariDriver</a></td>
    <td class="browser"><img alt="Microsoft Edge" src="https://nightwatchjs.org/img/logos/safari_icon_large_2x.png"/></td>
    <td>The `/usr/bin/safaridriver` binary comes pre-installed with recent versions of Mac OS and it's available to use following the instructions on [Apple Developer website](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari).
    <br><br>More information is available on <a href="https://developer.apple.com/documentation/webkit/about_webdriver_for_safari" target="_blank">About WebDriver for Safari</a> page.
    </td>
  </tr>
 
 </tbody>
</table>

Installing the WebDriver services can be done either by downloading the binary directly or by using an NPM package.

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

More details are available on the [Apple Developer website][9].

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
<p class="alert alert-warning">Starting with Selenium 3, FirefoxDriver is no longer included in the package. Also, starting with <strong>version 48</strong>, Firefox is no longer compatible with FirefoxDriver which is shipped with Selenium 2.x. Firefox users are advised to use <a href="https://github.com/mozilla/geckodriver/releases" target="_blank">GeckoDriver</a> for their testing. For more info, refer to the browser setup section.</p>

More info about running the Selenium Server can be found here: https://selenium.dev/documentation/en/remote_webdriver/remote_webdriver_server

[1]:	https://nodejs.org/
[2]:	https://nodejs.org/
[3]:	https://npmjs.com
[4]:	https://www.npmjs.com/package/geckodriver
[5]:	https://github.com/mozilla/geckodriver/releases
[6]:	https://www.npmjs.com/package/chromedriver
[7]:	https://chromedriver.chromium.org/downloads
[8]:	https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
[9]:	https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari
[10]:	https://selenium.dev/documentation/en/grid/
[11]:	https://www.oracle.com/technetwork/java/javase/downloads/index.html
[12]:	https://www.npmjs.com/package/selenium-server
[13]:	https://selenium-release.storage.googleapis.com/index.html
[14]:	https://nightwatchjs.org/guide#test-runner
