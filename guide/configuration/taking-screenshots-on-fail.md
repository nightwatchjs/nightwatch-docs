---
title: Taking screenshots on failures/errors
description: Learn how to enable taking screenshots on failures/errors in Nightwatch.
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h1>Taking screenshots on failures/errors</h1></div>

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


### Recommended content
- [Reference > All configuration settings](/guide/reference/settings.html)
- [Reference > Configuration defaults](/guide/reference/defaults.html)