## expect.elements()

Expect assertions operating on a collection of elements, specified by a CSS/Xpath selector.
So far only `.count` is available.

##### Syntax:
<div class="sample-test" style="max-width:600px">
  <pre data-language="javascript" style="padding-top: 10px" class="default-theme language-javascript"><code class="default-theme language-javascript">browser.elements('#selector')</code></pre>
</div>

##### Parameters:
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 100px;">Type</th>
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
  <h3 id="expect-elements-count">.elements().count</h3>
  <p>Checks if the number of elements specified by a selector is equal or not to a given value.</p>
  
  <h5>Usage:</h5>
  <div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">this.demoTest = function (browser) {
  browser.expect.elements('div').count.to.equal(10);
  browser.expect.elements('p').count.to.not.equal(1);
}</code></pre>
  </div>
</div>
