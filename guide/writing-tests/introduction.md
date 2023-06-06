---
title: Introduction to writing tests for web applications
description:  Introduction to writing tests for websites or web apps using Nightwatch
---

<div class="page-header"><h2>Write tests for websites or web apps</h2></div>

### Overview

Nightwatch provides simple and comprehensive APIs for interacting with web elements and performing various actions and assertions. In Nightwatch v3, brand new element APIs are introduced to make writing tests even simpler and more concise. 

The [Nightwatch inspector][5] makes it easier to author tests as it provides selector recommendations that are durable in the longer run. 

If you know very little or no coding, you can also use our [Chrome recorder extension][1] to record tests and run them using Nightwatch. 

### Finding elements

Before you can interact with elements or perform assertions, you will have to find the elements from the DOM tree using selectors. Nightwatch supports a variety of selectors to make finding elements a breeze. You can do so using `.find()` & `.findAll()` related commands

1. CSS selector - `browser.element.find('css selector') or browser.element.findAll('css selector')`
2. xPath selector - `browser.element.find(by.xpath(('xpath string')) or browser.element.findAll(by.xpath(('xpath string'))`
3. By role -  `browser.element.findByRole('role') or browser.element.findAllByRole('role')`
4. By  text - `browser.element.findByText('text') or browser.element.findAllByText('text')`
5. By placeholder text - `browser.element.findByPlaceholderText('placeholder text') or browser.element.findAllByPlaceholderText('placeholder text')`
6. By label text - `browser.element.findByLabelText('label text') or browser.element.findAllByLabelText('label text')`
7. By alt text - `browser.element.findByAltText('alt text') or browser.element.findAllByAltText('alt text') `

Along with the find commands, Nightwatch also provides with convenience methods that help finding methods in more complex scenarios

1. Finding nth element from an array of elements `.nth(index)`
2. Finding count of element array `.count()`

### Finding nested elements

On top of this powerful set of selectors, Nightwatch also supports selector chaining. 

For E.g.

<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('CSS selector').findByText('text').click();
</code></pre></div>

or 

<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.findAll('CSS selector').nth(2).findByText('text').click();
</code></pre></div>

For a more detailed guide & examples on selectors, please refer to this [guide][2].

### Commands

Once you find elements, you can interact with them using commands

#### Interaction commands

1. Click - `browser.element.find('selector').click()`
2. Double Click - `browser.element.find('selector').doubleClick()`
3. Right Click  - `browser.element.find('selector').rightClick()`
4. Type into an input - `browser.element.find('selector').sendKeys('text')`
5. Set Value - `browser.element.find('selector').setValue()`
6. Clear element.clear() - `browser.element.find('selector').clear()`

<div class="alert alert-info">Instead of .find(), you could also have used other find related methods such as .findByText(), findByRole() followed by the command
</div>

#### Get element details
1. Get text - `browser.element.find('selector').getText()`
2. Get value - `browser.element.find('selector').getValue()`
3. Get tag name - `browser.element.find('selector').getTagName()`
4. Get attribute - `browser.element.find('selector').getAttribute()`
5. Get CSS property - `browser.element.find('selector').getCssProperty()`
6. Get ID - `browser.element.find('selector').getId()`
7. Get Accessibility name - `browser.element.find('selector').getAccessibilityName()`
8. Get rect - `browser.element.find('selector').getRect()`

#### Update element details
1. Set text - `browser.element.find('selector').setText('text')`
2. Set attribute - `browser.element.find('selector').setAttributes('attribute', 'attribute value')`

#### Setting browser context
1. Set Geolocation - `browser.setGeolocation({latitude: <value>, longitude: <value>, accuracy: 100})`

Refer to this [guide][3] for detailed examples. 


### Assertions

The main point of writing automated tests is setting assertions to pass. There are 2 ways to do assertions with Nightwatch

You can use the built-in assertions
1. Text equals - `browser.element.find('selector').assert.textEquals('text')`
2. Text contains - `browser.element.find('selector').assert.textContains('text')`
3. Text matches - `browser.element.find('selector').assert.textMatches('regex')`
4. Value equals - `browser.element.find('selector').assert.valueEquals('text')`
5. Value contains - `browser.element.find('selector').assert.valueContains('text')`
6. Value matches - `browser.element.find('selector').assert.valueMatches('regex')`
7. URL equals - `browser.assert.urlEquals('text')`
8. URL contains - `browser.assert.urlContains('text')`
9. URL matches - `browser.assert.urlMatches('regex')`
10. Visible - `browser.element.find('selector').assert.visible()`

If these assertions don’t suffice, you can write your own custom assertions. Learn how

### Chai expects

If you prefer Chai style asserts, you can also use the expect() to perform assertions

1. Text equals - `expect(element).text.to.equal()`
2. Text contains - `expect(element).text.to.contain()`
3. Text equals - `expect(element).text.to.match()`
4. Value equals - `expect(element).value.to.equal()`
5. Value contains - `expect(element).value.to.contain()`
6. Value equals - `expect(element).value.to.match()`
7. URL equals - `expect(brower.url()).to.equal()`
8. URL contains - `expect(brower.url()).to.contain()`
9. URL matches - `expect(brower.url()).to.match()`
10. Visible - `expect(element).to.be.visible()`

For detailed examples around assertions, refer to this [article][4]

### Using Nightwatch inspector

Nightwatch inspector is a point-and-click tool designed to save your time while authoring tests and help you write more durable tests. It also allows you to try out Nightwatch commands from devtools itself. [Learn more][5].

### Record using Chrome dev tools

Alternatively, Nightwatch provides tools to help you get started by recording your test actions on screen and generate Nightwatch test scripts automatically without having to write any code. Explore Create Nightwatch test using [Google Chrome DevTools Recorder][1] for more information.

### Recommended next steps

Now that you understand the basics of writing tests for mobile apps, it's time to understand selectors, commands & assertions in more detail

[Selectors][2] </br>
[Command][3] </br>
[Assertions][4]

[1]:    /guide/writing-tests/chrome-devtools-recorder.html
[2]:    /guide/writing-tests/selectors.html
[3]:    /guide/writing-tests/commands.html
[4]:    /guide/writing-tests/assertions.html
[5]:    /guide/writing-tests/nightwatch-inspector.html



[image-1]:  https://user-images.githubusercontent.com/1677755/220278494-7ca02bb0-6944-47bf-b459-92ffdc9ad38c.png

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Install Nightwatchs</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/selectors.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Selectors</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
