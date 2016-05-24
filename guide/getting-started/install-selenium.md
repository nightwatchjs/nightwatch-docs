### Running the Selenium Server

The Selenium WebDriver server is simply a Java servlet which runs separately on the machine with the browser you want to test. You will need to have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed, minimum required version is 7. You can check this by running `java -version` from the command line.

#### Download Selenium

Download the latest version of the `selenium-server-standalone-{VERSION}.jar` file from the [Selenium downloads page](http://selenium-release.storage.googleapis.com/index.html) and place it on the computer with the browser you want to test.
In most cases this will be on your local machine and typically inside your project's source folder.

A good practice is to create a separate subfolder (e.g. `bin`) and place it there as you might have to download other driver binaries if you want to test multiple browsers.  

#### Running Selenium Automatically

If the server is on the same machine where Nightwatch is running, it can be started/stopped directly by the [Nightwatch Test Runner](http://local.nightwatchjs.org/guide#test-runner).

#### Running Selenium Manually

To run the selenium server manually, from the directory with the jar run the following:

<pre><code class="language-bash">$ java -jar selenium-server-standalone-{VERSION}.jar</code></pre>

#### Using Selenium
For viewing all the run-time options, run the previous command adding the `-help`:

<pre><code class="language-bash">$ java -jar selenium-server-standalone-{VERSION}.jar -help</code></pre>

More info about running the Selenium Server can be found here: https://github.com/SeleniumHQ/selenium/wiki/RemoteWebDriverServer
