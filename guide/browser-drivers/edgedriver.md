---
title: Microsoft Edge WebDriver
description: Learn about how to use Microsoft Edge WebDriver with Nightwatch
---

<div class="page-header"><h1>EdgeDriver</h1></div>

Run your Nightwatch.js tests in Edge can be achieved using the  [Microsoft Edge WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/).

### Downloading EdgeDriver

**Step 1. Download Microsoft Edge WebDriver** - Depending on the version of your Edge Browser, download the relevant [Microsoft Edge WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/).

**Step 2. Configure the path** - You can either add the path to the Microsoft Edge WebDriver binary to the system PATH or set the location in the `cli_args` key under the `selenium` key in your `nightwatch.json` file as follows:
<pre data-language="javascript"><code class="language-javascript">
"localEdge": {
       selenium_host: "127.0.0.1",
       selenium_port: 4444,
       selenium: {
           start_process: true,
           host: "127.0.0.1",
           port: 4444,
           cli_args: {
               "webdriver.edge.driver": "C:\\Program Files (x86)\\Microsoft Web Driver\\MicrosoftWebDriver.exe",
           }
       },
        desiredCapabilities: {
           platform: "Windows 10",
           browserName: "MicrosoftEdge",
           javascriptEnabled: true
       }
}
</code></pre>

# Example

## How to launch Edge browser in Selenium
 ?
Chrome, Firefox, and Safari are undoubtedly the leading browsers worldwide as they comprise almost 85% of the total browser market share. This might make it seem like one can avoid optimizing their sites for a browser like Microsoft Edge. However, that’s not the case.

As per a report by StatCounter, the legacy versions of Edge still make up 7.9% of the total desktop browser market share in the US. Besides, Edge also has significant brand recognition as it comes from the Microsoft family. Thus, to provide a truly browser-agnostic experience, it becomes imperative for teams to test their web applications on Edge.

This article will demonstrate the fundamental steps to launch Edge browser using Selenium WebDriver for automated testing. It will also detail how Mac users can test on Edge legacy.

### Configuring the Edge Driver
### Prerequisites:

Installing the Windows 10 environment on the machine to run tests for legacy versions (15,16,17) of Edge
Downloading accurate WebDriver server version
Ensuring that the updated version of Selenium is being used

### Now let’s get started with the steps for configuration.

The primary step is to check the version of the OS build being used. Based on the OS version build, download the corresponding Edge driver.
1.To check the OS Build, go to Start > Settings > System > About. In the example in this article, OS version build is 17134.
2.Download the driver for the desired Edge version from the official source as per the OS version build identified earlier. Once the zip file is downloaded, unzip it and copy the .exe file to a specific location.
3.The next step is to import it in the project file. It’s assumed that the user knows how to set up a basic Selenium project.
4.One can refer to this article on Selenium with Java to understand how to set-up a basic Selenium with Java project in Eclipse IDE.
5.Define the Edge driver with its accurate path using the system setProperty method and instantiate the Edge driver.

```
// Set the driver path
System.setProperty("webdriver.edge.driver", "C://EdgeDriver.exe");

// Start Edge Session
WebDriver driver = new EdgeDriver();

driver.get("https://google.com");

driver.quit();
```
At this point, the Edge driver has been configured. Now let’s perform a sample test scenario. In this scenario, the code will automate 3 fundamental steps:

1.Launch the Edge browser
2.Navigate to the Google website
3.Enter “BrowserStack Guide” as a search query

#### Code for launching Edge Browser using Selenium:

```sh
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
public class Edge_Test{
public static void main(String[] args) {
//Setting system properties of EdgeDriver
System.setProperty("webdriver.edge.driver", "C://EdgeDriver.exe");
//Creating an object of EdgeDriver
WebDriver driver = new EdgeDriver();
driver.manage().window().maximize();
//Deleting all the cookies
driver.manage().deleteAllCookies();
//Specifiying pageLoadTimeout and Implicit wait
driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//launching the specified URL
driver.get("https://www.google.com/");
//Locating the elements using name locator for the text box
driver.findElement(By.name("q")).sendKeys("BrowserStack Guide");
// locator for Google search button
WebElement searchIcon = driver.findElement(By.name("btnK"));
searchIcon.click();
}
}
```
Executing the script above will launch the Edge browser, navigate to the Google website, and enter the term BrowserStack Guide as a search query.

### Learn more

For more information about the Microsoft Edge WebDriver refer to the [Official documentation](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/dev-guide/tools/webDriver/).

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/browser-drivers/safaridriver.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">SafariDriver</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/nightwatch-cli/command-line-options.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Command-line Options</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
