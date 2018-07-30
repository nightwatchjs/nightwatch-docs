### Writing Commands

You can add commands to your page object using the `commands` property. This is a useful way to encapsulate logic about the page that would otherwise live in a test, or multiple tests.

Nightwatch will call the command on the context of the page or section. Client commands like `pause` are available via `this.api`. For chaining, each function should return the page object or section.

In this case, a command is used to encapsulate logic for clicking the submit button:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
var googleCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@submitButton', 1000)
      .click('@submitButton')
      .waitForElementNotPresent('@submitButton');
  }
};

module.exports = {
  commands: [googleCommands],
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submitButton: {
      selector: 'input[name=btnK]'
    }
  }
};
</code></pre>
</div>

<br>
Then the test is simply:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (browser) {
    var google = browser.page.google();
    google.setValue('@searchBar', 'nightwatch')
      .submit();

    browser.end();
  }
};
</code></pre>
</div>
