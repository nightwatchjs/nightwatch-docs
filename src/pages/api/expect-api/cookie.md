## expect.cookie()

<div class="apimethod">
Expect assertions operating on a single cookie after retrieving the entire cookie string, using `.getCookies()`.

##### Syntax

```js
browser.expect.cookie('cookie-name', ['cookie-domain'])
```

```js
this.demoTest = function (browser) {
  browser.expect.cookie('cookie-name').to.contain('cookie-value');
  browser.expect.cookie('cookie-name').to.match(/regex/);
  browser.expect.cookie('loginCookie', 'example.org').to.contain('cookie-value');
};
```

##### Parameters

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>The name of the cookie to be inspected.</td>
    </tr>
    <tr>
      <td><code>domain</code><br/><span class="optional">Optional</span></td>
      <td>String</td>
      <td>The domain name on which the cookie is set to.</td>
    </tr>
    </tbody>
  </table>
</div>
</div>
