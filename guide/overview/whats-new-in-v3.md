---
title: What's new in Nightwatch 3?
description: Nightwatch 3.0 contains a wide range of new features and improvements for writing and running tests as well as full cross-browser testing support.
---


<div class="page-header"><h1>What's new in Nightwatch v3?</h1></div>

Nightwatch v3 brings in plenty of new features accross your testing workflow from authoring to executing to debugging tests. 

### New Features
<br>

#### [Nightwatch inspector][1]

Nightwatch v3 introduces a point and click tool that can help you easily find selectors. It will improve your productivity of authoring tests & help you find durable selectors for lower long term maintenance.

#### [Angular Component testing][2]

Nightwatch v3 has added support for Angular component testing to the [component testing][3] repertoire.s

#### [Test doubles][4]

With earlier versions, you could run [unit & integration tests][5] using Nightwatch. Nightwatch v3 introduces test doubles with in-build support for stubs, spies & mocks to achieve isolation in unit testing. 

#### Brand new element APIs

With Nightwatch v3, we have revamped the element API to make test authoring simpler and more concise. 

#### More rich & powerful selectors

New selectors are introduced as part of this latest versions
1. `.findByText()`
2. `.findByPlaceholderText()`
3. `.findByAltText()`
4. `.findByRole()`

You can also chain selectors to find elements that are more complex to find

**Example:**

<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('#selector').findByText('text').click();
</code></pre></div>

### Performance improvements

Nightwatch v3 has implemented worker threads for parallel runs and we have observed improvements of upto 25% between Nightwatch v2 & v3. [Try it now][6]

### Breaking changes
We have tried to ensure that there are no breaking changes while upgrading to v3. However, in case you need migration assistance please reach out to us on our new [Nightwatch v3 channel on Discord][7]

#### Release notes
Please refer to the release notes section for information about the latest changes.
[Releases Notes](https://nightwatchjs.org/guide/overview/whats-new.html).

### Key highlights from Nightwatch v2
<br>

#### [Run your tests on real & virtual mobile devices][8]

Nightwatch v3 brings the mobile helper tool that will help you install everything needed to run web tests on mobile devices. Nightwatch supports real browsers on Android & iOS real & virtual devices. 

#### [Run mobile app tests on Android & iOS][9]

Nightwatch uses Appium under the hood to enable native mobile app testing on Android & iOS devices. It has the following functionalities to simplify your mobile app testing workflow. 

1. Easy setup using the mobile-helper tool
2. Native Nightwatch commands & assertions for authoring tests
3. Integration with Appium debugger

#### [Component testing][3]

With Nightwatch you can test components in isolation by mounting them in the browser. Nightwatch 2 added support for component testing for popular web frameworks such as

1. [React][10]
2. [VueJS][11]
3. [Storybook][12]

#### [Visual Regression Testing][13]

Nightwatch v3 introduces visual regression testing as an in-house plugin. The plugin takes care of
1. Capturing screenshots
2. Comparison with baseline to highlight visual differences
3. Report to review the differences
4. Approve the changes

VRT can be done on real desktop & mobile browsers. Also, VRT can be run on components as part of component testing as well. 

#### [API Testing][14]

API testing is now available with Nightwatch v3. The following functionality can be achieved with API testing
1. Request assertions
2. Response assertions
3. Viewing API tests in the HTML report
4. Mock server

#### [Accessibility Testing][15]

Nightwatch v3 packages the [aXe-core][16] package developed by [Deque Systems][17] as a plugin. It enables 90 different types of accessibility tests for [WCAG compliance][18].

#### [DOM history][19]

Relive the test as it happened by enabling DOM history. When this functionaity is enabled, DOM snapshots are captured after every test and displayed in the HTML report for better debugging.

## Recommended content
- [Nightwatch release notes](https://nightwatchjs.org/guide/overview/whats-new.html)

[1]:    /guide/writing-tests/nightwatch-inspector.html
[2]:    /guide/component-testing/testing-angular-components.html
[3]:    /guide/component-testing/introduction.html 
[4]:    /guide/writing-tests/test-doubles.html  
[5]:    /guide/writing-tests/write-nodejs-unit-integration-tests.html
[6]:   https://github.com/nightwatchjs/performance_benchmarking
[7]:   https://discord.com/channels/618399631038218240/1093179421508243596
[8]:    /guide/quickstarts/run-tests-on-mobile
[9]:    /guide/mobile-app-testing/introduction.html
[10]:    /guide/component-testing/testing-react-components.html
[11]:    /guide/component-testing/vite-plugin.html
[12]:    /guide/component-testing/storybook-component-testing.html
[13]:   /guide/writing-tests/visual-regression-testing.html
[14]:   /guide/writing-tests/api-testing.html
[15]:   /guide/using-nightwatch/accessibility-testing.html
[16]:   https://www.npmjs.com/package/axe-core
[17]:   https://www.deque.com/
[18]:   https://www.w3.org/WAI/standards-guidelines/wcag/
[19]:   /guide/reporters/dom-history.html

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
