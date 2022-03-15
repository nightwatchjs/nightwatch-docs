### Debugging Nightwatch with VS Code

The VS Code debugger allows you to control the flow of the test. You can pause, introspect, and continue your tests.

#### Use Launch Config

Setup <a href=https://code.visualstudio.com/docs/nodejs/nodejs-debugging><pre><code class="language-javascript">launch.json</code></pre></a> configuration for your Node.js project. Once this has been done you will be able to launch scripts with F5 and your breakpoints, or debugger statements, will pause execution.

#### Use the JavaScript Debug Terminal

1. Open the <a href=https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal>JavaScript Debug Terminal</a>
2. Set a breakpoint by clicking to the left of a line number or by inserting a
   <pre><code class="language-javascript">debugger</code></pre> statement.
3. Run your Node.js script from the terminal
