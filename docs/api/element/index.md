## Element APIs

### Introduction

The New V3 Element API allows locating one or more elements on the page using a chainable syntax where it's possible to use multiple element locator commands in a chain.
We can further add action commands (like click, sendKeys, submit, etc) that perform an action on the current selected Elements.

The V3 Element API can be accessed using the `element()` global object. The return value of the element() command is a Promise which also contains all the available element commands and the `assert` and `expect` namespaces. This object adds the functionality present in [Selenium WebElement](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html) class.

It supports all the usual ways of locating elements in Nightwatch, as well as the Selenium locators built using `By()`, which is also available in Nightwatch as a global named `by()`.

This allows great flexibility in locating elements and also makes the syntax clean and concise.


### New Element API vs Older Element API

Older Element API was designed in such a way that after every command a browser instance was returned. This made infinite chaining of commands and assertions possible.

![html-skeleton](/public/img/html-skeleton.png)

A simple example of a Contact Us form. We would need to write complicated selectors using the old element API. The search space for the selector is always the DOM root.

```
  browser
    .assert.textEquals('#title-text', 'Contact Us Form')
    .sendKeys('#my-form > input', 'hello@example.com')
    .assert.textEquals('#my-form > input', 'hello@example.com')
    .click('#my-form > #submit')
    .sendKeys('#my-form-2 :nth-child(1)', 'John Doe')
    .sendKeys('#my-form-2 :nth-child(2)', 'Hello World')
    .assert.textEquals('#my-form-2 :nth-child(1)', 'John Doe')
    .assert.textEquals('#my-form-2 :nth-child(2)', 'Hello World')
    .click('#submit');
```

While using the New Element API we can make use of the new element object to select various objects to the dom. This allows users to find child elements to certain elements easily and directly perform actions on them or get their state instead of writing complicated selectors (to get the child elements) and repeating those selectors to perform actions on them or get their state.

```
  const title = browser.element('.hero__title');
    title.getText().assert.equals('The greenest way to search');


    const form1 = browser.element('#my-form');
    const emailInput = form1.find('input');
    emailInput.sendKeys('hello@example.com');
    emailInput.getValue().assert.equals('hello@example.com');


    const form2 = browser.element('#my-form-2');
    const nameInput = form2.getFirstElementChild();
    const messageInput = nameInput.getNextElementSibling();


    nameInput.sendKeys('John Doe');
    messageInput.sendKeys('Hello World');


    nameInput.assert.equals('John Doe');
    messageInput.assert.equals('Hello World');


    browser.element('#submit').click();
```

### Usage

##### Using regular CSS (or Xpath) selectors

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">const addButtonEl = element('button[type="submit"]');
</code></pre></div>

##### Using Nightwatch selector objects

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">const addButtonEl = element({
  selector: 'button[type="button"]',
  index: 0
});
</code></pre></div>

##### Selenium locators

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">const locator = by.css('button[type="button"]');
const addButtonEl = element(locator);
</code></pre></div>

##### Selenium WebElements as arguments

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">// webElement is an instance of WebElement class from Selenium
const addButtonEl = element(webElement);
</code></pre></div>

##### Retrieve the Selenium WebElement instance

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">const addButtonEl = element('button[type="submit"]');
const instance = await addButtonEl.findElement();   
</code></pre></div>


### API Commands
All the existing methods from a regular [WebElement](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html) instance are available. If a method is called, it will be added to the Nightwatch queue accordingly.

**Available element commands:**
- [.clear()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#clear)
- [.click()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#click)
- [.findElement()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#findElement)
- [.findElements()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#findElements)
- [.getAttribute()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getAttribute)
- [.getCssValue()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getCssValue)
- [.getDriver()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getDriver)
- [.getId()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getId)
- [.getRect()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getRect)
- [.getTagName()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getTagName)
- [.getText()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#getText)
- [.isDisplayed()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#isDisplayed)
- [.isEnabled()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#isEnabled)
- [.isSelected()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#isSelected)
- [.sendKeys()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#sendKeys)
- [.submit()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#submit)
- [.takeScreenshot()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html#takeScreenshot)

### Working Example

The example below navigates to the AngularJS homepage and adds a new to-do item in the sample ToDo App available there.

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">describe('angularjs homepage todo list', function() {
  <br>
  // using the new element() global utility in Nightwatch 2 to init elements
  // before tests and use them later
  const todoElement = element('[ng-model="todoList.todoText"]');
  const addButtonEl = element('[value="add"]');
  <br>
  it('should add a todo using global element()', function() {
    // adding a new task to the list
    browser
      .navigateTo('https://angularjs.org')
      .sendKeys(todoElement, 'what is nightwatch?')
      .click(addButtonEl);
    <br>
    // verifying if there are 3 tasks in the list
    expect.elements('[ng-repeat="todo in todoList.todos"]').count.to.equal(3);
    <br>
    // verifying if the third task if the one we have just added
    const lastElementTask = element({
      selector: '[ng-repeat="todo in todoList.todos"]',
      index: 2
    });
    <br>
    expect(lastElementTask).text.to.equal('what is nightwatch?');
    <br>
    // find our task in the list and mark it as done
    lastElementTask.findElement('input', function(inputResult) {
      if (inputResult.error) {
        throw inputResult.error;
      }
      <br>
      const inputElement = element(inputResult.value);
      browser.click(inputElement);
    });
    <br>
    // verify if there are 2 tasks which are marked as done in the list
    expect.elements('*[module=todoApp] li .done-true').count.to.equal(2);
  });
});
</code></pre></div>