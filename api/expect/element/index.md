## Expect API

### Overview

Nightwatch provides a fluent BDD-style interface for performing assertions on elements, defined on the `expect` namespace on the main Nightwatch instance.
It is based on the <a href="https://chaijs.com/api/bdd/" target="_blank">Chai Expect</a> assertion library and provides a greater level of flexibility,
also adding new capabilities over the classic `assert` interface.

It uses a chain-able language to construct assertions given an element specified by a css/xpath selector. A simple example looks like the following:

```javascript
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