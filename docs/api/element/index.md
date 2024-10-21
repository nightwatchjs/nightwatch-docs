## Element APIs

### Introduction

The new Element API introduced in Nightwatch v3 is a major upgrade from the older element APIs, making it more intuitive and convenient to find and interact with elements. It does so by offering a fluent and chainable syntax, minimizing the selector repetition and making the tests more concise and easy to read.

The new Element API is available on the `browser.element` namespace and supports all the usual ways of locating elements in Nightwatch, as well as the Selenium locators built using `By()`, which is also available in Nightwatch as a global named `by()`.

### Usage

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">// using regular css selectors
const submitElem = browser.element.find('button[name=submit]');
<br>
// using Nightwatch selector objects
const addButtonElem = browser.element.find({
  selector: '//button[@type="button"]',
  locateStrategy: 'xpath',
  index: 1
});
<br>
// using Selenium `by` locator
const addButtonElem2 = browser.element.find(
  by.xpath('//button[@type="button"]')
);
<br>
// locating child elements
const childChildElem = browser.element
  .find('.element')
  .find('.child-element')
  .find('.child-child-element');
<br>
// locating elements by text
const newsElem = browser.element.findByText('News');
<br>
// use await to retrieve Selenium WebElement instance
const addButtonWebElem = await addButtonElem;
</code></pre></div>

### How it works?

All the `find()` and `findBy*()` commands in the new Element API returns `ScopedElement`, which is nothing but a wrapper around the actual result returned by these commands (`WebElement` instance in this case). This wrapper provides access to a host of commands and assertions that can be performed directly on the element and the actual result from these commands can be obtained by using `await` on them.

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">// `find()` and `findBy*()` commands return ScopedElement,
// a wrapper around the actual result, i.e., `WebElement`.
const inputElem = browser.element.find('input[name=q]');
<br>
// This wrapper provides a host of commands and assertions
// available directly on the result.
inputElem.click();
inputElem.sendKeys('Nightwatch.js');
<br>
// No need to await when performing actions or assertions
// on the element.
inputElem.assert.enabled();
inputElem.getText().assert.equals('Nightwatch.js');
<br>
// Use await to retrieve the actual result from the command.
const inputWebElem = await inputElem; // returns a `WebElement` instance
const inputText = await inputElem.getText();
const inputSize = await inputElem.getSize();
</code></pre></div>

Similarly, the `findAll()` and `findAllBy*()` commands return `ScopedElements`, a wrapper around the actual result from these commands, i.e., `WebElement[]` (an array of `WebElement`s). But unlike `ScopedElement`, `ScopedElements` provide two methods:

* **nth()**: returns a wrapper (`ScopedElement`) around the nth element of `WebElement[]`.
* **count()**: returns a count of all the elements present in the actual result, i.e., `WebElement[]`.

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">// `findAll()` and `findAllBy*()` commands return ScopedElements,
// a wrapper around the actual result, i.e., `WebElement[]`.
const postElems = browser.element.findAll('.post');
<br>
// get count of all the posts
// use await to get the actual result
const postElemsCount = await postElems.cound();
<br>
// assert that the count is 15
postElems.count().assert.equals(15);
<br>
// assert that the 5th post contains "nightwatch" text
const post5Elem = postElems.nth(4); // 0-based indexing
post5Elem.getText().assert.contains("nightwatch");
<br>
// click on the 2nd post
postElems.nth(1).click();
<br>
// `findAll` can also be chained on `find()`
browser.element.find('body').findAll('.post').nth(1).findByText('Comments');
</code></pre></div>

### Why a new API?

The older element APIs had a few shortcomings, like:

* The selector had to be passed repeatedly for every interaction or assertion with element.
* No easy way to find child element apart from using complex CSS selector.
* No easy way to find elements by text, role, label, etc.
* It did a lookup for element for every command and assertion.

The newer API aimed at fixing these shortcomings, while also make the API more concise and easy-to-use.

#### Before

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">// no await required for normal actions
browser
  .click('input[name=q]')
  .sendKeys('input[name=q]', 'Nightwatch.js');
<br>
// await required to get the actual command result
const inputText = await browser.getText('input[name=q]');
browser.assert.equal(inputText, 'Nightwatch.js');
<br>
browser
  .click('button[name=submit]')
  .assert.not.visible('button[name=submit]');
</code></pre></div>

#### Now

<div class="sample-test" style="max-width:800px"><pre data-language="javascript" style="padding-top: 10px" class="language-javascript"><code class="language-javascript">// no await required for normal actions
const inputElem = browser.element.find('input[name=q]');
inputElem.click(); // no repetition of selector
inputElem.sendKeys('Nightwatch.js');
<br>
// await required to get the actual command result
const inputText = await inputElem.getText();
browser.assert.equal(inputText, 'Nightwatch.js');
<br>
// assertions can also be done directly
// no await required as we are not storing the actual command result anywhere
inputElem.getText().assert.equals('Nightwatch.js');
<br>
const submitElem = browser.element.find('input[name=submit]');
submitElem.click();
submitElem.assert.not.visible();
<br>
// await the element to get the `WebElement` instance.
const submitWebElem = await submitElem;
</code></pre></div>
