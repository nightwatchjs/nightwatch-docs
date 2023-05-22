## Using Page Objects

The Page Objects methodology is a popular pattern to write end-to-end tests by wrapping the pages or page fragments of a web app into objects.
The purpose of a page object is to allow a software client to do anything and see anything that a human can by abstracting away the underlying html actions needed to access and manipulate the page.

A comprehensive introduction to Page Objects can be found in <a href="https://martinfowler.com/bliki/PageObject.html" target="_blank">this article</a>.

<div class="alert alert-warning">
As of version `1.0` Nightwatch does not support legacy page objects written prior to version `0.7`.
</div>

### Configuring Page Objects

To create a page object simply create an object with properties that describe the page. Each page object should be located in a separate file, located in a designated folder. Nightwatch reads the page objects from the folder (or folders) specified in the `page_objects_path` configuration property.

The `page_objects_path` property can also be an array of folders, allowing you thus to logically split the page objects into smaller groups.

#### The Url property

You can optionally add a `url` property that designates the page's URL. To navigate to the page, you can call the `navigate` method on the page object.

The URL will usually be defined as a string:

```js
module.exports = {
  url: 'https://google.com',
  elements: {}
};
```

It can also be a function in case the URL is dynamic. One use case for this is to support different test environments. You can create a function that gets called in the context of the page, thus allowing you to do:

```js
module.exports = {
  url: function() {
    return this.api.launchUrl + '/login';
  },
  elements: {}
};
```
