## Writing Page-specific Custom Commands

You can add custom commands to your page object using the `commands` property. This is a useful way to encapsulate logic about the page that would otherwise live in a test, or multiple tests.

Nightwatch will call the command on the context of the page or section. Client commands like `pause` are available via `this.api`. For chaining, each function should return the page object or section.

In this case, a command is used to encapsulate logic for clicking the submit button:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
const googleCommands = {
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
</code></pre></div>

### Class-based page commands
From Nightwatch 2 it is also possible to export the page commands as an ES6 class.

Here's a basic example:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">module.exports = class {

  basicCommand() {
    return {
      basicResult: 'from-helper-class'
    };
  }

  dropdownSelect() {
    return this;
  }

  dropdownSelectByText() {
    return this;
  }

  name() {
    return this;
  }
};
</code></pre></div>

And for a more elaborate example... You can referrence the main page object via `this.page`. The class will be instantiated automatically, you don't need to do anything else besides writing it:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">module.exports = class RealCommands {

  customFindElements(selector, callback = function(r) {return r}) {
    return this.page.findElements({
      selector,
      suppressNotFoundErrors: true
    }, function(result) {
      return callback(result ? result.value: []);
    });
  }

  async customFindElementsES6(selector) {
    const result = await this.page.findElements({
      selector,
      suppressNotFoundErrors: true
    });

    return result;
  }
};
</code></pre></div>
