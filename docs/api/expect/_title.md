<h2 id="expect-title">expect.title()</h2>

<div class="apimethod">

Retrieves the page title value in order to be used for performing `equal`, `match` or `contains` assertions on it.

<h5>Usage:</h5>
<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">this.demoTest = function (browser) {
  browser.expect.title().to.contain('value');
  browser.expect.title().to.match(/value/);
};</code></pre>
</div>
</div>