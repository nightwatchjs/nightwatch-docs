### Overview
Behind the scenes, the `end` commands sends a `DELETE` request to the WebDriver server, passing the current `sessionId` property.
After the `DELETE` is done, the `sessionId` is null-ed.

If the `sessionId` is not set, the callback is invoked right away and complete event is signaled.

#### Taking screenshots on failures/errors
If test failures or errors exist and screenshots are enabled, then screenshots are taken prior to sending the `DELETE`.

To enable screenshots for test failures/errors, set the `screenshots` property in your `nightwatch.json`, under the desired  `test_settings` environment. E.g.:

<div class="sample-test">
<pre data-language="javascript" class=" language-javascript"><code class=" language-javascript">
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
