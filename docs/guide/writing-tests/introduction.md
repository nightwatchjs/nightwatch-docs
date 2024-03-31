---
title: Introduction to writing tests for web applications
description:  Introduction to writing tests for websites or web apps using Nightwatch
---

<div class="page-header"><h1>Write tests for websites or web apps</h1></div>

### Overview

Nightwatch provides simple and comprehensive APIs for interacting with web elements and performing various actions and assertions. In Nightwatch v3, brand new element APIs are introduced to make writing tests even simpler and more concise. 

The [Nightwatch inspector][5] makes it easier to author tests as it provides selector recommendations that are durable in the longer run. 

If you know very little or no coding, you can also use our [Chrome recorder extension][1] to record tests and run them using Nightwatch. 

### Finding elements

Before you can interact with elements or perform assertions, you will have to find the elements from the DOM tree using selectors. Nightwatch supports a variety of selectors to make finding elements a breeze. You can do so using `.find()` & `.findAll()` related commands:
1. __CSS selectors__ :
<div class="sample-test"><pre><code class="language-javascript">browser.element.find('css selector');
browser.element.findAll('css selector');</code></pre></div>
2. __xPath selector__ :
<div class="sample-test"><pre><code class="language-javascript">browser.element.find(by.xpath(('xpath string'));
browser.element.findAll(by.xpath(('xpath string'));
</code></pre></div>
3. __By role__ :
<div class="sample-test"><pre ><code class="language-javascript">browser.element.findByRole('role');
browser.element.findAllByRole('role');
</code></pre></div>
4. __By  text__ :
<div class="sample-test"><pre><code class="language-javascript">browser.element.findByText('text');
browser.element.findAllByText('text');
</code></pre></div>
5. __By placeholder text__ :
<div class="sample-test"><pre><code class="language-javascript">browser.element.findByPlaceholderText('placeholder text');
browser.element.findAllByPlaceholderText('placeholder text');
</code></pre></div>
6. __By label text__ :
<div class="sample-test"><pre><code class="language-javascript">browser.element.findByLabelText('label text');
browser.element.findAllByLabelText('label text');
</code></pre></div>
7. __By alt text__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.findByAltText('alt text');
browser.element.findAllByAltText('alt text');
</code></pre></div>

Along with the find commands, Nightwatch also provides with convenience methods that help finding methods in more complex scenarios

1. Finding __nth__ element from an array of elements `.nth(index)`
2. Finding __count__ of element array `.count()`

### Finding nested elements

On top of this powerful set of selectors, Nightwatch also supports selector chaining:<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('CSS selector').findByText('text').click();
// or
browser.element.findAll('CSS selector').nth(2).findByText('text').click();
</code></pre></div>

For a more detailed guide & examples on selectors, please refer to this [guide][2].

### Commands

Once you find elements, you can interact with them using commands

#### Interaction commands

1. __Click__ :
<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').click();</code></pre></div>
2. __Double Click__ : <div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').doubleClick();
</code></pre></div>
1. __Right Click__ : <div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').rightClick();
</code></pre></div>
1. __Type into an input__ : <div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').sendKeys('text');
</code></pre></div>
1. __Set Value__ : <div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').setValue();
</code></pre></div>
1. __Clear__ : <div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').clear();
</code></pre></div>

<div class="alert alert-info">Instead of <code>.find()</code>, you could also have used other find related methods such as <code>.findByText()</code>, <code>.findByRole()</code> followed by the command
</div>

<br>

#### Get element details
1. __Get text__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').getText();</code></pre></div>
2. __Get value__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').getValue();</code></pre></div>
3. __Get tag name__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').getTagName();</code></pre></div>
4. __Get attribute__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').getAttribute();</code></pre></div>
5. __Get CSS property__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').getCssProperty();</code></pre></div>
6. __Get ID__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').getId();</code></pre></div>
7. __Get Accessibility name__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').getAccessibilityName();</code></pre></div>
8. __Get rect__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').getRect();</code></pre></div>
<br>
#### Update element details
1. __Set text__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').setText('text');</code></pre></div>
2. __Set attribute__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').setAttributes('attribute', 'attribute value');</code></pre></div>

<br>

#### Setting browser context
1. __Set Geolocation__ : <div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.setGeolocation({latitude: <value>, longitude: <value>, accuracy: 100});
</code></pre></div>

Refer to this [guide][3] for detailed examples. 

<div class="alert alert-info">You can also write custom commands with Nightwatch.<a href="/guide/extending-nightwatch/adding-custom-commands.html">Try now</a>
</div>


### Assertions

The main point of writing automated tests is setting assertions to pass. There are 2 ways to do assertions with Nightwatch

You can use the built-in assertions
1. __Text equals__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').assert.textEquals('text');</code></pre></div>
2. __Text contains__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').assert.textContains('text');</code></pre></div>
3. __Text matches__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').assert.textMatches('regex');</code></pre></div>
4. __Value equals__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').assert.valueEquals('text');</code></pre></div>
5. __Value contains__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').assert.valueContains('text');</code></pre></div>
6. __Value matches__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').assert.valueMatches('regex');</code></pre></div>
7. __URL equals__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.assert.urlEquals('text');</code></pre></div>
8. __URL contains__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.assert.urlContains('text');</code></pre></div>
9. __URL matches__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.assert.urlMatches('regex');</code></pre></div>
10. __Visible__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">browser.element.find('selector').assert.visible();</code></pre></div>

<div class="alert alert-info">If these assertions don’t suffice, you can write your own custom assertions. <a href="/guide/extending-nightwatch/adding-custom-assertions.html">Learn how</a>
</div>

### Chai expects

If you prefer Chai style asserts, you can also use the expect() to perform assertions

1. __Text equals__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">expect(element).text.to.equal();</code></pre></div>
2. __Text contains__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">expect(element).text.to.contain();</code></pre></div>
3. __Text equals__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">expect(element).text.to.match();</code></pre></div>
4. __Value equals__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">expect(element).value.to.equal();</code></pre></div>
5. __Value contains__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">expect(element).value.to.contain();</code></pre></div>
6. __Value equals__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">expect(element).value.to.match();</code></pre></div>
7. __URL equals__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">expect(brower.url()).to.equal();</code></pre></div>
8. __URL contains__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">expect(brower.url()).to.contain();</code></pre></div>
9. __URL matches__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">expect(brower.url()).to.match();</code></pre></div>
10. __Visible__ :<div class="sample-test"><pre class="line-numbers"><code class="language-javascript">expect(element).to.be.visible();</code></pre></div>

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
[4]:    /guide/writing-tests/adding-assertions.html
[5]:    /guide/writing-tests/nightwatch-inspector.html


[image-1]:  https://user-images.githubusercontent.com/1677755/220278494-7ca02bb0-6944-47bf-b459-92ffdc9ad38c.png

