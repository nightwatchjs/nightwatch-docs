---
title: Run Nightwatch tests on Gitlab CI
description: Learn how to run Nightwatch tests on Gitlab CI
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Run Nightwatch tests on Gitlab CI</h2></div>

In this article, you will learn how to create and run Nightwatch tests on Gitlab CI

### Overview

Gitlab CI is a CI/CD platform that can be used to create an automated testing pipeline. These pipelines can be used to execute tests on the same instances or on cloud-service providers such as BrowserStack & Sauce Labs.

### Prerequisites
- Gitlab CI account
- Nightwatch project uploaded to Git


### Setup Guide
We will be taking the [nightwatch-examples](https://github.com/nightwatchjs/nightwatch-examples) repo for demonstration. Now, let's configure CI by following the procedures below :


#### Step 1:  Setup Gitlab CI Project
Once you login to your Gitlab CI account, click on "New Project". You will see the following options

![Gitlab CI Project options](https://user-images.githubusercontent.com/1677755/191430866-d944c965-3fcb-4128-a878-30e816acb6be.png)

Click on "Run CI/CD for external repository" as we want to run the pipeline against a repository from Github. 

On the next screen, enter the Github URL where your tests reside with the package.json file. Enter other details such as project name & URL and click on `Create project` as shown below
<br>
<br>
![Gitlab CI Github](https://user-images.githubusercontent.com/1677755/191431627-b1756eda-3357-4525-b4cd-b92b8274c470.png)
<br>
<br>
With this your Gitlab CI project setup is complete. 

#### Step 2:  Update the nightwatch.conf.js file
Add the `--no-sandbox` and `--disable-dev-shm-usage` args in the google chrome options under the chrome environment 

<pre><code class="yml">chrome: {
    desiredCapabilities : {
    browserName : 'chrome',
    'goog:chromeOptions' : {
        // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
        //
        // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
        w3c: true,
        args: [
        '--no-sandbox',
        '--disable-dev-shm-usage'
        //'--ignore-certificate-errors',
        //'--allow-insecure-localhost',
        //'--headless'
        ]
    }
},
</code></pre>

#### Step 3 : Update the .gitlab-ci.yml file, commit and run the pipeline

Click on `CI/CD` -> `Editor`. Create a new gitlab-ci.yml file and copy the below file contents into the file

<pre><code class="yml"># This file is a template, and might need editing before it works on your project.
# You can copy and paste this template into a new `.gitlab-ci.yml` file.
# You should not add this template to an existing `.gitlab-ci.yml` file by using the `include:` keyword.
#
# To contribute improvements to CI/CD templates, please follow the Development guide at:
# https://docs.gitlab.com/ee/development/cicd/templates.html
# This specific template is located at:
# https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Nodejs.gitlab-ci.yml

# Official framework image. Look for the different tagged releases at:
# https://hub.docker.com/r/library/node/tags/
image: node:14.19.0

cache:
  paths:
    - node_modules/

test_async:
  before_script:
    - apt-get update -q -y
    - apt-get --yes install xvfb
  script:
    # Installing Google Chrome
    - curl -sS -L https://dl.google.com/linux/linux_signing_key.pub | apt-key add -
    - echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list
    - apt-get update -q -y
    - apt-get install -y google-chrome-stable
    # Installing chromedriver
    - npm install chromedriver

    # Installing Geckodriver
    - npm install geckodriver

    # installing all the packages
    - npm install 
    # Ensuring everything is installed
    - ./node_modules/.bin/chromedriver --version
    - ./node_modules/.bin/nightwatch --version
    - /usr/bin/google-chrome --version
    # Install display manager
    - Xvfb -ac :99 -screen 0 1280x1024x16 &
    - export DISPLAY=:99
    # Run nightwatch tests
    - npx nightwatch tests/ecosia.js --env chrome
</code></pre>

Once you have copied the config.yml file, press on `Commit and Run`

Let's try to understand the key highlights of the config file: -
1. We are installing the chrome browser
2. We are installing the chrome driver
3. In the next step, all packages from package.json are installed that includes `Nightwatch`, driver packages and other required packages
4. We are installing and running `xvfb` in the background
5. Once the setup is done, the pipeline will trigger the tests with the `npx nightwatch <path to test>` command

#### Step 4 : View the results

You can view the execution output in the shell logs of the particular pipeline run

![Gitlab CI Results](https://user-images.githubusercontent.com/1677755/191442560-0973bf79-8b45-4a25-bb34-44f72757554a.png)


### Related articles
- [How-to guides > Write tests > Run on CI Servers > Jenkins ](https://nightwatchjs.org/guide/ci-integrations/run-nightwatch-on-jenkins.html)
