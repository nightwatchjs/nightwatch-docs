---
title: Accessibility Testing
description: Learn about how to do Accessibility testing with Nightwatch
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Accessibility Testing with Nightwatch</h2></div>

### Overview
Accessibility testing is a very important part of software development as it ensures that the website is accessible to people with physical disabilities. In a bid to standardize accessibility testing, W3C has released the Web Content Accessibility Guidelines to standardize the experience for the end users with disabilities. 


### E2E accessibility testing

Nightwatch now ships with out of the box support for Accessibility testing. This is based off of a plugin developed by `David Mello`. The plugin uses `aXe` at the core. `aXe` has over 90 different around accessibility testing. You can choose to run specific rules or you can run all the tests but exclude a few rules.

#### Running all accessibility tests

Before running accessibility tests, you will have to run the command `.axeInject()`. Post that you can choose to simply run all accessibility tests with `axeRun()` command as shown below.

<pre><code class="language-javascript">
    'Run everything': function (browser) {
        browser
            .url('https://www.nightwatch.org/')
            .axeInject()
            .axeRun('body')
            .end();
    }
</code></pre>

#### Running only selected accessibility tests

Alternatively, you can choose to run only a selected tests, by passing the `rule IDs` in an array as shown below. 

<pre><code class="language-javascript">
    'Run only contrast and alt images': function (browser) {
        browser
            .url('https://www.nightwatch.org/')
            .axeInject()
            .axeRun('body', {
                runOnly: ['color-contrast', 'image-alt']
            })
            .end();
    }
</code></pre>

You can find the complete list of the rule IDs on the [Axe Github page][1] 

#### Running all accessibility tests, excluding some

You can also choose to run all the tests and exclude a few tests 


<pre><code class="language-javascript">
    'Run everything except contrast and region': function (browser) {
        browser
            .url('https://www.nightwatch.org/')
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
            })
            .end();
    }
</code></pre>

You can find the complete list of the rule IDs on the [Axe Github page][1] 


### Accessibility testing for components

Accessibility testing for components is very similar to the accessibility testing for E2E. Once you mount the component, you can run the same `Axe Inject` and `Axe Run` commands to run the accessibility tests for components. The components are mounted under `#app` dom element and hence the `Axe Run` command should have `#app` as the argument as shown below

<pre><code class="language-javascript">
    'Run accessibility tests on components': function (browser) {
        browser
            .axeInject()
            .axeRun('#app')
            .end();
    }
</code></pre>


[1]:    https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
