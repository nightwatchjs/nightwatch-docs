---
title: HTML Reporter
description: Learn how to use the integrated HTML report from Nightwatch.
---

## HTML Reporter

### Overview

Nightwatch v2.2 brings its own integrated HTML reporter which better aggregate test results in a user-friendly HTML view. It provides test results, time taken by each test module, assertions made in each test case along with raw HTTP logs which help with debugging.

### Configuration

The HTML reporter is **enabled by default**, along with the JUnit XML and JSON reporters, but its behaviour can be configured as follows:

#### Via the config file

The `output_folder` config settings is used to specify the location where the HTML report files will be saved. Nightwatch writes the HTML report inside a sub-folder called `nightwatch-html-report`.

nightwatch/.../lib/settings/defaults.js

```js module.exports = {
  output_folder: 'tests_output'
}```

Refer to the [Configuration > Output settings](https://nightwatchjs.org/guide/configuration/customising-test-output.html) page for a complete list of test output related settings.

#### Via the CLI

You can also configure the output folder at runtime via the CLI, using the `--output` flag:

```bash
nightwatch --output ./tests-output```

Refer to the [CLI reference page](https://nightwatchjs.org/guide/nightwatch-cli/command-line-options.html) for a complete list of CLI flags that Nightwatch accepts.

### Usage

#### Step 0: create a new project

<p>First, let's create a new empty project and install Nightwatch inside it:</p>

```bash
mkdir ./test-project && cd ./test-project```

#### Step 1: install Nightwatch and chromedriver

<p>Install `nightwatch` and `chromedriver` from NPM (`chromedriver` is the W3C WebDriver implementation for running tests in the Google Chrome browser; make sure you have the latest Chrome browser installed on your machine):</p>

```bash
npm i nightwatch chromedriver```

#### Step 2: run an example test and view the HTML reporter

Consider the [duckDuckGo.js](https://github.com/nightwatchjs/nightwatch/blob/main/examples/tests/duckDuckGo.js) example test:

duckDuckGo.js

```js describe('duckduckgo example', function() {
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
```

By default, all the built-in reports are generated (HTML, Junit-XML, and JSON), so you don't have to do anything else. Run the tests as usual:

```bash
npx nightwatch examples/tests/duckDuckGo.js --env chrome```

To generate only the built-in HTML report, run the following command:

```bash
npx nightwatch examples/tests/duckDuckGo.js --env chrome --reporter=html```

To generate both the built-in JUnit-XML and HTML reports, run the following command (v2.2+):

```bash
npx nightwatch examples/tests/duckDuckGo.js --env chrome --reporter=junit --reporter=html```

#### Step 3: view the HTML report

The HTML report should have been generated in the local `tests_output` folder inside the current project directory. It will look something like this:

<img width="1256" alt="Screenshot 2022-06-13 at 5 50 28 PM" src="https://user-images.githubusercontent.com/28780767/173353290-72dc2dfc-ab33-4cf9-8271-7d67929fb821.png">

### View the HTTP raw logs

Raw HTTP logs contain all the detailed HTTP request/response traffic between Nightwatch and the Selenium/WebDriver and are included in the report by default for each test session:

<img width="1266" alt="Screenshot 2022-06-07 at 4 07 50 PM" src="https://user-images.githubusercontent.com/28780767/173038064-8c1d82f2-fe29-4c0b-99b4-2a13a734386a.png">

### Automatically open the report

Use the `--open` command line argument to open the generated HTML report generated in the default browser:

```bash
npx nightwatch examples/tests/duckDuckGo.js --env chrome --reporter=html --open```

### Recommended content

- [How-to guides > Use reporters > Junit-XML reporter](https://nightwatchjs.org/guide/reporters/use-junit-reporter.html)
- [Configuration > Output settings](https://nightwatchjs.org/guide/configuration/customising-test-output.html)
- [Configuration > Default settings](https://nightwatchjs.org/guide/reference/defaults.html)
- [Reference > Nightwatch CLI](https://nightwatchjs.org/guide/nightwatch-cli/command-line-options.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/reporters/use-junit-reporter.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">JUnit XML Reporter</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/reporters/use-json-reporter.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">JSON Reporter</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
