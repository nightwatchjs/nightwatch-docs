---
title: Using the programmatic API
description: Learn how to build a custom test runner programmatically using Nightwatch APIs
---

<div class="page-header"><h1>Using the programmatic API</h1></div>

### Overview
When Nightwatch is imported as a regular library package, an API is exported so that you can use Nightwatch programmatically. When doing so, individual config settings can be supplied inline. So, there is no need to supply a configuration file. However, starting with version 1.3, a nightwatch.conf.js is created by default for your project.

### Syntax
Nightwatch 2 brings in a brand new programmatic API, which makes it very easy to use Nightwatch externally. You can use it either by creating your custom runner or by using external test runners such as Jest, Mocha, or Ava.

<div class="apimethod">
  <h4>Nightwatch.createClient([options])</h4>

  <p>Creates a new Nightwatch client that can be used to create WebDriver sessions.</p>

<h5>Syntax:</h5>

<div class="sample-test"><i>custom_test_runner.js</i><pre class="line-numbers" data-language="javascript"><code class="default-theme language-javascript">const Nightwatch = require('nightwatch');
<br>
const client = Nightwatch.createClient({
  headless: true,
  output: true,
  silent: true, // set to false to enable verbose logging
  browserName: 'firefox', // can be either: firefox, chrome, safari, or edge
  <br>
  // set the global timeout to be used with waitFor commands and when retrying assertions/expects
  timeout: 10000,
  <br>
  // set the current test environment from the nightwatch config
  env: null,
  <br>
  // any additional capabilities needed
  desiredCapabilities: {
    <br>
  },
  <br>
  // can define/overwrite test globals here; 
  // when using a third-party test runner only the global hooks onBrowserNavigate/onBrowserQuit are supported
  globals: {},
  <br>
  // when the test runner used supports running tests in parallel; 
  // set to true if you need the webdriver port to be randomly generated
  parallel: false, 
  <br>
  // All other Nightwatch config settings can be overwritten here, such as:
  disable_colors: false
});
</code></pre></div>
</div>

<div class="apimethod">
  <h4>client.updateCapabilities([options])</h4>

  <p>Given an existing <code>client</code> created using the <code>createClient()</code> method listed above, this can be used to update the initially specified capabilities.</p>

<h5>Syntax:</h5>

<div class="sample-test"><pre data-language="javascript" class="line-numbers"><code class="default-theme language-javascript">client.updateCapabilities({
  testCapability: 'one, two, three'
});
</code></pre></div>
</div>

<div class="apimethod">
  <h4>client.launchBrowser()</h4>

  <p>Given an existing <code>client</code> created using the <code>createClient()</code> method listed above, this can be used to create a new browser session.</p>

The returned object will be the Nightwatch [browser API](/api/#the-browser-object) object.

<h5>Syntax:</h5>

<div class="sample-test"><pre data-language="javascript" class="line-numbers"><code class="default-theme language-javascript">
const browser = await client.launchBrowser();
</code></pre></div>
</div>

 