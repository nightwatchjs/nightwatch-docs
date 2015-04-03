### Using Page Objects

The Page Objects methodology is a popular pattern to write end-to-end tests by wrapping the pages or page fragments of a web app into objects. 
The purpose of a page object is to allow a software client to do anything and see anything that a human can by abstracting away the underlying html actions needed to access and manipulate the page.

#### A Simple Page Object

The page object is simply a class which receives the nightwatch object as an argument in the constructor. Each page object needs to be located in a separate file, located into a designated folder.
Nightwatch reads the page objects from the folder specified in the `page_objects_path` configuration property. 
  
The `page_objects_path` property can also be an array of folders, allowing you thus to logically split the page objects into smaller groups.  

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = function (browser) {
  // Each action is written as a separate method which must return the browser
  // object in order to be able to be queued
  this.goToGoogle = function() {
    browser
      .url('http://google.com')
      .waitForElementVisible('body', 1000);

    return browser;
  };
};
</code></pre>
</div>

#### Usage

Say you have the simple page object defined above saved as a `GooglePage.js` file. In your tests you will use it as follows:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (client) {
    client
      .page.GooglePage().goToGoogle()
      .assert.title('Google')
      .end();
  }
};
</code></pre>
</div>

#### Further reading
A comprehensive introduction to Page Objects can be found in <a href="http://martinfowler.com/bliki/PageObject.html" target="_blank">this article</a>. 
