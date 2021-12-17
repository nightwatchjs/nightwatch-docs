# Migrating from Protractor to Nightwatch

## Introduction

Protractor was a popular end-to-end test framework for Angular and AngularJS applications. However, Protractor will [no longer be shipped][AngualarRFC] with the new Angular Projects as of Angular 12. This migration guide to help make the transition from Protector on your team to Nightwatch easier.

## Getting Started

Install the Nightwatch Angular schematic to add Nightwatch to your Angular project.

```sh
ng add @nightwatch/schematics
```

This will install Nightwatch, add different scripts to run Nightwatch, scaffold Nightwatch config, and test files. It also prompts you to remove Protractor from your project and reconfigure your default `ng e2e` command to use Nightwatch.

You can now run Nightwatch with the following command:

```sh
ng e2e
```

You can also use the following command to run Nightwatch alternatively.

```sh
ng run {your-project-name}:nightwatch-run
```

## Next Steps

Your existing e2e tests will be migrated to a new location i.e. `Protractor`. Sample tests will be added to the `Nightwatch` folder to get you started with your first test in Nightwatch.

You will see these changes in your project, after you had run schematics on your project.

![NightwatchSchematicsChanges](./folder_changes.png)

1. Now, You need to modify your existing tests to Nightwatch. To being with you can start with [Assertions][AssertionLink], [Expect][ExceptLink], [Page Objects][PageObjectLink] and [API commands][APICommandsLink].

2. We had added few examples in this guide, but if you need more information please visit: https://nightwatchjs.org/api/

> Check out our [Nightwatch Schematic documentation][NightwatchSchematicDocumentation] for more details like running tests in a specific browser, etc.

## Working with the DOM

### Getting the DOM Elements

#### Getting a single element

---

In e2e tests, one of the most common things to do in a webpage is to get one or more HTML elements. In Nightwatch, you don't need to make any changes here, as everything works as before.

<span>Before: Protractor</span>

```js
// Find an element using a css selector.
element(by.css('.myclass'))
```

<span>After: Nightwatch</span>

```js
// Find an element using a css selector.
element(by.css('.myclass'))
```

#### Getting multiple elements

---

If you need to access more than one element on the page, you must chain the .all() method. However, in Nightwatch, you can use `browser.elements`.

<span>Before: Protractor</span>

```js
// Find elements using a css selector.
element.all(by.css('.myclass'))
```

<span>After: Nightwatch</span>

```js
// Find an element using a css selector.
browser.elements(by.css('.myclass'))
```

> You can learn more about in our [official documentation][ElementDocumentationLink]

### Interaction with DOM Elements

<span>Before: Protractor</span>

```js
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

<span>After: Nightwatch</span>

```js
// Click on the element
browser.click(element(by.css('button')))

// Clear the text in an element (usually an input).
browser.clearValue(element(by.css('input')))

// Check the first checkbox on a page
// Nightwatch by default search for first element, and perform click event if there are multiple element present
browser.click(element(by.css('[type="checkbox"]')))

// Scroll an element into view
browser.moveToElement(element(by.id('my-id'), 0, 0)
```

> You can learn more about interacting with DOM elements in our [official documentation][ElementInteractionDocLink]

## Assertions

### Length

<span>Before: Protractor</span>

```js
const list = element.all(by.css('custom-class'))
expect(list.count()).toBe(3)
```

<span>After: Nightwatch</span>

```js
expect.elements(by.css('custom-class')).count.to.equal(3);
```

### Value

<span>Before: Protractor</span>

```js
expect(element(by.css('input[name="first_name"]'))).getAttribute('value')).toBe('foo')
```

<span>After: Nightwatch</span>

```js
browser.expect.element(by.css('input[name="first_name"]')).to.have.attribute('value').equals('foo');
```

### Text Content

<span>Before: Protractor</span>

```js
// assert the element\'s text content is exactly the given text
expect(element(by.id('user-name')).getText()).toBe('John Doe')
```

<span>After: Nightwatch</span>

```js
browser.expect.element(by.id('user-name')).text.to.equal('John Doe');
```

### Visibility

<span>Before: Protractor</span>

```js
// assert button is visible
expect(element(by.css('#main ul li a.first')).isDisplayed()).toBe(true)
```

<span>After: Nightwatch</span>

```js
browser.expect.element(by.css('#main ul li a.first')).to.be.visible;

// The following will end the test:
browser.assert.visible(by.css('#main ul li a.first'));

// However this will just log the failure and continue:
browser.verify.visible(by.css('#main ul li a.first'));
```

### Existence

<span>Before: Protractor</span>

```js
// assert the spinner no longer exists
expect(element(by.id('loading')).isPresent()).toBe(false)
```

<span>After: Nightwatch</span>

```js
browser.assert.not.elementPresent(by.id('loading'))
```

### CSS

<span>Before: Protractor</span>

```js
// assert #main ul li a.first has css style "block" for "display" property
expect(element(by.css('#main ul li a.first')).getCssValue('display')).toBe('block')
```

<span>After: Nightwatch</span>

```js
browser.getCssProperty(by.css('#main ul li a.first'), 'display', function(result) {
  this.assert.equal(result.value, 'block')
});
```

### Navigating Websites

when you want to visit a page, you can use following code

<span>Before: Protractor</span>

```js
it('visits a page', () => {
  browser.get('/about')
  browser.navigate().forward()
  browser.navigate().back()
})
```

<span>After: Nightwatch</span>

```js
it('visits a page', () => {
  browser.url('/about')
  browser.forward()
  browser.back()
})
```

## Questions or having issues?

The best way to ask for questions or report issues related to Nightwatch Angular Schematic is to [open an issue][GithubIssueLink].


[AngualarRFC]:https://github.com/angular/protractor/issues/5502
[SeleniumPluginExtendLink]:https://nightwatchjs.org/guide/extending-nightwatch/using-with-selenium-webdriver.html
[WebdriverIOPluginExtendLink]:https://nightwatchjs.org/guide/extending-nightwatch/using-with-webdriverio.html
[NightwatchSchematicDocumentation]:https://github.com/nightwatchjs/nightwatch-schematics#readme
[GithubIssueLink]:https://github.com/nightwatchjs/nightwatch-schematics/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
[ElementDocumentationLink]:https://nightwatchjs.org/api/element.html
[ElementInteractionDocLink]:https://nightwatchjs.org/api/commands/#elementinteraction-headline
[AssertionLink]:https://nightwatchjs.org/api/
[ExceptLink]:https://nightwatchjs.org/api/expect/
[PageObjectLink]:https://nightwatchjs.org/api/pageobject/
[APICommandsLink]:https://nightwatchjs.org/api/commands/
