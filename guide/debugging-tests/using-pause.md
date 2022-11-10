---
title: Using the pause() command
description: Learn how to pause your test at specific points and debug by accessing the browser or executing commands using a REPL interface.
---

<div class="page-header"><h2>Using the pause() command</h2></div>

### Overview

The [`.pause()`](https://nightwatchjs.org/api/pause.html) command allows users to pause their test execution, either for a fixed amount of time (by passing the duration in milliseconds as an argument) or for an unrestricted amount of time with an option to resume anytime.

To suspend the text execution for a limited amount of time (e.g. 300ms), write:

<pre class="language-javascript"><code class="language-javascript">it('demos pause command', function(browser) {
  // pause for 300 ms
  browser.pause(300);
});
</code></pre>

To suspend the text execution indefinitely, until resumed, write:

<pre class="language-javascript"><code class="language-javascript">it('demos pause command', function(browser) {
  // pause indefinitely, until resumed
  browser.pause();
});
</code></pre>

### Usage

While the `.pause(ms)` command is mostly used programmatically to pause the test for a small duration of time before performing the next command, `pause()` command (without any argument) can be used while debugging.

While using the `pause()` command without any argument, the following operations are available:

- resume the test normally from the point where it was left off
- step over to the next command/assertion and pause again
- exit from the test run

<div class="sample-test"><i>tests/duckDuckGo.js</i>
<pre class="line-numbers language-javascript"><code class="language-javascript">describe('duckduckgo pause example', function() {
  it('Search Nightwatch.js and check results', function(browser) {
    browser
      .url('https://duckduckgo.com')
      .pause()
      .waitForElementVisible('#search_form_input_homepage')
      .sendKeys('#search_form_input_homepage', ['Nightwatch.js'])
      .click('#search_button_homepage')
      .assert.visible('.results--main')
      .assert.textContains('.results--main', 'Nightwatch.js');
  });
});
</code></pre></div>

<p></p>

<img width="1440" alt=".pause() command" src="https://user-images.githubusercontent.com/39924567/180314913-6f39a572-69a4-4593-b33c-dc2015395fd9.png">

### Recommended content
- [API docs > `.pause()`](https://nightwatchjs.org/api/pause.html)
- [API docs > `.debug()`](https://nightwatchjs.org/api/debug.html)


 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/debugging-tests/overview.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Overview</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/debugging-tests/using-debug.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Use.debug()</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>