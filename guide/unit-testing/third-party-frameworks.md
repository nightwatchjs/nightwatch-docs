### Using Third-party Assertion Frameworks
It's also possible to use a third-party assertion framework for writing tests. The example below uses <a href="http://chaijs.com/" target="_blank">Chai</a>.

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
var Utils = require('lib/util/utils.js');
var expect = require('chai').expect;

module.exports = {
  testFormatElapsedTime : function(client) {
    var resultMs = Utils.formatElapsedTime(999);
    var resultSec = Utils.formatElapsedTime(1999);
    var resultMin = Utils.formatElapsedTime(122299, true);

    expect(resultMs).to.equal('999ms');
    expect(resultSec).to.equal('1.999s');
    expect(resultMin).to.equal('2m 2s / 122299ms');
  }
};
</code></pre>
</div>