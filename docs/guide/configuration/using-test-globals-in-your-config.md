---
title: Using test globals in your config
description: Learn how to use test globals in configuration file
---

<div class="page-header"><h1>Using test globals in your config</h1></div>

Another useful concept that Nightwatch provides is test globals. In its most simple form, it is a dictionary of name-value pairs which is defined in your configuration file.

Globals can be defined either as a `"globals"` property or as an external file which is specified as the `"globals_path"` property.

Here's an example definition using the `"globals"` property in `nightwatch.json`:

<div class="sample-test">

<pre data-language="javascript"><code class="language-javascript">{
  "src_folders": [],

  "test_settings": {
    "default": {
      "launch_url": "https://nightwatchjs.org",

      "globals": {
        "myGlobalVar" : "some value",
        "otherGlobal" : "some other value"
      }
    }
  }
}</code></pre>

</div> 

Like the `launch_url` property, the `globals` object is made available directly on the Nightwatch api which is passed to the tests.

<div class="sample-test">

<pre data-language="javascript"><code class="language-javascript">module.exports = {
  'Demo test' : function (browser) {
    console.log(browser.globals.myGlobalVar); // myGlobalVar == "some value"
  }
};</code></pre>

</div>


### Recommended content
- [Reference > All configuration settings](https://nightwatchjs.org/guide/reference/settings.html)
- [Reference > Configuration defaults](https://nightwatchjs.org/guide/reference/defaults.html)