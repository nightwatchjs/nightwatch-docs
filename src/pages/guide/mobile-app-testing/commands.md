---
title: Commands for native mobile app tests
description:  Introduction to commands that can be used for native mobile apps.
summary_image: https://nightwatchjs.org/img/banner.png
---

## Commands for native mobile apps test

### Overview

Using commands, you can interact with elements in the mobile application or the OS itself by specifying selectors. Please refer to this [guide][1] to understand how selectors work in the context of native mobile applications.

### App related commands

These commands can be used to interact with the mobile application

### Click

To click on an element,simply use `app.click('selector strategy','selector')`  or `app.click(selector object)` . You can find the element using Appium inspector.

```js
// Mention the selector strategy followed by the selector itself
// Click on the element with id `org.wikipedia:id/search_container`
app.click('id','org.wikipedia:id/search_container')

// Mention a selector object and index.
// Click on the nth element with id `org.wikipedia:id/page_list_item_title`
app.click({selector: 'org.wikipedia:id/page_list_item_title',locateStrategy: 'id',index: n})

```

```ts
// Mention the selector strategy followed by the selector itself
// Click on the element with id `org.wikipedia:id/search_container`
app.click('id','org.wikipedia:id/search_container')

// Mention a selector object and index
// Click on the nth element with id `org.wikipedia:id/page_list_item_title`
app.click({selector: 'org.wikipedia:id/page_list_item_title',locateStrategy: 'id',index: n})
```

### Type/Send Keys

If your app contains fields that need text input,you can interact with such elements by using `app.sendKeys('selector strategy','selector','text')`  or `app.sendKeys(selector object,text)`.

```js
//Mention the selector strategy followed by the selector itself
//Type the text 'Test' the element with id `org.wikipedia:id/search_container`
app.sendKeys('id','org.wikipedia:id/search_src_text','Test')

//Mention a selector object and index
//Type 'Test' in the nth element with id `org.wikipedia:id/search_src_text`
app.sendKeys({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n},'Test')
```

```ts
//Mention the selector strategy followed by the selector itself
//Type the text 'Test' the element with id `org.wikipedia:id/search_container`
app.sendKeys('id','org.wikipedia:id/search_src_text','Test')

//Mention a selector object and index
//Type 'Test' in the nth element with id `org.wikipedia:id/search_src_text`
app.sendKeys({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n},'Test')
```

### Clear Value

To clear the value of an element,simply use `app.clearValue('selector strategy','selector')`  or `app.clearValue(selector object)`. You can find the element using Appium inspector

```js
//Mention the selector strategy followed by the selector itself
//Clear the value of the element with id `org.wikipedia:id/search_src_text`
app.clearValue('id','org.wikipedia:id/search_src_text')

//Mention a selector object and index
//Click on the nth element with id `org.wikipedia:id/search_src_text`
app.clearValue({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n})
```

```ts
//Mention the selector strategy followed by the selector itself
//Clear the value of the element with id `org.wikipedia:id/search_src_text`
app.clearValue('id','org.wikipedia:id/search_src_text')

//Mention a selector object and index
//Click on the nth element with id `org.wikipedia:id/search_src_text`
app.clearValue({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n})
```

### Set Value

You can directly set the value of an element by using `app.setValue('selector strategy','selector','value')`  or `app.setValue(selector object,'value')`.

```js
//Mention the selector strategy followed by the selector itself
//Type the text 'Value' the element with id `org.wikipedia:id/search_container`
app.setValue('id','org.wikipedia:id/search_src_text','Value')

//Mention a selector object and index
//Type 'Value' in the nth element with id `org.wikipedia:id/search_src_text`
app.setValue({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n},'Value')
```

```ts
//Mention the selector strategy followed by the selector itself
//Type the text 'Value' the element with id `org.wikipedia:id/search_container`
app.setValue('id','org.wikipedia:id/search_src_text','Value')

//Mention a selector object and index
//Type 'Value' in the nth element with id `org.wikipedia:id/search_src_text`
app.setValue({selector: 'org.wikipedia:id/search_src_text',locateStrategy: 'id',index: n},'Value')
```

### Contexts

A single application can have multiple contexts such as web view or native app. Managing contexts would be essential for some flows such as `Authentication`, which may load a web view in your native app.

