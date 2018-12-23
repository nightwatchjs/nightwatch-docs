### Expect Assertions

The Nightwatch API supports out of the box a BDD-style `expect` assertion library which greatly improves the flexibility as well as readability of the assertions.

The `expect` assertions use a subset of the `Expect` api from the [Chai framework](http://chaijs.com/api/bdd/) and are available for elements only at this point. Here's an example:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://google.no')
      .pause(1000);

    // expect element <body> to be present in 1000ms
    browser.expect.element('body').to.be.present.before(1000);

    // expect element <#lst-ib> to have css property 'display'
    browser.expect.element('#lst-ib').to.have.css('display');

    // expect element <body> to have attribute 'class' which contains text 'vasq'
    browser.expect.element('body').to.have.attribute('class').which.contains('vasq');

    // expect element <#lst-ib> to be an input tag
    browser.expect.element('#lst-ib').to.be.an('input');

    // expect element <#lst-ib> to be visible
    browser.expect.element('#lst-ib').to.be.visible;

    browser.end();
  }
};
</code></pre>
</div>

<br>
The `expect` interface provides a much more flexible and fluid language for defining assertions, significantly improved over the existing `assert` interface. The only downside is that it's not possible to chain assertions anymore and at this point custom messages aren't yet supported.

<br>
For a complete list of available `expect` assertions, refer to the [API docs](/api/#expect-api).
