---
title: Nightwatch command line test runner  
description: Learn how to use the command-line test runner with Nightwatch
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Using the CLI test runner</h2></div>

### Usage
Nightwatch includes a command-line test runner which makes it easy to run tests and generate useful output. Please refer to the [Installation](https://new.nightwatchjs.org/gettingstarted/#installation) section for details on how to get the runner installed. There are a few different options on how to use the test runner, depending on your installation type.

#### Global
If you have installed Nightwatch globally (with `-g` option), the binary `nightwatch` will be available anywhere:

<pre><code class="language-bash">nightwatch [source] [options]</code></pre>

#### Project specific
If you have Nightwatch installed as a dependency of your project, you can refer the binary from the `node_modules/.bin` folder or use the [`npx`](https://www.npmjs.com/package/npx) command which is provided by NPM.

<pre><code class="language-bash">npx nightwatch [source] [options]</code></pre>

Or directly:
<pre><code class="language-bash">./node_modules/.bin/nightwatch [source] [options]</code></pre>

on Windows:
<pre><code class="language-bash">node node_modules/.bin/nightwatch [source] [options]</code></pre>

### Tests source
The optional `source` argument can be either one or more files, or an entire folder. This will overwrite the value set in the `src_folders` setting.

#### Run a single test:

<pre><code class="language-bash">nightwatch tests/one/firstTest.js</code></pre>

#### Run 2 individual tests:
<pre><code class="language-bash">nightwatch tests/one/firstTest.js tests/secondTest.js</code></pre>

#### Run 1 individual test and 1 folder:
<pre><code class="language-bash">nightwatch tests/one/test.js tests/utils</code></pre>

### Runner options

The test runner supports a number of CLI arguments. To display all, run:

<pre><code class="language-bash">nightwatch --help</code></pre>

<pre class="hide-indicator" style="font-size: 12px; padding: 10px"><code class="language-bash">
Usage: ./node_modules/.bin/nightwatch [source] [options]

Main options:
  --env, -e ........ Specify the testing environment to use.                                                                                     [default: "default"]
  --config, -c ..... Path to configuration file; nightwatch.conf.js or nightwatch.json are read by default if present.                           [required]  [default: "./nightwatch.json"]
  --test, -t ....... Runs a single test.                                                                                                       
  --testcase ....... Used only together with --test. Runs the specified testcase from the current suite/module.                                
  --mocha .......... Set the test runner to use Mocha.                                                                                         
  --timeout ........ Set the global timeout for assertion retries before an assertion fails.                                                   
  --reuse-browser .. Use the same browser session to run the individual test suites                                                            
  --parallel ....... Enable running the tests in parallel mode, via test workers; can also specify de desired workers count (e.g. --parallel=4)
  --headless ....... Launch the browser (Chrome, Edge or Firefox) in headless mode.                                                            
  --devtools ....... Automatically open devtools when launching the browser (Chrome, Edge, or Safari).                                         
  --verbose ........ Displays extended HTTP command logging during the test run.                                                               
  --fail-fast ...... Run in "fail-fast" mode: if a test suite cannot be started, the rest will be aborted                                      
  --list-files ..... Shows list of files present in the project.                                                                               

Tags & filtering:
  --group, -g ...... Runs a group of tests (i.e. a folder)                                                                                     
  --skipgroup, -s .. Skips one or several (comma separated) group of tests.                                                                    
  --filter, -f ..... Specify a filter (glob expression) as the file name format to use when loading the files.                                 
  --tag, -a ........ Only run tests with the given tag.                                                                                        
  --skiptags ....... Skips tests that have the specified tag or tags (comma separated).                                                        

Test Filters – Mocha only:
  --grep ........... Only run tests matching this string or regexp.                                                                            
  --fgrep .......... Only run tests containing this string.                                                                                    
  --invert ......... Inverts --grep and --fgrep matches.                                                                                       

Retrying:
  --retries ........ Retries failed or errored testcases up <n> times.                                                                         
  --suiteRetries ... Retries failed or errored testsuites up <n> times.                                                                        

Reporting:
  --output, -o ..... Where to save the (JUnit XML) test reports.                                                                               
  --reporter, -r ... Name of a predefined reporter (e.g. junit) or path to a custom reporter file to use.                                        [default: ["junit","json","html"]]
  --open ........... Opens the HTML report generated in the default browser at the end of test run                                             

Component Tests:
  --debug .......... Automatically pause the test execution after mounting the component and open the Nightwatch debug REPL interface.         
  --story .......... Allows to specify which story to run from the current file (when using Storybook or JSX written in component story format)
  --preview ........ Used to preview a component story/test; automatically pause the test execution after mounting the component.              

Info & help:
  --help, -h ....... Shows this help (pass COLORS=0 env variable to disable colors).                                                           
  --info ........... Shows environment info, i.e. OS, cpu, Node.js and installed browsers.                                                     
  --version, -v .... Shows version information.    
</code></pre>

### Recommended content
- [Reference > Command-line Options](https://nightwatchjs.org/guide/nightwatch-cli/command-line-options.html)


<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/using-page-objects/writing-page-specific-commands.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Page objects</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/running-tests/skipping-disabling-tests.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Skip / disable tests</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>

