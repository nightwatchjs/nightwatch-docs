### Parallel Running

Starting with `v0.5` Nightwatch supports the tests to be run in parallel. This works by specifying multiple environments in the command line, separated by comma. E.g.:

<pre><code class="language-bash">$ nightwatch -e default,chrome</code></pre>

The above will run two environments named `default` and `chrome` in parallel.

#### Terminal Output

Each environment will be run as a separate [`child_process`](http://nodejs.org/api/child_process.html) and the output will be sent to the main process.

To make the output easier to read, Nightwatch by default buffers the output from each child process and displays everything at the end, grouped by environment.

<div class="alert alert-warning">
  If you'd like to disable the output buffering and see the output from each child process as it is sent to stdout, simply set the property <code>"live_output" : true</code> on the top level in your <code>nightwatch.json</code> (e.g. after <code>selenium</code>).
</div>

<div class="alert alert-info">
  You can create a separate environment per browser (by chaining <code>desiredCapabilities</code>) and then run them in parallel. In addition, using the <code>filter</code> and <code>exclude</code> options tests can be split per environment in order to be ran in parallel.
</div>

#### Via Workers

Version `v0.7` introduces a new feature which allows the tests to be run in parallel. When this is enabled the test runner will launch a configurable number of child processes and then distribute the loaded tests over to be ran in parallel.

To enable test workers, set the `test_workers` top-level property, like so:

<pre><code class="language-javascript">
"test_workers": {
  "enabled": true,
  "workers": "auto"
}   
</code></pre>

or, simply:

<pre><code class="language-javascript">
"test_workers": true
</code></pre>
<br>
The `workers` option configures how many child processes can run concurrently.

* `"auto"` - determined by number of CPUs e.g. 4 CPUs means 4 workers
* `{number}` - specifies an exact number of workers

Test concurrency is done at the file level. Each test file will fill a test worker slot. Individual tests/steps in a test file will not run concurrently.

<div class="alert alert-warning">
Version 0.9 brings improved support for displaying output when running tests in parallel. We recommend setting `detailed_output` to `false` in your test settings for improved output readability.
</div>
