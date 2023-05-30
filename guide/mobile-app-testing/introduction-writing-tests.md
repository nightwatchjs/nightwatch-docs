---
title: Introduction to writing tests for native mobile apps
description:  Introduction to writing tests for native mobile/hybrid apps using Nightwatch
---

<div class="page-header"><h2>Write tests for native mobile apps</h2></div>

### Overview

So far, if you’re following through the docs, you’ve set up the mobile testing requirements and also run your first sample test using the Wikipedia app. If not please refer to the [installation guide][1]

Now, it’s time to write your own tests.

Nightwatch has native commands to automate the testing of your native mobile apps. Under the hood, Nightwatch wraps Appium methods so that users can enjoy the familiarity & ease of using Nightwatch.All the commands and assertions are available on `app` global variable. To inspect the elements and figure out the selectors, you can use Appium Inspector. 

### Appium Inspector

When you are writing tests for web browsers, you can open up a browser,  open dev tools, inspect elements and derive the selectors. 
For native mobile apps, you have Appium inspector to do the same job. If you haven’t installed Appium inspector, refer to the following [guide][2].

#### How to start Appium inspector?

<b>Step 1</b></br>

To start the **Appium Inspector**, start by adding the `.debug()` command at the line where you want to inspect.

<div class="sample-test">
<i>nightwatch/examples/mobile-app-tests/wikipedia-android.js</i><pre class="line-numbers"><code class="language-javascript">describe('Wikipedia Android app test', function() {
    before(function(app) {
        app.click('id', 'org.wikipedia:id/fragment_onboarding_skip_button');
    });
    <br>
    it('Search for BrowserStack', async function(app) {
        app
            .click('id', 'org.wikipedia:id/search_container')
            .sendKeys('id', 'org.wikipedia:id/search_src_text', 'browserstack')
            .debug() //Added debug command. The inspector will be at a state where previous step is executed
            .click({selector: 'org.wikipedia:id/page_list_item_title', locateStrategy: 'id', index: 0})
            .waitUntil(async function() {
                // wait for webview context to be available
                const contexts = await this.appium.getContexts();
                <br>
                return contexts.includes('WEBVIEW_org.wikipedia');
            })
            .appium.setContext('WEBVIEW_org.wikipedia')
            .assert.textEquals('.pcs-edit-section-title', 'BrowserStack');  // command run in webview context
    });
});
</code></pre></div>


<b>Step 2</b></br>
Run the test with the debug command. Nightwatch will start a new test session, execute the step and pause the execution when it hits the `.debug()` command. Now, start the Appium inspector application so that it can be attached to the test session.

<b>Step 3</b></br>
In the Appium inspector, you can attach to the session started in the previous step by clicking on ‘Attach session’ and selecting the session from dropdown.

<b>Step 4</b></br>
Once the session is attached, you can click on elements on the left side to get the selector options in the right panel as shown below:

![Selectors using Appium Inspector][image-1]

You can even test your commands/assertions using the selector by running it in the `.debug()` terminal console first and then add it to your test.

### Selectors

Similar to selectors for web automation, finding app related elements would also need selectors. Appium supports the following selector strategies and hence by default, Nightwatch would also support all of these selectors:
- id
- xpath

Detailed examples can be found [here][3]

### Commands

Commands for testing native mobile apps can be divided into 2 categories:

1. App related commands can be used to interact with app
2. Device related commands can be used to interact with the device

#### App related commands
- `app.click('selector strategy','selector value')` 
- `app.sendKeys('selector strategy','selector value','value to type')`
- `app.clearValue('selector strategy','selector value')` 
- `app.setValue('selector strategy','selector value')` 
- `app.appium.getContexts()` 
- `app.appium.getContext()`
- `app.appium.setContext()`

#### Device related commands

- `app.appium.startActivity([opts][4], callback)`
- `app.appium.getCurrentActivity(callback) [Callback returns activity name]`
- `app.appium.getCurrentPackage(callback)  [Callback returns package name]`
- `app.appium.getOrientation(callback)   [Callback returns LANDSCAPE | POTRAIT]`
- `app.appium.setOrientation(orientation, callback)  [Callback returns LANDSCAPE | POTRAIT]`
- `app.appium.getGeolocation(callback)  [Callback returns geolocation]`  
- `app.appium.setGeolocation({latitude, longitude, altitude}, callback)`
- `app.appium.pressKeyCode([keycode][5], callback)`
- `app.appium.longPressKeyCode([keycode][5], callback)`
- `app.appium.hideKeyboard([callback])`
- `app.appium.isKeyboardShown(callback)  [Callback returns boolean]`

Detailed examples can be found [here][6]

### Assertions

Finally, the goal of writing tests is to add assertions so that the end to end functional flows can be validated. Assertions for native mobile apps are again very similar to assertions for web. 

#### Assert library
- `app.assert.textContains(selector,'text')`
- `app.assert.textEquals(selector,'text')`
- `app.assert.textMatches(selector, 'text')`
- `app.assert.attributeContains(selector,'attribute','value')`
- `app.assert.attributeEquals(selector,'attribute','value')`
- `app.assert.attributeMatches(selector, 'attribute','value')`
- `app.assert.selected(selector)`
- `app.assert.enabled(selector)`
- `app.assert.visible(selector)`
- `app.assert.elementsCount(selector)`
- `app.assert.elementPresent(selector)`

#### Chai expect

Additionally, you can also use `Chai` style assertions:

E.g.:

<div class="sample-test">
<i>Sample Chai Exception</i><pre class="line-numbers"><code class="language-javascript">app.appium.getCurrentActivity(function(activity) {
    expect(activity.value).to.equal('.page.PageActivity')
})
</code></pre></div>

Detailed examples can be found [here][7] 

### Recommended next steps

Now that you understand the basics of writing tests for mobile apps, it's time to understand selectors, commands & assertions in more detail

[Selectors][3] </br>
[Command][6] </br>
[Assertions][7]

[1]:    /guide/mobile-app-testing/installation.html
[2]:    /guide/mobile-app-testing/installation.html#install-appium-inspector
[3]:    /guide/mobile-app-testing/selectors.html
[4]:    https://appium.io/docs/en/commands/device/activity/start-activity/
[5]:    https://developer.android.com/reference/android/view/KeyEvent
[6]:    /guide/mobile-app-testing/commands.html
[7]:    /guide/mobile-app-testing/assertions.html

[image-1]:  https://user-images.githubusercontent.com/1677755/220278494-7ca02bb0-6944-47bf-b459-92ffdc9ad38c.png


<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/mobile-app-testing/installation.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Mobile App Testing Installation</span>
        </div>
    </a>
  </div>
  <div class="doc-pagination justify-content-end pt-40">
  <div class="next">
    <a href="https://nightwatchjs.org/guide/mobile-app-testing/selectors.html">
        <div class="d-flex flex-column"><span class="smallT">Next Page</span><span class="bigT">Mobile App Selectors</span></div>
        <span>→</span>
    </a>
  </div>
</div>
</div>

