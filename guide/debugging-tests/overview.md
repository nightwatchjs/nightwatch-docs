---
title: Debugging tests
description: Learn how to pause your test at specific points and debug by accessing the browser or executing commands using a REPL interface.
---

<div class="page-header"><h2>Debugging tests</h2></div>

### Overview

Starting with v2.3.0, Nightwatch presents a more powerful test script debugging experience. It includes an updated `.pause()` command (without any breaking changes) and a new `.debug()` command.

#### Updated .pause() command 

The [`.pause()`](https://nightwatchjs.org/api/pause.html) command now provides the ability to resume paused tests on-demand while debugging. In addition, users can also step over to the next test step (execute the next test step) and pause again.

#### New .debug() command 

The new [`.debug()`](https://nightwatchjs.org/api/debug.html) command provides a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) interface where users can try out any of the available Nightwatch commands or assertions and see them get executed in the running browser, in real-time.

<iframe src="https://player.vimeo.com/video/732086808?loop=1&byline=0&portrait=0&title=0" style="width:100%;height:560px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

### Recommended content
- [API docs > `.pause()`](https://nightwatchjs.org/api/pause.html)
- [API docs > `.debug()`](https://nightwatchjs.org/api/debug.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/running-tests/take-heap-snapshot.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Take heap snapshot</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/debugging-tests/using-pause.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Use.pause()</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>