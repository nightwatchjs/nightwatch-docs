## Ensure API

### Overview

The new `.ensure` API available since Nightwatch 2.0 is mapping the existing [until](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html) module from Selenium.

It works similar to the existing `.assert` library and provides much of the same functionality, but it might offer an extra level of flexibility. It may also be more familiar to users already working with the `until` api from Selenium..

##### Basic Example

```js
describe('demo test for .ensure', function() {

  it('basic test', function(browser) {
    browser
      .url('<https://nightwatchjs.org>')
      .ensure.titleMatches(/Nightwatch\.js/)
      .ensure.elementIsVisible('#index-container')
  });
});

```

### Available Assertions

<div class="apimethod">

### .ableToSwitchToFrame(<code>frame</code>)

  <p>Ensures that the Nightwatch WebDriver client is able to switch to the designated frame.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>frame</code></td>
        <td>Number|WebElement|[By](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/by_exports_By.html)</td>
        <td>The frame identifier.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .alertIsPresent()

  <p>Creates a condition that waits for an alert to be opened.</p>

##### Parameters

None
</div>

<div class="apimethod">

### .elementIsDisabled(<code>element</code>)

  <p>Creates a condition that will wait for the given element to be disabled.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element to test.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementIsEnabled(<code>element</code>)

  <p>Creates a condition that will wait for the given element to be enabled.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element to test.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementIsNotSelected(<code>element</code>)

  <p>Creates a condition that will wait for the given element to be deselected.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element to test.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementIsNotVisible(<code>element</code>)

  <p>Creates a condition that will wait for the given element to be in the DOM, yet not displayed to the user.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element to test.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementIsNotVisible(<code>element</code>)

  <p>Creates a condition that will wait for the given element to be in the DOM, yet not displayed to the user.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element to test.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementIsSelected(<code>element</code>)

  <p>Creates a condition that will wait for the given element to be selected.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element to test.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementIsVisible(<code>element</code>)

  <p>Creates a condition that will wait for the given element to be displayed.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element to test.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementLocated(<code>locator</code>)

  <p>Creates a condition that will loop until an element is found with the given locator.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>locator</code></td>
        <td>[By](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/by_exports_By.html)</td>
        <td>The locator to use.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementTextContains(<code>element</code>, <code>substr</code>)

  <p>Creates a condition that will wait for the given element's text to contain the given substring.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element to test.</td>
      </tr>
      <tr>
        <td><code>substr</code></td>
        <td>String</td>
        <td>The substring to search for.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementTextIs(<code>element</code>, <code>text</code>)

  <p>Creates a condition that will wait for the given element's text to equal the given text.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element to test.</td>
      </tr>
      <tr>
        <td><code>text</code></td>
        <td>String</td>
        <td>The expected text.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementTextMatches(<code>element</code>, <code>regex</code>)

  <p>Creates a condition that will wait for the given element's text to match a given regular expression.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element to test.</td>
      </tr>
      <tr>
        <td><code>regex</code></td>
        <td>RegExp</td>
        <td>The regular expression to test against.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .elementsLocated(<code>locator</code>)

  <p>Creates a condition that will loop until at least one element is found with the given locator.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>locator</code></td>
        <td>[By](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/by_exports_By.html)</td>
        <td>The locator to use.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .stalenessOf(<code>element</code>)

<p>Creates a condition that will wait for the given element to become stale. An element is considered stale once it is removed from the DOM, or a new page has loaded.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>element</code></td>
        <td>WebElement</td>
        <td>The element that should become stale.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .titleContains(<code>substr</code>)

<p>Creates a condition that will wait for the current page's title to contain the given substring.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>substr</code></td>
        <td>String</td>
        <td>The substring that should be present in the page title.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .titleIs(<code>substr</code>)

  <p>Creates a condition that will wait for the current page's title to match the given value.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>substr</code></td>
        <td>String</td>
        <td>The expected page title.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .titleMatches(<code>regex</code>)

  <p>Creates a condition that will wait for the current page's title to match the given regular expression.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>regex</code></td>
        <td>RegExp</td>
        <td>The regular expression to test against.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .urlContains(<code>substrUrl</code>)

  <p>Creates a condition that will wait for the current page's url to contain the given substring.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>substrUrl</code></td>
        <td>String</td>
        <td>The substring that should be present in the current URL.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .urlIs(<code>url</code>)

  <p>Creates a condition that will wait for the current page's url to match the given value.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>substrUrl</code></td>
        <td>String</td>
        <td>The expected page url.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="apimethod">

### .urlMatches(<code>regex</code>)

  <p>Creates a condition that will wait for the current page's url to match the given regular expression.</p>

##### Parameters

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>regex</code></td>
        <td>RegExp</td>
        <td>The regular expression to test against.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
