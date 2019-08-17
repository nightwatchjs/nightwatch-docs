## Assertions

The built-in extendable `assert`/`verify` library is available on the Nightwatch instance as two namespaces containing the same methods which perform assertions on elements:

- `.assert` - when an assertion fails, the test ends, skipping all other assertions.
- `.verify` - when an assertion fails, the test logs the failure and continues with other assertions.

<br>  
The following will end the test:<br>
<code>browser.assert.visible('.non_existing');</code>

However this will just log the failure and continue:<br>
<code>browser.verify.visible('.non_existing');</code>


#### Node.js Assert Module

The methods from the <a href="https://nodejs.org/api/assert.html" target="_blank">Node.js assert module</a> are also available on the `.assert`/`.verify` namespaces and can be used.

#### Automatically retrying failed assertions

You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
This can be accomplished by setting the property `retryAssertionTimeout` (in milliseconds) in the `globals` file.

<br>
For example: <code>retryAssertionTimeout = 2000</code>

