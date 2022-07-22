---
title: Pause and Debug
description: Learn how to pause your test at specific points and debug by accessing the browser or executing commands using a REPL interface.
---

<div class="page-header"><h2>Pause and Debug</h2></div>

### Overview

Starting with v2.3.0, Nightwatch presents a more powerful test script debugging experience, by modifying the functionality of the existing `.pause()` command (without breaking changes) and introducing a new `.debug()` command.

With the modified [`.pause()`](https://nightwatchjs.org/api/pause.html) command, users can now pause and then resume their tests on-demand while debugging. Not only that, they can now also step over to the next test step (execute the next test step) and pause again.

And with the [`.debug()`](https://nightwatchjs.org/api/debug.html) command, it goes one step further and provide users with a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) interface where they can try out any of the available Nightwatch commands or assertions while their main test is paused and see them get executed against the running browser in real-time.


![Pause and Debug](https://vimeo.com/732086808)


### Use `.pause()` command

In addition to pausing the test execution for a fixed amount of time (passed as an argument in milliseconds), the pause command now offers many more functionalities.

[`.pause()`](https://nightwatchjs.org/api/pause.html) command can now be used to pause the test execution for an unrestricted (but only desired) amount of time. Doing so will allow users to jump over to the browser and check the state of the application at that point in the test or use DevTools to debug the application.

When done, back at the terminal, users will have a bunch of options to go from there:

* Resume the test normally from the point where it was left off.
* Step over to the next test step and pause again.  
  (Stepping over to the next test step will allow users to see what exactly changed when the next test command/assertion was executed. They can also use DevTools to monitor those changes, like the network calls that were made (if any) during the execution of that test step, etc.)
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

This is a new command added in Nightwatch v2.3.0, which allows users to pause their test at any point (by using [`.debug()`](https://nightwatchjs.org/api/debug.html) command as a breakpoint) and use a REPL interface made available right in their terminal to try out different Nightwatch commands or assertions and see them get executed against the running browser in real-time. While doing that, they can also interact with the browser or use DevTools to debug.

This can be very useful while debugging test failures, such as why a certain command is not working as expected or why a certain assertion is failing, by trying out the commands and assertions in different ways and seeing their result in real-time.

Along with debugging tests, this interface can also act as a playground for new users to learn and get familiar with the Nightwatch APIs.

<div class="alert alert-info">
  While using the `.debug` command, please put your tests inside an `async` function, otherwise the results won’t get returned properly.
</div>

The interface comes with multi-line code support, as well as auto-complete support which can be turned of by passing `{preview: false}` as an argument to the command.

<pre class="language-javascript"><code class="language-javascript">browser.debug({preview: false})</code></pre>


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
