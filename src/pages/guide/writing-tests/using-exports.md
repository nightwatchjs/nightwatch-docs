## Writing Tests

### <span>Using "exports" Interface</span>

Nightwatch makes it very easy to write automated End-to-End tests using the preferred CSS selector model to locate elements on a page.

Create a separate folder for tests in your project, e.g.: `tests`. Each file inside it will be loaded as a test suite by the Nightwatch test runner.

#### Basic Example

Here's a basic test suite example which opens the search engine [Ecosia.org][1], searches for the term "nightwatch", then verifies if the term first result is the Nightwatch.js website.

```js module.exports = {
  'Demo test ecosia.org' : function(browser) {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};```
</div>
<br/>

A test can have multiple steps, if needed:<br/><br/>


```js module.exports = {
  'step one: navigate to ecosia.org': function(browser) {
    browser
      .url('https://www.ecosia.org')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]');
  },

  'step two: click submit' : function (browser) {
    browser
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};```

- Next: [Using BDD describe](https://nightwatchjs.org/guide/using-nightwatch/using-bdd-describe.html)

[1]: https://www.ecosia.org/
