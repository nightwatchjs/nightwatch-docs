## expect.url()

Retrieves the page url value in order to be used for performing `equal`, `match` or `contains` assertions on it.

##### Usage:
<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">this.demoTest = function (browser) {
  browser.expect.url().to.contain('https://');
  browser.expect.url().to.endWidth('.org');
};</code></pre>
</div>
