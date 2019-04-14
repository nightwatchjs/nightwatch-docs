## expect.title()

Retrieves the page title value in order to be used for performing `equal`, `match` or `contains` assertions on it.

##### Usage:
<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">this.demoTest = function (browser) {
  browser.expect.title().to.contain('value');
  browser.expect.title().to.match(/value/);
};</code></pre>
</div>
