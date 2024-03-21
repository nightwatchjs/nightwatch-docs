## Ensure API

### Overview

The new `.ensure` API available since Nightwatch 2.0 is mapping the existing [until](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html) module from Selenium.

It works similar to the existing `.assert` library and provides much of the same functionality, but it might offer an extra level of flexibility. It may also be more familiar to users already working with the `until` api from Selenium..

<h5>Basic Example:</h5>
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('demo test for .ensure', function() {

  it('basic test', function(browser) {
    browser
      .url('https://nightwatchjs.org')
      .ensure.titleMatches(/Nightwatch\.js/)
      .ensure.elementIsVisible('#index-container')  
  });
});</code></pre></div>

### Available Assertions

<div class="apimethod">
  <h3>.ableToSwitchToFrame(<code>frame</code>)</h3>

  <p>Ensures that the Nightwatch WebDriver client is able to switch to the designated frame.</p>

  <h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.alertIsPresent()</h3>

  <p>Creates a condition that waits for an alert to be opened.</p>

<h5>Parameters:</h5>
None
</div>

<div class="apimethod">
  <h3>.elementIsDisabled(<code>element</code>)</h3>

  <p>Creates a condition that will wait for the given element to be disabled.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementIsEnabled(<code>element</code>)</h3>

  <p>Creates a condition that will wait for the given element to be enabled.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementIsNotSelected(<code>element</code>)</h3>

  <p>Creates a condition that will wait for the given element to be deselected.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementIsNotVisible(<code>element</code>)</h3>

  <p>Creates a condition that will wait for the given element to be in the DOM, yet not displayed to the user.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementIsNotVisible(<code>element</code>)</h3>

  <p>Creates a condition that will wait for the given element to be in the DOM, yet not displayed to the user.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementIsSelected(<code>element</code>)</h3>

  <p>Creates a condition that will wait for the given element to be selected.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementIsVisible(<code>element</code>)</h3>

  <p>Creates a condition that will wait for the given element to be displayed.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementLocated(<code>locator</code>)</h3>

  <p>Creates a condition that will loop until an element is found with the given locator.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementTextContains(<code>element</code>, <code>substr</code>)</h3>

  <p>Creates a condition that will wait for the given element's text to contain the given substring.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementTextIs(<code>element</code>, <code>text</code>)</h3>

  <p>Creates a condition that will wait for the given element's text to equal the given text.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementTextMatches(<code>element</code>, <code>regex</code>)</h3>

  <p>Creates a condition that will wait for the given element's text to match a given regular expression.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.elementsLocated(<code>locator</code>)</h3>

  <p>Creates a condition that will loop until at least one element is found with the given locator.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.stalenessOf(<code>element</code>)</h3>

<p>Creates a condition that will wait for the given element to become stale. An element is considered stale once it is removed from the DOM, or a new page has loaded.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.titleContains(<code>substr</code>)</h3>

<p>Creates a condition that will wait for the current page's title to contain the given substring.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.titleIs(<code>substr</code>)</h3>
  <p>Creates a condition that will wait for the current page's title to match the given value.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.titleMatches(<code>regex</code>)</h3>
  <p>Creates a condition that will wait for the current page's title to match the given regular expression.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.urlContains(<code>substrUrl</code>)</h3>
  <p>Creates a condition that will wait for the current page's url to contain the given substring.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.urlIs(<code>url</code>)</h3>
  <p>Creates a condition that will wait for the current page's url to match the given value.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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
  <h3>.urlMatches(<code>regex</code>)</h3>
  <p>Creates a condition that will wait for the current page's url to match the given regular expression.</p>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
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