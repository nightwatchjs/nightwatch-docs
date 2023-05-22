---
title: Getting Started
description: Get started with Nightwatch and run your first end-to-end test.
summary_image: https://nightwatchjs.org/img/banner.png
---

# Install Nightwatch

Getting started with Nightwatch takes only a few short minutes. Here's how to be up and running with your first end-to-end test.

### Prerequisites

Make sure [Node][1] is installed on the system. The version used for this tutorial is **v16.14.2**

### Setup Nightwatch

Nightwatch can be installed with just one command line, either as a new project or in an existing location.

##### 1. As a new project

To setup Nightwatch as a new project, simply run:

```bash
npm init nightwatch`
 <code style="color: #aaa9a2; font-size: 20px">&#60;directory-name&#62;```

##### 2. In an existing project

```bash cd &#60;directory-name&#62;
npm init nightwatch
```

Press `y` when you see the prompt to install create-nightwatch

```bash
❯ npm init nightwatch
Need to install the following packages:
  create-nightwatch
Ok to proceed? (y)```

This installs Nightwatch, asks your preferences and sets up the `nightwatch.conf.js` file based on your preferences as shown below

<a href="https://user-images.githubusercontent.com/39924567/174841680-59664ff6-da2d-44a3-a1df-52d22c69b1e2.gif"><img alt="Nightwatch setup using CLI Utility" src="https://user-images.githubusercontent.com/39924567/174841680-59664ff6-da2d-44a3-a1df-52d22c69b1e2.gif" class="img-with-dropshadow"/></a>

### Preferences

#### Test Runner

Nightwatch also supports other test runners. You can also pick [Mocha][15] or [Cucumber JS][16] as a test runner apart from Nightwatch.

#### Language - Javascript/Typescript

Nightwatch [supports TypeScript][17] for test files after v1.6.0. So you can choose to have the test setup in Javascript or Typescript.

```bash
? What is your Language - Test Runner setup? (Use arrow keys)
❯ JavaScript - Nightwatch Test Runner
  JavaScript - Mocha Test Runner
  JavaScript - CucumberJS Test Runner
  TypeScript - Nightwatch Test Runner
  TypeScript - Mocha Test Runner```

#### Run on Local/Remote (Cloud)

You can configure Nightwatch to run locally on your machine, remotely on a cloud machine or both

```bash
? Where do you want to run your e2e tests? (Use arrow keys)
❯ On my local machine
  On a remote machine (cloud)
  Both```

For remote testing, host and port details will be automatically added in case you select `BrowserStack` or `Sauce Labs`. However if you select to run on your own remote selenium server or any other cloud provider, you will have to manually configure the host & port details in the `nightwatch.conf.js` file.

#### Browser Selection

You can pick the browsers you'll be testing on, and the config will be automatically created for them. We provide a multi-selection option so you can pick as many browsers you want to test on. You can also use the selenium-server when testing on the local machine.

```bash
? Where you'll be testing on? (Press &#60;space&#62; to select, &#60;a&#62; to toggle all, &#60;i&#62; to invert selection,
 and &#60;enter&#60; to proceed)
❯◯ Firefox
 ◯ Chrome
 ◯ Edge
 ◯ Safari```

#### Test Folder

Next you can name the folder where you want the tests to reside. The default value is tests.

```bash
? Where do you plan to keep your end-to-end tests? (tests)
```

#### Base URL

Add the base URL that the tests will run against. This preference will default to <http://localhost>

```bash
? What is the base_url of your project? (http://localhost)
```

Once you select this preference, Nightwatch setup will begin. It will also generate sample tests for you to get started.

If you are running from a Mac, safaridriver is present by default but must be enabled. You will be presented with the following option.

```bash
? Enable safaridriver (requires sudo password)? (Use arrow keys)
 ❯Yes
  No, I'll do that later.
  ```

### Run your first end-to-end test

Once your setup is done, you can run tests with this command

```bash
npx nightwatch tests/specs/basic/ecosia.js --env safari
```

The output should look similar to this:

```

[Ecosia.org Demo] Test Suite
============================
ℹ Connected to localhost on port 4444 (2153ms).
  Using: firefox (94.0.1) on mac 20.6.0 platform.

✔ Running Demo test ecosia.org:

✔ Element <body> was visible after 24 milliseconds.
✔ Testing if the page title contains 'Ecosia' (10ms)
✔ Testing if element <input[type=search]> is visible (51ms)
✔ Testing if element <button[type=submit]> is visible (12ms)
✔ Testing if element <.mainline-results> contains text 'Nightwatch.js' (197ms)

OK. 5 assertions passed. (1.838s)
```

### Use the Google Chrome DevTools Recorder

Alternatively, Nightwatch provides tools to help you get started by recording your test actions on screen and generate Nightwatch test scripts automatically. See [Create Nightwatch test using Google Chrome DevTools Recorder](https://nightwatchjs.org/guide/writing-tests/chrome-devtools-recorder.html) for more information.

<div class="alert alert-info">
For additional help you can jump on to our [Discord Server](https://discord.gg/SN8Da2X).
</div>

[1]: https://nodejs.org/

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/overview/whats-new.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Release notes</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/quickstarts/create-and-run-a-nightwatch-test.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Run a test with Selenium Server</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
