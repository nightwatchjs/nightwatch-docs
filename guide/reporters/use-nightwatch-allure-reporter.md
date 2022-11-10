---
title: Allure Reporter
description: Learn how to use allure reporter in Nightwatch.
---

<div class="page-header"><h2>Allure reporter</h2></div>

### Overview
[Nightwatch Allure Reporter](https://github.com/kushmangal/Nightwatch-Allure-Reporter) is a custom reporter for nightwatch, which uses [allure](https://docs.qameta.io/allure/) reporter to generate reports.

### Example with Configuration

#### Step 0: Install Nightwatch
Follow the [guide](https://nightwatchjs.orghttps://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html#guide-container) or watch the [video](​​https://vimeo.com/714406223) to install Nightwatch from scratch.

#### Step 1: Installing Allure
In order to use Allure reporter you must ensure that [Allure](https://docs.qameta.io/allure/) CLI is already installed in your machine; if not, follow Allure's installation [guide] (https://docs.qameta.io/allure/#_installing_a_commandline).


#### Step 2: Installing Nightwatch-Allure-Reporter 
Install `nightwatch-allure` as a dependency in your nightwatch project.

<div class="sample-test"><pre><code class="language-bash">npm i nightwatch-allure --save-dev</code></pre></div>


#### Step 3: Update globals
Add the following code to nightwatch's `globals.js` file. 
Note: Make sure your `globals.js` is configured already; if not please follow the [setup guide](https://nightwatchjs.org/guide/concepts/test-globals.html#external-test-globals).

<div class="sample-test"><i>globals.js</i>
<pre class="line-numbers"><code class="language-javascript">const allureReporter = require('nightwatch-allure');
module.exports = {
  reporter: (results,done)=>{
   const reporter = new allureReporter.NightwatchAllureReporter({});
   reporter.write(results,done);
 }
};</code></pre></div>


#### Step 4: Run an example test
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

You don't need to do anything extra because you've configured the allure reporter to be global. Run the tests as usual:

<pre class="language-bash"><code class="language-bash">npx nightwatch examples/tests/duckDuckGo.js --env chrome </code></pre>

That's it, this will create an allure-results folder in your root directory after you run the tests.


#### Step 5: Run the allure web server to view the reports
After running the test, make sure the `allure-results` folder is created at the root level of your directory. Now run the following command to start the allure web server

<pre class="language-bash"><code class="language-bash">allure generate ./allure-results --clean && allure open </code></pre>

Visit the URL provided in the terminal to view the report :

<img width="1266" src="https://user-images.githubusercontent.com/94462364/184347250-1f00f0cb-227f-405a-af29-d56851108fdf.png">

<img width="1266" src="https://user-images.githubusercontent.com/94462364/184347238-3316cc72-cd20-48a6-a115-d4442bbfa3e1.png">


### Recommended content
- [How-to guides > Use reporters > HTML reporter](https://nightwatchjs.org/guide/reporters/use-html-reporter.html)
- [How-to guides > Use reporters > Add custom reporter](https://nightwatchjs.org/guide/reporters/create-custom-reporter.html)
- [Nightwatch Allure on github](https://github.com/kushmangal/Nightwatch-Allure-Reporter)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/reporters/use-slack-reporter.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Slack Reporter</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/reporters/use-teamcity-reporter.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Teamcity Reporter</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
