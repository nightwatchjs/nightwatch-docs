## .expect API

### Overview

Nightwatch provides a fluent BDD-style interface for performing assertions on elements, defined on the <code>expect</code> namespace on the main Nightwatch instance. It is based on the <a href="https://chaijs.com/api/bdd/" target="_blank">Chai Expect</a> assertion library and provides a greater level of flexibility, also adding new capabilities over the classic <code>assert</code> interface.

It uses a chain-able language to construct assertions given an element specified by a css/xpath selector. A simple example looks like the following:

```js
describe('expect example', function() {
  it('sample test', function (browser) {
    // start with identifying the element
    // and then assert the element is present
    browser.expect.element('#main').to.be.present;

    // or assert the element is visible
    browser.expect.element('#main').to.be.visible;
  });
}

```

### Language Chains

The following are provided as chainable getters to improve the readability of your assertions. They do not provide testing capabilities and the order is not important.

- to
- be
- been
- is
- that
- which
- and
- has
- have
- with
- at
- does
- of

### .equal(`value`)/.contain(`value`)/.match(`regex`)

<p>These methods will perform assertions on the specified target on the current element. The targets can be an attribute value, the element's inner text and a css property.</p>

```js
this.demoTest = function (browser) {
  browser.expect.element('#main').text.to.equal('The Night Watch');

  browser.expect.element('#main').text.to.contain('The Night Watch');

  browser.expect.element('#main').to.have.css('display').which.equals('block');
};

```

### .startWith(`value`)/.endWith(`value`)

<p>Same as `equal` / `contain` / `match`.</p>

```js
this.demoTest = function (browser) {
  browser.expect.element('#main').text.to.endWith('Watch');

  browser.expect.element('#main').text.to.startWith('The');
};

```

### .not

  <p>Negates any of assertions following in the chain.</p>

```js
this.demoTest = function (browser) {
  browser.expect.element('#main').text.to.not.equal('The Night Watch');

  browser.expect.element('#main').text.to.not.contain('The Night Watch');

  browser.expect.element('#main').to.have.css('display').which.does.not.equal('block');
};

```

### .before(`ms`)/.after(`ms`)

  <p>These methods perform the same thing which is essentially retrying the assertion for the given amount of time (in milliseconds). <code>before</code> or <code>after</code> can be chained to any assertion and thus adding retry capability.</p>

  <p>You can change the polling interval by defining a <code>waitForConditionPollInterval</code> property (in milliseconds) as a global property in your <code>nightwatch.json</code> or in your external globals file.
  Similarly, a default timeout can be specified as a global <code>waitForConditionTimeout</code> property (in milliseconds).</p>

```js
this.demoTest = function (browser) {
  browser.expect.element('#main').text.to.contain('The Night Watch').before(1000);

  browser.expect.element('#main').text.to.not.contain('The Night Watch').after(500);
};

```
