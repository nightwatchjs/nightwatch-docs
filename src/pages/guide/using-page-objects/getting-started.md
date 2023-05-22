---
title: Getting Started with Page Objects
description: Learn how to get started and use page objects in Nightwatch.
---

# Getting Started with Page Objects

### Overview

To create a page object simply create an object with properties that describe the page. Each page object should be located in a separate file.

### Configure page objects location

Nightwatch reads the page objects from the folder (or folders) specified in the `page_objects_path` configuration property, e.g.:

nightwatch.json

```js
{
  "page_objects_path": ["nightwatch/pages"]
}

```

The `page_objects_path` property can also be an array of folders, allowing you thus to logically split the page objects into smaller groups.

### Set the .url property

You can optionally add a `url` property that designates the page's URL. To navigate to the page, you can call the `navigate` method on the page object.

The URL will usually be defined as a string:

nightwatch/pages/examplePage.js

```js
module.exports = {
  url: 'https://google.com',
  elements: {}
};
```

It can also be a function in case the URL is dynamic. One use case for this is to support different test environments. You can create a function that gets called in the context of the page, thus allowing you to do:

nightwatch/pages/examplePage.js

```js
module.exports = {
  url: function() {
    return this.api.launchUrl + '/login';
  },
  elements: {}
};
```

### Recommended content

- [Define page elements](https://nightwatchjs.org/guide/using-page-objects/defining-elements.html)
- [Define sections](https://nightwatchjs.org/guide/using-page-objects/defining-sections.html)
- [Add page-specific commands](https://nightwatchjs.org/guide/using-page-objects/writing-page-specific-commands.html)
- [Concepts > Page object model](https://nightwatchjs.org/guide/concepts/page-object-model.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/writing-tests/chrome-devtools-recorder.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Using Chrome Devtools Recorder</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/using-page-objects/defining-elements.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Define elements</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
