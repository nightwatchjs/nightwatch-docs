---
title: Native Mobile App Testing
description: Introduction to native mobile app testing with Nightwatch. Learn how to automate native mobile apps on Android and iOS devices.
---

<div class="page-header"><h1>Introduction to Native Mobile App Testing</h1></div>

### Overview

Nightwatch enables automation testing of native mobile applications via Appium. It combines the robustness of Appium with the enhanced developer experience provided by Nightwatch. It enables end-to-end functional testing of native mobile apps on Android and iOS devices.

### What is Appium?

According to the definition on the [Appium][1] website:

<p class="secondary-text">Appium is an open source test automation framework for use with native, hybrid and mobile web apps. It drives iOS, Android, and Windows apps using the WebDriver protocol.</p>    

While Selenium is used for automating desktop browsers, Appium can be used to automate mobile web, native & hybrid mobile apps. 

### Requirements

In order to run Nightwatch using Appium the following requirements have to be fulfilled:

**iOS** </br>
- Mac OSX - XCode w/ Command Line Tools

**Android** </br>
- Mac OSX or Windows or Linux - Android SDK ≥ 16

<p class="alert alert-info">Don’t worry about the SDK downloads as the <a href="https://github.com/nightwatchjs/mobile-helper-tool">Nightwatch Mobile Helper</a> will take care of it.</p>

### How does it work?

The native mobile app testing capability in Nightwatch is build with Appium under the hood.

Appium is a NodeJS based server that exposes REST APIs compliant with the W3C WebDriver protocol that wraps automation libraries from vendors (UIAutomator2/Espresso, Apple XCUITest/UIAutomation).

In an end-end scenario Nightwatch makes request to Appium server, server talks to native framework using different platform drivers for executing commands and finally returns HTTP response back to Nightwatch.

![Theory of Operation][image-1]

### Recommended next steps

Now that you understand how mobile app testing works with Nightwatch, let's dive into the setup. We recommend you cover all the below listed topics to get a complete understanding on mobile app automated testing using Nightwatch.

[Install Nightwatch for mobile testing][2] </br>
[Write tests to automate native applications][3] </br>
[Run tests on virtual devices, real devices & cloud providers][4] </br>
[Debug tests][5]

[1]:    https://appium.io/
[2]:    /guide/mobile-app-testing/installation.html
[3]:    /guide/mobile-app-testing/introduction-writing-tests.html
[4]:    /guide/mobile-app-testing/running-tests.html
[5]:    /guide/mobile-app-testing/debug-tests.html


[image-1]:  https://user-images.githubusercontent.com/1677755/220147111-0c8bd102-cc70-4a7b-bda7-6e597328ace3.png



