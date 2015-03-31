### Running the Selenium Server

The Selenium WebDriver server is simply a Java servlet which runs separately on the machine with the browser you want to test.

#### Download Selenium

Download the latest version of the`selenium-server-standalone-{VERSION}.jar` file from the [Selenium downloads page](http://selenium-release.storage.googleapis.com/index.html) and place it on the computer with the browser you want to test.

#### Running Selenium Automatically

If the server is on the same machine where Nightwatch is running, it can be started/stopped directly by the [Nightwatch Test Runner](#test-runner).

#### Running Selenium Manually

To run the selenium server manually, from the directory with the jar run the following:

<pre><code class="language-bash">$ java -jar selenium-server-standalone-{VERSION}.jar</code></pre>

More info about running the Selenium server can be found here:  
[http://code.google.com/p/selenium/wiki/RemoteWebDriverServer](http://code.google.com/p/selenium/wiki/RemoteWebDriverServer)

For viewing all the run-time options, run the previous command adding the `-help`:

<pre><code class="language-bash">$ java -jar selenium-server-standalone-{VERSION}.jar -help</code></pre>