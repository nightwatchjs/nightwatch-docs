<h2 id="expect-url">expect.url()</h3>
<div class="apimethod">

Retrieves the page url value in order to be used for performing `equal`, `match` or `contains` assertions on it.

<h5>Usage:</h5>
<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">this.demoTest = function (browser) {
  browser.expect.url().to.contain('https://');
  browser.expect.url().to.endWith('.org');
};</code></pre>
</div>
</div>