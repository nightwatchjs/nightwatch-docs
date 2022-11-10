---
title: Slack Reporter
description: Learn how to use Slack reporter in Nightwatch.
---

<div class="page-header"><h2>Slack Reporter</h2></div>

### Overview
Slack Integration allows you to see your Nightwatch.js test results directly in your teams' Slack channels.


### Configuration

#### Step 1: Install [Nightwatch-Slack-Reporter](https://github.com/nightwatchjs-community/nightwatch-slack-reporter)
Install `nightwatch-slack-reporter` as a dependency in your nightwatch project.

<pre class="language-bash"><code class="language-bash">npm i nightwatch-slack-reporter --save-dev</code></pre>


#### Step 2: Slack app setup
In order to integrate **nightwatch-slack-reporter** with Slack, you are required to set up an incoming webhook to send messages. Once you create the app on Slack, you will get a  ***slack_webhook_url*** to interact with Slack. For more info you can refer to [Slack webhook](https://api.slack.com/messaging/webhooks) guide.

You must follow the steps to setup the app :
1. Navigate to [url](https://api.slack.com/messaging/webhooks) and click on ***Create your Slack app*** button :

    ![create-slack-app](https://user-images.githubusercontent.com/94462364/185093088-09d3ea7f-5510-401a-bea3-55a34dc5c732.png)

2. Click on ***From Scratch*** after clicking on the ***Create New App*** button.
    ![create-app-from-scratch](https://user-images.githubusercontent.com/94462364/185093396-77ee541a-1812-4431-8ac8-7ae528d256ae.png)

3. Give the app a suitable name, select a Slack workspace, and then hit the ***Create App*** button.

    ![slack-app-form](https://user-images.githubusercontent.com/94462364/185093668-2ad6d606-c195-43c1-b9fc-bb24dc054fb7.png)

    **Note :** ***In this step, you may encounter following error which can only be resolved by Slack admins.***

    ![approval-error](https://user-images.githubusercontent.com/94462364/185093969-0e4e94d1-3799-4024-920e-85c0d822c48d.png)

4. Now select ***Incoming Webhooks***

    ![select-incoming-webhook-feature](https://user-images.githubusercontent.com/94462364/185094198-6720ffe9-1ad3-400e-9393-1f92b5ec138b.png)

5. Toggle to **ON** the ***activate Incoming webhook*** button

    ![toggle-to-on](https://user-images.githubusercontent.com/94462364/185094564-19ee779c-71da-4f51-89e6-153784365d4c.png)

6. And then click on ***Add New Webhook to Workspace***

    ![add-new-webhook](https://user-images.githubusercontent.com/94462364/185094839-33632aa2-48a1-45ef-8e57-1c0f5a0b70bf.png)

7. Select a channel and click on ***Allow*** button to authorize it 

    ![allow-to-authorize](https://user-images.githubusercontent.com/94462364/185095119-6b89b3c3-8f71-4b16-a808-7a8688e7c4c7.png)

8. That’s it, your webhook url is ready to use 

    ![webhook-ready-to-use](https://user-images.githubusercontent.com/94462364/185095340-71e921e7-8f12-48be-8b91-c0b2f922dfc6.png)


#### Step 3. Reporter integration with Nightwatch
`nightwatch-slack-reporter` requires an option object which will contain **slack_message** and **slack_webhook_url**. You can configure  **slack_message** accordingly either as a function or message and also to set the value of **slack_webhook_url** which you made in ***step 2***

##### via globals.js file 
Make sure your `globals.js` is configured already; if not, please follow the [setup guide](https://nightwatchjs.org/guide/concepts/test-globals.html#external-test-globals).

<div class="sample-test"><i>globals.js</i>
<pre class="line-numbers language-javascript"><code class="language-javascript">const options = {
   // function or message string
   slack_message: function(results, options) {
     // Message payload or string  
     return {
       text: 'Test completed, passed ' + results.passed + ', failed ' + results.failed,
       username: 'Nightwatch',
       icon_emoji: ':ghost:'
     }
   },
   // This can be specified with SLACK_WEBHOOK_URL environment variable
   slack_webhook_url: 'https://hooks.slack.com/services/...'
}
module.exports = {
  reporter: (require('nightwatch-slack-reporter')(options))
}</code></pre></div>

##### via configuration file

<div class="sample-test"><i>nightwatch.conf.js</i>
<pre class="line-numbers language-javascript"><code class="language-javascript">const options = {
   slack_message: function(results, options) {
   return {
       text: 'Test completed, passed ' + results.passed + ', failed ' + results.failed,
       username: 'Nightwatch',
       icon_emoji: ':ghost:'
       }
   },
   slack_webhook_url: 'https://hooks.slack.com/services/...'
}
module.exports = {
   src_folders: ['tests'],
   globals: {
      reporter: (require('nightwatch-slack-reporter')(options)),
    },
   // Other stuff
}</code></pre></div>

### Example
#### Step 0: Install Nightwatch
Follow the [guide](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html#guide-container) or watch the [video](​​https://vimeo.com/714406223) to install Nightwatch from scratch.

#### Step 1: Run an example test
Consider the `duckDuckGo.js` example test :

<pre class="line-numbers language-javascript"><code class="language-javascript">describe('duckduckgo example', function() {
  it('Search Nightwatch.js and check results', function(browser) {
    browser
      .navigateTo('https://duckduckgo.com')
      .waitForElementVisible('#search_form_input_homepage')
      .sendKeys('#search_form_input_homepage', ['Nightwatch.js'])
      .click('#search_button_homepage')
      .assert.visible('.results--main')
      .assert.textContains('.results--main', 'Nightwatch.js');
  }); 
});
</code></pre>

You don't need to do anything extra because you've configured the Slack reporter to be global. Run the tests as usual :

<pre class="language-bash"><code class="language-bash">npx nightwatch examples/tests/duckDuckGo.js --env chrome</code></pre>


#### Step 2: View the reports on Slack
![reports](https://user-images.githubusercontent.com/94462364/185097245-963261e2-5253-43b5-975f-87a0c06cf1de.png)

### Recommended content
- [How-to guides > Use reporters > HTML reporter](https://nightwatchjs.org/guide/reporters/use-html-reporter.html)
- [How-to guides > Use reporters > Add custom reporter](https://nightwatchjs.org/guide/reporters/create-custom-reporter.html)
- [Nightwatch Allure on github](https://github.com/kushmangal/Nightwatch-Allure-Reporter)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/reporters/use-mochawesome-reporter.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Mochawesome Reporter</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/reporters/use-nightwatch-allure-reporter.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Allure Reporter</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
