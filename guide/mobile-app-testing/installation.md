---
title: Mobile app testing installation
description: Learn how to install Appium, SDKs, AVDs and all the other tools to run Nightwatch tests on mobile devices.
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Mobile app testing installation for Nightwatch</h2></div>

### Overview

In order to run mobile app testing with Nightwatch, there are a few things that need to be installed:

1. Appium
2. Command line tools
3. SDKs for respective platforms
4. Virtual devices

However, Nightwatch simplifies the setup of all these via the Mobile Helper tool.

[Mobile Helper Github](https://github.com/nightwatchjs/mobile-helper-tool)

### Setting up a new project

When you run

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npm init nightwatch</code> <code style="color: #aaa9a2; font-size: 20px">&#60;directory-name&#62;</code></pre>

the 1st question presented would be

<pre class="hide-indicator"><code>? Select testing type to setup for your project (Press &#60;space&#62; 
to select,&#60;a&#62; to toggle all,&#60;i&#62; to invert selection,and 
&#60;enter&#62; to proceed)
❯◯ End-to-End testing
 ◯ Component testing

Make sure that the Mobile app testing is selected. The rest will be a series of questions/steps that you will have to go through and Nightwatch will do the heavy-lifting of installing everything required or giving instructions wherever needed.

If you are planning to just do mobile app testing,you can alternatively initiate Nightwatch installation with the app mode using the command

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npm init nightwatch@latest &#60;foldername&#62; -- --app</code> </pre>

In case you select Android,there is 1 important point to note. Select the default option only if you don’t have the SDK installed to avoid duplication of SDK download. In case you have the SDK installed,please provide the path when this question comes up

<pre class="hide-indicator"><code>? Where do you want the Android SDK setup? Please give the path 
to your existing setup (if any): 

That’s it. Nightwatch setup for mobile app testing is complete!

### Add mobile app testing to existing project

#### Android

Step 1
Go the to the Nightwatch project directory and run the following command

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx @nightwatch/mobile-helper android --appium

Step 2
Answer the questions based on your requirements.

In case you select Android,there is 1 important point to note. Select the default option only if you don’t have the SDK installed to avoid duplication of SDK download. In case you have the SDK installed,please provide the path when this question comes up

<pre class="hide-indicator"><code>? Where do you want the Android SDK setup? Please give the path 
to your existing setup (if any): 

Step 3
After verification if all requirements are not met or if there is an error, follow the instructions to resolve them.

Step 4
Next, setup Appium 2 in your project with the following command.

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npm i appium@next --save-dev</code></pre>

Step 5
Install Appium UiAutomator2 driver for Android

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx appium driver install uiautomator2</code></pre>

Step 6
Download the sample [wikipedia app](https://raw.githubusercontent.com/priyansh3133/wikipedia/main/wikipedia.apk) and save it in your project's root directory (alongside nightwatch.conf.js file).

Step 7
Add Nightwatch environments for Android emulators and real devices.

<div class="sample-test">
<i>nightwatch.conf.json</i><pre class="line-numbers"><code class="language-javascript">{
    ...
    'test_settings':{
        app: {
            selenium: {
                start_process: true,
                use_appium: true,
                host: 'localhost',
                port: 4723,
                server_path: '',
                // args to pass when starting the Appium server
                cli_args: [
                // automatically download the required chromedriver
                // '--allow-insecure=chromedriver_autodownload'
                ],
                // Remove below line if using Appium v1
                default_path_prefix: ''
            },
            webdriver: {
                timeout_options: {
                timeout: 150000,
                retry_attempts: 3
                },
                keep_alive: false,
                start_process: false
            }
        },
        'app.android.emulator': {
            extends: 'app',
            'desiredCapabilities': {
                // More capabilities can be found at https://github.com/appium/appium-uiautomator2-driver#capabilities
                browserName: null,
                platformName: 'android',
                // `appium:options` is not natively supported in Appium v1,but works with Nightwatch.
                // If copying these capabilities elsewhere while using Appium v1,make sure to remove `appium:options`
                // and add `appium:` prefix to each one of its capabilities,e.g. change 'app' to 'appium:app'.
                'appium:options': {
                automationName: 'UiAutomator2',
                // Android Virtual Device to run tests on
                avd: 'nightwatch-android-11',
                // While Appium v1 supports relative paths,it's more safe to use absolute paths instead.
                // Appium v2 does not support relative paths.
                app: `${__dirname}/wikipedia.apk`,
                appPackage: 'org.wikipedia',
                appActivity: 'org.wikipedia.main.MainActivity',
                appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
                // chromedriver executable to use for testing web-views in hybrid apps.
                // add '.exe' at the end below (making it 'chromedriver.exe') if testing on windows.
                chromedriverExecutable: `${__dirname}/chromedriver-mobile/chromedriver`,
                newCommandTimeout: 0
                }
            }
        },
        'app.android.real': {
            extends: 'app',
            'desiredCapabilities': {
                // More capabilities can be found at https://github.com/appium/appium-uiautomator2-driver#capabilities
                browserName: null,
                platformName: 'android',
                // `appium:options` is not natively supported in Appium v1,but works with Nightwatch.
                // If copying these capabilities elsewhere while using Appium v1,make sure to remove `appium:options`
                // and add `appium:` prefix to each one of its capabilities,e.g. change 'app' to 'appium:app'.
                'appium:options': {
                    automationName: 'UiAutomator2',
                    // While Appium v1 supports relative paths,it's more safe to use absolute paths instead.
                    // Appium v2 does not support relative paths.
                    app: `${__dirname}/nightwatch/sample-apps/wikipedia.apk`,
                    appPackage: 'org.wikipedia',
                    appActivity: 'org.wikipedia.main.MainActivity',
                    appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
                    // 'chromedriver' binary is required while testing hybrid mobile apps.
                    // 
                    // Set `chromedriverExecutable` to '' to use binary from `chromedriver` NPM package (if installed).
                    // Or,put '--allow-insecure=chromedriver_autodownload' in `cli_args` property of `selenium`
                    // config (see 'app' env above) to automatically download the required version of chromedriver
                    // (delete `chromedriverExecutable` capability below in that case).
                    chromedriverExecutable: '',
                    newCommandTimeout: 0,
                    // add device id of the device to run tests on,if multiple devices are online
                    // Run command: `$ANDROID_HOME/platform-tools/adb devices` to get all connected devices
                    // udid: '',
                }
            }
        },
    }
}
</code></pre></div>

Step 8
Add the following sample test file under the `nightwatch/examples/mobile-app-tests/wikipedia-android.js` file:

<div class="sample-test">
<i>nightwatch/examples/mobile-app-tests/wikipedia-android.js</i><pre class="line-numbers"><code class="language-javascript">
describe('Wikipedia Android app test',function(){
    before(function(app) {
        app.click('id','org.wikipedia:id/fragment_onboarding_skip_button');
    });
    it('Search for BrowserStack',async function(app) {
        app
            .click('id','org.wikipedia:id/search_container')
            .sendKeys('id','org.wikipedia:id/search_src_text','browserstack')
            .click({selector: 'org.wikipedia:id/page_list_item_title',locateStrategy: 'id',index: 0})
            .waitUntil(async function() {
                // wait for webview context to be available
                const contexts = await this.appium.getContexts();

                return contexts.includes('WEBVIEW_org.wikipedia');
            })
            .appium.setContext('WEBVIEW_org.wikipedia')
            .assert.textEquals('.pcs-edit-section-title','BrowserStack');  // command run in webview context
    });

});

And done! 🎉 Your Android setup is now complete.

#### iOS

Step 1
Go the to the Nightwatch project directory and run the following command

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx @nightwatch/mobile-helper ios --setups

Step 2
Answer the questions based on your requirements.

Step 3
After verification if all requirementss are not met or if there is an error,follow the instructions to resolve them.

Step 4
After this,setup Appium 2 in your project using

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npm i appium@next --save-dev</code></pre>

Step 5
Install Appium XCUITest driver for iOS using

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx appium driver install xcuitest</code></pre>

Step 6
Download the sample [wikipedia app](https://raw.githubusercontent.com/priyansh3133/wikipedia/main/wikipedia.zip) and save it in your project's root directory (alongside nightwatch.conf.js file).

Step  7
Add Nightwatch environments for iOS simulators and real devices

<div class="sample-test">
<i>nightwatch.conf.json</i><pre class="line-numbers"><code class="language-javascript">{
    ...
    'test_settings':{
        // other envs above this line
        app: {
            selenium: {
                start_process: true,
                use_appium: true,
                host: 'localhost',
                port: 4723,
                server_path: '',
                // args to pass when starting the Appium server
                cli_args: [
                // automatically download the required chromedriver
                // '--allow-insecure=chromedriver_autodownload'
                ],
                // Remove below line if using Appium v1
                default_path_prefix: ''
            },
            webdriver: {
                timeout_options: {
                timeout: 150000,
                retry_attempts: 3
                },
                keep_alive: false,
                start_process: false
            }
        },

        'app.ios.simulator': {
            extends: 'app',
            'desiredCapabilities': {
                // More capabilities can be found at https://github.com/appium/appium-xcuitest-driver#capabilities
                browserName: null,
                platformName: 'ios',
                // `appium:options` is not natively supported in Appium v1,but works with Nightwatch.
                // If copying these capabilities elsewhere while using Appium v1,make sure to remove `appium:options`
                // and add `appium:` prefix to each one of its capabilities,e.g. change 'app' to 'appium:app'.
                'appium:options': {
                automationName: 'XCUITest',
                // platformVersion: '15.5',
                deviceName: 'iPhone 13',
                // While Appium v1 supports relative paths,it's more safe to use absolute paths instead.
                // Appium v2 does not support relative paths.
                app: `${__dirname}/wikipedia.zip`,
                bundleId: 'org.wikimedia.wikipedia',
                newCommandTimeout: 0
                }
            }
        },
    
        'app.ios.real': {
            extends: 'app',
            'desiredCapabilities': {
                // More capabilities can be found at https://github.com/appium/appium-xcuitest-driver#capabilities
                browserName: null,
                platformName: 'ios',
                // `appium:options` is not natively supported in Appium v1,but works with Nightwatch.
                // If copying these capabilities elsewhere while using Appium v1,make sure to remove `appium:options`
                // and add `appium:` prefix to each one of its capabilities,e.g. change 'app' to 'appium:app'.
                'appium:options': {
                    automationName: 'XCUITest',
                    // While Appium v1 supports relative paths,it's more safe to use absolute paths instead.
                    // Appium v2 does not support relative paths.
                    app: `${__dirname}/wikipedia.zip`,
                    bundleId: 'org.wikimedia.wikipedia',
                    newCommandTimeout: 0,
                    // add udid of the device to run tests on. Or,pass the id to `--deviceId` flag when running tests.
                    // device id could be retrieved from Xcode > Window > 'Devices and Simulators' window.
                    // udid: '00008030-00024C2C3453402E'
                }
            }
        },
    }

}

Step  8
Add the following sample test file under the `nightwatch/examples/mobile-app-tests/wikipedia-ios.js` file

<div class="sample-test">
<i>nightwatch/examples/mobile-app-tests/wikipedia-ios.js</i><pre class="line-numbers"><code class="language-javascript">describe('Wikipedia iOS app test',function() {
    before(function(app) {
        app.click('xpath','//XCUIElementTypeButton[@name="Skip"]');
    });
    it('Search for BrowserStack',async function(app) {
        app
            .useXpath()
            .click('//XCUIElementTypeSearchField[@name="Search Wikipedia"]')
            .sendKeys('//XCUIElementTypeSearchField[@name="Search Wikipedia"]','browserstack')
            .click('//XCUIElementTypeStaticText[@name="BrowserStack"]')
            .waitUntil(async function() {
            // wait for webview context to be available
            const contexts = await this.appium.getContexts();

            return contexts.length > 1;
            },5000)
            .perform(async function() {
            // switch to webview context
            const contexts = await this.appium.getContexts();
    
            await this.appium.setContext(contexts[1]);
            })
            .useCss()
            .assert.textEquals('.pcs-edit-section-title','BrowserStack');  // command run in webview context
    });

});

Congratulations,your iOS setup is complete

### Validating the setup

Once your installation is complete,validate the setup with the following command to run sample tests on Android emulators using

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch nightwatch/examples/mobile-app-tests/wikipedia-android.js --env app.android.emulator

or on iOS simulators using

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch /nightwatch/examples/mobile-app-tests/wikipedia-ios.js --env app.ios.simulator

### Install Appium Inspector

Appium inspector would be very helpful in identifying selectors and debugging tests. Inorder to install Appium inspector,go to [Appium Inspector releases](https://github.com/appium/appium-inspector/releases)  and download the latest version. After installing,simply open Appium Inspector and you are ready to go. Below is how the application will look like on Mac.

![Appium Inspector](https://user-images.githubusercontent.com/1677755/220174481-f423292a-4577-4740-8518-503d1fa19dbd.png)

### Recommended next steps

Now that you understand how mobile app testing works with Nightwatch,let's dive into the setup. We recommend you cover all the below listed topics to get a complete understanding on mobile app automated testing using Nightwatch.

[Write tests to automate native applications](/guide/mobile-app-testing/introduction-writing-tests.html) 
[Run tests on virtual devices,real devices & cloud providers](/guide/mobile-app-testing/running-tests.html) 
[Debug tests](/guide/mobile-app-testing/debug-tests.html)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/mobile-app-testing/introduction.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Introduction to Mobile App Testing</span>
        </div>
    </a>
  </div>
  <div class="doc-pagination justify-content-end pt-40">
  <div class="next">
    <a href="https://nightwatchjs.org/guide/mobile-app-testing/introduction-writing-tests.html">
        <div class="d-flex flex-column"><span class="smallT">Next Page</span><span class="bigT">Writing Mobile App Tests</span></div>
        <span>→</span>
    </a>
  </div>
</div>
</div>
