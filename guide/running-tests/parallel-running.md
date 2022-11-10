---
title: Run Nightwatch tests in parallel
description: Learn how to run Nightwatch tests parallel via multiple test works or multiple environments.
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h1>Parallel testing in Nightwatch</h1></div>

Nightwatch supports running the tests in parallel in two main ways:
- via test workers
- by running multiple test environments in parallel

### Via test workers

When this is enabled the test runner will launch a configurable number of child processes and then distribute the loaded tests over to be ran in parallel.

To enable test workers, set the `test_workers` top-level property, like so:

<div class="sample-test">
<i>nightwatch.json</i><pre class="line-numbers"><code class="language-javascript">{
  "test_workers": {
    "enabled": true,
    "workers": "auto"
  }
}
</code></pre></div>

or:

<div class="sample-test"><i>nightwatch.json</i><pre><code class="language-javascript">{"test_workers": true}</code></pre></div>

<br>

The `workers` option configures how many child processes can run concurrently.

- `"auto"` - determined by number of CPUs e.g. 4 CPUs means 4 workers
- `{number}` - specifies an exact number of workers

<br>
Another way is to pass the `--workers` CLI switch which accept the number of desired parallel processes, e.g.:
<pre><code class="language-bash">nightwatch --workers=4</code></pre>

Test concurrency is done at the file level. Each test file will fill a test worker slot. Individual tests/steps in a test file will not run concurrently.

<div class="alert alert-warning">
To improve support for displaying the output when running tests in parallel, we recommend setting `detailed_output` to `false` in your test settings (and also make sure `live_output` is enabled).
</div>

### Multiple environments

Nightwatch supports running tests across multiple browsers in parallel. The below command will run two environments named `firefox` and `chrome` in parallel:

<pre><code class="language-bash">nightwatch --env firefox,chrome</code></pre>


#### Terminal Output

Each environment will be run as a separate [`child_process`](https://nodejs.org/api/child_process.html) and the output will be sent to the main process.

To make the output easier to read, Nightwatch by default buffers the output from each child process and displays everything at the end, grouped by environment.

<div class="alert alert-warning">
  If you'd like to disable the output buffering and see the output from each child process as it is sent to stdout, simply set the property <code>"live_output" : true</code> on the top level in your <code>nightwatch.json</code> (e.g. after <code>selenium</code>).
</div>

<div class="alert alert-info">
  You can create a separate environment per browser (by chaining <code>desiredCapabilities</code>) and then run them in parallel. In addition, using the <code>filter</code> and <code>exclude</code> options tests can be split per environment in order to be ran in parallel.
</div>

### Via workers + multiple environments

It is very useful to be able to run your tests against multiple browsers in parallel and also distribute your testcases across multiple workers.
From **v1.7** you are able to do just that.

<pre><code class="language-bash">nightwatch -e firefox,chrome --workers=4</code></pre>

The above will run two environments named `firefox` and `chrome` in parallel.

### Recommended content
- [Define and use test environments](https://nightwatchjs.org/guide/configuration/define-test-environments.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/running-tests/skipping-disabling-tests.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Skip / disable tests</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/running-tests/filtering-by-test-tags.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Filter by test tags</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>