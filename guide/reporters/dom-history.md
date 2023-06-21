---
title: Nightwatch DOM History
description: Learn how to enable DOM history to debug tests with Nightwatch
---

<div class="page-header"><h1>DOM History</h1></div>

### Overview

This functionality will help you relive the tests visually as they happened. If trace mode is enabled, Nightwatch captures HTML DOM snapshots after every step. These HTML DOM snapshots can be viewed directly in the HTML report itself. You can even inspect element when a particular step was executed. This will help you debug your tests better.

In this guide you will learn
1. [How to enable DOM history][1]
2. [How to view the DOM history][2]
3. [How to debug using DOM history][3]

### Enable DOM history

Enabling DOM history is super simple. Simply run nightwatch tests with the `--trace` flag. 

For E.g.

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch --trace</code></pre>

or

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch &lt;path to test file/folder&gt; --trace</code></pre>

When you run your tests with the `--trace` flag, Nightwatch captures a DOM snapshot of the application under test after each step that can modify the application. Snapshots are not captured for steps that cannot modify the behaviour of the application. For E.g. assertions cannot modify the underlying HTML and hence snapshots are not captured for such steps. 

### View DOM history

In the previous section you learnt how to enable Nightwatch to capture the HTML DOM snapshots history. In order to debug, the main part is to view & analyse the DOM snapshots history at different steps of the test execution.

**Steps**
1. Once your test execution completes, simply open up the report in the browser by copy pasting the report file path
2. Select a failed test/hook from the left panel
3. Once a test/hook is selected, the steps will be visible under `Test Details` tab
4. Click on a step to see how the DOM snapshot looks like just after the step was executed

![DOM History][image-1]

Click on different steps will update the HTML DOM snapshot in the right panel so that it can be inspected using devtools.

### Debug using DOM history

Let's understand how this can be useful while debugging test errors. When a test errors out, the report will exactly pinpoint which step in the test has failed. Inorder to debug, we recomomend that you inspect the step that failed as well as steps before that. 

Since the HTML snapshots are embedded in the report in the browser itself, you can easily inspect the snapshots using devtools as shown below

![Inspect element with DOM history][image-2]

Inspecting the DOM snapshot in the previous steps can help with the debugging of the issue. If the previous snapshot is different from what you were expecting, the previous steps might need modification. If the previous snapshot looks correct, you can 
1. verify if the selectors used are accurate as per the DOM snapshot
2. inspect the state of the element you are interacting with to understand if the interactibility is hindered in any way or not

Happy debugging!

[1]:  /guide/reporters/dom-history.html#enable-dom-history
[2]:  /guide/reporters/dom-history.html#view-dom-history
[3]:  /guide/reporters/dom-history.html#debug-using-dom-history

[image-1]:  https://github.com/nightwatchjs/nightwatch-docs/assets/1677755/034456b3-7f06-4660-b546-b8ad606a56d4
[image-2]:  https://github.com/nightwatchjs/nightwatch-docs/assets/1677755/709bdfc8-5380-496d-afc2-6adfd55c79a8

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.orghttps://nightwatchjs.org/guide/reporters/use-html-reporter.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">HTML reporters</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/reporters/create-custom-reporter.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Add custom reporter</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>