---
title: Take heap snapshot
description: Learn how to record heap snapshots right from your Nightwatch tests and use DevTools heap profiler to find memory leaks.
---

<div class="page-header"><h2>Take heap snapshot</h2></div>

### Overview

A heap snapshot represents how the memory is distributed among your page's JavaScript objects and related DOM nodes at the point of time the snapshot was taken. This helps you find and fix memory issues that affect page performance, including memory leaks, memory bloat, and frequent garbage collections.

With [Chrome DevTools Protocol support](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/) now available in Selenium 4, Nightwatch now allows you to take heap snapshot of your browser's current execution context anytime during the test run and save it as a `.heapsnapshot` file. This file can then be loaded into the Chrome DevTools (`Memory > select "Heap Snapshot" > click on "Load" button at the bottom`) to analyze memory graphs, compare snapshots, and find memory leaks.

<div class="alert alert-info">
  This command only works with Chromium based browsers such as Google Chrome and Microsoft Edge.
</div>

### Take heap snapshot

This command allows you to take a snapshot of how your heap memory is distributed among your page's JavaScript objects and related DOM nodes, which then can be loaded into Chrome DevTools to analyze and find any memory leaks.

You can also take multiple snapshots of the heap memory at different points of time and then compare what has changed in the memory between the time those snapshots were taken.

Call the `browser.takeHeapSnapshot()` command with the required parameters anytime you want to take the snapshot.

`takeHeapSnapshot()` accepts the location where the snapshot is to be saved as the first argument. An optional callback function can be passed as the second argument, which will run once the process of taking the heap snapshot is complete, with the contents of the snapshot as its argument.

### Example

<div class="sample-test"><i>tests/take-heap-snapshot.js</i>
<pre class="line-numbers language-javascript">
<code class="language-javascript">describe('take heap snapshot', function() {
  it('takes heap snapshot and saves it as snapshot1.heapsnapshot file', function() {
    browser
      .navigateTo('https://www.google.com')
      .takeHeapSnapshot('heap_snaps/snapshot1.heapsnapshot');
  });
});
</code>
</pre></div>

When used with `async`/`await` syntax, `takeHeapSnapshot` command returns the contents of the heap snapshot, which then can be saved manually to a `.heapsnapshot` file.

<div class="sample-test"><i>tests/take-heap-snapshot-async-await.js</i>
<pre class="line-numbers language-javascript">
<code class="language-javascript">const fs = require('fs');

describe('take heap snapshot with async/await', function() {
  it('takes heap snapshot and returns the snapshot content', async function() {
    await browser.navigateTo('https://www.google.com');

    const heapSnapshot = await browser.takeHeapSnapshot();
    fs.writeFileSync('heap_snaps/snapshot2.heapsnapshot', heapSnapshot);
  });
});
</code>
</pre></div>

### Recommended content

- [Chrome Devtools > Record heap snapshots](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/) 
- [Video > Memory Profiling with Chrome DevTools](https://www.youtube.com/watch?v=L3ugr9BJqIs)
- [Chrome DevTools Protocol in Selenium 4](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/running-tests/catch-js-exceptions.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Capture browser exceptions</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/debugging-tests/overview.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Debugging tests</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>

