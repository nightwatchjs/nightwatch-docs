<div class="page-header"><h2>Quickstart Tutorial</h2></div>

If you already have Node.js installed and a few browsers installed and you're eager to get right down to it, we have just the thing you need. As this short tutorial will show you, it doesn't take more than 2 to 10 minutes to be up and running with Nightwatch. 

<div class="alert alert-info">
This guide starts on the premise that you are not currently using Nightwatch in your project. If you do, please rename your config file so a new fresh one will be created.
</div>

#### Step 0: create your new project

Let's create a new empty project where we'll install Nightwatch.

<pre class="hide-indicator" style="font-size:16px"><code class="language-bash">mkdir nightwatch-test-project
cd nightwatch-test-project
npm init -y
</code></pre>


### 1. Install Nightwatch from NPM

Nightwatch requires Node.js 10 or higher and the [NPM](https://www.npmjs.com/) tool installed on your machine. This will install Nightwatch as a dependency and add the `nightwatch` executable in your project.

<pre style="font-size:16px"><code class="language-bash">npm install nightwatch --save-dev</code></pre>

### 2. Install ChromeDriver and GeckoDriver from NPM

To be able to run end-to-end tests in Chrome and Firefox on your local machine, we need these two additional packages installed in your project.

<pre style="font-size:16px"><code class="language-bash">npm install geckodriver chromedriver --save-dev</code></pre>

##### MacOS users
If you'd wish to run tests against Safari, you need to run this one-time CLI command in order to enable automation via WebDriver on your local machine.

<pre style="font-size:16px"><code class="language-bash">safaridriver --enable</code></pre>

### 3. Run a sample test
Nightwatch comes with a few bundled example tests which you can use to quickly see it in action. Once you have completed the previous steps, you can now see some actual results.

<div class="alert alert-info">
The below commands runs an example test which opens the search engine [Ecosia.org](https://www.ecosia.org/), types the term "nightwatch" into the search input field, then verifies if the results page contains the text "Nightwatch.js".
</div>

By default, Nightwatch will start Firefox. Use the bundled `npx` tool from NPM to quickly run the `nightwatch` command:

<pre style="font-size:16px"><code class="language-bash">npx nightwatch node_modules/nightwatch/examples/tests/ecosia.js</code></pre>

The output should look similar to this:
<pre class="hide-indicator" style="font-size:14px"><code class="language-bash">
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

##### Running in Chrome
To run the same test in the Chrome browser, run the same command and pass the `--env chrome` argument:

<pre style="font-size:16px"><code class="language-bash">npx nightwatch node_modules/nightwatch/examples/tests/ecosia.js --env chrome</code></pre>

##### Running in Safari
If you're using a Mac, you can run the the tests in Safari as well, simply pass the `--env safari` argument:

<pre style="font-size:16px"><code class="language-bash">npx nightwatch node_modules/nightwatch/examples/tests/ecosia.js --env safari</code></pre>

##### Running in Chrome, Firefox, and Safari in parallel
You can also run in all available browsers in parallel using one command. You only have to separate the environments by a comma (","), no spaces. 

<pre style="font-size:16px"><code class="language-bash">npx nightwatch node_modules/nightwatch/examples/tests/ecosia.js --env firefox,chrome,safari</code></pre>

That's about it for now. Hope you head a great first experience with Nightwatch. Let us know your thoughts on [Twitter](https://twitter.com/nightwatchjs) or you can chat with us on [Gitter](https://gitter.im/nightwatchjs/nightwatch).

#### Next Steps:
- [Start Using Nightwatch](/guide/using-nightwatch/concepts.html)
- [Learn about Working with DOM Elements in Nightwatch](/guide/using-nightwatch/finding-and-interacting-with-elements.html)
- [Running Tests with Nightwatch](/guide/running-tests/nightwatch-runner.html)
