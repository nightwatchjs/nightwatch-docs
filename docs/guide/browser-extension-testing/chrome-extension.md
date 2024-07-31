---
title: Testing Chrome Extension
description: Learn how to test a Chrome Extension using Nightwatch
---

<div class="page-header"><h1>Testing Chrome Extension</h1></div>

### Overview

Chrome Extensions are a great way to add additional functionality to browsers. And like other pieces of softwares, they should also be tested.
This guide focuses on just that, how to test a Chrome Extension using Nightwatch.

A sample project with basic Chrome Extension test can be found [here](https://github.com/nightwatchjs/nightwatch-inspector) (see `tests/testInstalledExtension.js`).

### Init

Chrome extensions can be tested just like any other website using Nightwatch. So, to get started, do the usual setup for Nightwatch using the `init` command (make sure to select the "Chrome" browser when asked).

<pre class="hide-indicator"><code class="language-bash">cd /path/to/project/directory
npm init nightwatch
</code></pre>

### Configuration

After the initial Nightwatch setup, minimal changes are required in the generated `nightwatch.conf.js` file, to tell Nightwatch two things:
* Where to find the Chrome extension to be installed in the browser during the test run.
* Open the DevTools window automatically from where the installed Chrome extension can be accessed.

The Chrome Extension itself can be in two forms, packed or unpacked. Packed extensions are a single file with a `.crx` extension, whereas unpacked extensions are a directory containing the extension, including a `manifest.json` file.

Depending on the format of the extension to be tested, the path to the extension would need to be provided differently in the `nightwatch.conf.js` file.

#### Packed (`.crx` file)

If the extension to be tested is already packed, make the following changes to your `nightwatch.conf.js` file.

Go inside `test_settings > chrome > desiredCapabilities > 'goog:chromeOptions'` and add an `extensions` key with an array value as follows:

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="hide-indicator line-numbers language-javascript"><code>chrome: {
  desiredCapabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        //'--headless',
        'auto-open-devtools-for-tabs'
      ],
      // load extension from .crx file.
      extensions: [
        require('fs').readFileSync('path/to/extension.crx', {encoding: 'base64'})
      ]
    }
  },
}
</code></pre></div>

Also add `"auto-open-devtools-for-tabs"` to `goog:chromeOptions > args` to open the DevTools window automatically during test run **(important)**.

#### Unpacked (directory)

If the extension to be tested is unpacked (a directory containing a `manifest.json` file), make the following changes to your `nightwatch.conf.js` file.

Go inside `test_settings > chrome > desiredCapabilities > 'goog:chromeOptions' > args` and add the `--load-extension` flag as below:

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="hide-indicator line-numbers language-javascript"><code>chrome: {
  desiredCapabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        //'--headless',
        'auto-open-devtools-for-tabs',
        //
        // load extension from unpacked directory.
        '--load-extension=/path/to/extension/directory',
        //
        // if extension is present in the `src/` dir of same project.
        // `--load-extension=${__dirname}/src`,
      ],
    }
  },
}
</code></pre></div>

Also add `"auto-open-devtools-for-tabs"` to `goog:chromeOptions > args` to open the DevTools window automatically during test run **(important)**.

### Write your first test

A sample test for automating and asserting on Chrome Extension is available [here](https://github.com/nightwatchjs/nightwatch-inspector/blob/main/tests/testInstalledExtension.js).

When the browser first opens during a test run, it opens in the context of the browser tab. This context needs to be changed to the DevTools window from where the Chrome Extension can be accessed and tested.

So, there would a few steps that needs to be performed before the actual extension can be tested. In the sample test shared above, all these steps are done in the test case (`it` block) itself. But since those steps needs to be performed only once per test suite, they can be put in the `before` hook as well, as done below:

<div class="sample-test"><i>tests/sampleTest.js</i><pre class="line-numbers language-javascript"><code>describe('test Chrome Extension inside DevTools', function() {
  before(async function() {
    // navigate to the website you want to test the extension against
    await browser.navigateTo('https://google.com');
    <br>
    // get all targets (contexts) we can possibly switch to
    const targets = await browser.driver.sendAndGetDevToolsCommand('Target.getTargets', {});
    <br>
    const devToolsTarget = targets.targetInfos.find(target => {
      return target.type === 'page' &&
        target.url.includes('devtools://devtools/bundled/devtools_app.html');
    });
    <br>
    // switch to DevTools window context
    await browser.window.switchTo(devToolsTarget.targetId);
    <br>
    // switch to last tab in pane (our extension)
    await browser.sendKeys('body', [browser.Keys.COMMAND, '[']); // for macos
    await browser.sendKeys('body', [browser.Keys.CONTROL, '[']); // for windows/linux
    <br>
    // switch to the iframe inside the tab
    await browser.frame('iframe[src*="index.html"]');
  });
  <br>
  it('checks the header text of the extension', async function() {
    // run automation on the extension
    await browser.element('header').getText().assert.equals('My Extension');
    <br>
    // to visualize the extension during test run
    // await browser.pause(1000);
  });
});</code></pre></div>

Similarly, additional test cases can be added to the test suite (test file), where the Chrome Extension can be tested and asserted against just like a normal website.

### Run the test

To run the test, use the usual `npx nightwatch` command like below:

<pre class="hide-indicator"><code class="language-bash">npx nightwatch tests/sampleTest.js --env chrome
</code></pre>

<pre class="hide-indicator"><code class="language-bash">[test Chrome Extension inside DevTools] Test Suite
───────────────────────────────────────────────────────────────────────────────
ℹ Connected to ChromeDriver on port 9515 (1459ms).
  Using: chrome (127.0.6533.88) on MAC.


  Running checks the header text of the extension:
───────────────────────────────────────────────────────────────────────────────
  ✔ Testing if element 'My Extension'

  ✨ PASSED. 1 assertions. (1.024s)

</code></pre>
