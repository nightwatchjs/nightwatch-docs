---
title: Nightwatch CLI Options
description: Reference to list of command line options supported by Nightwatch test runner.
---

## Command-line Options

The test runner supports a number of run-time options to be passed to. To view all, run the following:

<pre><code class="language-bash">nightwatch --help</code></pre>

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
     <tr>
       <th style="width: 100px;">Name</th>
       <th style="width: 100px;">Shortname</th>
       <th style="width: 50px;">default</th>
       <th>description</th>
     </tr>

    </thead>
    <tbody>
    </tr>
    <tr>
     <td><code>--env</code></td>
     <td><code>-e</code></td>
     <td><code>default</code></td>
     <td>Which testing environment to use - defined in <code>nightwatch.json</code></td>
   </tr>
     <tr>
       <td><code>--config</code></td>
       <td><code>-c</code></td>
       <td><code>./nightwatch.json</code></td>
       <td>Path to configuration file; `nightwatch.conf.js` or `nightwatch.json` are read by default if present. Check the [Configuration](/gettingstarted/configuration/) section.</td>
     </tr>
     <tr>
      <td><code>--test</code></td>
      <td><code>-t</code></td>
      <td></td>
      <td>Runs only the specified test suite/module. By default the runner will attempt to run all tests in the <code>src_folders</code> settings folder(s) and their subfolders.</td>
    </tr>
    <tr>
      <td><code>--testcase</code></td>
      <td></td>
      <td></td>
      <td>Used only together with `--test`. Runs the specified testcase from the current suite/module.</td>
    </tr>
    <tr>
      <td><code>--fail-fast</code></td>
      <td></td>
      <td></td>
      <td>Run in "fail-fast" mode: if a test suite cannot be started, the rest will be aborted.</td>
    </tr>
     <tr>
       <td><code>--group</code></td>
       <td><code>-g</code></td>
       <td></td>
       <td>Runs only the specified group or several (comma separated) of tests (subfolder). Tests are grouped by being placed in the same subfolder.</td>
     </tr>
     <tr>
       <td><code>--skipgroup</code></td>
       <td><code>-s</code></td>
       <td></td>
       <td>Skip one or several (comma separated) group of tests.</td>
     </tr>
     <tr>
       <td><code>--filter</code></td>
       <td><code>-f</code></td>
       <td></td>
       <td>Specify a filter (glob expression) as the file name format to use when loading the test files.</td>
     </tr>
     <tr>
       <td><code>--tag</code></td>
       <td><code>-a</code></td>
       <td></td>
       <td>Filter test modules by tags. Only tests that have the specified tags will be loaded.</td>
     </tr>
     <tr>
        <td><code>--skiptags</code></td>
        <td></td>
        <td></td>
        <td>Skips tests that have the specified tag or tags (comma separated).</td>
      </tr>
     <tr>
        <td><code>--retries</code></td>
        <td></td>
        <td></td>
        <td>Retries failed or errored testcases up to the specified number of times. Retrying a testcase will also retry the `beforeEach` and `afterEach` hooks, if any.</td>
      </tr>
      <tr>
       <td><code>--suiteRetries</code></td>
       <td></td>
       <td></td>
       <td>Retries failed or errored testsuites (test modules) up to the specified number of times. Retrying a testsuite will also retry the `before` and `after` hooks (in addition to the global beforeEach and afterEach respectively), if any are defined on the testsuite.</td>
     </tr>
     <tr>
        <td><code>--reuse-browser</code></td>
        <td></td>
        <td></td>
        <td>use the same browser session to run the individual  test suites</td>
     </tr>   
   <tr>
     <td><code>--timeout</code></td>
     <td></td>
     <td></td>
     <td>Set the global timeout for assertion retries before an assertion fails. The various timeout values are defined in the [Globals](/gettingstarted/concepts/#using-test-globals) section.</td>
   </tr>
   
     <tr>
      <td><code>--reporter</code></td>
      <td><code>-r</code></td>
      <td><code>junit</code></td>
      <td>Name of a predefined reporter (e.g. junit) or path to a custom reporter file to use.<br><br>
      The custom reporter interface looks like:<br><code><pre>module.exports = {
write(results, options, done) {
  done();
}
};</pre></code></td>
   </tr>
     <tr>
      <td><code>--output</code></td>
      <td><code>-o</code></td>
      <td><code>tests_output</code></td>
      <td>The location where the JUnit XML reports will be saved.</td>
    </tr>
    
    <tr>
      <td><code>--headless</code></td>
      <td></td>
      <td></td>
      <td>Launch the browser (Chrome or Firefox) in headless mode.</td>
    </tr>
    
    <tr>
      <td><code>--verbose</code></td>
      <td><code></code></td>
      <td></td>
      <td>Shows extended selenium command logging during the session</td>
    </tr>
    
    <tr>
      <td><code>--help</code></td>
      <td><code>-h</code></td>
      <td></td>
      <td>Shows this help.</td>
    </tr>
    <tr>
      <td><code>--version</code></td>
      <td><code>-v</code></td>
      <td></td>
      <td>Shows the version number</td>
    </tr>
    </tbody>
  </table>
</div>

