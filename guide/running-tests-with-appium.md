### Appium
Appium is an open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms. This guide primarily focuses on runing Nightwatch tests on mobile devices.


### Theory of Operation

Appium is a Node JS based servcer that exposes REST APIs compliant with Web driver protocol that wraps automation libraries from vendors (UIAutomator2/Espresso, Apple XCUITest/UIAutomation). In an end-end scenario Nightwatch makes request to Appium server, server talks to native framework using different platform drivers for executing commands and finally returns HTTP response back to Nightwatch.


![appium-nightwatch](https://user-images.githubusercontent.com/28780767/141315676-148b9da3-7785-4eea-91f9-d1107e88696b.png)



### Getting started

- [Download and setup Appium](https://appium.io/docs/en/about-appium/getting-started/?lang=en#installing-appium)

- We can add in configuration in Nightwatch config to run our test on mobile devies running locally with use of appium server.

```js
appium_ios: {
      selenium: {
        host: 'localhost',
        port: 4723
      },
      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 150000,
          retry_attempts: 3
        },
        keep_alive: false,
        start_process: false
      },
      desiredCapabilities: {
        browserName: 'Safari', //not required incase using app
        javascriptEnabled: true,
        platformName: 'iOS', //android or iOS
        platformVersion: '15.0',
        deviceName: 'iPhone 13'
        // "app": APP_PATH + "ios/PieDrive.app", // path for the ios app you want to test
      }
}
```
You may find more details regarding capabilities and list of all capabilities that can be passed on [Appium docs](http://appium.io/docs/en/writing-running-appium/caps/)


### Writing a basic test

Here is a basic test that navigates to Nightwatch website and checks the latest version of Nightwatch version available.

```js
describe('Nightwatch Website tests', function() {
    it('Check verison of nightwatch ', function(){
        browser.url('https://nightwatchjs.org')
        .assert.attributeContains('#bd-versions','text','1.7.11');
    })
});
```

### Execute Test

Now that you have appium server installed, run Appium server locally using command `appium` and run your test against the env `appium_ios`
