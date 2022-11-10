---
title: Using the debug() command
description: Learn how to pause your test at specific points and debug by accessing the browser or executing commands using a REPL interface.
---

<div class="page-header"><h2>Using the debug() command</h2></div>

### Overview

This is a new command added in Nightwatch v2.3.0, which allows users to pause the test at any point (by using [`.debug()`](https://nightwatchjs.org/api/debug.html) command as a breakpoint) and use a REPL interface (made available in the terminal) to try out the available Nightwatch commands and assertions and see them get executed against the running browser, in real-time. 

While doing that, users can also interact with the browser and use DevTools to debug. The interface also supports multi-line code input and auto-complete feature.

### Usage

**Note:** Please use `async/await` while using the `.debug()` command, otherwise proper results won't be returned back to the interface.

<pre class="language-javascript"><code class="language-javascript">it('demos debug command', async function(browser) {
  await browser.debug();

  // with no auto-complete
  await browser.debug({preview: false});

  // with a timeout of 6000 ms (time for which the interface
  // would wait for a result, default is 5500ms).
  await browser.debug({timeout: 6000})
});
</code></pre>

### Example

<div class="sample-test"><i>tests/duckDuckGo.js</i>
<pre class="line-numbers language-javascript"><code class="language-javascript">describe('duckduckgo debug example', function() {
  // function passed as second argument to `it` should be `async`.
  it('Search Nightwatch.js and check results', async function(browser) {
    await browser
      .url('https://duckduckgo.com')
      .debug()
      .waitForElementVisible('#search_form_input_homepage')
      .sendKeys('#search_form_input_homepage', ['Nightwatch.js'])
      .click('#search_button_homepage')
      .assert.visible('.results--main')
      .assert.textContains('.results--main', 'Nightwatch.js');
  });
});
</code></pre></div>

<p></p>
<img width="100%" alt="debug() command output" src="https://user-images.githubusercontent.com/39924567/180314940-01ad594b-e27e-44af-a90b-91cd84d4196d.png">

### Recommended content
- [API docs > `.pause()`](https://nightwatchjs.org/api/pause.html)
- [API docs > `.debug()`](https://nightwatchjs.org/api/debug.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/debugging-tests/using-pause.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Use.pause()</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/ci-integrations/run-nightwatch-on-jenkins.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Jenkins</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>