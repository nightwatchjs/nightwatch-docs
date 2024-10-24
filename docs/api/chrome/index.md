## Using Chrome DevTools protocol

Both [ChromeDriver](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chrome.html) and [EdgeDriver](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_edge.html) expose some specific commands for working with their respective browsers.

When using ChromeDriver or EdgeDriver it is now possible to execute commands via the [Chrome DevTools protocol](https://chromedevtools.github.io/devtools-protocol/).

Here's the full list of commands available on the `.chrome` namespace on the `browser` object:

**browser.chrome:**

- [.launchApp()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#launchApp)
- [.getNetworkConditions()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#getNetworkConditions)
- [.setNetworkConditions()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#setNetworkConditions)
- [.sendDevToolsCommand()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#sendDevToolsCommand)
- [.sendAndGetDevToolsCommand()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#sendAndGetDevToolsCommand)
- [.setPermission()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#setPermission)
- [.setDownloadPath()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#setDownloadPath)
- [.getCastSinks()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#getCastSinks)
- [.setCastSinkToUse()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#setCastSinkToUse)
- [.startCastTabMirroring()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#startCastTabMirroring)
- [.getCastIssueMessage()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#getCastIssueMessage)
- [.stopCasting()](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html#stopCasting)

**More info:**

- [selenium-webdriver/chromium](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium.html) (class [Driver](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chromium-Driver.html))
- [selenium-webdriver/chrome](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chrome.html) (class [Driver](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_chrome-Driver.html))
- [selenium-webdriver/edge](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_edge.html) (class [Driver](https://www.selenium.dev/selenium/docs/api/javascript/module-selenium-webdriver_edge-Driver.html))

### Example

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">describe('Chrome DevTools Example', function() {
    it ('using CDP DOM Snapshot', async function() {
        const dom = await browser.chrome.sendAndGetDevToolsCommand('DOMSnapshot.captureSnapshot', {
            computedStyles: []
        });
        console.log('DOM', dom)
    });
});</code></pre></div>