#### Get Context

`app.appium.getContext()` retrieves the current context

```js
//Retrieve the current context
const context = await app.appium.getContext()
```

```ts
//Retrieve the current context
const context = await app.appium.getContext()
```

#### Get Contexts

`app.appium.getContexts()` retrieves all the contexts in an array format

```js
//Retrieve all the contexts
const context = await app.appium.getContexts()
```

```ts
//Retrieve all the contexts
const context = await app.appium.getContexts()
```

#### Set Context

`app.appium.setContext(context)` can be used to switch the context

```js
//Switch the current context to 'WEBVIEW_org.wikipedia'. You can get the context names via getContexts()
await app.appium.setContext('WEBVIEW_org.wikipedia')
```

```ts
//Switch the current context to 'WEBVIEW_org.wikipedia'. You can get the context names via getContexts()
await app.appium.setContext('WEBVIEW_org.wikipedia')
```

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

```js
//Start an Activity with package name `com.example` & activity name 'Activity'
app.appium.startActivity({
  appPackage: 'com.example',
  appActivity: 'Activity'
})
```

```ts
//Start an Activity with package name `com.example` & activity name 'Activity'
app.appium.startActivity({
  appPackage: 'com.example',
  appActivity: 'Activity'
})
```

### Get Current Activity

Retrieve the current activity name using `app.appium.getCurrentActivity()`

```js
//Get current activity name
const activity =  await app.appium.getCurrentActivity();
```

### Get Current Package

Retrieve the current package name using `app.appium.getCurrentPackage()`

```js
//Get current package name
const package =  await app.appium.getCurrentPackage();
```

### Get Orientation

Retrieve the current orientation of the device. The returned value will be `POTRAIT` or `LANDSCAPE`

```js
//Get current orientation
const orientation =  await app.appium.getCurrentOrientation();
```

### Set Orientation

Set the orientation of the device to `LANDSCAPE` or `POTRAIT`

```js
//Set current orientation to LANDSCAPE
await app.appium.setOrientation('LANDSCAPE');
```

### Get Geolocation

Retrieve the current geolocation of the device. The returned value will contain `latitude`,`longitude` and `altitude`.

```js
//Get current geolocation
const geolocation =  await app.appium.getGeolocation();
```

### Set Geolocation

Set the geolocation of device using `latitude`,`longitude` & `altitude`

```js
//Set current geolocation
await app.appium.setGeolocation({latitude:23.03,longitude: 34.23,altitude: 35.03});
```

### Keyboard Related

#### Press Key

Press a particular key on the keyboard using app.appium.pressKeyCode(key code). Key code values can be found [here][2]

```js
//Press Keycode Back
await app.appium.pressKeyCode(4);
```

<p class="alert alert-info">This works only on Android</p>

#### Long Press Key

Long press a particular key on the keyboard using app.appium.longPressKeyCode(key code). Key code values can be found [here][2]

```js
//Press Keycode Back
await app.appium.longPressKeyCode(4);
```

<p class="alert alert-info">This works only on Android</p>

#### Hide Keyboard

Hide the keyboard using app.appium.hideKeyboard()

```js
 //Hide keyboard
await app.appium.hideKeyboard();
```

#### Is Keyboard Shown

Check if the keyboard is shown or not using `app.appium.isKeyboardShown()`. This will return a boolean value.

```js
 //Is keyboard shown
const keyboardShown = await app.appium.isKeyboardShown();
```

### Recommended next steps

Now that you understand selectors and commands,you can proceed towards understanding how assertions work with Nightwatch

[Assertions][3]

[1]:  /guide/mobile-app-testing/selectors.html
[2]:  https://developer.android.com/reference/android/view/KeyEvent
[3]:  /guide/mobile-app-testing/assertions.html

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/mobile-app-testing/selectors.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Mobile App Selectors</span>
        </div>
    </a>
  </div>
  <div class="doc-pagination justify-content-end pt-40">
  <div class="next">
    <a href="/guide/mobile-app-testing/assertions.html">
        <div class="d-flex flex-column"><span class="smallT">Next Page</span><span class="bigT">Mobile App Assertions</span></div>
        <span>→</span>
    </a>
  </div>
</div>
</div>
