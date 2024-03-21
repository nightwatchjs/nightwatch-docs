## Assertions

The built-in extendable `assert`/`verify` library is available on the Nightwatch instance as two namespaces containing the same methods which perform assertions on elements:

- `.assert` - when an assertion fails, the test ends, skipping all other assertions.
- `.verify` - when an assertion fails, the test logs the failure and continues with other assertions.

<br>  
The following will end the test:<br>
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">browser.assert.visible('.non_existing');</code></pre></div> 

However this will just log the failure and continue:<br>
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">browser.verify.visible('.non_existing');</code></pre></div>

#### Basic Assertions

The methods from the <a href="https://nodejs.org/api/assert.html" target="_blank">Node.js assert module</a> are also available on the `.assert`/`.verify` namespaces and can be used.

### Negate (".not") Assertions

Since version **1.3**, all the assertions (including custom defined ones) have a `".not"` counterpart, which can be used to assert the opposite.

And thus, assertions like `elementNotPresent`, `cssClassNotPresent`, `hidden` are obsolete and have been deprecated.

##### Example:
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('Demo .not assertion', function() {
  it('demo test', function(browser) {
    browser.init();
    
    browser
      .assert.not.elementPresent('.not_present') // previously .assert.elementNotPresent()
      .assert.not.visible('.non_visible') // previously .assert.hidden()
      .assert.not.urlContains('http://');
    
    // ...
  })
})</code></pre></div>

### Automatic Retries

By default, Nightwatch will automatically retry failed assertions for up to 5000ms. This can be configured by setting the property `retryAssertionTimeout` (in milliseconds) in your `globals` (see also [working with test globals](https://nightwatchjs.org/guide/concepts/test-globals.html).  

If the given timeout is reached test runner will give up retrying and will mark the assertion as failed.

##### Example config:
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
{
  src_folders: ['tests'],

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',

      globals: {
        myGlobalVar: 'some value',
        retryAssertionTimeout: 5000
      }
    }
  }
}
</code></pre></div>


