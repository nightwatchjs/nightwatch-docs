### <span>ES6 async/await</span>

Starting with version `v1.1` it is also possible to write tests as an ES6 [async function][8].
Simply by doing so, it will enable the API commands to return a promise and thus making it possible to use the [`await`][9] operator to retrieve the result, instead of the callback, as it is by default.

This greatly improves the readability and ease of writing of tests. Chaining the API commands when using an async function is possible since version 1.7.

```js module.exports = {
  'demo test async': async function (browser) {
    // get the available window handles
    const result = await browser.windowHandles();
    console.log('result', result);

    // switch to the second window
    // await is not necessary here since we're not interested in the result
    browser.switchWindow(result.value[1]);
  }
};```

#### Callbacks and async testcases

Callbacks can still be used as before and if the callback returns a `Promise`, the result of the promise will be the result of the command. See below for an example:


```js module.exports = {
  'demo test async': async function (browser) {
    // get the available window handles
    const value = await browser.windowHandles(function(result) {
      // we only want the value, not the entire result object
      return Promise.resolve(result.value);
    });

    console.log('value', value);

    // switch to the second window
    browser.switchWindow(value[1]);
  }
};```

- Previous: [Using BDD describe](https://nightwatchjs.org/guide/using-nightwatch/using-bdd-describe.html)
- Next: [Finding & Interacting with Elements](https://nightwatchjs.org/guide/using-nightwatch/finding-and-interacting-with-elements.html)

[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
