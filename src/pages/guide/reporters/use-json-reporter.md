---
title: JSON Reporter
description: Learn how to use the integrated JSON report from Nightwatch.
---

## JSON Reporter

### Overview

JSON Reporter is one of the default reporters in Nightwatch along with the HTML and XML reporters. It outputs test results in JSON format which can then be used by other tools to visualize the report.

### Configuration

The JSON reporter is `enabled by default` since version 2.2 and its behavior can be configured as follows:

#### Via the config file

The `output_folder` config settings is used to specify the location where the JSON report files will be saved. Nightwatch writes the JSON report for each test suite file inside a sub-folder called `nightwatch-examples`.

nightwatch/.../lib/settings/defaults.js

    ```js module.exports = { output_folder: 'tests_output' }```

Refer to the [Configuration > Output settings](https://nightwatchjs.org/guide/configuration/customising-test-output.html) page for a complete list of test output related settings.

#### Via the CLI

You can also configure the output folder at runtime via the CLI, using the `--output` flag :

```js
module.exports = {
    output_folder: 'tests_output'
}
```

```bash
nightwatch --output ./tests-output```

Refer to the [CLI reference page](https://nightwatchjs.org/guide/nightwatch-cli/command-line-options.html) for a complete list of CLI flags that Nightwatch accepts.

The JSON file name follows the pattern :

`<BROWSER>_<VERSION>__<testSuiteFileName>.json`

### Example

#### Step 0: Install Nightwatch

Follow the [guide](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html#guide-container) or watch the [video](​​https://vimeo.com/714406223) to install Nightwatch from scratch.

#### Step 1: Run an example test

Consider the `duckDuckGo.js` example test :

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

You can run this test using the command :

```bash
npx nightwatch examples/tests/duckDuckGo.js --env chrome ```

To generate only the built-in JSON report, run the following command:

```bash
npx nightwatch examples/tests/duckDuckGo.js --env chrome --reporter=json ```

<strong> Note : </strong> <em>If `output_folder’s` subfolder `nightwatch-examples` isn’t already present and the parameter --reporter=json supplied explicitly as seen above then the reports will be stored inside `output_folder` itself. </em>

To generate both the built-in JUnit-XML and JSON reports, run the following command (v2.2+):

```bash
npx nightwatch examples/tests/duckDuckGo.js --env chrome --reporter=junit --reporter=json ```

#### Step 2: View the JSON report

The JSON report should have been generated in the local `tests_output` folder inside the current project directory. It will look something like this :

<img width="1266" src="https://user-images.githubusercontent.com/94462364/184344214-1932c43e-fb58-4e5b-8bc9-a2426eaa7cdc.png">

### Recommended content

- [How-to guides > Use reporters > HTML reporter](https://nightwatchjs.org/guide/reporters/use-html-reporter.html)
- [How-to guides > Use reporters > Add custom reporter](https://nightwatchjs.org/guide/reporters/create-custom-reporter.html)
- [How-to guides > Use reporters > Mochawesome reporter reporter](https://nightwatchjs.org/guide/reporters/use-mochawesome-reporter.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/reporters/use-html-reporter.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">HTML Reporter</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/reporters/use-mochawesome-reporter.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Mochawesome Reporter</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
