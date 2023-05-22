---
title: Command-line options
description: List of command-line options supported by nightwatch test runner
---

# Command-line options

### Overview

The Nightwatch test runner supports a number of run-time options to be passed to. To view all, run the following:

```bash
nightwatch --help```

### Options

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
     <tr>
       <th>Name</th>
       <th>Shortname</th>
       <th style="width: 50px;">default</th>
       <th>description</th>
     </tr>
    </thead>
    <tbody>
    <tr><th colspan="4">Main options</th></tr>
    <tr>
     <td>`
--env`
</td>
     <td>`
-e`
</td>
     <td>`
default`
</td>
     <td>Which testing environment to use - defined in `
nightwatch.json`
</td>
   </tr>
     <tr>
       <td>`
--config`
</td>
       <td>`
-c`
</td>
       <td>`
./nightwatch.json`
</td>
       <td>Path to configuration file; `nightwatch.conf.js` or `nightwatch.json` are read by default if present. Check the [Configuration](/gettingstarted/configuration/) section.</td>
     </tr>
     <tr>
      <td>`
--test`
</td>
      <td>`
-t`
</td>
      <td></td>
      <td>Runs only the specified test suite/module. By default the runner will attempt to run all tests in the `
src_folders`
 settings folder(s) and their subfolders.</td>
    </tr>
    <tr>
      <td>`
--testcase`
</td>
      <td></td>
      <td></td>
      <td>Used only together with `--test`. Runs the specified testcase from the current suite/module.</td>
    </tr>
    <tr>
      <td>`
--mocha`
</td>
      <td></td>
      <td></td>
      <td>Set the test runner to use Mocha.</td>
    </tr>
    <tr>
     <td>`
--timeout`
</td>
     <td></td>
     <td></td>
     <td>Set the global timeout for assertion retries before an assertion fails. The various timeout values are defined in the [Globals](/gettingstarted/concepts/#using-test-globals) section.</td>
    </tr>
    <tr>
     <td>`
--reuse-browser`
</td>
     <td></td>
     <td></td>
     <td>Use the same browser session to run the individual test suites (serial mode only).</td>
    </tr>

   <tr>
     <td>`
--workers`
</td>
     <td></td>
     <td></td>
     <td>Max number of test files running at the same time (default: CPU cores; e.g. workers=4)</td>
    </tr>

   <tr>
     <td>`
--serial`
</td>
     <td></td>
     <td></td>
     <td>Executes tests serially (disables parallel mode).</td>
    </tr>
    <tr>
      <td>`
--headless`
</td>
      <td></td>
      <td></td>
      <td>Launch the browser (Chrome or Firefox) in headless mode.</td>
    </tr>
    <tr>
      <td>`
--devtools`
</td>
      <td></td>
      <td></td>
      <td>Automatically open devtools when launching the browser (Chrome, Edge, or Safari).</td>
    </tr>
    <tr>
      <td>`
--verbose`
</td>
      <td>`
`
</td>
      <td></td>
      <td>Shows extended selenium command logging during the session.</td>
    </tr>

    <tr>
      <td>`
--fail-fast`
</td>
      <td></td>
      <td></td>
      <td>Run in "fail-fast" mode: if a test suite cannot be started, the rest will be aborted.</td>
    </tr>

    <tr>
      <td>`
--list-files`
</td>
      <td></td>
      <td></td>
      <td>Shows list of files present in the project.</td>
    </tr>

    <tr><th colspan="4">Tags & filtering</th></tr>

     <tr>
       <td>`
--group`
</td>
       <td>`
-g`
</td>
       <td></td>
       <td>Runs only the specified group or several (comma separated) of tests (subfolder). Tests are grouped by being placed in the same subfolder.</td>
     </tr>
     <tr>
       <td>`
--skipgroup`
</td>
       <td>`
-s`
</td>
       <td></td>
       <td>Skip one or several (comma separated) group of tests.</td>
     </tr>

     <tr>
       <td>`
--filter`
</td>
       <td>`
-f`
</td>
       <td></td>
       <td>Specify a filter (glob expression) as the file name format to use when loading the test files.</td>
     </tr>
     <tr>
       <td>`
--tag`
</td>
       <td>`
-a`
</td>
       <td></td>
       <td>Filter test modules by tags. Only tests that have the specified tags will be loaded.</td>
     </tr>
     <tr>
        <td>`
--skiptags`
</td>
        <td></td>
        <td></td>
        <td>Skips tests that have the specified tag or tags (comma separated).</td>
      </tr>

    <tr><th colspan="4">Retrying</th></tr>

     <tr>
        <td>`
--retries`
</td>
        <td></td>
        <td></td>
        <td>Retries failed or errored testcases up to the specified number of times. Retrying a testcase will also retry the `beforeEach` and `afterEach` hooks, if any.</td>
      </tr>
      <tr>
       <td>`
--suiteRetries`
</td>
       <td></td>
       <td></td>
       <td>Retries failed or errored testsuites (test modules) up to the specified number of times. Retrying a testsuite will also retry the `before` and `after` hooks (in addition to the global beforeEach and afterEach respectively), if any are defined on the testsuite.</td>
     </tr>

   <tr><th colspan="4">Reporting</th></tr>

     <tr>
      <td>`
--reporter`
</td>
      <td>`
-r`
</td>
      <td>`
junit`
</td>
      <td>Name of a predefined reporter (e.g. junit) or path to a custom reporter file to use.<br/><br/>
      The custom reporter interface looks like:<br/>`
<pre>module.exports = {
write(results, options, done) {
  done();
}
};</pre>`
</td>
   </tr>

     <tr>
      <td>`
--output`
</td>
      <td>`
-o`
</td>
      <td>`
tests_output`
</td>
      <td>The location where the JUnit XML reports will be saved.</td>
    </tr>

    <tr>
      <td>`
--open`
</td>
      <td>`
`
</td>
      <td></td>
      <td>Opens the HTML report generated in the default browser at the end of test run</td>
    </tr>

    <tr><th colspan="4">Component Testing</th></tr>
    <tr>
      <td>`
--debug`
</td>
      <td>`
`
</td>
      <td></td>
      <td>Automatically pause the test execution after mounting the component and open the Nightwatch debug REPL interface.</td>
    </tr>
    <tr>
      <td>`
--story`
</td>
      <td>`
`
</td>
      <td></td>
      <td>Allows to specify which story to run from the current file (when using Storybook or JSX written in component story format).</td>
    </tr>
    <tr>
      <td>`
--preview`
</td>
      <td>`
`
</td>
      <td></td>
      <td>Used to preview a component story/test; automatically pause the test execution after mounting the component.</td>
    </tr>

    <tr><th colspan="4">Info &amp; Help</th></tr>
    <tr>
      <td>`
--help`
</td>
      <td>`
-h`
</td>
      <td></td>
      <td>Shows this help.</td>
    </tr>

    <tr>
      <td>`
--version`
</td>
      <td>`
-v`
</td>
      <td></td>
      <td>Shows the version number</td>
    </tr>



    </tbody>
  </table>
</div>

### Recommended content

- [CLI Test Runner](https://nightwatchjs.org/guide/running-tests/using-the-cli-test-runner.html)
- [Configuration](https://nightwatchjs.org/guide/reference/settings.html)
- [Nightwatch release notes](https://nightwatchjs.org/guide/overview/whats-new.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/browser-drivers/edgedriver.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">EdgeDriver</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/reference/settings.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">All Settings</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
