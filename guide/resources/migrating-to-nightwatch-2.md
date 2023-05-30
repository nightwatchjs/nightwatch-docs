---
title: Migrating to Nightwatch 2.0
description: Learn how to migrate to Nightwatch 2.0.
---

<div class="page-header"><h2>Migrating to Nightwatch 2</h2></div>

Below is a list of potentially breaking changes in version 2.0 and deprecated functionality which was removed. All attempts have been made to ensure a complete and accurate list, but there might be things which we overlooked.

We have tried to minimize the amount of breaking changes as much as possible but some of them were difficult to avoid.

### Using ES6 async/await
When using ES6 async/await test cases, the result value of Nightwatch commands does not contain the `status` and `value` properties anymore, but simply the `value` (this can be reversed by setting `backwards_compatibility_mode` to `true` in your nightwatch config).

### Element locate errors:
Changes in the result object:
- contains an `error` property which is an Error object instance
- no longer contains `httpStatusCode` property
- no longer contains `value` property

### Dependencies
- removed `proxy-agent` as dependency since it was frequently causing dependency issues; the [proxy-agent](https://www.npmjs.com/package/proxy-agent) package can be installed separately from NPM and used in the same way.

### Other
- removed .startWebDriver() / .stopWebDriver() from the CLI Runner since the Webdriver service is now managed by the `selenium-webdriver`.
  See https://github.com/nightwatchjs/nightwatch/issues/2918
- remove setting `webdriver.use_legacy_jsonwire`
- removed event `nightwatch:finished` from main client instance
- no longer possible to use Nightwatch with Webdriver.io, as was advertised [here](https://v17.nightwatchjs.org/guide/extending-nightwatch/using-with-webdriverio.html).

<ul style="display: none"></ul>