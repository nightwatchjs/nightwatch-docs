---
title: Create Nightwatch test using Google Chrome DevTools Recorder
description: Learn how to do create nightwatch test using Google Chrome devtools recorder
summary_image: https://user-images.githubusercontent.com/8705386/184881833-dcc2d0d6-4012-4f9e-8fff-27f888adbd1d.png
---

<div class="page-header"><h2>Create Nightwatch test using Google Chrome DevTools Recorder</h2></div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/eYj4vuEjlRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Chrome DevTools](https://goo.gle/devtools] has a [Recorder](https://goo.gle/devtools-recorder) panel which lets users records their user flows, and export them as JSON files or other custom formats.

You can convert the these user flows to Nightwatch test scripts by:

- Installing the [Nightwatch Recorder Extension](https://chrome.google.com/webstore/detail/nightwatch-chrome-recorde/nhbccjfogdgkahamfohokdhcnemjafjk/), and export it straight away from the Chrome DevTools, or
- Using the [@nightwatch/chrome-recorder](https://www.npmjs.com/package/@nightwatch/chrome-recorder) library to convert the scripts programmatically.

The following sections help you get started with the Chrome Devtools Recorder, and exporting the user flows to Nightwatch.

### What is Chrome DevTools Recorder?

Chrome DevTools Recorder is a tool which allows you to record and replay test actions directly in the browser and also export them as JSON (or export them in e2e test), as well as measure test performance. If you want to know more about the DevTools Recorder, you can read all about it [here](https://developer.chrome.com/docs/devtools/recorder/).

The tool is straightforward, and since it’s plugged into the browser, we have the convenience of not switching the context or dealing with any third-party tool. Let's see how you can easily and quickly record your test actions and run your first test.

We will use the [Coffee Cart](https://coffee-cart.netlify.app/) website to record our first test and export it as a Nightwatch test script.

### How to record a test with Chrome DevTools recorder?

- Open the [Coffee Cart](https://coffee-cart.netlify.app/) website. We will use this as a demo page to record our first test.
- [Open Chrome DevTools](https://developer.chrome.com/docs/devtools/open/)(you can right-click on the webpage and click on inspect)
- Now, click on the `Recorder` panel
<br>
![Recorder-panel](https://user-images.githubusercontent.com/8705386/184881801-30dcd61f-5ace-47e8-9432-670771fc09ae.png)
<br>
<br>
- Click on the **Start new recording** button to begin recording the test
<br>
![Start New Recording](https://user-images.githubusercontent.com/8705386/184881819-381edd0c-3b76-4d60-a526-9af7913ba993.png)
<br>
<br>
- Enter your recording name and click on **Start a new recording** button at the bottom
- Just play with the website, try to add some of the coffee and then click on the cart. Press total, fill out the payment details and click on the submit button.
<br>
![User Action Gif](https://user-images.githubusercontent.com/8705386/184901473-537178d3-449c-469a-9d9d-b0781f3cfa93.gif)
<br>
<br>
- Remember: Every interaction with the webpage will be recorded by the Recorder, like switching webpage, clicking on a button, double click, and much more.
- Click on the stop recording button in the recorder after you are done with the recording.

Once the recording is done, we have our first automated recording script ready to run.

We have multiple options before us:

1. **Replay the Recording** - you can playback what was recorded
2. **Measure Performance using Performance Panel** - It replays the test and opens the **Performance Insights** panel beside the **Recorder** panel in the DevTools. We can analyse the website's performance using our recorded tests and the time it took to load and render resources.
3. **Edit and add steps** - We can manually edit our test steps. For example, if we want to change the selector, we have a selector tool or add a timeout—all without changing the code.
<br>
![Chrome DevTools Recorder](https://user-images.githubusercontent.com/8705386/184881824-bc10260b-0d52-4c9e-96b0-68be943eecd1.png)
<br>
<br>

### How to export the recorded test?

Let's talk about the option to export the test as a JSON file. This excellent feature allows you to share your test recordings with other users. They can import the JSON file and replay the tests as they recorded them. This is a nifty feature if you came across the bug and wanted to share the reproduction steps.

You can also export it as a Nightwatch test script right away. There are two ways which you can do it:

#### Using Nightwatch Recorder Extension

- Firstly, you need to [download the extension](https://chrome.google.com/webstore/detail/nightwatch-chrome-recorde/nhbccjfogdgkahamfohokdhcnemjafjk/) from Chrome Webstore.
- After you have installed the extension, open the **Recorder Panel** in the DevTools.
- Click on your saved recording, and then click on the export button (Down arrow button)
- You will see the **Export as Nightwatch test script** option
<br>
![Export Nightwatch Test](https://user-images.githubusercontent.com/8705386/184881833-dcc2d0d6-4012-4f9e-8fff-27f888adbd1d.png)
<br>
<br>
- When you click on the option, you have successfully exported your current recording to Nightwatch tests.
- Now you can  [run your first tests](https://nightwatchjs.org/guide/running-tests/using-the-cli-test-runner.html#tests-source) with Nightwatch

<br>
![Run first test](https://user-images.githubusercontent.com/2018070/185052499-44f3cde6-13d6-4809-9083-994575288264.gif)
<br>
<br>
<br>

#### Using `@nightwatch/chrome-recorder` library

You can convert the JSON recording to the Nightwatch test with the following CLI command.

<pre class="hide-indicator"><code class="language-bash">npm install -g @nightwatch/chrome-recorder

npx @nightwatch/chrome-recorder
</code></pre>

The tool will ask for your devtool recording location and output the result to the specified directory.

![CLI question image](https://user-images.githubusercontent.com/8705386/184905445-20139eab-d7b1-4dfb-8156-cea9fe299368.png)


The output from the tool will be written to the "Nightwatch" folder. Once we have the test file, we can run the Nightwatch tests using the CLI.

### Found an issue? Let us know.

If you find any situations where it generates unexpected results or something seems amiss, please let us know so we can clean them up. 

- [File an issue](https://github.com/nightwatchjs/nightwatch-recorder-extension/issues) for Nightwatch Recorder Extension
- [File an issue](https://github.com/nightwatchjs/nightwatch-chrome-recorder/issues) for `@nightwatch/chrome-recorder` library

### References

- https://developers.google.com/codelabs/devtools-recorder#0
- https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html#run-a-test
- https://github.com/nightwatchjs/nightwatch-recorder-extension
- https://github.com/nightwatchjs/nightwatch-chrome-recorder
