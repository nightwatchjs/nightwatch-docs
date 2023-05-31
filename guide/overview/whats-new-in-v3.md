---
title: What's new in Nightwatch 3?
description: Nightwatch 3.0 contains a wide range of new features and improvements for writing and running tests as well as full cross-browser testing support.
---


<div class="page-header"><h2>What's new in Nightwatch v3?</h2></div>

Nightwatch v3 has lot of new features mainly accross 3 pillars
1. Seamless support for testing on mobile devices
2. Unlocking more types of testing for SDETs & developers
3. Delightful developer experience

Apart from these there are multiple other improvements across the test writing, execution & debugging experience.

### Mobile testing improvements

Nightwatch v3 has been re-built to deliver an amazing experience around running your tests on mobile devices. 

#### [Run your web tests on real & virtual mobile devices][1]

Nightwatch v3 brings the mobile helper tool that will help you install everything needed to run web tests on mobile devices. Nightwatch supports real browsers on Android & iOS real & virtual devices. 

#### [Run mobile app tests on Android & iOS][2]

Nightwatch uses Appium under the hood to enable native mobile app testing on Android & iOS devices. It has the following functionalities to simplify your mobile app testing workflow. 

1. Easy setup using the mobile-helper tool
2. Native Nightwatch commands & assertions for authoring tests
3. Integration with Appium debugger

### Go beyond End to End testing

Nightwatch v3 has improved support for unit, component & integration testing.

#### [Unit & Integration testing][3]

You can run unit & integration tests using Nightwatch. Nightwatch v3 introduces [test doubles][4]. You can use mocks, stubs & spies in your unit tests. 

#### [Component testing][5]

With Nightwatch v3 you can test components in isolation by mounting them in the browser. Nightwatch v3 supports component testing for popular web frameworks such as

1. [React][6]
2. [VueJS][7]
3. [Angular][8]
4. [Storybook][9]


### Multiple types of testing

Nightwatch v3 aims to provide as many types of testing under 1 umbrella as possible so that the learning curve and maintenance overheads reduce.

#### [Visual Regression Testing][10]

Nightwatch v3 introduces visual regression testing as an in-house plugin. The plugin takes care of
1. Capturing screenshots
2. Comparison with baseline to highlight visual differences
3. Report to review the differences
4. Approve the changes

VRT can be done on real desktop & mobile browsers. Also, VRT can be run on components as part of component testing as well. 

#### [API Testing][11]

API testing is now available with Nightwatch v3. The following functionality can be achieved with API testing
1. Request assertions
2. Response assertions
3. Viewing API tests in the HTML report
4. Mock server

#### [Accessibility Testing][12]

Nightwatch v3 packages the [aXe-core][13] package developed by [Deque Systems][14] as a plugin. It enables 90 different types of accessibility tests for [WCAG compliance][15].


### Delightful developer experience

#### [Nightwatch inspector][16]

Nightwatch v3 introduces a point and click tool that can help you easily find selectors. It will improve your productivity of authoring tests & help you find durable selectors for lower long term maintenance.


#### [DOM history][17]

Relive the test as it happened by enabling DOM history. When this functionaity is enabled, DOM snapshots are captured after every test and displayed in the HTML report for better debugging.

### Improvements

#### Brand new element APIs

With Nightwatch v3, we have revamped the element API to make test authoring simpler and more concise. 

#### More rich & powerful selectors

New selectors are introduced as part of this latest versions
1. `.findByText()`
2. `.findByPlaceholderText()`
3. `.findByAltText()`
4. `.findByRole()`

You can also chain selectors to find elements that are more complex to find

For E.g.

<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('CSS Selector').findByText('text').click();
</code></pre></div>

#### Performance improvements

Nightwatch v3 has implemented worker threads for parallel runs and we have observed improvements of upto 25% between Nightwatch v2 & v3. [Try it now][18]

#### Other improvements

- Ability to run in parallel on multiple browsers

### Breaking changes
We have tried to ensure that there are no breaking changes while upgrading to v3. However, in case you need migration assistance please reach out to us on our new [Nightwatch v3 channel on Discord][19]

#### Release notes
Please refer to the release notes section for information about the latest changes.
[Releases Notes](https://nightwatchjs.org/guide/overview/whats-new.html).

### Recommended content
- [Nightwatch release notes](https://nightwatchjs.org/guide/overview/whats-new.html)

[1]:    /guide/quickstarts/run-tests-on-mobile
[2]:    /guide/mobile-app-testing/introduction.html
[3]:    /guide/writing-tests/write-nodejs-unit-integration-tests.html
[4]:    /guide/writing-tests/test-doubles.md
[5]:    /guide/component-testing/introduction.html
[6]:    /guide/component-testing/testing-react-components.html
[7]:    /guide/component-testing/vite-plugin.html
[8]:    /guide/component-testing/testing-angular-components.html
[9]:    /guide/component-testing/storybook-component-testing.html
[10]:   /guide/writing-tests/visual-regression-testing.html
[11]:   /guide/writing-tests/api-testing.html
[12]:   /guide/using-nightwatch/accessibility-testing.html
[13]:   https://www.npmjs.com/package/axe-core
[14]:   https://www.deque.com/
[15]:   https://www.w3.org/WAI/standards-guidelines/wcag/
[16]:   /guide/writing-tests/nightwatch-inspector.html
[17]:   /guide/reporters/dom-history.html
[18]:   https://github.com/nightwatchjs/performance_benchmarking
[19]:   https://discord.com/channels/618399631038218240/1093179421508243596

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/overview/what-is-nightwatch.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">What is Nightwatch?</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/overview/whats-new.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Release notes</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
