### Test Runner

Nightwatch includes a command-line test runner which makes it easy to run tests and generate useful output.

#### Example usage:

<pre><code class="language-bash">$ ./nightwatch --test tests/demotest.js</code></pre>

If you have installed `nightwatch` with`-g` (global) option you can skip this.

To use the test runner in your project simply create a new file called `nightwatch` and add the following:


##### For Linux and MacOSX:
<pre><code class="language-bash">#!/usr/bin/env node
require('nightwatch/bin/runner.js');
</code></pre>

Then set the permissions:

<pre><code class="language-bash">$ chmod a+x nightwatch</code></pre>

##### For Windows:

Name the file `nightwatch.js` and add the following line:

<pre><code class="language-bash">require('nightwatch/bin/runner.js');</code></pre>

Then run as follows:

<pre><code class="language-bash">C:\workspace\project> node nightwatch.js</code></pre>