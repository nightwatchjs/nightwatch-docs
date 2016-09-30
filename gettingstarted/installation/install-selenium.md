### Selenium Server Setup

The most common WebDriver implementation is the Selenium Server. This allows you to manage multiple browser configurations in one place. However, you can also run the individual browser drivers directly, such as the ChromeDriver, more details are available in the [Browser Drivers Setup](http://nightwatchjs.org/getingstarted#browser-drivers-setup) section.

#### Selenium Server

Selenium Server is a Java application which Nightwatch uses to connect to the various browsers. It runs separately on the machine with the browser you want to test. You will need to have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed, minimum required version is 7. You can check this by running `java -version` from the command line.

#### Download Selenium

Download the latest version of the `selenium-server-standalone-{VERSION}.jar` file from the [Selenium downloads page](http://selenium-release.storage.googleapis.com/index.html) and place it on the computer with the browser you want to test.
In most cases this will be on your local machine and typically inside your project's source folder.

A good practice is to create a separate subfolder (e.g. `bin`) and place it there as you might have to download other driver binaries if you want to test multiple browsers.  

#### Running Selenium Automatically

If the server is on the same machine where Nightwatch is running, it can be started/stopped directly by the [Nightwatch Test Runner](http://local.nightwatchjs.org/guide#test-runner).

#### Running Selenium Manually

To run the Selenium Server manually, from the directory with the jar run the following:

<pre><code class="language-bash">$ java -jar selenium-server-standalone-{VERSION}.jar</code></pre>

#### Using Selenium
For viewing all the run-time options, run the previous command adding the `-help`:

<pre><code class="language-bash">$ java -jar selenium-server-standalone-{VERSION}.jar -help</code></pre>
<br>
<p class="alert alert-warning">Starting with Selenium 3, FirefoxDriver is no longer included in the package. Also, starting with <strong>version 48</strong>, Firefox is no longer compatible with FirefoxDriver which is shipped with Selenium 2.x. Firefox users are advised to use <a href="https://github.com/mozilla/geckodriver/releases" target="_blank">GeckoDriver</a> for their testing. For more info, refer to the browser setup section.</p>

More info about running the Selenium Server can be found here: https://github.com/SeleniumHQ/selenium/wiki/RemoteWebDriverServer
