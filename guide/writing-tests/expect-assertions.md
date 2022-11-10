<h3 id="expect-assertions"><span>Expect assertions</span></h3>

In addition to the `assert` namespace, the Nightwatch API supports out of the box a BDD-style `expect` assertion library which greatly improves the flexibility as well as readability of the assertions.

The `expect` assertions use a subset of the `Expect` api from the [Chai framework][12] and at this point are available for elements, cookies, page title, and url.

#### Element expect example
Here a basic example that uses various `expect.element([...])` assertions: 

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test Ecosia.org': function (browser) {
    browser.url('https://www.ecosia.org/');

    // expect element header to be present in 1000ms
    browser.expect.element('header').to.be.present.before(1000);

    // expect element header to have css property 'display'
    browser.expect.element('header').to.have.css('display');

    // expect element header to have attribute 'class' which contains text 'index-header'
    browser.expect.element('header').to.have.attribute('class').which.contains('index-header');

    // expect element .search-form to be an input tag
    browser.expect.element('.search-form').to.be.a('form');

    // expect element header to be visible
    browser.expect.element('header').to.be.visible;

    browser.end();
  }
};
</code></pre>
</div>

#### Expecting a specific elements count
In this example, the test is expecting that a specified number of elements exist on the page, using the `expect.elements([...]).count` assertion:  

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">module.exports = {
  'demo test ecosia.org'(browser) {
    browser
      .url('https://www.ecosia.org/')
      .expect.elements('section').count.to.equal(5);
  },
  
  after(browser) {
    browser.end();
  }
};
</code></pre>
</div>

<br>
The `expect` interface provides a much more flexible and fluid language for defining assertions, significantly improved over the existing `assert` interface. The only downside is that it's not possible to chain assertions anymore.

<br>
For a complete list of available `expect` assertions, refer to the [API docs][13].

- Previous: [Writing Assertions](https://nightwatchjs.org/guide/using-nightwatch/writing-assertions.html)
- Next: [Using XPath selectors](https://nightwatchjs.org/guide/using-nightwatch/using-xpath-selectors.html)

[12]:	https://chaijs.com/api/bdd/
[13]:	/api/#expect-api
