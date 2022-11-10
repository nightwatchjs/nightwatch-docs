---
title: Migrating from Protractor to Nightwatch
description: In depth guide on how to migrate from protractor to nightwatch
---

## Migrating from Protractor to Nightwatch

### Introduction

Protractor was a popular end-to-end test framework for Angular and AngularJS applications. However, Protractor will [no longer be shipped][AngualarRFC] with the new Angular Projects as of Angular 12. This migration guide to help make the transition from Protractor on your team to Nightwatch easier.

### Getting Started

Install the [Nightwatch Angular schematic](https://github.com/nightwatchjs/nightwatch-schematics) to add Nightwatch to your Angular project.

```bash
ng add @nightwatch/schematics
```

This will install Nightwatch, add different scripts to run Nightwatch, scaffold Nightwatch config, and test files. It also prompts you to remove Protractor from your project and reconfigure your default `ng e2e` command to use Nightwatch.

You can now run Nightwatch with the following command:

```bash
ng e2e
```

You can also use the following command to run Nightwatch alternatively.

```bash
ng run {your-project-name}:nightwatch-run
```

### Next Steps

Your existing e2e tests will be migrated to a new location i.e. `Protractor`. Sample tests will be added to the `Nightwatch` folder to get you started with your first test in Nightwatch.

You will see these changes in your project, after you had run schematics on your project.

<p><img src="/img/folder_changes.png" alt="Folder changes" style="width: auto" />

1. Now, You need to modify your existing tests to Nightwatch. To being with you can start with [Assertions][AssertionLink], [Expect][ExceptLink], [Page Objects][PageObjectLink] and [API commands][APICommandsLink].

2. We had added few examples in this guide, but if you need more information please visit: https://nightwatchjs.org/api/

> Check out our [Nightwatch Schematic documentation][NightwatchSchematicDocumentation] for more details like running tests in a specific browser, etc.

### Working with the DOM

#### Getting the DOM Elements

##### Getting a single element

In e2e tests, one of the most common things to do in a webpage is to get one or more HTML elements. In Nightwatch, you don't need to make any changes here, as everything works as before.

<span>Before: Protractor</span>

```javascript
// Find an element using a css selector.
element(by.css('.myclass'))
```

<span>After: Nightwatch v2</span>

```javascript
// Find an element using a css selector.
element(by.css('.myclass'))
```

##### Getting multiple elements

If you need to access more than one element on the page, you must chain the .all() method. However, in Nightwatch, you can use `browser.findElements`.

<span>Before: Protractor</span>

```javascript
// Find elements using a css selector.
element.all(by.css('.myclass'))
```

<span>After: Nightwatch v2</span>

```javascript
// Find mulltiple elements using a css selector.
browser.findElements(by.css('.myclass'))

// or simply:
browser.findElements('.myclass')
```

##### Interaction with DOM Elements

<span>Before: Protractor</span>

```javascript
// Click on the element
element(by.css('button')).click()

// Clear the text in an element (usually an input).
element(by.css('input')).clear()

// Check the first checkbox on a page
element.all(by.css('[type="checkbox"]')).first().click()

// Scroll an element into view
browser
  .actions()
  .mouseMove(element(by.id('my-id')))
  .perform()
```

<span>After: Nightwatch v2</span>

```javascript
// Click on the element
browser.click(element(by.css('button')))

// or with default css selector as locate strategy:
browser.click('button')

// Clear the text in an element (usually an input).
browser.clearValue('input')

// Check the first checkbox on a page
// Nightwatch by default search for first element, and perform click event if there are multiple element present
browser.click('[type="checkbox"]')

// Scroll an element into view
browser.moveToElement(element(by.id('my-id'), 0, 0)

// or, using the actions api:
browser
  .perform(function() {
    return this.actions().mouseMove(element(by.id('my-id')))
  }))
```

> You can learn more about working with DOM elements in our [official documentation](https://v2.nightwatchjs.org/guide/using-nightwatch/finding-and-interacting-with-elements.html)

### Assertions

#### Length

<span>Before: Protractor</span>

```javascript
const list = element.all(by.css('.custom-class'))
expect(list.count()).toBe(3)
```

<span>After: Nightwatch v2</span>

```javascript
expect.elements('.custom-class').count.to.equal(3);
```

#### Value

<span>Before: Protractor</span>

```javascript
expect(element(by.css('input[name="first_name"]'))).getAttribute('value')).toBe('foo')
```

<span>After: Nightwatch v2</span>

```javascript
expect(element('input[name="first_name"]')).attribute('value').toEqual('foo');
```

#### Text Content

<span>Before: Protractor</span>

```javascript
// assert the element\'s text content is exactly the given text
expect(element(by.id('user-name')).getText()).toBe('John Doe')
```

<span>After: Nightwatch v2</span>

```javascript
expect.element(by.id('user-name')).text.toEqual('John Doe');
```

#### Visibility

<span>Before: Protractor</span>

```javascript
// assert button is visible
expect(element(by.css('#main ul li a.first')).isDisplayed()).toBe(true)
```

<span>After: Nightwatch v2</span>

```javascript
expect('#main ul li a.first').to.be.visible;

// The following will end the test:
browser.assert.visible('#main ul li a.first');

// However this will just log the failure and continue:
browser.verify.visible('#main ul li a.first');
```

#### Existence

<span>Before: Protractor</span>

```javascript
// assert the spinner no longer exists
expect(element(by.id('loading')).isPresent()).toBe(false)
```

<span>After: Nightwatch v2</span>

```javascript
browser.assert.not.elementPresent(by.id('loading'))
```

#### CSS

<span>Before: Protractor</span>

```javascript
// assert #main ul li a.first has css style "block" for "display" property
expect(element(by.css('#main ul li a.first')).getCssValue('display')).toBe('block')
```

<span>After: Nightwatch v2</span>

```javascript
browser.assert.cssProperty(by.css('#main ul li a.first'), 'display', 'block');
```

#### Navigating websites

When you need to visit a page in your test, you can use following code:

<span>Before: Protractor</span>

```javascript
it('visits a page', () => {
  browser.get('/about')
  browser.navigate().forward()
  browser.navigate().back()
})
```

<span>After: Nightwatch v2</span>

```javascript
it('visits a page', () => {
  browser
    .navigateTo('/about')
    .forward()
    .back()
})
```

### Questions or having issues?

The best way to ask for questions or report issues related to Nightwatch Angular Schematic is to [open an issue][GithubIssueLink].

[AngualarRFC]:https://github.com/angular/protractor/issues/5502
[NightwatchSchematicDocumentation]:https://github.com/nightwatchjs/nightwatch-schematics#readme
[GithubIssueLink]:https://github.com/nightwatchjs/nightwatch-schematics/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
[ElementDocumentationLink]:https://v2.nightwatchjs.org/api/element.html
[ElementInteractionDocLink]:https://v2.nightwatchjs.org/api/commands/#elementinteraction-headline
[AssertionLink]:https://v2.nightwatchjs.org/api/assert/
[ExceptLink]:https://v2.nightwatchjs.org/api/expect/
[PageObjectLink]:https://v2.nightwatchjs.org/api/pageobject/
[APICommandsLink]:https://v2.nightwatchjs.org/api/commands/

<div class="doc-pagination justify-content-start pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/migrating-to-nightwatch/from-nightwatch-v1.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">From Nightwatch v1</span>
        </div>
    </a>
  </div>
</div>
