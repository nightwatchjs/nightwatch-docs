---
title: Commands for websites or web apps
description:  Introduction to commands that can be used for websites or web apps
---

<div class="page-header"><h1>Commands for websites or web apps</h1></div>

### Overview

Using commands, you can interact with web elements. Before using commands, it is mandatory to find the element 1st . Please refer to this [guide][1] to understand to find elements using selectors. Commands can be categorized in 4 buckets
1. Element interactions
2. Get element details
3. Update element details
4. Setting browser context

### Click

To click on an element,simply use `browser.element.find('selector').click()`.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Click on the sign in button
browser.element.findByText('Sign In').click();
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Click on the sign in button
browser.element.findByText('Sign In').click();
</code></pre>
</div>

### Double Click

To double click on an element,you can use `browser.element.find('selector').doubleClick()`.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Double click on the sign in button
browser.element.findByText('Sign In').doubleClick();
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Double click on the sign in button
browser.element.findByText('Sign In').doubleClick();
</code></pre>
</div>

### Right Click

You can right click on an element using `browser.element.find('selector').rightClick()`.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Right click on the options button
browser.element.findByText('options').rightClick();
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Right click on the options button
browser.element.findByText('options').rightClick();
</code></pre>
</div>

### Send Keys

You can type values into input fields by using `browser.element.find('selector').sendKeys('text')`. Instead of passing text you can also pass an array of texts. To use key constants such as `Enter` or `Space`, you can use `browser.keys.CONSTANT_NAME`. You can find all key press constants [here][2]

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Type in 'Nightwatch' into input field search
browser.element.findByPlaceholderText('search').sendKeys('Nightwatch');
<br>
//or
<br>
// Type in 'John Doe' into the username field and press enter
browser.element.findByLabelText('username').sendKeys(['Nightwatch', browser.Keys.ENTER]);
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Type in 'Nightwatch' into input field search
browser.element.findByPlaceholderText('search').sendKeys('Nightwatch');
<br>
or
<br>// Type in 'John Doe' into the username field and press enter
browser.element.findByLabelText('username').sendKeys(['Nightwatch', browser.Keys.ENTER]);
</code></pre>
</div>

### Set Value

You can set the value attribute of an element by using `browser.element.find('selector').setValue('value')`.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Set the value of input field search as 'Nightwatch'
browser.element.findByPlaceholderText('search').setValue('Nightwatch');
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Set the value of input field search as 'Nightwatch'
browser.element.findByPlaceholderText('search').setValue('Nightwatch');
</code></pre>
</div>

### Clear

You clear the value of an element by using `browser.element.find('selector').clear()`.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Clear the value of input field search
browser.element.find('#search').clear();
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Clear the value of input field search
browser.element.find('#search').clear();
</code></pre>
</div>

### Get element details

You can get details of elements by using the following methods 
1. Get text - `browser.element.find('selector').getText()`
2. Get value - `browser.element.find('selector').getValue()`
3. Get tag name - `browser.element.find('selector').getTagName()`
4. Get attribute - `browser.element.find('selector').getAttribute()`
5. Get CSS property - `browser.element.find('selector').getCssProperty()`
6. Get ID - `browser.element.find('selector').getId()`
7. Get Accessibility name - `browser.element.find('selector').getAccessibilityName()`
8. Get rect - `browser.element.find('selector').getRect()`

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Get the text of the header
browser.element.find('#header').getText();
<br>
// Get the value of the input field
browser.element.find('#input').getValue();
<br>
// Get the tag name of an element
browser.element.findByRole('link').getTagName();
<br>
// Get the style attribute of an element
browser.element.find('#element').getAttribute('style');
<br>
// Get the background-color of an element
browser.element.find('#element').getCssProperty('background-color');
<br>
// Get the id of an element
browser.element.find('#element').getId();
<br>
// Get the accessibility name of an element
browser.element.find('#element').getAccessibilityName();
<br>
// Get the rectangle bounding box of an element
browser.element.find('#element').getRect();
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Get the text of the header
browser.element.find('#header').getText();
<br>
// Get the value of the input field
browser.element.find('#input').getValue();
<br>
// Get the tag name of an element
browser.element.findByRole('link').getTagName();
<br>
// Get the style attribute of an element
browser.element.find('#element').getAttribute('style');
<br>
// Get the background-color of an element
browser.element.find('#element').getCssProperty('background-color');
<br>
// Get the id of an element
browser.element.find('#element').getId();
<br>
// Get the accessibility name of an element
browser.element.find('#element').getAccessibilityName();
<br>
// Get the rectangle bounding box of an element
browser.element.find('#element').getRect();
</code></pre>
</div>


### Set element details

In the previous section, you learnt how to fetch attributes of an element. You can also set values of an element with the following methods
1. Set text - `browser.element.find('selector').setText('text')`
2. Set attribute - `browser.element.find('selector').setAttributes('attribute', 'attribute value')`

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Set the text of header as 'Nightwatch'
browser.element.find('#headeer').setText('Nightwatch');
<br>
// Set the style of button as "display:none;"
browser.element.find('#button').setAttribute('style','display:none;');
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Set the text of header as 'Nightwatch'
browser.element.find('#headeer').setText('Nightwatch');
<br>
// Set the style of button as "display:none;"
browser.element.find('#button').setAttribute('style','display:none;');
</code></pre>
</div>


### Geolocation

You can use browser level method `.setGeolocation()` to simulate traffic from a particular latitude and longitude

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Set the latitude & longitude of the prime meridian
browser.setGeolocation({latitude: 51.4780, longitude: 0.0014, accuracy: 100})
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Set the latitude & longitude of the prime meridian
browser.setGeolocation({latitude: 51.4780, longitude: 0.0014, accuracy: 100})
</code></pre>
</div>

### Custom commands

If the existing Nightwatch commands do not suffice your needs or if you want to reduce some complex logic into a single command, you can even write your own custom commands. Refer to this [guide][3]

### Recommended next steps

Now that you understand selectors and commands,you can proceed towards understanding how assertions work with Nightwatch  

[Assertions][4]

[1]:  /guide/writing-tests/selectors.html
[2]:  https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Key.html
[3]:  /guide/extending-nightwatch/adding-custom-commands.html
[4]:  /guide/writing-tests/adding-assertions.html



