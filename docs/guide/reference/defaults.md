---
title: Nightwatch default settings
description: Learn about the default settings that Nightwatch ships with
---

<div class="page-header"><h1>Default Settings</h1></div>

### Overview

Nightwatch has a [default configuration](https://github.com/nightwatchjs/nightwatch/blob/main/lib/settings/defaults.js) object with pre-defined values. These values can be overwritten as needed.

### Settings

<div class="sample-test"><pre class="language-javascript"><code class="language-javascript">
const filename_format = function ({testSuite = '', testCase = '', isError = false, dateObject = new Date()} = {}) {
  const fileName = [];
  const dateParts = dateObject.toString().replace(/:/g, '').split(' ');
  dateParts.shift();
  <br>
  const dateStamp = dateParts.slice(0, 5).join('-');
  if (testSuite) {
    fileName.push(testSuite);
  }
  if (testCase) {
    fileName.push(testCase);
  }
  <br>
  return `${fileName.join('/')}${isError ? '_ERROR' : '_FAILED'}_${dateStamp}.png`;
};
<br>
module.exports = {
  // Location(s) where custom commands will be loaded from.
  custom_commands_path: null,
  <br>
  // Location(s) where custom assertions will be loaded from.
  custom_assertions_path: null,
  <br>
  // Location(s) where page object files will be loaded from.
  page_objects_path: null,
  <br>
  // Location of an external globals module which will be loaded and made available to the test as a
  //  property globals on the main client instance.
  globals_path: null,
  <br>
  // An object which will be made available on the main test api, throughout the test execution
  globals: {
    <br>
    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: true,
    <br>
    // this controls whether to abort the test execution when an element cannot be located; an error
    // is logged in all cases, but this also enables skipping the rest of the testcase;
    // it's being used in element commands such as .click() or .getText()
    abortOnElementLocateError: false,
    <br>
    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval: 500,
    <br>
    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout: 5000,
    <br>
    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned: false,
    <br>
    // By default a warning is printed if multiple elements are found using the given locate strategy
    // and selector; set this to true to suppress those warnings
    suppressWarningsOnMultipleElementsReturned: false,
    <br>
    // controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout: 10000,
    <br>
    // controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
    // or an error is thrown
    unitTestsTimeout: 2000,
    <br>
    // controls the timeout value for when executing the global async reporter. Expects the done() callback to be invoked within this time
    // or an error is thrown
    customReporterCallbackTimeout: 20000,
    <br>
    // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
    retryAssertionTimeout: 5000,
    <br>
    reporter: function(results, cb) {cb(results)}
  },
  <br>
  // configuration settings for the dotenv module - a zero-dependency module that loads environment variables from a .env file into process.env. More details on https://www.npmjs.com/package/dotenv
  dotenv: {},
  <br>
  // persist the same globals object between runs or have a (deep) copy of it per each test;
  // this can be useful when persisting data between test suites is needed, such as a cookie or session information
  persist_globals: false,
  <br>
  // The location where the JUnit XML report files will be saved. Set this to false if you want to disable XML reporting
  output_folder: 'tests_output',
  <br>
  // A string or array of folders (excluding subfolders) where the tests are located.
  src_folders: null,
  <br>
  // Used when running in parallel to determine if the output should be collected and displayed at the end.
  live_output: false,
  <br>
  // disable support of loading of typescript files for backwards compatibility with test suites
  disable_typescript: false,
  <br>
  // Used to disable colored output in the terminal.
  disable_colors: false,
  <br>
  // Used when running in parallel to specify the delay (in milliseconds) between starting the child processes
  parallel_process_delay: 10,
  <br>
  // An object containing Selenium Server related configuration options
  selenium: {
    start_process: false,
    cli_args: {},
    server_path: null,
    log_path: '',
    port: undefined,
    check_process_delay: 500,
    max_status_poll_tries: 15,
    status_poll_interval: 200
  },
  <br>
  // Whether or not to automatically start the Selenium/WebDriver session. If running unit tests, this should be set tot false.
  start_session: true,
  <br>
  // End the session automatically when the test is being terminated, usually after a failed assertion.
  end_session_on_fail: true,
  <br>
  // Skip the remaining test cases from the current test suite, when one test case fails.
  skip_testcases_on_fail: undefined,
  <br>
  // Whether or not to run individual test files in parallel.
  test_workers: false,
  <br>
  `/*`
  test_workers: {
    enabled: true,
    <br>
    // automatically compute the number of workers based on CPU cores
    workers: 'auto',
    <br>
    // manually specify the number of workers
    workers: 4,
    <br>
    // pass node arguments to individual workers (all of the process.execArgv)
    node_options: 'auto',
    <br>
    // selectively pass node arguments to individual worker processes
    node_options: ['--inspect']
  },
  `*/`
  <br>
  // Specifies which test runner to use: default|mocha
  test_runner: 'default',
  <br>
  // Defines options used to connect to the WebDriver/Selenium server
  webdriver: {
    start_process: false,
    cli_args: {},
    server_path: null,
    log_path: '',
    use_legacy_jsonwire: undefined,
    <br>
    // Time to wait (in ms) before starting to check the Webdriver server is up and running
    check_process_delay: 100,
    <br>
    // Maximum number of ping status check attempts before returning a timeout error
    max_status_poll_tries: 10,
    <br>
    // Interval (in ms) to use between status ping checks when checking if the Webdriver server is up and running
    status_poll_interval: 200,
    <br>
    // The entire time (in ms) to wait for the Node.js process to be created and running (default is 2 min), including spawning the child process and checking the status
    process_create_timeout: 120000,
    host: undefined,
    port: undefined,
    ssl: undefined,
    proxy: undefined,
    timeout_options: {
      timeout: undefined,
      retry_attempts: undefined
    },
    default_path_prefix: undefined,
    username: undefined,
    access_key: undefined
  },
  <br>
  test_settings: {
  },
  <br>
  // A url which can be used later in the tests as the main url to load.
  launch_url: '',
  <br>
  // set to false if you want to show the extended http traffic command logs from the WebDriver server.
  silent: true,
  <br>
  // Used to disable terminal output completely.
  output: true,
  <br>
  // Set this to false if you'd like to only see the test case name displayed and pass/fail status.
  detailed_output: true,
  <br>
  // Set this to true if you'd like to see timestamps next to the logging output
  output_timestamp: false,
  <br>
  // Set this to iso if you'd like to see timestamps as ISO strings
  timestamp_format: '',
  <br>
  // Set this to true if you'd like to not display errors during the execution of the test (they are shown at the end always).
  disable_error_log: false,
  <br>
  // By default, API command errors that don't deal with DOM elements (e.g. cookie) are ignored, unless they are thrown by Node.js (e.g. ECONNRESET errors)
  report_command_errors: false,
  <br>
  // Take error and failure screenshots during test execution
  screenshots: {
    enabled: false,
    filename_format,
    path: '',
    on_error: true,
    on_failure: true
  },
  <br>
  // Used to enable showing the Base64 image data in the (verbose) log when taking screenshots.
  log_screenshot_data: false,
  <br>
  desiredCapabilities: {
    browserName: 'firefox'
  },
  <br>
  // An array of folders or file patterns to be skipped (relative to the main source folder).
  exclude: null,
  <br>
  // Folder or file pattern to be used when loading the tests. Files that don't match this pattern will be ignored.
  filter: null,
  <br>
  // Skip a group of tests (a subfolder); can be a list of comma-separated values (no space)
  skipgroup: '',
  <br>
  sync_test_names: true,
  <br>
  // Skip tests by tag name; can be a list of comma-separated values (no space)
  skiptags: '',
  <br>
  // Use xpath as the default locator strategy
  use_xpath: false,
  <br>
  parallel_mode: false,
  <br>
  report_prefix: '',
  <br>
  unit_tests_mode: false,
  <br>
  default_reporter: 'junit',
  <br>
  // In Nightwatch v1.x, when used with "await" operator, API commands will return the full result object as {value: `&lt;VALUE&gt;`}
  // whereas in v2, the value is return directly; if using a callback, the behaviour remains unchanged
  backwards_compatibility_mode: false,
  <br>
  // disable the global apis like "browser", "element()", "expect()"; this might be needed if using Nightwatch with third-party libraries
  disable_global_apis: false,
  <br>
  // enable aborting the test run execution when the first test failure occurs; the remaining test suites will be skipped
  enable_fail_fast: false
}</code></pre></div>

### Recommended content
- [Configuration](/guide/reference/settings.html)
- [CLI options](/guide/nightwatch-cli/command-line-options.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/reference/settings.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">All Settings</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/contributing/styleguide.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Style guide</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>