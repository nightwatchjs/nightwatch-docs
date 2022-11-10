<div class="page-header"><h2>Use 'exports' test syntax</h2></div>

### Overview
Nightwatch default interface for writing tests has been the `exports` syntax, which makes it very easy to write end-to-end tests. 

While this format is slightly easier to understand and work with, it is also more limited than the BDD `describe()` interface. Due to the widespread usage of `describe()` as a test format and compatibility with tools like Mocha, we recommend using the BDD `describe()`, however `exports` will also continue to work just fine.     

### Example
The following basic test suite example opens the search engine [Ecosia.org][1], searches for the term `nightwatch`, and then verifies if the term first result is the `Nightwatch.js` website.

<div class="sample-test"><i>tests/sampleTest.js</i><pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test ecosia.org' : function(browser) {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};</code></pre></div>
<br>

You can also include multiple steps in a test as follows:<br><br>

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  'step one: navigate to ecosia.org': function(browser) {
    browser
      .url('https://www.ecosia.org')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]');
  },

  'step two: click submit' : function (browser) {
    browser
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};</code></pre></div>

### Using ES Modules (ESM)
If using [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) in your project, you'll need to write your tests using the below format: 

<div class="sample-test"><i>tests/sampleTest.js</i><pre class="line-numbers" data-language="javascript"><code class="language-javascript">exports default {
  'Demo test ecosia.org' : function(browser) {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};</code></pre></div>



You'll also need to use `nightwatch.conf.cjs` config file.

We've put together a complete [Github ESM template repo](https://github.com/nightwatchjs/nightwatch-boilerplate-esm) with several examples which we're periodically updating, including a Github Actions workflow for you to get started with.



<div style="text-align: center; max-width: 80%; margin-bottom: 30px; ">
<a href="https://github.com/nightwatchjs/nightwatch-boilerplate-esm"><img class="github-embed" src="https://opengraph.githubassets.com/default/nightwatchjs/nightwatch-boilerplate-esm" alt="nightwatch-boilerplate-esm on Github" /></a>
</div>


### Test tags

You can also selectively target tests to run based on tags, such that a test may belong to multiple tags. For example, you might have a login test that belongs to a `login` suite as well as a `sanity` suite.

The tagging can be accomplished by adding the `@tags` property to a test module:

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  '@tags': ['login', 'sanity'],
  'demo login test': function (browser) {
     // test code
  }
};</code></pre>
</div>

To select which tags to run, use the `--tag` command line flag:

<pre><code class="language-bash">nightwatch --tag login</code></pre>

<br>
Specify multiple tags as:

<pre><code class="language-bash">nightwatch --tag login --tag something_else</code></pre>

<br>
To skip running tests with a specific tag, use the `--skiptags` flag:

<pre><code class="language-bash">nightwatch --skiptags login</code></pre>
<br>
Or to skip multiple tags, add each tag you want to skip as comma-separated:

<pre><code class="language-bash">nightwatch --skiptags login,something_else</code></pre>


### Recommended content
- [BDD test syntax](https://nightwatchjs.org/guide/writing-tests/test-syntax-bdd.html)
- [Using async/await](https://nightwatchjs.org/guide/writing-tests/using-es-6-async-await.html)

[1]:	https://www.ecosia.org/

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/writing-tests/test-syntax-bdd.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">BDD test syntax</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/using-es-6-async-await.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Use ES6 async/await</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
