---
title: Running cucumber tests using Nightwatch
author: Bharath Raja
author_title: DevRel @BrowserStack 🥑
author_url: https://bharathraja.in/
author_image_url: https://avatars.githubusercontent.com/u/2320747?v=4
tags: [nightwatch-v2, 'cucumber']
description: Nightwatch v2.0 is now in beta and available in NPM.
draft: true
date: 2021-11-04
image:
link_to_discussions:
---
> TLDR; Check the sample [code here](https://github.com/bigomega/nightwatch-2.0-showcase/tree/main/cucumber).
## A brief introduction

#### Behaviour-driven Development (BDD)

Behaviour-driven Development is a software development technique that has evolved from TDD (Test-driven Development), an approach or programming practice where the developers write new code only when the automated test case fails. BDD encourages teams to use concrete examples to formalize a shared understanding of how the application should behave between various tech and non-tech teams. Tests are more user-focused and based on the system's behaviour. In BDD, “Given-When-Then” is the proposed approach for writing test cases.

#### Cucumber.js and Nightwatch

Cucumber is an Open Source framework that supports BDD using human language syntax and uses [Gherkin](https://cucumber.io/docs/gherkin/reference/) as the parser. Cucumber is implemented in most [mainstream programming languages](https://cucumber.io/docs/installation/), including JS. Nightwatch recently introduced the [new integrated test runner](https://nightwatchjs.org/blog/nightwatch-v2-is-now-in-beta/#new-integrated-test-runner-for-using-cucumberjs-in-nightwatch) for Cucumber.js in the 2.0 alpha release. With this new update, no other plugins are necessary except the [Cucumber library](https://www.npmjs.com/package/@cucumber/cucumber) itself. In this post, we'll write and run some BDD tests to verify the search results of a museum page using Cucumber.js and Nightwatch.
> You can read more about [Cucumber and BDD here](https://www.browserstack.com/guide/learn-about-cucumber-testing-tool).

## Getting Started

1. Install Nightwatch, cucumber and the driver for the browser you want to test. Make sure that the browser driver version is the same as your local browser.
    ```javascript
    npm i @cucumber/cucumber nightwatch chromedriver@100 --save-dev
    ```
2. Set cucumber as the `test_runner` in the `nightwatch.conf` file.
    ```javascript
    {
      test_runner: {
        type: 'cucumber',
        options: {
          feature_path: '*/*.feature',
          ...
        }
      src_folders: ['features/step_definitions'],
      ...
    }
    ```
You can read more about [configuring Cucumber with Nightwatch](https://github.com/nightwatchjs/nightwatch/tree/v2/examples/cucumber-js).

## Writing the BDD tests
Cucumber uses the [Gherkin](https://cucumber.io/docs/gherkin/reference/) syntax to create human-readable tests. Gherkin uses a set of special keywords to give structure and meaning to executable specifications. Let's create a `features/rijksmuseum.feature` file and write some tests to search inside the [Rijksmuseum](https://www.rijksmuseum.nl/en) website.

```javascript
Feature: Rijksmuseum Search
Background: Goto website
  Given I open the Rijksmuseum page
  And I dismiss the cookie dialog
  Then the title is "Rijksmuseum Amsterdam, home of the Dutch masters"
```

We'll write some [Background](https://cucumber.io/docs/gherkin/reference/#background) that gets executed before every scenario. In this case, we open the museum website, close the popup, and verify the page's title.

#### Scenario 1

```javascript
@search @nightwatch
Scenario: Searching for Nightwatch
  Given I search "night watch"
  Then Body contains "Operation Night Watch"
  Then Body contains "The Night Watch, Rembrandt van Rijn, 1642"
```
We have two tags here, namely `search` and `nightwatch`, so that we can run tests based on tags. This scenario searches for _“night watch”_ on the museum search page and verifies the search results contain _“Operation Night Watch"_.

#### Scenario 2

```javascript
@search @cucumber
Scenario: Searching for cucumber
  Given I search "cucumber"
  Then Body contains "Muskusroos (Rosa moschata) en komkommer (Cucumis sativus)"
```
These scenarios are very clear and use simple human language. The next step is to define what each of these steps means to the automated tests.

## Using Nightwatch behind the scenes

Inside the `features/step_definitions/rijksmuseum.js` file, let's write definitions for the steps. Let's start with opening the museum page.

```javascript
const {Given, Then, When} = require('@cucumber/cucumber')

Given('I open the Rijksmuseum page', function() {
  return browser.navigateTo('https://www.rijksmuseum.nl/en')
});
```
As you notice, we have access to the Nightwatch's `browser` object inside our definitions file. This access is enabled because of the new 2.0 update. We also set the `src_folders: ['features/step_definitions']` in the config. Cucumber provides a way to write [Cucumber Expressions](https://github.com/cucumber/cucumber-expressions#readme), an alternative to Regular Expressions, with a more intuitive syntax.

```javascript
When('I search {string}', function(searchTerm) {
  browser.click('a[aria-label="Search"]')

  return browser.waitForElementVisible('#rijksmuseum-app')
    .setValue('input.search-bar-input[type=text]', [searchTerm, browser.Keys.ENTER])
})
```
Nightwatch has a built-in [extendable assert/verify library](https://nightwatchjs.org/api/assert/) that contains the same methods, which perform assertions on elements.

```javascript
Then('the title is {string}', function(title) {
  return browser.assert.titleEquals(title)
})
```

## Running the tests

Nightwatch automatically detects and configures the test runner based on the installed driver. Since we're manually adding the config, let's set the default `test_setting` in the `nightwatch.conf` file. You can read more about the default config. The following snippet shows a simple setting for running it in chrome. For more information about default settings, you can read the [test environments docs](https://nightwatchjs.org/guide/using-nightwatch/concepts.html#defining-test-environments) and the [config docs](https://nightwatchjs.org/guide/configuration/overview.html).

```javascript
  test_settings: {
    default: {
      desiredCapabilities: { browserName: 'chrome' },
      webdriver: { start_process: true },
    },
  },
```
Let's run the Nightwatch tests.
```javascript
npx nightwatch
```
You can add more parallels to the test with `--parallel 2` flag. Alternatively, you can run specific tests using the cucumber tags flag `--tags @search`. Check out [configuring Cucumber with Nightwatch](https://github.com/nightwatchjs/nightwatch/tree/main/examples/cucumber-js) to learn more. We've covered the basics of BDD testing and how to write your first test using Cucumber and Nightwatch, thanks to the new integrated test runner in the 2.0 release.

> Link to this [code](https://github.com/bigomega/nightwatch-2.0-showcase/tree/main/cucumber)
---
We at BrowserStack care a lot about Open Source. If you’re an open-source developer looking to do cross-browser testing, we can sponsor your project. [Signup now](https://www.browserstack.com/open-source?ref=blog).
