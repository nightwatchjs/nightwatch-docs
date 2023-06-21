---
title: Running native mobile app tests
description:  Introduction to running native mobile app Nightwatch tests on real, virtual and cloud devices.
---

<div class="page-header"><h1>Run tests on real, virtual, and cloud devices</h1></div>

### Overview

Nightwatch tests can be run on Android emulators, iOS simulators, real Android, and iOS devices as well as on cloud providers. Similar to web automation, native mobile app automation also leverages the concept of [environments][1] . To run your test suite anywhere, you just have to configure the environment once and use in the test run commands. 

### Android Emulator

#### Step 1

Ensure that the environment is added in the `nightwatch.conf.js` file

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">test_settings: {
  ...
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
        // Uncomment below line when using Appium v2
        // default_path_prefix: ''
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
  <br>
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
          app: `${__dirname}/nightwatch/sample-apps/wikipedia.apk`,
          appPackage: 'org.wikipedia',
          appActivity: 'org.wikipedia.main.MainActivity',
          appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
          // chromedriver executable to use for testing web-views in hybrid apps
          chromedriverExecutable: `${__dirname}/chromedriver-mobile/chromedriver`,
          newCommandTimeout: 0
        }
      }
    },
    ...
}
</code></pre></div>

#### Step 2

Ensure that you replace the following values with the values of your app
1. app
2. appPackage
3. appActivity
4. appWaitActivity

#### Step 3

Run the test using the following command

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch &#60;path to tests&#62; --env app.android.emulator
</code></pre>

### iOS Simulator

#### Step 1

Add the environment in the `nightwatch.conf.js` file. Ensure that the `app` block is also added as shown in the Android Emulator example as `app.ios.simulator` extends `app`

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">
test_setting:{
  ...
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
          app: `${__dirname}/nightwatch/sample-apps/wikipedia.zip`,
          bundleId: 'org.wikimedia.wikipedia',
          newCommandTimeout: 0
        }
      }
    },
  ...
}
</code></pre></div>

#### Step 2

Ensure that you replace the following with the values corresponding to your app:
1. app
2. deviceName
3. bundleId

#### Step 3

Run the test using the following command

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch &#60;path to tests&#62; --env app.ios.simulator
</code></pre>

### Android real devices

You can run Nightwatch tests on real Android devices that you might posssess. Follow these simple 3 steps and see the tests execute on your real Android devices. 

#### Step 1

Add the environment in the `nightwatch.conf.js` file. Ensure that the `app` block is also added as shown in the Android Emulator example as `app.android.real` extends `app`

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">
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
</code></pre></div>

#### Step 2

Ensure that you replace the following values
1. app
2. appPackage
3. appActivity
4. appWaitActivity
5. udid `needed to identify the device where the tests need to run,if multiple devices are online`

### Step 3

Ensure that your device is setup correctly to communicate with Nightwatch with the following steps:
1. [Turn on USB Debugging][2] on your Android Device and connect it to your system via data cable.
2. Make sure latest version of Chrome browser is installed on your Android device. If not,install from Google Play Store.
3. Make sure latest version of chromedriver NPM package is installed in your project. If not,install by running:

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npm i chromedriver@latest --save-dev
</code></pre>


#### Step 4

Run the test using the following command

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch &#60;path to tests&#62; --env app.android.real
</code></pre>

### iOS real devices

Similar to running tests on real Android devices,you can also run your Nightwatch tests on real iOS devices. 

#### Step 1

Add the environment in the `nightwatch.conf.js` file. Ensure that the `app` block is also added as shown in the Android Emulator example as `app.ios.real` extends `app`


<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">
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
        app: `${__dirname}/nightwatch/sample-apps/wikipedia.zip`,
        bundleId: 'org.wikimedia.wikipedia',
        newCommandTimeout: 0,
        // add udid of the device to run tests on. Or,pass the id to `--deviceId` flag when running tests.
        // device id could be retrieved from Xcode > Window > 'Devices and Simulators' window.
        // udid: '00008030-00024C2C3453402E'
      }
    }
  },
</code></pre></div>

#### Step 2

Ensure that you replace the following with the values corresponding to your app
1. app
2. deviceName
3. bundleId
4. udid `needed to identify the device where the tests need to run,if multiple devices are online`

#### Step 3

Run the test using the following command

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch &#60;path to tests&#62; --env app.ios.real
</code></pre>

### BrowserStack

Nightwatch mobile app tests can also work with cloud providers such as BrowserStack so that you can leverage parallel runs on 3000+ real devices. 

#### Step 1

Add the `browserstack` & `android` & `ios` environment blocks in the `nightwatch.conf.js` file as shown below

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">
test_settings:{
  ...
  browserstack: {
    selenium: {
      host: 'hub.browserstack.com',
      port: 443
    },
    desiredCapabilities: {
      'bstack:options': {
        userName: '&lt;username&gt;',
        accessKey: '&lt;access_key&gt;',
        appiumVersion: '2.0.0'
      }
    },
    disable_error_log: false,
    webdriver: {
      timeout_options: {
        timeout: 60000,
        retry_attempts: 3
      },
      keep_alive: true,
      start_process: false
    }
  },
  'browserstack.android': {
    extends: 'browserstack',
    'desiredCapabilities': {
      browserName: null,
      'appium:options': {
        automationName: 'UiAutomator2',
        app: 'wikipedia-sample-app',// custom-id of the uploaded app
        appPackage: 'org.wikipedia',
        appActivity: 'org.wikipedia.main.MainActivity',
        appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
        platformVersion: '11.0',
        deviceName: 'Google Pixel 5'
      },
      appUploadUrl: 'https://raw.githubusercontent.com/priyansh3133/wikipedia/main/wikipedia.apk',// url of app to be uploaded to BrowserStack before starting the test
      // appUploadPath: '/path/to/app_name.apk' // if the app needs to be uploaded to BrowserStack from local system
    }
  },
  'browserstack.ios': {
    extends: 'browserstack',
    'desiredCapabilities': {
      browserName: null,
      platformName: 'ios',
      'appium:options': {
        automationName: 'XCUITest',
        app: 'BStackSampleApp',
        platformVersion: '16',
        deviceName: 'iPhone 14'
      },
      appUploadUrl: 'https://www.browserstack.com/app-automate/sample-apps/ios/BStackSampleApp.ipa',
      // appUploadPath: '/path/to/app_name.ipa'
    }
  ...
}
</code></pre></div>

#### Step 2

Ensure that you replace the following with the values corresponding to your app:
1. Browserstack username
2. BrowserStack key
3. app
4. appPackage
5. appActivity
6. appWaitActivity
7. deviceName
8. platformVersion
9. appUploadUrl `public url of app under test`

#### Step 3

Run the tests using the following commands:

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch &#60;path to tests&#62; --env browserstack.android</code></pre>
<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch &#60;path to tests&#62; --env browserstack.ios</code></pre>

### Recommended next steps

Learn [how to debug mobile app tests][3]

[1]:    /guide/concepts/test-environments.html
[2]:    https://developer.android.com/studio/debug/dev-options#enable
[3]:    /guide/mobile-app-testing/debug-tests.html


<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/mobile-app-testing/assertions.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Mobile App Assertions</span>
        </div>
    </a>
  </div>
  <div class="doc-pagination justify-content-end pt-40">
  <div class="next">
    <a href="https://nightwatchjs.org/guide/mobile-app-testing/debug-tests.html">
        <div class="d-flex flex-column"><span class="smallT">Next Page</span><span class="bigT">Debugging Mobile App Tests</span></div>
        <span>→</span>
    </a>
  </div>
</div>
</div>