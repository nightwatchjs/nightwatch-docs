<div class="page-header"><h2>Parallel testing in Nightwatch</h2></div>

Nightwatch supports running the tests in parallel in two main ways: 
- via test workers
- by running multiple test environments in parallel

### Via test workers

When this is enabled the test runner will launch a configurable number of child processes and then distribute the loaded tests over to be ran in parallel.

Test concurrency is done at the file level. Each test file will fill a test worker slot. Individual tests/steps in a test file will not run concurrently.

### Multiple environments

Nightwatch also supports running tests across multiple browsers in parallel. 

You can create a separate environment per browser (by chaining <code>desiredCapabilities</code>) and then run them in parallel. In addition, using the <code>filter</code> and <code>exclude</code> options tests can be split per environment in order to be ran in parallel.

### Via workers + multiple environments

It is very useful to be able to run your tests against multiple browsers in parallel and also distribute your testcases across multiple workers.
From **v1.7** you are able to do just that.

### Recommended content
- [Define and use test environments](/guide/configuration/define-test-environments.html)
- [How-to guide > Run tests in parallel](/guide/running-tests/parallel-running.html)