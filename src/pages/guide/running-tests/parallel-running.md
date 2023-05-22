---
title: Run Nightwatch tests in parallel
description: Learn how to run Nightwatch tests parallel via multiple test works or multiple environments.
summary_image: https://nightwatchjs.org/img/banner.png
---

# Parallel testing in Nightwatch

Nightwatch supports running the tests in parallel in two main ways:

- via test workers
- by running multiple test environments in parallel

### Via test workers

When this is enabled the test runner will launch a configurable number of child processes and then distribute the loaded tests over to be ran in parallel.

To enable test workers, set the `test_workers` top-level property, like so:

nightwatch.json

```js
{
  "test_workers": {
    "enabled": true,
    "workers": "auto"
  }
}

```

or:

nightwatch.json

```js
{"test_workers": true}```

<br/>

The `workers` option configures how many child processes can run concurrently.

- `"auto"` - determined by number of CPUs e.g. 4 CPUs means 4 workers
- `{number}` - specifies an exact number of workers

<br/>
Another way is to pass the `--workers` CLI switch which accept the number of desired parallel processes, e.g.:
```bash
nightwatch --workers=4```

Test concurrency is done at the file level. Each test file will fill a test worker slot. Individual tests/steps in a test file will not run concurrently.

<div class="alert alert-warning">
To improve support for displaying the output when running tests in parallel, we recommend setting `detailed_output` to `false` in your test settings (and also make sure `live_output` is enabled).
</div>

### Multiple environments

Nightwatch supports running tests across multiple browsers in parallel. The below command will run two environments named `firefox` and `chrome` in parallel:

```bash
nightwatch --env firefox,chrome```

#### Terminal Output

Each environment will be run as a separate [`child_process`](https://nodejs.org/api/child_process.html) and the output will be sent to the main process.

To make the output easier to read, Nightwatch by default buffers the output from each child process and displays everything at the end, grouped by environment.

<div class="alert alert-warning">
  If you'd like to disable the output buffering and see the output from each child process as it is sent to stdout, simply set the property `
"live_output" : true`
 on the top level in your `
nightwatch.json`
 (e.g. after `
selenium`
).
</div>

<div class="alert alert-info">
  You can create a separate environment per browser (by chaining `
desiredCapabilities`
) and then run them in parallel. In addition, using the `
filter`
 and `
exclude`
 options tests can be split per environment in order to be ran in parallel.
</div>

### Via workers + multiple environments

It is very useful to be able to run your tests against multiple browsers in parallel and also distribute your testcases across multiple workers.
From **v1.7** you are able to do just that.

```bash
nightwatch -e firefox,chrome --workers=4```

The above will run two environments named `firefox` and `chrome` in parallel.

### Recommended content

- [Define and use test environments](https://nightwatchjs.org/guide/configuration/define-test-environments.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/running-tests/skipping-disabling-tests.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Skip / disable tests</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/running-tests/filtering-by-test-tags.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Filter by test tags</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
