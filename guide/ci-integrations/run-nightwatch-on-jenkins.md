---
title: Run Nightwatch tests on Jenkins
description: Learn how to run Nightwatch tests on Jenkins
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Run Nightwatch tests on Jenkins</h2></div>

In this article, you will learn how to create and run Nightwatch tests on Jenkins

### Overview

Jenkins is a long-term industry standard for continuous integration. Jenkins can be used to execute tests on the same instances or on cloud-service providers such as BrowserStack. You can also review the results post the execution of  the tests. 

### Prerequisites
1. Installed Jenkins instance
2. Nightwatch tests uploaded on Git

### Run on Jenkins instance

Steps

1. Choose Freestyle project and name the project according to your project

![Jenkins project setup](https://user-images.githubusercontent.com/1677755/177561718-3d9742e8-dcdc-4430-9b48-ca2eeb054023.png)

2. Setup source code management to fetch tests from the git repository to fetch the latest test version. Make sure the git branch is mentioned correctly. You can find the source code management settings under "Configure->General"

![Jenkins GIT repository setup](https://user-images.githubusercontent.com/1677755/177564242-f5d2161b-a7f8-4be9-9923-7e12cfce645b.png)

3. Jenkins executes the pipeline in a blank shell instance. Inorder to use `npm` commands, the NodeJS plugin would have to be installed. Setup Node plugin by going to dashboard -> Manage Jenkins -> Plugin Manager, searching for `NodeJS Plugin` and installing it.

![Jenkins NodeJS Plugin](https://user-images.githubusercontent.com/1677755/177565528-0d97bcf8-307d-412f-9b5f-8b091f32680f.png)

4. Setup the pipeline to use the NodeJS plugin by select the Node JS option under `Build Environment`

![Jenkins NodeJS Plugin](https://user-images.githubusercontent.com/1677755/177566306-ff7eb83b-021e-4325-8746-1f6da9fbb058.png)

5. Add an `Execute shell` build step along with following commands. 

<pre><code class="language-bash">❯npm install
npm test</code></pre>

![Jenkins Nightwatch Execute Tests](https://user-images.githubusercontent.com/1677755/177566752-6fd5e4d0-96a8-47f7-bd93-3cc7c597d4ba.png)

You're build is ready to be triggered. When you build this job, you will notice that your tests are running on the Jenkins instance.

### Run on Cloud Service Providers from Jenkins

#### Run on BrowserStack

Inorder to run your tests on BrowserStack from Jenkins, setup the environment variables by going to "Manage Jenkins-> Configure System -> Environment Variables"

Setup the following 2 environment variables
1. BROWSERSTACK_USERNAME
2. BROWSERSTACK_ACCESS_KEY

![Jenkins BrowserStack](https://user-images.githubusercontent.com/1677755/177569029-da96b37d-6377-404f-9562-315d0694997d.png)

The setup is done. You can execute the tests by updating the test exection shell command in the build steps

<pre><code class="language-bash">❯npm test -- --env browserstack</code></pre>

Once you build, the tests will be executed on BrowserStack. 


### Viewing reports in Jenkins

### JUnit
Nightwatch publishes XML reports after test-run the same can be used in Jenkins to publish test reports.

1. Make sure [Junit Jenkins Plugin](https://plugins.jenkins.io/junit/) is installed
2. Add a post-build action to publish the XML report. Nightwatch by default uses `the tests_output` folder to write reports.

![Jenkins JUnit Report Setup](https://user-images.githubusercontent.com/1677755/178725915-ec67050c-8274-4379-8a5c-771fe9239f89.png)

3. Run your tests to see the JUnit report in Jenkins
![Jenkins JUnit Report](https://user-images.githubusercontent.com/1677755/178726091-3f7a7c51-76bf-4944-88f0-5c00da8fa398.png)


### HTML
Nightwatch also publishes HTML reports which can be published to Jenkins

1. Make sure you have installed the [HTML Jenkins plugin](https://plugins.jenkins.io/htmlpublisher/).
2. Nightwatch by default writes HTML report to `tests_output/nightwatch-html-report/` that will be used by Jenkins to publish the report.

![Jenkins HTML reporter setup](https://user-images.githubusercontent.com/1677755/178726263-5c0cffde-85e9-41f1-93e5-dabbda9fe04e.png)

3. Run your tests to see the HTML report under `Status->HTML Report`
![Jenkins HTML report](https://user-images.githubusercontent.com/1677755/178733403-8205f8ad-81a0-47d7-99aa-676e6e211aa2.png)
