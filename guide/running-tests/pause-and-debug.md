---
title: Pause and Debug
description: Learn how to pause your test at specific points and debug by accessing the browser or executing commands using a REPL interface.
---

<div class="page-header"><h2>Pause and Debug</h2></div>

### Overview

Starting with v2.3.0, Nightwatch presents a more powerful test script debugging experience, with modified `.pause()` command (without any breaking changes) and a new `.debug()` command.

With the modified [`.pause()`](https://nightwatchjs.org/api/pause.html) command, users can now also resume their paused tests on-demand while debugging. Along with that, they can now also step over to the next test step (execute the next test step) and pause again.

And with the [`.debug()`](https://nightwatchjs.org/api/debug.html) command, it goes one step further and provide users with a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) interface where they can try out any of the available Nightwatch commands or assertions and see them get executed in the running browser in real-time.

<iframe src="https://player.vimeo.com/video/732086808?loop=1&byline=0&portrait=0&title=0" style="width:100%;height:560px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


### Use `.pause()` command

[`.pause()`](https://nightwatchjs.org/api/pause.html) command allows users to pause their test execution, either for a fixed amount of time (by passing the duration in milliseconds as an argument) or for an unrestricted amount of time with an option to resume anytime.

<pre class="language-javascript"><code class="language-javascript">it('demos pause command', function(browser) {
  // pause for 300 ms
  browser.pause(300);
  // pause indefinitely, until resumed
  browser.pause();
});
</code></pre>

While the `.pause(ms)` command is mostly used programmatically to pause the test for a small duration of time before performing the next test step, `.pause()` command can be used while debugging, giving enough time to jump over to the browser and check the state of the application at that point in test or use DevTools to debug, and when done, a bunch of options will be available at the terminal to go from there:

* Resume the test normally from the point where it was left off.
* Step over to the next test step and pause again.
* Exit from the test run.

### Example

<div class="sample-test"><i>tests/duckDuckGo.js</i>
<pre class="line-numbers language-javascript"><code class="language-javascript">describe('duckduckgo pause example', function() {
  it('Search Nightwatch.js and check results', async function(browser) {
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

<img width="1440" alt="Screenshot 2022-07-19 at 7 58 47 PM" src="https://user-images.githubusercontent.com/39924567/180314913-6f39a572-69a4-4593-b33c-dc2015395fd9.png">


### Use `.debug()` command

This is a new command added in Nightwatch v2.3.0, which allows users to pause their test at any point (by using [`.debug()`](https://nightwatchjs.org/api/debug.html) command as a breakpoint) and use a REPL interface (made available in the terminal) to try out the available Nightwatch commands and assertions and see them get executed against the running browser in real-time. While doing that, they can also interact with the browser and use DevTools to debug.

The interface also supports multi-line code input and auto-complete feature.

<pre class="language-javascript"><code class="language-javascript">it('demos debug command', function(browser) {
  browser.debug();

  // with no auto-complete
  browser.debug({preview: false});

  // with a timeout of 6000 ms (time for which the interface
  // would wait for a result, default is 5500ms).
  browser.debug({timeout: 6000})
});
</code></pre>

<div class="alert alert-info">
  While using the `.debug` command, please put your tests inside an `async` function, otherwise the results won’t get returned properly.
</div>

### Example

<div class="sample-test"><i>tests/duckDuckGo.js</i>
<pre class="line-numbers language-javascript"><code class="language-javascript">describe('duckduckgo debug example', function() {
  it('Search Nightwatch.js and check results', async function(browser) {
    browser
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

<img width="1440" alt="Screenshot 2022-07-20 at 3 03 21 PM" src="https://user-images.githubusercontent.com/39924567/180314940-01ad594b-e27e-44af-a90b-91cd84d4196d.png">
