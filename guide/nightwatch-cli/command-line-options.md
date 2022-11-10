---
title: Command-line options
description: List of command-line options supported by nightwatch test runner
---

<div class="page-header"><h1>Command-line options</h1></div>

### Overview

The Nightwatch test runner supports a number of run-time options to be passed to. To view all, run the following:

<pre><code class="language-bash">nightwatch --help</code></pre>

### Options

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
    <tr><th colspan="4">Main options</th></tr>
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
      <td><code>--mocha</code></td>
      <td></td>
      <td></td>
      <td>Set the test runner to use Mocha.</td>
    </tr>
    <tr>
     <td><code>--timeout</code></td>
     <td></td>
     <td></td>
     <td>Set the global timeout for assertion retries before an assertion fails. The various timeout values are defined in the [Globals](/gettingstarted/concepts/#using-test-globals) section.</td>
    </tr>
    <tr>
     <td><code>--reuse-browser</code></td>
     <td></td>
     <td></td>
     <td>Use the same browser session to run the individual test suites (serial mode only).</td>
    </tr>

   <tr>
     <td><code>--workers</code></td>
     <td></td>
     <td></td>
     <td>Max number of test files running at the same time (default: CPU cores; e.g. workers=4)</td>
    </tr>

   <tr>
     <td><code>--serial</code></td>
     <td></td>
     <td></td>
     <td>Executes tests serially (disables parallel mode).</td>
    </tr>
    <tr>
      <td><code>--headless</code></td>
      <td></td>
      <td></td>
      <td>Launch the browser (Chrome or Firefox) in headless mode.</td>
    </tr>
    <tr>
      <td><code>--devtools</code></td>
      <td></td>
      <td></td>
      <td>Automatically open devtools when launching the browser (Chrome, Edge, or Safari).</td>
    </tr>
    <tr>
      <td><code>--verbose</code></td>
      <td><code></code></td>
      <td></td>
      <td>Shows extended selenium command logging during the session.</td>
    </tr>

    <tr>
      <td><code>--fail-fast</code></td>
      <td></td>
      <td></td>
      <td>Run in "fail-fast" mode: if a test suite cannot be started, the rest will be aborted.</td>
    </tr>

    <tr>
      <td><code>--list-files</code></td>
      <td></td>
      <td></td>
      <td>Shows list of files present in the project.</td>
    </tr>

    <tr><th colspan="4">Tags & filtering</th></tr>

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

    <tr><th colspan="4">Retrying</th></tr>

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
   
   <tr><th colspan="4">Reporting</th></tr>
   
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
      <td><code>--open</code></td>
      <td><code></code></td>
      <td></td>
      <td>Opens the HTML report generated in the default browser at the end of test run</td>
    </tr>
    
    <tr><th colspan="4">Component Testing</th></tr>
    <tr>
      <td><code>--debug</code></td>
      <td><code></code></td>
      <td></td>
      <td>Automatically pause the test execution after mounting the component and open the Nightwatch debug REPL interface.</td>
    </tr>    
    <tr>
      <td><code>--story</code></td>
      <td><code></code></td>
      <td></td>
      <td>Allows to specify which story to run from the current file (when using Storybook or JSX written in component story format).</td>
    </tr>
    <tr>
      <td><code>--preview</code></td>
      <td><code></code></td>
      <td></td>
      <td>Used to preview a component story/test; automatically pause the test execution after mounting the component.</td>
    </tr>

    <tr><th colspan="4">Info &amp; Help</th></tr>
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

### Recommended content
- [CLI Test Runner](https://nightwatchjs.org/guide/running-tests/using-the-cli-test-runner.html)
- [Configuration](https://nightwatchjs.org/guide/reference/settings.html)
- [Nightwatch release notes](https://nightwatchjs.org/guide/overview/whats-new.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/browser-drivers/edgedriver.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">EdgeDriver</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/reference/settings.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">All Settings</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
