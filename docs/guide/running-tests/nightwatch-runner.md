## Nightwatch CLI Runner

Nightwatch includes a command-line test runner which makes it easy to run tests and generate useful output. Please refer to the [Installation](https://new.nightwatchjs.org/gettingstarted/#installation) section for details on how to get the runner installed. There are a few different options on how to use the test runner, depending on your installation type.

#### Global
If you have installed Nightwatch globally (with `-g` option), the binary `nightwatch` will be available anywhere:

<pre><code class="language-bash">nightwatch [source] [options]</code></pre>

#### Project specific
If you have Nightwatch installed as a dependency of your project, you can refer the binary from the `node_modules/.bin` folder or use the [`npx`](https://www.npmjs.com/package/npx) command which is provided by NPM.

<pre><code class="language-bash">npx nightwatch [source] [options]</code></pre>

##### Linux and MacOSX:
<pre><code class="language-bash">./node_modules/.bin/nightwatch [source] [options]</code></pre>

##### Windows:
Create a file `nightwatch.js` and add the following line:

<pre><code class="language-bash">require('nightwatch/bin/runner.js');</code></pre>

Then run as follows:

<pre class="windows-cmd"><code class="language-bash">node nightwatch.js [source] [options]</code></pre>

### Tests source
The optional `source` argument can be either one or more files or an entire folder. This can be located irrespectively of the `src_folders` setting.

##### Example - single test:

<pre><code class="language-bash">nightwatch tests/one/firstTest.js</code></pre>

##### Example - 2 individual tests:
<pre><code class="language-bash">nightwatch tests/one/firstTest.js tests/secondTest.js</code></pre>

##### Example - 1 individual test and 1 folder:
<pre><code class="language-bash">nightwatch tests/one/test.js tests/utils</code></pre>

- Next: [Command-line Options](https://nightwatchjs.org/guide/running-tests/command-line-options.html)
