<h3 id="writing-assertions"><span>Writing Assertions</span></h3>

Assertions are what determines if the test passes or not. Assertions are different than commands in the sense that assertions may use one or more commands internally. 
 
Assertions are also automatically retried using the same mechanism as for implicit waiting on finding elements. 

In the example below there are four assertions: `waitForElementVisible`, `assert.titleContains`, `assert.visible` on two separate elements, and `assert.containsText`. Assertions and their status (pass/fail) are displayed in the terminal.

Commands (such as `setValue` or `url`) are only shown in the verbose output.

<div class="test-output"><img src="/images/demo-output.png" alt="Test Output" /></div>

#### Assertion Failures
When an assertion fails, an `AssertionError` is thrown and the Nightwatch test runner detects it and marks the entire test as failed. 

A single test can have multiple assertions and, by default, if an assertion happens to fail the rest of the test is aborted. If the test suite has multiple steps or multiple testcases, the rest of steps/testcases will also be skipped.

#### Controlling Behaviour on Failure

Sometimes it is desirable for the rest of the assertions to continue, even if an assertion happens to fail mid-way. This can be achieved in several ways:

1. Using `.verify` instead of `.assert` - the assertion failure will be logged but the test execution will continue; the test is still marked as failed at the end;
2. Using [element selector objects][5] and set `abortOnFailure` to `false`, e.g.:
   <pre>browser.setValue({selector: 'input[type=search]', abortOnFailure: false}, 'nightwatch')</pre>

Running the remaining test steps/test cases is possible by setting `"skip_testcases_on_fail"` to `false` in your configuration file. Refer to the [Configuration][6] section for details.

#### Ending the Session on Failure

By default, when an assertion fails, the test runner ends the session and closes the browser window so it can continue with the remaining test suites.

However, if you wish to keep the browser window open whenever an assertion failure occurs, you can set `"end_session_on_fail"` to `false`. This can be useful for performing debugging.

Refer to the [Configuration][7] section for details.

- Previous: [Finding & Interacting with Elements](https://nightwatchjs.org/guide/using-nightwatch/finding-and-interacting-with-elements.html)
- Next: [Using Expect Assertions](https://nightwatchjs.org/guide/using-nightwatch/expect-assertions.html)

[5]:	https://nightwatchjs.org/guide/using-nightwatch/finding-and-interacting-with-elements.html#element-properties
[6]:	/gettingstarted/configuration/#extended-settings
[7]:	/gettingstarted/configuration/#extended-settings

