---
title: Grouping tests with Nightwatch
description: Learn how to group tests together for better organization of the test suite.
summary_image: https://nightwatchjs.org/img/banner.png
---

## Grouping tests with Nightwatch

### Overview

Nightwatch makes it possible to organize your test scripts into groups and run them as needed. To group tests together just place them in the same sub-folder. The folder name is the name of the group.

### Example

<pre>
lib/
  ├── selenium-server-standalone.jar
custom-commands/
  ├── loginUser.js
  ├── attachPicture.js
tests/
  ├── logingroup
  |   ├── login_test.js
  |   └── otherlogin_test.js
  ├── addressbook
  |   ├── addressbook_test.js
  |   └── contact_test.js
  ├── chat
  |   ├── chatwindow_test.js
  |   ├── chatmessage_test.js
  |   └── otherchat_test.js
  └── smoketests
      ├── smoke_test.js
      └── othersmoke_test.js
</pre>

To run only the `smoketests` group you would do the following:

```bash
nightwatch --group smoketests```

Also, if you would want to skip running the `smoketests` group you would do the following:

```bash
nightwatch --skipgroup smoketests```

To skip multiple groups, just add them as comma-separated:

```bash
nightwatch --skipgroup addressbook,chat```

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/running-tests/filtering-by-test-tags.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Filter by test tags</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/running-tests/programmatic-api.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Use the programmatic API</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
