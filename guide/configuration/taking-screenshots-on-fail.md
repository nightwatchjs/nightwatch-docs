---
title: Taking screenshots on failures/errors
description: Learn how to enable taking screenshots on failures/errors in Nightwatch.
summary_image: https://nightwatchjs.org/img/banner.png
---

## Taking screenshots on failures/errors

If test failures or errors exist and screenshots are enabled, then screenshots are taken prior to sending the `DELETE`.

To enable screenshots for test failures/errors, set the `screenshots` property in your `nightwatch.json`, under the desired  `test_settings` environment. E.g.:

<div class="sample-test"><i>nightwatch.json</i>
<pre class="line-numbers" data-language="javascript"><code class=" language-javascript">
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
</code></pre>
</div>
