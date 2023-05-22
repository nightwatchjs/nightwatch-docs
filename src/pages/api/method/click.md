### Examples

#### 1) Clicking a button

The example below navigates to google.com, searches for the term "nightwatch.js" and clicks the submit button.

<div class="sample-test">
```js

module.exports = {
  before : function(browser) {
    // see <https://github.com/nightwatchjs/nightwatch/blob/main/examples/globalsModule.js#L12>
    browser.globals.waitForConditionTimeout = 5000;
  },

  'click example test' : function (browser) {

    browser
      .url('https://google.com')
      .waitForElementVisible('input[type=text]')
      .setValue('input[type=text]', 'nightwatch.js')
      .click('button[type=submit]', function(result) {
        this.assert.strictEqual(result.status, 0);
      })
      .expect.element('#rcnt').text.to.contain('nightwatchjs.org/');
  },

  after : function(browser) {
    browser.end();
  }
};

```
</div>

#### Output
<div class="sample-test">
<pre data-language="javascript">
[Click] Test Suite
======================

Running:  clearValue example test
 ✔ Element <input[type=text]> was visible after 67 milliseconds.
 ✔ Passed [strictEqual]: 0 === 0
 ✔ Expected element <#rcnt> text to contain: "nightwatchjs.org/" - condition was met in 768ms

OK. 3 assertions passed. (5.277s)
</pre>
</div>

#### 2) Selecting an option from a list

The `click` command is also used to select an option from a drop down list. The example below navigates to https://www.w3.org and selects the "All" option from the regions drop down.

<div class="sample-test">
```js

module.exports = {
  before : function(browser) {
    // see https://github.com/nightwatchjs/nightwatch/blob/main/examples/globalsModule.js#L12
    browser.globals.waitForConditionTimeout = 5000;
  },

  'click option from drop down list' : function (browser) {

    browser
      .url('https://www.w3.org/')
      .waitForElementVisible('#region_form')
      .click('#region_form select')
      .click('#region_form select option[value="all"]')
      .click('input[type=submit]', function(result) {
        this.assert.strictEqual(result.status, 0);
      });
  },

  after : function(browser) {
    browser.end();
  }
};

```

</div>

#### Output

<div class="sample-test">
<pre data-language="javascript">
[Click Options] Test Suite
==============================

Running:  click option from drop down list
 ✔ Element <#region_form> was visible after 64 milliseconds.
 ✔ Passed [strictEqual]: 0 === 0

OK. 2 assertions passed. (6.203s)
</pre>
</div>

### Possible Errors

- ```element not visible``` - if the referenced element is not visible on the page (either hidden by CSS, has 0-width, or has 0-height or it is not within the viewport).

Full error details are available when running nightwatch with `--verbose` flag.
