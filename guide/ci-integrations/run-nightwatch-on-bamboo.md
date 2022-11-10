---
title: Run Nightwatch tests on Bamboo
description: Learn how to run Nightwatch tests on Bamboo
---

<div class="page-header"><h2>Run Nightwatch tests on Bamboo</h2></div>

### Overview

Bamboo is a continuous integration server developed by Atlassian, that allows you to build, test, and deploy your web applications.

### Prerequisites
- We presume you have a working project to test that has been pushed to Github. And your tests are running properly in your local system.

- Java and a database (eg: postgres, MySQL etc) must be installed; walkthrough the [guide](https://confluence.atlassian.com/bamboo/supported-platforms-289276764.html) for supported versions


### Setup Guide
I’m taking the [nightwatch-examples](https://github.com/nightwatchjs/nightwatch-examples) repo for demonstration. Now, let's configure CI by following the procedures below :


#### Step 1:  Installation and Configuration of Bamboo

- Download the [file](https://www.atlassian.com/software/bamboo/download) and follow the installation [instructions](https://confluence.atlassian.com/bamboo/getting-started-with-bamboo-289277283.html) as per your operating system. 

- In order to complete the installation procedure, you must set up a database, which you may do by following this [tutorial](https://confluence.atlassian.com/bamboo/connecting-bamboo-to-an-external-database-289276815.html).

- And this [article](https://confluence.atlassian.com/bamboo/bamboo-remote-agent-installation-guide-289276832.html) will also assist you in getting started with the remote agent.

- After completion of installation; you should follow the [guide](https://confluence.atlassian.com/bamboo/running-the-setup-wizard-289276851.html) to run the setup wizard.


#### Step 2 : Sign In and create a plan
After installation, now you can sign in to the admin and create a plan after clicking the button displayed in the image below :

<img width="1266" src="https://user-images.githubusercontent.com/94462364/184719626-8cc6aebb-be57-47de-9c1d-59988c20be25.png">


1. Fill out the form accordingly by providing the information requested and then save the details.

    <img width="1266" src="https://user-images.githubusercontent.com/94462364/184719788-545a208a-0ccc-4301-8466-869f726e6cb0.png">

2. Link your repository with the project by filling in the following form and then save and continue the provided info

    <img width="1266" src="https://user-images.githubusercontent.com/94462364/184720011-5d4949c9-4cff-4963-8eae-fc8b4a99dcd3.png">

3. And then select the agent environment

    <img width="1266" src="https://user-images.githubusercontent.com/94462364/184720172-33ebe5c2-149d-4a65-aa0f-4023ea949bf4.png">

#### Step 3: Create tasks
1. Create tasks where the ***source code checkout*** task will be default in our case. And to add new tasks click on Add task button 

    <img width="1266" src="https://user-images.githubusercontent.com/94462364/184720381-0834a00b-7546-415f-8c1e-b344dff9b729.png">

2. Select npm task type by searching for it.

    <img width="1266" alt="image9" src="https://user-images.githubusercontent.com/94462364/184722148-67cc0ea2-2c6a-4db4-9305-2a25ff93a9bb.png">

3. In order to install all the dependencies you need to complete the form by typing `install` in the command input box and selecting Node.js executable, either custom or default.

    <img width="1266" alt="image10" src="https://user-images.githubusercontent.com/94462364/184721745-627b93bd-1e37-4348-94c3-6908f098e6e9.png">

    **Note :** ***In case while executing these commands you are getting errors in deafult Node.js executable. You may try using node version manager to install Node.js and get its path using which node command.*** 

    <img width="1266" alt="image8" src="https://user-images.githubusercontent.com/94462364/184721900-854d08f0-21c4-471b-896a-b8878826f81c.png">

    ***And then add this path to create a new executable, as seen in the image below.***

    <img width="1266" alt="image3" src="https://user-images.githubusercontent.com/94462364/184722282-e1cc9013-606e-45ca-be11-90197ff8c988.png">

 
4. In order to run the test cases you need to add another **npm** task type and type **test** in the command input box. 

    But if you want to run the tests in headless mode or want to pass more arguments you may use the **script** task type in place of **npm**. 

    <pre class="line-numbers"><code class="language-bash">npm install npx 
   npx nightwatch --headless</code></pre>

 
5. Finally click on the create button and try running your tasks.

    <img width="1266" src="https://user-images.githubusercontent.com/94462364/184720851-73c6eec8-8965-4f2f-8b25-dd83c5022567.png">

 
#### Step 4 : View the results of Bamboo Integration

![Bamboo-results](https://user-images.githubusercontent.com/94462364/184720721-734423c4-bd4d-4efc-b265-304792e77473.png)


### Related articles
- [How-to guides > Write tests > Run on CI Servers > Jenkins ](/guide/ci-integrations/run-nightwatch-on-jenkins.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/ci-integrations/run-nightwatch-on-github-actions.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Github Actions</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/ci-integrations/run-nightwatch-on-azure-pipelines.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Azure Pipelines</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
