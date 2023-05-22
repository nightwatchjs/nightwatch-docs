---
title: Assertions for native mobile app tests
description:  How to write assertions when testing native mobile apps.
summary_image: https://nightwatchjs.org/img/banner.png
---

## Write assertions for native mobile apps tests

### Overview

The goal of any automated test is to write assertions and ensure that the logic is working. In Nightwatch there are 2 ways in which assertions can be done:

- app.assert.command(params)
- expects

### Assertions

All assertions are organised under the `.assert` namespace.

### Text Related

#### Text Contains

`app.assert.textContains(selector,'text')` can be used to assert if an element’s text contains a certain text.

```js
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` contains text Browser
app.assert.textContains({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'Browser');
```

```ts
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` contains text Browser
app.assert.textContains({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'Browser');
```

#### Text Equals

`app.assert.textEquals(selector,'text')` can be used to check if an element’s text exactly equals a particular text.

```js
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` equals text BrowserStack
app.assert.textEquals({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'BrowserStack');
```

```ts
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` equals text BrowserStack
app.assert.textEquals({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'BrowserStack');
```

#### Text Matches

`app.assert.textMatches(selector,'regex')` can be used to check if the text of an element matches with the given regex.

```js
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` is alphabet only
app.assert.textMatches({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'/^[a-z]+$/i');
```

```ts
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` is alphabet only
app.assert.textMatches({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'/^[a-z]+$/i');
```

### Attribute related

Elements have attributes such as text,index,resource-id etc. These can be found using Appium inspector as shown below

![Element attributes in Appium inspector][image-1]

Assertions can be performed on attributes using the attribute related assertions.

#### Attribute Contains

`app.assert.attributeContains(selector,'attribute','text')` can be used to assert if an element’s attribute named attribute contains a certain text.

```js
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` text attribute contains Browser
app.assert.attributeContains({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'text','Browser');
```

```ts
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` text attribute contains Browser
app.assert.attributeContains({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'text','Browser');
```

#### Attribute Equals

`app.assert.attributeEquals(selector,'attribute','text')` can be used to assert if an element’s attribute named attribute equals to a particular text.

```js
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` text attribute equals BrowserStack
app.assert.attributeEquals({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'text','BrowserStack');
```

```ts
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` text attribute equals BrowserStack
app.assert.attributeEquals({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'text','BrowserStack');
```

#### Attribute Matches

`app.assert.attributeMatches(selector,'attribute','regex')` can be used to assert if an element’s attribute named attribute matches the given regex

```js
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` text attribute only contains alphabets
app.assert.attributeMatches({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'text','/^[a-z]+$/i');
```

```ts
//Assert if the element with id `org.wikipedia:id/pcs-edit-section-title` text attribute only contains alphabets
app.assert.attributeMatches({selector: 'org.wikipedia:id/pcs-edit-section-title',locateStrategy: 'id'},'text','/^[a-z]+$/i');
```

### Selected

Verify if an element is in a selected state with `app.assert.selected(selector)` method.

```js
//Assert if the element with id `org.wikipedia:id/button` is selected
app.assert.selected({selector: 'org.wikipedia:id/button',locateStrategy: 'id'});
```

```ts
//Assert if the element with id `org.wikipedia:id/button` is selected
app.assert.selected({selector: 'org.wikipedia:id/button',locateStrategy: 'id'});
```

### Enabled

Verify if an element is in an enabled state with `app.assert.enabled(selector)` method.

```js
//Assert if the element with id `org.wikipedia:id/button` is enabled
app.assert.enabled({selector: 'org.wikipedia:id/button',locateStrategy: 'id'});
```

```ts
//Assert if the element with id `org.wikipedia:id/button` is enabled
app.assert.enabled({selector: 'org.wikipedia:id/button',locateStrategy: 'id'});
```

### Visible

Verify if an element is visible with `app.assert.visible(selector)` method.

```js
//Assert if the element with id `org.wikipedia:id/button` is visible
app.assert.visible({selector: 'org.wikipedia:id/button',locateStrategy: 'id'});
```

```ts
//Assert if the element with id `org.wikipedia:id/button` is visible
app.assert.visible({selector: 'org.wikipedia:id/button',locateStrategy: 'id'});
```

### Elements count

To verify the count of elements with a particular selector use the `app.assert.elementsCount()` API

```js
//Assert if the element with id `org.wikipedia:id/list_item` has a count of 7
app.assert.elementsCount({selector: 'org.wikipedia:id/list_item',locateStrategy: 'id'},7);
```

```ts
//Assert if the element with id `org.wikipedia:id/list_item` has a count of 7
app.assert.elementsCount({selector: 'org.wikipedia:id/list_item',locateStrategy: 'id'},7);
```

### Present

Verify if an element is present in the render tree with `app.assert.elementsPresent(selector)` method.

```js
//Assert if the element with id `org.wikipedia:id/button` is present in the render tree
app.assert.elementsPresent({selector: 'org.wikipedia:id/button',locateStrategy: 'id'});
```

```ts
//Assert if the element with id `org.wikipedia:id/button` is present in the render tree
app.assert.elementsPresent({selector: 'org.wikipedia:id/button',locateStrategy: 'id'});
```

### Chai Expects

In addition to the assertions under the .assert namespace,Nightwatch also supports BDD style expect assertions. E.g.:

```js
app.appium.getCurrentActivity(function(activity){
    expect(activity.value).to.equal('.page.PageActivity')
})
```

```ts
app.appium.getCurrentActivity(function(activity){
    expect(activity.value).to.equal('.page.PageActivity')
})
```

The way to use expects with mobile apps is the same as web. Please refer to the [guide][1] for more details.

### Recommended next steps

Learn [how to run native mobile tests on virtual,real and cloud devices][2]

[1]:  /guide/writing-tests/adding-assertions.html#expect-assertions
[2]:  /guide/mobile-app-testing/running-tests.html

[image-1]:  https://user-images.githubusercontent.com/1677755/220315555-6668b4c9-91c3-4221-a126-a14472bb4824.png

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/mobile-app-testing/commands.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Mobile App Commands</span>
        </div>
    </a>
  </div>
  <div class="doc-pagination justify-content-end pt-40">
  <div class="next">
    <a href="/guide/mobile-app-testing/running-tests.html">
        <div class="d-flex flex-column"><span class="smallT">Next Page</span><span class="bigT">Running Mobile App Tests</span></div>
        <span>→</span>
    </a>
  </div>
</div>
</div>
