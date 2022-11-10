---
title: AWS Device Farm Settings
description: Learn how to configure AWS device farm settings in Nightwatch
---

<div class="page-header"><h1>AWS Device Farm Settings</h1></div>

[Aws Device Farm][1] is one of cloud testing platforms that allows users to do remove browser testing using selenium. It is possible to use Nightwatch with AWS using some tweaks to the auto-generated configuration file  `nightwatch.conf.js`.

### Create a new project in AWS Device Farm
Once you have an account with AWS, you can go to the console and navigate to Device Farm Dashboard. From the Dashboard select *Desktop Browser Testing>Projects* and create a new project there. Once you have a project setup, note down the *Project ARN*.

### Setup aws-cli
If you don't have already, install [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and login to aws using the cli. This will setup the credentials directory which will be needed by the node.js library used in the configuration.
<pre class="line-numbers"><code class="language-bash">aws configure
</code></pre>

### Install aws-sdk
Install the aws-node sdk in the same folder where nightwatch is setup.
<pre class="line-numbers"><code class="language-bash">npm install  aws-sdk
</code></pre>

### Configuration AWS

Use this configuration as a template to connect to AWS Device Farm. Make sure up update the `PROJECT_ARN`.

<div class="sample-test">
<i>nightwatch.conf.js</i>
<pre class="line-numbers"><code class="language-javascript">let AWS = require("aws-sdk");
let PROJECT_ARN = "&lt;PROJECT_ARN&gt;";
let devicefarm = new AWS.DeviceFarm({ region: "us-west-2" });
 
 
module.exports = (async function() {
 const testGridUrlResult = await devicefarm.createTestGridUrl({
     projectArn: PROJECT_ARN,
     expiresInSeconds: 86400
 }).promise();
 const testGridUrl = new URL(testGridUrlResult.url);
 
 return {
   // An array of folders (excluding subfolders) where your tests are located;
   // if this is not specified, the test source must be passed as the second argument to the test runner.
   src_folders: [],
 
   // See https://nightwatchjs.org/guide/working-with-page-objects/using-page-objects.html
   page_objects_path: ['node_modules/nightwatch/examples/pages/'],
 
   // See https://nightwatchjs.org/guide/extending-nightwatch/custom-commands.html
   custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],
 
   // See https://nightwatchjs.org/guide/extending-nightwatch/custom-assertions.html
   custom_assertions_path: '',
 
   // See https://nightwatchjs.org/guide/extending-nightwatch/plugin-api.html
   plugins: [],
  
   // See https://nightwatchjs.org/guide/#external-globals
   globals_path : '',
 
   webdriver: {},
 
   test_settings: {
     default: {
       disable_error_log: false,
       launch_url: 'https://nightwatchjs.org',
 
       screenshots: {
         enabled: false,
         path: 'screens',
         on_failure: true
       },
 
       desiredCapabilities: {
         browserName : 'chrome'
       },
     },
 
     awsDeviceFarm: {
       selenium: {
         host: testGridUrl.host,
         default_path_prefix: testGridUrl.pathname,
         port: 443
       },
 
       webdriver: {
         timeout_options: {
           timeout: 150000,
           retry_attempts: 3
         },
         ssl: true,
         keep_alive: true,
         start_process: false
       }
     }
   }
 }
})();
</code></pre>
</div>

[1]:	https://aws.amazon.com/device-farm/

### Recommended content
- [Reference > All configuration settings](https://nightwatchjs.org/guide/reference/settings.html)
- [Reference > Configuration defaults](https://nightwatchjs.org/guide/reference/defaults.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/configuration/browser-stack-settings.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Configure BrowserStack settings</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/test-syntax-bdd.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">BDD test syntax</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>