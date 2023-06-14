# Developer Experience
<br>

One of the core pillars of Nightwatch is to ensure developer delight. We always have one eye on trying to figure out how can we minimize friction accross your entire workflow from writing tests to running tests to debugging them.

![Developer Experience][image-1]

## Writing tests
<br>

### Intuitive APIs
Nightwatch's APIs are very intuitive and helps in authoring easy to understand and easy to maintain tests. Nightwatch supports a wide range of commands to interact with your website including complex interactions such as capturing network requests & setting Geolocation. Nightwatch intelligently handles auto-waiting so you don't have to break your head over it. [Start Now][1]

### Rich & powerful selectors
<br>

The rich and powerful [selectors][2] combined with the ability to chain selectors makes finding elements very easy. Nightwatch supports the following selector types
1. CSS selector
2. XPath based selector
3. Text based selector
4. Role based selector
5. Selectors based on other attribute such as placeholder text & alt text
6. Finding inputs based on labels

### Nightwatch Inspector
<br>

The [Nightwatch inspector][3] is a productivity tool for quick authoring of tests as you can quickly identify durable selectors with simple clicks, right within the browser itself!
<br>

![Nightwatch Inspector][image-2]

## Running tests
<br>

Nightwatch is designed to run on real browsers and supports parallelism out of the box. Leverage the power of parallel execution on CI machines such as [Jenkins][4] & cloud infrastructure providers such as [BrowserStack][5] to achieve faster deployment times by shortening your feedback loops.

## Debugging tests
<br>

Nightwatch comes with an in-built HTML report which gives a comprehensive environment level test execution summary & test level details. At a test level you can review each individual step. With [DOM history][6] you can inspect each element at every step of the test as it updated. 

![DOM History][image-3]

<br>
<br>
<br>
<br>

[1]:    /guide/writing-tests/introduction.html
[2]:    /guide/writing-tests/selectors.html
[3]:    /guide/writing-tests/nightwatch-inspector.html
[4]:    /guide/ci-integrations/run-nightwatch-on-jenkins.html
[5]:    /guide/quickstarts/create-and-run-a-test-with-cloud-providers.html#running-on-browserstack
[6]:    /guide/reporters/dom-history.html



[image-1]:  https://github.com/nightwatchjs/nightwatch/assets/1677755/988139a3-9de5-43c2-ad99-ea0d8a57fe3d
[image-2]:  https://github-production-user-asset-6210df.s3.amazonaws.com/1677755/242058863-63e7dd88-2df4-4f5a-b842-81bff3c2aa9f.png
[image-3]:  https://github-production-user-asset-6210df.s3.amazonaws.com/1677755/242046742-034456b3-7f06-4660-b546-b8ad606a56d4.png