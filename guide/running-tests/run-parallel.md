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