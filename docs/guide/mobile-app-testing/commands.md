---
title: Commands for native mobile app tests
description:  Introduction to commands that can be used for native mobile apps.
---

<div class="page-header"><h1>Commands for native mobile apps test</h1></div>

### Overview

Using commands, you can interact with elements in the mobile application or the OS itself by specifying selectors. Please refer to this [guide][1] to understand how selectors work in the context of native mobile applications. 

### App related commands

These commands can be used to interact with the mobile application

### Click

To click on an element,simply use `app.click('selector strategy','selector')`  or `app.click(selector object)` . You can find the element using Appium inspector.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
// Mention the selector strategy followed by the selector itself
// Click on the element with id `org.wikipedia:id/search_container`
app.click('id','org.wikipedia:id/search_container')
<br>
// Mention a selector object and index.
// Click on the nth element with id `org.wikipedia:id/page_list_item_title`
app.click({selector: 'org.wikipedia:id/page_list_item_title',locateStrategy: 'id',index: n})
</code></pre>

<pre data-language="typescript"><code class="language-typescript">
// Mention the selector strategy followed by the selector itself
// Click on the element with id `org.wikipedia:id/search_container`
app.click('id','org.wikipedia:id/search_container')
<br>
// Mention a selector object and index
// Click on the nth element with id `org.wikipedia:id/page_list_item_title`
app.click({selector: 'org.wikipedia:id/page_list_item_title',locateStrategy: 'id',index: n})
</code></pre></div>

### Type/Send Keys

If your app contains fields that need text input,you can interact with such elements by using `app.sendKeys('selector strategy','selector','text')`  or `app.sendKeys(selector object,text)`.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Mention the selector strategy followed by the selector itself
//Type the text 'Test' the element with id `org.wikipedia:id/search_container`
app.sendKeys('id','org.wikipedia:id/search_src_text','Test')
<br>
//Mention a selector object and index
//Type 'Test' in the nth element with id `org.wikipedia:id/search_src_text`
app.sendKeys({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n},'Test')
</code></pre>
<pre data-language="typescript"><code class="language-typescript">
//Mention the selector strategy followed by the selector itself
//Type the text 'Test' the element with id `org.wikipedia:id/search_container`
app.sendKeys('id','org.wikipedia:id/search_src_text','Test')
<br>
//Mention a selector object and index
//Type 'Test' in the nth element with id `org.wikipedia:id/search_src_text`
app.sendKeys({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n},'Test')
</code></pre></div>

### Clear Value

To clear the value of an element,simply use `app.clearValue('selector strategy','selector')`  or `app.clearValue(selector object)`. You can find the element using Appium inspector

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Mention the selector strategy followed by the selector itself
//Clear the value of the element with id `org.wikipedia:id/search_src_text`
app.clearValue('id','org.wikipedia:id/search_src_text')
<br>
//Mention a selector object and index
//Click on the nth element with id `org.wikipedia:id/search_src_text`
app.clearValue({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n})
</code></pre>
<pre data-language="typescript"><code class="language-typescript">
//Mention the selector strategy followed by the selector itself
//Clear the value of the element with id `org.wikipedia:id/search_src_text`
app.clearValue('id','org.wikipedia:id/search_src_text')
<br>
//Mention a selector object and index
//Click on the nth element with id `org.wikipedia:id/search_src_text`
app.clearValue({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n})
</code></pre></div>

### Set Value

You can directly set the value of an element by using `app.setValue('selector strategy','selector','value')`  or `app.setValue(selector object,'value')`.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Mention the selector strategy followed by the selector itself
//Type the text 'Value' the element with id `org.wikipedia:id/search_container`
app.setValue('id','org.wikipedia:id/search_src_text','Value')
<br>
//Mention a selector object and index
//Type 'Value' in the nth element with id `org.wikipedia:id/search_src_text`
app.setValue({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n},'Value')
</code></pre>
<pre data-language="typescript"><code class="language-typescript">
//Mention the selector strategy followed by the selector itself
//Type the text 'Value' the element with id `org.wikipedia:id/search_container`
app.setValue('id','org.wikipedia:id/search_src_text','Value')
<br>
//Mention a selector object and index
//Type 'Value' in the nth element with id `org.wikipedia:id/search_src_text`
app.setValue({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n},'Value')
</code></pre></div>

### Contexts

A single application can have multiple contexts such as web view or native app. Managing contexts would be essential for some flows such as `Authentication`, which may load a web view in your native app.

#### Get Context

`app.appium.getContext()` retrieves the current context

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Retrieve the current context
const context = await app.appium.getContext()
</code></pre>
<pre data-language="typescript"><code class="language-typescript">
//Retrieve the current context
const context = await app.appium.getContext()
</code></pre></div>

