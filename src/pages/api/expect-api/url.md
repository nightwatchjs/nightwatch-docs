## expect.url()

<div class="apimethod">

Retrieves the page url value in order to be used for performing `equal`, `match` or `contains` assertions on it.

##### Usage

```js
this.demoTest = function (browser) {
  browser.expect.url().to.contain('https://');
  browser.expect.url().to.endWith('.org');
};
```

</div>
