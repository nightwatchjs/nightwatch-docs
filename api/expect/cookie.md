## expect.cookie()

Expect assertions operating on a single cookie after retrieving the entire cookie string, using `.getCookies()`.

##### Syntax:
<div class="sample-test" style="max-width:600px">
  <pre data-language="javascript" style="padding-top: 10px" class="default-theme language-javascript"><code class="default-theme language-javascript">browser.cookie('cookie-name', ['cookie-domain'])</code></pre>
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
      <td><code>name</code></td>
      <td>String</td>
      <td>The name of the cookie to be inspected.</td>
    </tr>
    <tr>
      <td><code>domain</code><br><span class="optional">Optional</span></td>
      <td>String</td>
      <td>The domain name on which the cookie is set to.</td>
    </tr>
    </tbody>
  </table>
</div>
