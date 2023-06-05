---
title: Nightwatch DOM History
description: Learn how to enable DOM history to debug tests with Nightwatch
---

<div class="page-header"><h2>DOM History</h2></div>

### Overview

This functionality will help you relive the tests visually as they happened. If trace mode is enabled, Nightwatch captures DOM snapshots after every step and shows it in the HTML reporter. This will help you debug your tests better.

### Enable DOM history

Enabling DOM history is super simple. Simply run nightwatch tests with the `--trace` flag. When you run your tests with the `--trace` flag, Nightwatch captures a DOM snapshot of the application under test after each step that can modify the application. 

For E.g.

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch --trace</code></pre>

or

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch &lt;path to test file/folder&gt; --trace</code></pre>


### View DOM history

In the previous section you learnt how to tell Nightwatch to capture the DOM snapshots history. In order to debug, the main part is to analyse the DOM snapshots history. 

Steps
1. Once your test execution completes, simply open up the report in the browser
2. Select a failed test/hook from the left panel
3. Once a test/hook is selected, the steps will be visible under `Test Details` tab
4. Click on a step to see how the DOM snapshot looks like just after the step was executed

![DOM History][image-1]

### Debug using DOM history

Inspecting the DOM snapshot in the previous step can help with the debugging of the issue. If the previous snapshot is different from what you were expecting, the previous steps might need modification. If the previous snapshot looks correct, you can inspect the selector used or actionability for the errored step.

Happy debugging!


[image-1]:  https://github.com/nightwatchjs/nightwatch-docs/assets/1677755/034456b3-7f06-4660-b546-b8ad606a56d4

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