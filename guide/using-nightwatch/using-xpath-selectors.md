### Using XPath selectors

Nightwatch supports xpath selectors also. To switch to xpath instead of css selectors as the locate strategy, in your test call the method `useXpath()`, as seen in the example below. To switch back to CSS, call `useCss()`.

To always use xpath by default set the property `"use_xpath": true` in your test settings.

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
this.demoTestGoogle = function (browser) {
  browser
    .useXpath() // every selector now must be xpath
    .click("//tr[@data-recordid]/span[text()='Search Text']")
    .useCss() // we're back to CSS now
    .setValue('input[type=text]', 'nightwatch')
};</code></pre>
</div>