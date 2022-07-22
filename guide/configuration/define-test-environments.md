---
title: Define Test Environments
description: Learn how to define and use test environments in nightwatch
---

<div class="page-header"><h2>Define and use test environments</h2></div>

### Overview
The environments are located under the `"test_settings"` dictionary in the configuration file. A `default` environment is always required from which the other environments inherit the settings. You can overwrite any test setting for each environment as needed.

In this guide we're going to create a new test environment called `"chrome-local"` which we'll be using to run tests against the Google Chrome browser.

### Create a new test project

<p></p>
<p>First, let's create a new empty project and install Nightwatch inside it:</p>

<pre class="language-bash"><code class="language-bash">mkdir ./test-project && cd ./test-project</code></pre>

<p></p>
<p>Install `nightwatch` and `chromedriver` from NPM (`chromedriver` is the W3C WebDriver implementation for running tests in the Google Chrome browser):</p>

<pre class="language-bash"><code class="language-bash">npm i nightwatch chromedriver</code></pre>

<p></p>
<p>Create an empty file named `nightwatch.conf.js`</p>

<pre class="language-bash"><code class="language-bash">nano nightwatch.conf.js</code></pre>

and paste the following:
<div class="sample-test"><i>nightwatch.conf.js</i>
<pre class="line-numbers language-javascript"><code class="language-javascript">module.exports = {
  src_folders: ['tests'],

  test_settings: {
    default: {
      launch_url: 'https://home.cern',
      webdriver: {
        start_process: true,
        server_path: ''
      }
    }
  }
}</code></pre></div>

Test environments are referenced using the `--env` cli argument. Since we only have a `default` environment defined, attempting to reference the `chrome-local` environment will produce an error:

<pre class="language-bash"><code class="language-bash">npx nightwatch --env chrome-local</code></pre>

```
~/workspace/test-project % npx nightwatch --env chrome-local
 
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│    Error: Invalid testing environment specified: chrome-local.   │
│                                                                  │
│     Available environments are:                                  │
│     [ 'default' ]                                                │
│                                                                  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Define a new "chrome-local" environment

Now, open the `nightwatch.conf.js` file again and add the `chrome-local` object below the `default` one:

<div class="sample-test"><i>nightwatch.conf.js</i>
<pre class="line-numbers language-javascript"><code class="language-javascript">module.exports = {
  src_folders: ['tests'],

  test_settings: {
    default: {
      launch_url: 'https://home.cern',
      webdriver: {
        start_process: true,
        server_path: ''
      }
    },
    'chrome-local': {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}</code></pre></div>

### Run a sample test against the "chrome-local" environment

Then add a sample test inside the `tests` folder:
<pre class="language-bash"><code class="language-bash">mkdir tests && nano ./tests/sample-nightwatch-test.js</code></pre>

<div class="sample-test"><i>tests/sample-nightwatch-test.js</i>
<pre class="line-numbers language-javascript"><code class="language-javascript">describe('sample nightwatch test', function() {
  it('opens the browser and checks for input', function(browser) {
    browser
      .init()
      .assert.titleEquals('Home | CERN')
      .end();
  });
})</code></pre></div>

Run the sample and pass the `--env chrome-local` argument:

<pre class="language-bash"><code class="language-bash">npx nightwatch --env chrome-local</code></pre>

The output will look a bit like this:

```
[sample nightwatch test] Test Suite
──────────────────────────────────────────────────────────────────────
ℹ Connected to ChromeDriver on port 9515 (844ms).
  Using: chrome (101.0.4951.64) on MAC OS X.


  Running opens the browser and checks for input:
────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ℹ Loaded url https://home.cern in 5531ms
  ✔ Testing if the page title equals 'Home | CERN' (6ms)

OK. 1 assertions passed. (5.604s)
```

### Recommended content
- [Concepts > Test environments](/guide/concepts/test-environments.html)
- [Reference > Browser Drivers > ChormeDriver](/guide/browser-drivers/chrome-driver.html)