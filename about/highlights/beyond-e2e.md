# Go beyond End-to-End Testing
<br>
Nightwatch framework is designed to work accross the test pyramid. Using a single framework to do multiple types of testing will help you reduce your learning curve & test maintenance headaches. 

![Test accross the pyramid][image-1]

## End to End Testing
<br>
Nightwatch has a lot of tools to enable you to test your web and mobile applications accross your entire workflow from writing tests to running them to debugging them. 

#### Writing tests
<br>

Nightwatch's APIs are very intuitive and helps in authoring easy to understand and easy to maintain tests. The rich and powerful selectors combined with the ability to chain selectors makes finding elements very easy. Nightwatch intelligently handles auto-waiting so you don't have to break your head over it. The [Nightwatch inspector][1] also helps in finding durable selectors quickly.

#### Running tests
<br>

Nightwatch is designed to run on real browsers and supports parallelism out of the box. Leverage the power of parallel execution on CI machines & cloud infrastructure providers such as BrowserStack to achieve faster deployment times by shortening your feedback loops.

#### Debugging tests
<br>

Nightwatch comes with an in-built HTML report which gives a comprehensive environment level test execution summary & test level details. At a test level you can review each individual step. With DOM history you can inspect each element at every step of the test as it updated. 

## Component Testing
<br>

Component testing plays a vital role in verifying the functionality of individual components in isolation. It has become increasingly important, particularly with the emergence of reusable component UI frameworks. Nightwatch enables you to perform isolated component testing by seamlessly mounting them in the browser and leveraging its comprehensive APIs. This approach brings in consistency in test authoring and makes your test suites easily maintanable. Nightwatch supports component testing for popular web frameworks such as: -

- [React][2]
- [VueJS][3]
- [Angular][4]
- [Storybook][5]

To learn about component testing concepts, refer to this [guide][6].

## Integration & Unit Testing
<br>

Unit and integration testing are crucial for ensuring the quality and reliability of software by validating individual components and their interactions within a system. You can run [unit & integration tests][7] as well using Nightwatch. With v3 we also introduced [test doubles][8] with in-built support for stubs, spies & mocks to achieve isolation in unit testing.

<br>
<br>
<br>
<br>

[1]:    /guide/writing-tests/nightwatch-inspector.html
[2]:    /guide/component-testing/testing-react-components.html
[3]:    /guide/component-testing/vite-plugin.html
[4]:    /guide/component-testing/testing-angular-components.html
[5]:    /guide/component-testing/storybook-component-testing.html
[6]:    /guide/component-testing/introduction.html
[7]:    /guide/writing-tests/write-nodejs-unit-integration-tests.html
[8]:    /guide/writing-tests/test-doubles.html

[image-1]:  https://github.com/nightwatchjs/nightwatch-storybook-plugin/assets/1677755/71a1d916-43d1-410d-8ca2-723fd844097d


