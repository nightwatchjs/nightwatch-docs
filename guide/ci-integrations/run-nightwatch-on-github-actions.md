---
title: Run Nightwatch tests on Github Actions
description: Learn how to run Nightwatch tests on Github Actions
---

<div class="page-header"><h2>Run Nightwatch tests on Github Actions</h2></div>

### Overview

Github actions make it easy to automate, customize, and execute your software development workflows such as build and tests directly from your repository.

### Prerequisites
- Working project to test that has been pushed to Github
- Tests run properly in your local system

### Setup Guide
In this example we will be learning how to run Nightwatch tests using Github actions using the [nightwatch-examples](https://github.com/nightwatchjs/nightwatch-examples) Github repo


#### Step 1: Install NodeJS plugin
First go to Github Actions sections of your repository and then setup NodeJS plugin by clicking on ***New workflow*** and type node in ***Search Workflow*** input box and then click on configure of Node.js plugin

![NodeJS Plugin Setup](https://user-images.githubusercontent.com/94462364/184714630-2e37d060-22c3-41e8-9fbf-8102bafb7986.png)

#### Step 2 : Configure .yml file
Now you have to write the steps inside the `node.js.yml` file to run your tests. 

<pre><code class="yml"># This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Nightwatch Tests

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: npm-install
      run: npm ci
    - run: sudo apt-get install xvfb

    - name: Run Nightwatch tests
      run: xvfb-run --auto-servernum npm test -- --env chrome</code></pre>

Please follow the [guide](https://github.com/harshit-bs/nightwatch-examples/blob/main/.github/workflows/node.js.yml) for the more detailed version of the .yml file.

#### Step 3: Push .yml file to github
Now click the commit new file button after filling out the Commit new file form accordingly. 

![NodeJS Plugin Setup](https://user-images.githubusercontent.com/94462364/184713836-7311a0be-b8b3-4ed3-baa6-7075ef091786.png)

You can either skip the above steps and can also directly push your .yml from local. But make sure the file path should always be `.github/workflow/file_name.yml`.
 
#### Step 4: How to run the tests?
Once you push your changes to Github and will raise a Pull Request the pipeline will start and your tests will run automatically.


### Related articles
 
- [How-to guides > Write tests > Run on CI Servers > Jenkins ](/guide/ci-integrations/run-nightwatch-on-jenkins.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/ci-integrations/run-nightwatch-on-jenkins.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Jenkins</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/ci-integrations/run-nightwatch-on-bamboo.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Bamboo</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>