---
title: Selectors for websites & web apps
description:  Introduction to selectors to find elements for websites & web apps.
---

<div class="page-header"><h1>Selectors for websites & web apps</h1></div>

### Overview

The 1st step towards writing any web interaction is to find an element. Selectors are needed to find the element from the DOM tree. With Nightwatch v3, the selectors have been upgraded to make it even more simpler to find elements. V3 also introduces chaining of `.find()` commands to be able to locate nested elements with ease.

### CSS Selectors

You can easily find elements within the DOM tree using CSS selectors. There are multiple types of simple & complex CSS selectors that Nightwatch supports. Some common examples include
1. id based
2. class based
3. element class based
4. nested

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Find an element which contains id = element-id
browser.element.find('#element-id');
<br>
// Find all elements with CSS class active
browser.element.findAll('.active');
<br>
// Find all &lt;p&gt; elements with class active
browser.element.find('p.active');
<br>
// Find element with class active nested within an element with id list
browser.element.find('#id &gt; .active');
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Find an element which contains id = element-id
browser.element.find('#element-id');
<br>
// Find all elements with CSS class active
browser.element.findAll('.active');
<br>
// Find all &lt;p&gt; elements with class active
browser.element.find('p.active');
<br>
// Find element with class active nested within an element with id list
browser.element.find('#id &gt; .active');
</code></pre>
</div>

### XPath Selectors

XPath is a query language for selecting nodes from an XML document based on their location and properties. You can use XPaths to locate elements within the DOM tree. 

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Find an element with XPath
browser.element.find(by.xpath('xpath string'))
<br>
// Find all elements with XPath
browser.element.findAll(by.xpath('xpath string'))
</code></pre>

<pre data-language="typescript"><code class="language-typescript">

</code></pre>
</div>

<div class="alert alert-info">We do not recommend the use of XPath selectors as it can break your tests frequently
</div>

You can learn more about XPath selectors [out here][1].

### Text based

Text based selectors are a very natural way of finding elements. 

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Find an element with text 'Sign In'
browser.element.findByText('Sign In');
<br>
// Find all elements with text 'Sign In'
browser.element.findAllByText('Sign In');
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Find an element with text 'Sign In'
browser.element.findByText('Sign In');
<br>
// Find all elements with text 'Sign In'
browser.element.findAllByText('Sign In');
</code></pre>
</div>

<div class="alert alert-info">Using text based selectors can be problematic if the website or web app has internationalization
</div>

### Placeholder text based

Placeholder texts are common within form elements or search bars. Let's see how you can find elements which contain placeholder text 'Search here...'

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Find the search bar with placeholder text 'Search here...'
browser.element.findByPlaceholderText('Search here...');
<br>
// Find all elements with placeholder text 'Enter here'
browser.element.findAllByPlaceholderText('Enter here');
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Find the search bar with placeholder text 'Search here...'
browser.element.findByPlaceholderText('Search here...');
<br>
// Find all elements with placeholder text 'Enter here'
browser.element.findAllByPlaceholderText('Enter here');
</code></pre>
</div>

### Alt text based

Alt texts are common with media within a page. You can easily find such elements with alt text based methods. 

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Find the element with alt text 'cat-image'
browser.element.findByAltText('cat-image');
<br>
// Find all elements with alt text 'cat-image'
browser.element.findAllByAltText('cat-image');
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Find the element with alt text 'cat-image'
browser.element.findByAltText('cat-image');
<br>
// Find all elements with alt text 'cat-image'
browser.element.findAllByAltText('cat-image');
</code></pre>
</div>

### Inputs based on labels

Sometimes form inputs might not contain text or placeholder text, but might contain labels as shown below

![Label][image-1]

You can easily find the input element related to the label `First Name` by using label based methods

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Find the input element associated with label 'First Name'
browser.element.findByLabelText('First Name');
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Find the input element associated with label 'First Name'
browser.element.findByLabelText('First Name');
</code></pre>
</div>

### Selecting nth element

If you need to find an element at a specific index from a list of elements, Nightwatch provides a convenience method `.nth`

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">// Find the 2nd element from all ul elements
browser.element.findAll('ul').nth(2);
</code></pre>

<pre data-language="typescript"><code class="language-typescript">// Find the 2nd element from all ul elements
browser.element.findAll('ul').nth(2);
</code></pre>
</div>

### Recommended next steps

Now that you understand selectors, you can use them to write commands & assertions.  

[Command][2] </br>
[Assertions][3]


[1]:  /guide/writing-tests/using-xpath-selectors.html
[2]:  /guide/writing-tests/commands.html
[3]:  /guide/writing-tests/adding-assertions.html

[image-1]:  https://github.com/nightwatchjs/nightwatch/assets/1677755/00a723d4-c244-4103-aae4-a705ba397302

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/writing-tests/commands.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Commands</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/adding-assertions.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Assertions</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>

