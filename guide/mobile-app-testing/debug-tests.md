---
title: Debugging Native Mobile App Tests
description: Learn how to debug native mobile app testing with Nightwatch.
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Debugging Native Mobile App Tests</h2></div>

### Overview

Debugging mobile app tests is not as straightforward as the web as dev tools is not available. In order to debug mobile app tests, Appium inspector will have to be setup and attached to a test session

### Pre-requisites

Appium inspector is recommended for debugging tests. To setup Appium inspector follow this [guide][1]

### Debugging using Appium Inspector

#### Step 1

Add a debug point just before the error using `.debug()` command in the test script as shown below

<div class="sample-test">
<i>test.js</i><pre class="line-numbers"><code class="language-javascript">
app
  .useXpath()
  .click('//XCUIElementTypeSearchField[@name="Search Wikipedia"]')
  .sendKeys('//XCUIElementTypeSearchField[@name="Search Wikipedia"]','browserstack')
  .click('//XCUIElementTypeStaticText[@name="BrowserStack"]')
  .debug()
</code></pre></div>

#### Step 2

Run the test so that the Nightwatch test session is created

#### Step 3

Open Appium Inspector and attach session

![Debugging setup with Appium Inspector][image-1]

<p class="alert alert-info">If you are using Appium 1 add /wd/hub to the Remote path field for Appium inspector to be able to get the active sessions from the Appium server.</p>

That's it! Your test session has been setup for debugging

#### Step 4

Once the tests' session is attached, you can select elements in the left pane to highlight it in the `App Source` pane and view all the details & attributes in the `Selected Element` pane as shown below.

![Debugging with Appium Inspector][image-2]

You can also run Appium commands in the `Commands` tab as shown below

![Running commands with Appium inspector][image-3]



### Debugging with debugger console in terminal

#### Step 1

Add a debug point just before the error using `.debug()` command in the test script as shown below

<div class="sample-test">
<i>test.js</i><pre class="line-numbers"><code class="language-javascript">app
  .useXpath()
  .click('//XCUIElementTypeSearchField[@name="Search Wikipedia"]')
  .sendKeys('//XCUIElementTypeSearchField[@name="Search Wikipedia"]','browserstack')
  .click('//XCUIElementTypeStaticText[@name="BrowserStack"]')
  .debug()
</code></pre></div>

#### Step 2

Run the test so that the Nightwatch test session is created.

#### Step 3

Pass Nightwatch commands/assertions to Nightwatch debug console open in the terminal. 

[1]:	/guide/mobile-app-testing/installation.html#install-appium-inspector

[image-1]:	https://user-images.githubusercontent.com/1677755/220331486-a8f92d50-1922-471c-9695-360394b180f5.png
[image-2]:  https://user-images.githubusercontent.com/1677755/220332377-66b95105-25fe-4b56-a06b-5e5019fe592e.png
[image-3]:  https://user-images.githubusercontent.com/1677755/220332726-824dd227-fd11-43f3-9247-ecc20779f94e.png

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/mobile-app-testing/running-tests.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Running Mobile App Tests</span>
        </div>
    </a>
  </div>
</div>