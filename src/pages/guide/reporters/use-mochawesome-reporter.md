---
title: Mochawesome reporter with Nightwatch
description: Learn how to use the Mochawesome reporter with Nightwatch
summary_image: https://nightwatchjs.org/img/banner.png
---

## Mochawesome Reporter

### Overview

[Mochawesome](https://github.com/adamgruber/mochawesome) is a very popular Mocha reporter and it works out of the box with Nightwatch as well, when Mocha is being used as a test runner.

### Usage

#### 1. Use Mocha as test runner in Nightwatch

In order to use Mocha in Nightwatch you need to set the `test_runner` config property and set the type to `mocha`. Custom options for Mocha can also be specified:

nightwatch.conf.js```js
{
  // other settings...
  test_runner: {
    type : 'mocha',
    options : {
      ui : 'bdd',
      reporter : 'list'
    }
  }
}

```

#### 2. Install mochawesome from NPM

```bash
npm i mochawesome --save-dev```

#### 3. Pass the `--reporter` argument

To use it as a reporter simply pass the `--reporter mochawesome` argument as follows:

```bash
npx nightwatch examples/tests/ --reporter mochawesome```

### Configure reporter options

Mochawesome reporter options can be defined in main Nightwatch config under the `reporterOptions` dictionary, inside the `test_runner`:

nightwatch.conf.js```js

{
  // ...
  test_runner: {
    type : 'mocha',
    options : {
      ui : 'bdd',
      reporter : 'mochawesome',
      reporterOptions: {
        reporterDir: './output'
      }
    }
  }
}
```

### Recommended content

- [How-to guides > Use reporters > Junit-XML reporter](https://nightwatchjs.org/guide/reporters/use-junit-reporter.html)
- [How-to guides > Use reporters > HTML reporter](https://nightwatchjs.org/guide/reporters/use-html-reporter.html)
- [Mochawesome on Github](https://github.com/adamgruber/mochawesome)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/reporters/use-json-reporter.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">JSON Reporter</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/reporters/use-slack-reporter.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Slack Reporter</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
