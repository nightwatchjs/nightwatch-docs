---
title: Taking screenshots on failures/errors
description: Learn how to enable taking screenshots on failures/errors in Nightwatch.
summary_image: https://nightwatchjs.org/img/banner.png
---

# Taking screenshots on failures/errors

If test failures or errors exist and screenshots are enabled, then screenshots are taken prior to sending the `DELETE`.

To enable screenshots for test failures/errors, set the `screenshots` property in your `nightwatch.json`, under the desired  `test_settings` environment. E.g.:

nightwatch.json

```js

{
  "test_settings" : {
    "default" : {
      "screenshots" : {
        "enabled" : true,
        "on_failure" : true,
        "path" : "./screens"
      }
    }
  }
}
```

### Recommended content

- [Reference > All configuration settings](https://nightwatchjs.org/guide/reference/settings.html)
- [Reference > Configuration defaults](https://nightwatchjs.org/guide/reference/defaults.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/configuration/using-env-variables-in-your-config.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Use ENV variables</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/configuration/customising-test-output.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Test output</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
