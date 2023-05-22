## expect.title()

<div class="apimethod">

Retrieves the page title value in order to be used for performing `equal`, `match` or `contains` assertions on it.

##### Usage

```js
this.demoTest = function (browser) {
  browser.expect.title().to.contain('value');
  browser.expect.title().to.match(/value/);
};
```

</div>
