---
title: Selectors for native mobile app tests
description:  Introduction to selectors to find elements for native mobile apps.
---

<div class="page-header"><h1>Selectors for native mobile apps test</h1></div>

### Overview

Selectors are at the core of finding elements before you can interact with them or assert using them. Nightwatch supports the following selectors strategies, which can be used to locate your elements:
- id
- xpath

### ID

This is the native element id i.e. `resource-id` on Android & `name` for iOS . Even if you don’t have access to the code base, you can very easily find the ID using the Appium Inspector tool. 

![Example of ID selector][image-1]

As you can see the highlighted element has an id value `org.wikipedia:id/search_src_text`.

To interact with that element, selector strategy would be `id` and selector string would be `org.wikipedia:id/search_src_text`.

### XPath

Apart from ID, you can also locate an element using the XPath.

![Example of xPath selector][image-2]

Xpath in Appium analyzes the XML structure of the app and then locates the element. Xpath should only be used when there is no ID, Name, or accessibility ID assigned to a specific UI element. Although XPath allows for the formulation of complex queries, using XPath is not recommended because it has stability and performance issues (as mentioned in the [official documentation][1]).

### Selecting nth element

Nightwatch selectors also accept a [selector object][2] instead of a string where more options can be provided. You can select an element at nth index from a list of elements. For e.g. in case you have a list with multiple list items, you can select the nth element by sending a selector object instead of a selector string.

<div class="sample-test">
<i>Select nth element</i><pre class="line-numbers"><code class="language-javascript">app.click({selector: 'org.wikipedia:id/page_list_item_title', locateStrategy: 'id', index: n})
</code></pre></div>

### Recommended next steps

Now that you understand selectors, you can use them to write commands & assertions.  

[Command][2] </br>
[Assertions][3]


[1]:  https://appium.io/docs/en/commands/element/find-elements/index.html#selector-strategies
[2]:  https://nightwatchjs.org/guide/writing-tests/finding-interacting-with-dom-elements.html#element-properties
[3]:  /guide/mobile-app-testing/commands.html
[4]:  /guide/mobile-app-testing/assertions.html

[image-1]:  https://user-images.githubusercontent.com/1677755/220292896-8acdac83-47a2-447c-924b-95240959e695.png
[image-2]:  https://user-images.githubusercontent.com/1677755/220293322-e0db2a87-ffd4-4009-8738-709cd91b2be5.png


<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/mobile-app-testing/introduction-writing-tests.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Writing Mobile App Tests</span>
        </div>
    </a>
  </div>
  <div class="doc-pagination justify-content-end pt-40">
  <div class="next">
    <a href="https://nightwatchjs.org/guide/mobile-app-testing/commands.html">
        <div class="d-flex flex-column"><span class="smallT">Next Page</span><span class="bigT">Mobile App Commands</span></div>
        <span>→</span>
    </a>
  </div>
</div>
</div>

