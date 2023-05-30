## Using Chrome DevTools protocol
Both [ChromeDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html) and [EdgeDriver](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/edge_exports_Driver.html) expose some specific commands for working with their respective browsers.

When using ChromeDriver or EdgeDriver it is now possible to execute commands via the [Chrome DevTools protocol](https://chromedevtools.github.io/devtools-protocol/).

Here's the full list of commands available on the `chrome` namespace on the `browser` object:

**browser.chrome:**
- [.launchApp()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#launchApp)
- [.getNetworkConditions()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#getNetworkConditions)
- [.setNetworkConditions()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#setNetworkConditions)
- [.sendDevToolsCommand()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#sendDevToolsCommand)
- [.sendAndGetDevToolsCommand()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#sendAndGetDevToolsCommand)
- [.setPermission()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#setPermission)
- [.setDownloadPath()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#setDownloadPath)
- [.getCastSinks()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#getCastSinks)
- [.setCastSinkToUse()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#setCastSinkToUse)
- [.startCastTabMirroring()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#startCastTabMirroring)
- [.getCastIssueMessage()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#getCastIssueMessage)
- [.stopCasting()](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#stopCasting)

**More info:**
- [selenium-webdriver/chrome](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome.html)
- [selenium-webdriver/edge](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/edge.html)

### Example:
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('Chrome DevTools Example', function() {
    it ('using CDP DOM Snapshot', async function() {
        const dom = await browser.chrome.sendAndGetDevToolsCommand('DOMSnapshot.captureSnapshot', {
            computedStyles: []
        });
        console.log('DOM', dom)
    });
});</code></pre></div>