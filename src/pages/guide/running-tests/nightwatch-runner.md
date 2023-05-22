## Nightwatch CLI Runner

Nightwatch includes a command-line test runner which makes it easy to run tests and generate useful output. Please refer to the [Installation](https://new.nightwatchjs.org/gettingstarted/#installation) section for details on how to get the runner installed. There are a few different options on how to use the test runner, depending on your installation type.

#### Global

If you have installed Nightwatch globally (with `-g` option), the binary `nightwatch` will be available anywhere:

```bash
nightwatch [source] [options]```

#### Project specific
If you have Nightwatch installed as a dependency of your project, you can refer the binary from the `node_modules/.bin` folder or use the [`npx`](https://www.npmjs.com/package/npx) command which is provided by NPM.

```bash
npx nightwatch [source] [options]```

##### Linux and MacOSX:
```bash
./node_modules/.bin/nightwatch [source] [options]```

##### Windows:
Create a file `nightwatch.js` and add the following line:

```bash
require('nightwatch/bin/runner.js');```

Then run as follows:

<pre class="windows-cmd"><code class="language-bash">node nightwatch.js [source] [options]```

### Tests source
The optional `source` argument can be either one or more files or an entire folder. This can be located irrespectively of the `src_folders` setting.

##### Example - single test:

```bash
nightwatch tests/one/firstTest.js```

##### Example - 2 individual tests:
```bash
nightwatch tests/one/firstTest.js tests/secondTest.js```

##### Example - 1 individual test and 1 folder:
```bash
nightwatch tests/one/test.js tests/utils```

- Next: [Command-line Options](https://nightwatchjs.org/guide/running-tests/command-line-options.html)
