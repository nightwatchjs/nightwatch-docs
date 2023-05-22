## expect.elements()

Expect assertions operating on a collection of elements, specified by a CSS/Xpath selector.
So far only `.count` is available.

##### Syntax

  ```js
browser.elements('#selector')
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
      <td><code>selector</code></td>
      <td>String</td>
      <td>The CSS/XPath selector of the collection of elements to be inspected.</td>
    </tr>
    </tbody>
  </table>
</div>

<div class="apimethod">
  ### .elements().count
  <p>Checks if the number of elements specified by a selector is equal or not to a given value.</p>

##### Usage

```js
this.demoTest = function (browser) {
  browser.expect.elements('div').count.to.equal(10);
  browser.expect.elements('p').count.to.not.equal(1);
}
```

</div>
