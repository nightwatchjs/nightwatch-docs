---
title: TeamCity Reporter
description: Learn how to use teamcity reporter in Nightwatch.
---

<div class="page-header"><h2>TeamCity reporter</h2></div>

### Overview
TeamCity formatter for ***Nightwatch.js*** end-to-end testing framework. Its output can be used by other tools to visualize the report. 

### Example with Configuration

#### Step 0: Install Nightwatch
Follow the [guide](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html#guide-container) or watch the [video](​​https://vimeo.com/714406223) to install Nightwatch from scratch.

#### Step 1: Installing Nightwatch Teamcity Reporter
Install [nightwatch-teamcity](https://www.npmjs.com/package/nightwatch-teamcity) as a dependency in your nightwatch project.

<div class="sample-test"><pre><code class="language-bash">npm i nightwatch-teamcity --save-dev</code></pre></div>


#### Step 2: Run an example test
Consider the `duckDuckGo.js` example test :
<pre class="line-numbers"><code class="language-javascript">describe('duckduckgo example', function() {
  it('Search Nightwatch.js and check results', function(browser) {
    browser
      .navigateTo('https://duckduckgo.com')
      .waitForElementVisible('#search_form_input_homepage')
      .sendKeys('#search_form_input_homepage', ['Nightwatch.js'])
      .click('#search_button_homepage')
      .assert.visible('.results--main')
      .assert.textContains('.results--main', 'Nightwatch.js');
  }); 
});</code></pre>

You can run this test using the command:

<div class="sample-test"><pre><code class="language-bash">npx nightwatch examples/tests/duckDuckGo.js -–reporter node_modules/nightwatch-teamcity/index.js</code></pre></div>


You can also define your reporter in a separate file (eg. ***nightwatch-reporter.js***) by including the following code, and then specify the path to the file using the --reporter cli argument.

<pre class="line-numbers"><code class="language-javascript">const teamCityFormatter = require("nightwatch-teamcity").format;

module.exports = {
 reporter: (results,done)=>{
   teamCityFormatter(results);
   done();
 }
};</code></pre>

<div class="sample-test"><pre><code class="language-bash">npx nightwatch examples/tests/duckDuckGo.js --reporter ./nightwatch-reporter.js</code></pre></div>


#### Step 3: View the JSON report
The TeamCity report can be seen in console and It will look something like this:

<img width="1266" src="https://user-images.githubusercontent.com/94462364/184711689-64ba51ea-6aab-408f-8acd-2621b624db61.png">


### Composing with other reportes

In order to compose with another reporter (e.g. `nightwatch-html-reporter`), you can follow the example shown below:

<div class="sample-test"><i>nightwatch-reporter.js</i>
<pre class="line-numbers"><code class="language-javascript">const HtmlReporter = require("nightwatch-html-reporter");

const teamCityFormatter = require("nightwatch-teamcity").format;

const reporter = new HtmlReporter({ 
    reportsDirectory: "./reports",
});

module.exports = {
    write: function(results, options, done) {
        teamCityFormatter(results);
        reporter.fn(results, done);
        done();
    }
};</code>
</pre>
</div>

Recommended content
- [How-to guides > Use reporters > HTML reporter](https://nightwatchjs.org/guide/reporters/use-html-reporter.html)
- [How-to guides > Use reporters > Add custom reporter](https://nightwatchjs.org/guide/reporters/create-custom-reporter.html)
- [Nightwatch Teamcity on github](https://www.npmjs.com/package/nightwatch-teamcity)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/reporters/use-nightwatch-allure-reporter.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Allure Reporter</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/reporters/create-custom-reporter.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Add custom reporter</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
