### WebDriver Service

Depending on your target browser, you will need a specific WebDriver server. You will need to download and configure one (or more) of the following services:


<table class="table table-bordered table-striped">
<thead>
 <tr>
   <th style="width: 200px;">WebDriver Binary</th>
   <th style="width: 100px; text-align:center">Browser</th>
   <th>Description</th>
 </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://github.com/mozilla/geckodriver/releases">GeckoDriver</a></td>
    <td class="browser"><img alt="Mozilla Firefox" src="http://nightwatchjs.org/img/logos/Firefox_Logo_2017.png"/></td>
    <td>Standalone server which implements the [W3C WebDriver protocol](https://w3c.github.io/webdriver/#protocol) to communicate with Gecko browsers, such as Firefox.</td>
  </tr>
  
  <tr>
    <td><a href="http://chromedriver.chromium.org/" target="_blank">ChromeDriver</a></td>
    <td class="browser"><img alt="Google Chrome" src="http://nightwatchjs.org/img/logos/1200px-Google_Chrome_icon.svg.png"/></td>
    <td>Standalone server which implements the [JSON Wire Protocol](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol) for Chromium, however it is currently in the process of transitioning to the W3C WebDriver spec.<br><br>Available for Chrome on Android and Chrome on Desktop (Mac, Linux, Windows and ChromeOS).</td>
  </tr>
  
  <tr>
     <td><a href="https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/" target="_blank">Microsoft WebDriver</a></td>
     <td class="browser"><img alt="Microsoft Edge" src="http://nightwatchjs.org/img/logos/Microsoft_Edge_logo.svg.png"/></td>
     <td>Windows executable which supports both the W3C WebDriver spec and JSON Wire Protocol for running tests against Microsoft Edge.</td>
  </tr>
  
  <tr>
    <td><a href="https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari" target="_blank">SafariDriver</a></td>
    <td class="browser"><img alt="Microsoft Edge" src="http://nightwatchjs.org/img/logos/safari_icon_large_2x.png"/></td>
    <td>The `/usr/bin/safaridriver` binary comes pre-installed with recent versions of Mac OS and it's available to use following the instructions on [Apple Developer website](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari).
    <br><br>More information is available on <a href="https://developer.apple.com/documentation/webkit/about_webdriver_for_safari" target="_blank">About WebDriver for Safari</a> page.
    </td>
  </tr>
 
 </tbody>
</table>

### Installing WebDriver

Installing the WebDriver services can be done either by downloading the binary directly or by using an NPM package.

<h4>GeckoDriver</h4>

GeckoDriver can be downloaded from the [Releases page](https://github.com/mozilla/geckodriver/releases) on GitHub. Release notes are also available there. Or you can use the [geckodriver](https://www.npmjs.com/package/geckodriver) NPM package as a dependency in your project:

<pre>npm install geckodriver --save-dev</pre>

<h4>ChromeDriver</h4>

ChromeDriver can be downloaded from the [ChromeDriver Downloads](http://chromedriver.chromium.org/downloads) page. Or you can use the [chromedriver](https://www.npmjs.com/package/chromedriver) NPM package as a dependency in your project:

<pre>npm install chromedriver --save-dev</pre>

<h4>Microsoft WebDriver</h4>

WebDriver for Microsoft Edge is now a Windows Feature on Demand. To install run the following in an elevated command prompt:

<pre class="windows-cmd">DISM.exe /Online /Add-Capability /CapabilityName:Microsoft.WebDriver~~~~0.0.1.0</pre>

More details about installation and usage documentation are available on the official [Microsoft WebDriver homepage](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/).

<h4>SafariDriver</h4>

The `safaridriver` binary is already installed on recent versions of Mac OS, however some manual configuration is needed before tests can be run against Safari.

You will need to run the following once, before using the safaridriver:

<pre>safaridriver --enable</pre>

More details are available on the [Apple Developer website](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari).

### Using Selenium Server

Using Selenium Standalone Server used to be the de-factor standard for managing the various browser drivers and services, but starting with Nightwatch 1.0 is no longer required, nor is it recommended, unless you are testing against legacy browsers, such as Internet Explorer. 

It might be required if you have a [Selenium Grid](https://github.com/SeleniumHQ/selenium/wiki/Grid2) environment. 

#### Download Java
Selenium Server is a Java application, which means you will also need to have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed, minimum required version is 7. You can check this by running `java -version` from the command line.

#### Download Selenium

Download the latest version of the `selenium-server-standalone-{VERSION}.jar` file from the [Selenium downloads page](http://selenium-release.storage.googleapis.com/index.html) and place it on the computer with the browser you want to test.
In most cases this will be on your local machine and typically inside your project's source folder.

A good practice is to create a separate subfolder (e.g. `bin`) and place it there as you might have to download other driver binaries if you want to test multiple browsers.  

##### Running Selenium Automatically

If the server is on the same machine where Nightwatch is running, it can be started/stopped directly by the [Nightwatch Test Runner](http://nightwatchjs.org/guide#test-runner).

##### Running Selenium Manually

To run the Selenium Server manually, from the directory with the jar run the following:

<pre><code class="language-bash">java -jar selenium-server-standalone-{VERSION}.jar</code></pre>

#### Using Selenium Standalone Server
For viewing all the run-time options, run the previous command adding the `-help`:

<pre><code class="language-bash">java -jar selenium-server-standalone-{VERSION}.jar -help</code></pre>
<br>
<p class="alert alert-warning">Starting with Selenium 3, FirefoxDriver is no longer included in the package. Also, starting with <strong>version 48</strong>, Firefox is no longer compatible with FirefoxDriver which is shipped with Selenium 2.x. Firefox users are advised to use <a href="https://github.com/mozilla/geckodriver/releases" target="_blank">GeckoDriver</a> for their testing. For more info, refer to the browser setup section.</p>

More info about running the Selenium Server can be found here: https://github.com/SeleniumHQ/selenium/wiki/RemoteWebDriverServer
