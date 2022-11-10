---
title: Accessibility Testing
description: Learn about how to do Accessibility testing with Nightwatch
summary_image: https://nightwatchjs.org/img/a11y-testing.png
---

<div class="page-header"><h1>Accessibility (A11y) testing in Nightwatch</h1></div>

### Overview
In a bid to standardise accessibility testing, W3C has released the [Web Content Accessibility Guidelines (WCAG)][1] to standardise the practice of making websites inclusive to all. Since v2.3, accessibility testing support is now built-in to Nightwatch, using the [`aXe-core`][2] package developed by [Deque Systems][3]. 

Accessibility tests audit the rendered DOM against a set of heuristics based on WCAG rules and other industry-accepted best practices.
The `aXe` library has over 90 different around accessibility testing and automatically catches up to [57% of WCAG issues][4].

### Run all rules

Use the command [`.axeInject()`][5] to inject the `aXe` library first and the simply run all accessibility tests with [`axeRun()`][6] command as shown below:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('accessibility testing', function() {

  it('run all accessibility rules', function(browser) {
    browser
      .navigateTo('https://www.w3.org/WAI/demos/bad/after/home.html')
      .axeInject()
      .axeRun('body');
  });
});</code></pre></div>

### Run selected rules

Alternatively, you can choose to run only a selected tests, by passing the `rule IDs` in an array as shown below:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('accessibility testing', function() {

  it('accessibility rule subset', function(browser) {
    browser
      .navigateTo('https://www.w3.org/WAI/demos/bad/after/home.html')
      .axeInject()
      .axeRun('body', {
        runOnly: ['color-contrast', 'image-alt'],
      });
  });
});</code></pre></div>

### Disable selected rules
You can also choose to run all the tests and exclude a few tests.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('accessibility testing', function() {

  it('accessibility rule subset', function(browser) {
    browser
      .navigateTo('https://www.w3.org/WAI/demos/bad/after/home.html')
      .axeInject()
      .axeRun('body', {
        rules: {
            'color-contrast': {
                enabled: false
            },
            'region': {
                enabled: false
            }
        }
    });
  });
});</code></pre></div>


You can find the complete list of the rule IDs on the [Axe Github page][7] 

### Recommended content
- [API Reference: axeInject()][8]
- [API Reference: axeRun()][9]


[1]:	https://www.w3.org/WAI/standards-guidelines/wcag/
[2]:	https://www.npmjs.com/package/axe-core
[3]:	https://www.deque.com/
[4]:	https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/
[5]:	https://nightwatchjs.org/api/axeInject.html
[6]:	https://nightwatchjs.org/api/axeRun.html
[7]:	https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
[8]:	https://nightwatchjs.org/api/axeInject.html
[9]:	https://nightwatchjs.org/api/axeRun.html