#### Get Contexts

`app.appium.getContexts()` retrieves all the contexts in an array format

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Retrieve all the contexts
const context = await app.appium.getContexts()
</code></pre>
<pre data-language="typescript"><code class="language-typescript">
//Retrieve all the contexts
const context = await app.appium.getContexts()
</code></pre></div>

#### Set Context

`app.appium.setContext(context)` can be used to switch the context

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Switch the current context to 'WEBVIEW_org.wikipedia'. You can get the context names via getContexts()
await app.appium.setContext('WEBVIEW_org.wikipedia')
</code></pre>
<pre data-language="typescript"><code class="language-typescript">
//Switch the current context to 'WEBVIEW_org.wikipedia'. You can get the context names via getContexts()
await app.appium.setContext('WEBVIEW_org.wikipedia')
</code></pre></div>

### Device/OS related commands

These commands can be used to interact with the OS to access OS/device level features

### Start Activity

You can start a new Activity by using `app.appium.startActivity(options)`. Options is a JSON object with the following parameters

1. appPackage `STRING`: Name of the package
2. appActivity `STRING`: Name of the activity
3. appWaitPackage `STRING`: Automation will begin after this package starts
4. appWaitActivity `STRING`: Automation will begin after this activity starts
5. intentAction `STRING`: Intent action which will be used to start activity
6. intentCategory `STRING`: Intent category which will be used to start activity
7. intentFlags `STRING`: Flags that will be used to start activity
8. optionalIntentArguments `STRING`: Additional intent arguments that will be used to start activity
9. dontStopAppOnReset `BOOLEAN`: Should the app stop on reset

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Start an Activity with package name `com.example` & activity name 'Activity'
app.appium.startActivity({
  appPackage: 'com.example',
  appActivity: 'Activity'
})
</code></pre>
<pre data-language="typescript"><code class="language-typescript">
//Start an Activity with package name `com.example` & activity name 'Activity'
app.appium.startActivity({
  appPackage: 'com.example',
  appActivity: 'Activity'
})
</code></pre></div>

### Get Current Activity

Retrieve the current activity name using `app.appium.getCurrentActivity()`

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Get current activity name
const activity =  await app.appium.getCurrentActivity();
</code></pre></div>

### Get Current Package

Retrieve the current package name using `app.appium.getCurrentPackage()`

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Get current package name
const package =  await app.appium.getCurrentPackage();
</code></pre></div>

### Get Orientation

Retrieve the current orientation of the device. The returned value will be `POTRAIT` or `LANDSCAPE`

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Get current orientation
const orientation =  await app.appium.getCurrentOrientation();
</code></pre></div>

### Set Orientation

Set the orientation of the device to `LANDSCAPE` or `POTRAIT`

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Set current orientation to LANDSCAPE
await app.appium.setOrientation('LANDSCAPE');
</code></pre></div>

### Get Geolocation

Retrieve the current geolocation of the device. The returned value will contain `latitude`,`longitude` and `altitude`.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Get current geolocation
const geolocation =  await app.appium.getGeolocation();
</code></pre></div>

### Set Geolocation

Set the geolocation of device using `latitude`,`longitude` & `altitude`

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Set current geolocation
await app.appium.setGeolocation({latitude:23.03,longitude: 34.23,altitude: 35.03});
</code></pre></div>

### Keyboard Related

#### Press Key

Press a particular key on the keyboard using app.appium.pressKeyCode(key code). Key code values can be found [here][2]

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Press Keycode Back 
await app.appium.pressKeyCode(4);
</code></pre></div>

<p class="alert alert-info">This works only on Android</p>

#### Long Press Key

Long press a particular key on the keyboard using app.appium.longPressKeyCode(key code). Key code values can be found [here][2]

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
//Press Keycode Back 
await app.appium.longPressKeyCode(4);
</code></pre></div>

<p class="alert alert-info">This works only on Android</p>

#### Hide Keyboard

Hide the keyboard using app.appium.hideKeyboard()

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
 //Hide keyboard 
await app.appium.hideKeyboard();
</code></pre></div>

#### Is Keyboard Shown

Check if the keyboard is shown or not using `app.appium.isKeyboardShown()`. This will return a boolean value. 

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
 //Is keyboard shown 
const keyboardShown = await app.appium.isKeyboardShown();
</code></pre></div>

### Recommended next steps

Now that you understand selectors and commands,you can proceed towards understanding how assertions work with Nightwatch  

[Assertions][3]

[1]:  /guide/mobile-app-testing/selectors.html
[2]:  https://developer.android.com/reference/android/view/KeyEvent
[3]:  /guide/mobile-app-testing/assertions.html
