---
title: Page Object Model
description: Learn how to create and use page objects in Nightwatch.
---

<div class="page-header"><h1>Page Object Model</h1></div>

The Page Objects methodology is a popular pattern to write end-to-end tests by wrapping the pages or page fragments of a web app into objects.

The purpose of a page object is to allow a software client to do anything and see anything that a human can by abstracting away the underlying html actions needed to access and manipulate the page.

A comprehensive introduction to Page Objects can be found in <a href="https://martinfowler.com/bliki/PageObject.html" target="_blank">this article</a>.

### Configure page objects

To create a page object simply create an object with properties that describe the page. Each page object should be located in a separate file, located in a designated folder. 

Nightwatch reads the page objects from the folder (or folders) specified in the `page_objects_path` configuration property, e.g.:

<div class="sample-test">
<i>nightwatch.json</i><pre class="line-numbers"><code class="language-javascript">{
  "page_objects_path": ["nightwatch/pages"]
}
</code></pre></div>

The `page_objects_path` property can also be an array of folders, allowing you thus to logically split the page objects into smaller groups.


#### The Url property

You can optionally add a `url` property that designates the page's URL. To navigate to the page, you can call the `navigate` method on the page object.

The URL will usually be defined as a string:

<div class="sample-test"><i>nightwatch/pages/examplePage.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  url: 'https://google.com',
  elements: {}
};
</code></pre>
</div>

It can also be a function in case the URL is dynamic. One use case for this is to support different test environments. You can create a function that gets called in the context of the page, thus allowing you to do:

<div class="sample-test"><i>nightwatch/pages/examplePage.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  url: function() { 
    return this.api.launchUrl + '/login'; 
  },
  elements: {}
};
</code></pre>
</div>

### Page elements

Most of the time, you will want to define elements on your page that your tests will interact with through commands and assertions. This is made simple using the `elements` property so that all your elements are defined in a single place. Especially in larger integration tests, using `elements` will go a long way to keep test code DRY.

Switching between css and xpath locate strategies is handled internally so you don't need to call `useXpath` and `useCss` in your tests. The default `locateStrategy` is css but you can also specify xpath.

#### Element Properties

To support greater flexibility in interacting with page object elements, an element can be specified as an object, which needs to contain at least the `selector` property.
Next to the selector, other properties can be specified. Here's the full list:

- `selector` - the element selector name (e.g.: '@searchBar')
- `locateStrategy` - e.g. 'css selector'
- `index` - used to target a specific element in a query that results in multiple elements returned. Normally, only the first element is used (index = 0) but using the `index` property, you can specify any element within the result.
- `abortOnFailure` - used to overwrite this setting when using `waitForElement*` commands
- `timeout` - used to overwrite the default timeout for when using `waitForElement*` commands or assertions
- `retryInterval` - used to overwrite the default retry interval for when using `waitForElement*` commands or assertions
- `suppressNotFoundErrors` - Some element commands like `.click()` or `.getText()` will throw a `NoSuchElement` error if the element cannot be located, causing the test to fail. If this option is set to `true` then this error is ignored.

### Page sections

Sometimes it is useful to define sections of a page. Sections do 2 things:

* Provide a level of namespacing under the page
* Provide element-level nesting so that any element defined within a section is a descendant of its parent section in the DOM

You can create sections using the `sections` property.

### Page-specific commands

You can add custom commands to your page object using the `commands` property. This is a useful way to encapsulate logic about the page that would otherwise live in a test, or multiple tests.

Nightwatch will call the command on the context of the page or section. Client commands like `pause` are available via `this.api`. For chaining, each function should return the page object or section.

From Nightwatch 2 it is also possible to export the page commands as an ES6 class.

### Recommended content
- [Define page elements](https://nightwatchjs.org/guide/using-page-objects/defining-elements.html)
- [Define sections](https://nightwatchjs.org/guide/using-page-objects/defining-sections.html)
- [Add page-specific commands](https://nightwatchjs.org/guide/using-page-objects/writing-page-specific-commands.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/concepts/parallel-testing-in-nightwatch.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Parallel testing in Nightwatch</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/concepts/component-testing.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Component testing</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>