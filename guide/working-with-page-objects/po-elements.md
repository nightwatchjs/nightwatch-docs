### Defining Elements

Most of the time, you will want to define elements on your page that your tests will interact with through commands and assertions. This is made simple using the `elements` property so that all your elements are defined in a single place. Especially in larger integration tests, using `elements` will go a long way to keep test code DRY.

Switching between css and xpath locate strategies is handled internally so you don't need to call `useXpath` and `useCss` in your tests. The default `locateStrategy` is css but you can also specify xpath:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  elements: {
    searchBar: { 
      selector: 'input[type=text]' 
    },
    submit: { 
      selector: '//[@name="q"]', 
      locateStrategy: 'xpath' 
    }
  }
};
</code></pre>
</div>

<br>
Or if you're creating elements with the same locate strategy as is default, you can use the shorthand:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  elements: {
    searchBar: 'input[type=text]'
  }
};
</code></pre>
</div>

<br>
Using the `elements` property allows you to refer to the element by its name with an _"@" prefix_, rather than selector, when calling element commands and assertions (`click`, etc).

Putting `elements` and `url` together, say you have the following defined above saved as a `google.js` file:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  url: 'http://google.com',
  elements: {
    searchBar: { 
      selector: 'input[type=text]' 
    },
    submit: { 
      selector: '//[@name="q"]', 
      locateStrategy: 'xpath' 
    }
  }
};
</code></pre>
</div>

<br>
In your tests you will use it as follows:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Test': function (client) {
    var google = client.page.google();
    
    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');

    client.end();
  }
};
</code></pre>
</div>