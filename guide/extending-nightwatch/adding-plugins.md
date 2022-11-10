---
title: Adding plugins
description: Learn how to extend Nightwatch capabilities by adding plugins.
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h2>Adding plugins</h2></div>

### Overview
Nightwatch `v2.0` introduces a new interface for defining plugins and extending the base functionality of Nightwatch with your own custom commands and assertions. 

Plugins are essentially wrappers over custom commands and assertions. Plugins are installed in your `node_modules` folder.  

### Authoring a Nightwatch plugin
If you're new to publishing NPM packages, read the [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages) guide first.

A Nightwatch plugin needs to be installed from NPM in the same project where Nightwatch is used (or as a global NPM package).

##### Folder structure:
The folder structure is very simple and looks like below. A `nightwatch` folder needs to be present in the plugin where the custom commands and assertions will be automatically loaded from.

<div class="sample-test"><pre class="hide-indicator language-bash"><code>  ├── nightwatch/ 
  |   ├── commands/
  |   |    ├── my_new_custom_command.js
  |   |    └── my_other_custom_command.js
  |   └── assertions/
  |        ├── my_new_custom_assertions.js
  |        └── my_other_custom_command.js
  ├── index.js
  ├── LICENSE.md
  ├── package.json
  └── README.md
</code></pre></div>

The Nightwatch runner will pick up the custom commands and assertions __automatically__ if the plugin is defined with the above structure.

### Installing a new plugin
Once the plugin will is available in NPM (or another package repository), you can simply install it in your project folder and then update the Nightwatch config file by adding it to the `plugins` Array.

First, install the plugin from NPM:

<div class="sample-test"><pre data-language="bash"><code class="language-bash">npm i my-new-plugin --save-dev</code></pre></div>

Then update your `nightwatch.conf.js` (or `nightwatch.json`) and add it to the `plugins` list:

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="line-numbers" data-language="javascript"><code class="language-javascript">{
  plugins: ['my-new-plugin']
  
  // other nightwatch config options

}
</code></pre></div>

### Recommended content
- [vite-plugin-nightwatch on Github](https://github.com/nightwatchjs/vite-plugin-nightwatch)
- [Nightwatch React plugin on Github](https://github.com/nightwatchjs/nightwatch-plugin-react)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-reporters.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Create custom reporters</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/browser-drivers/geckodriver.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">GeckoDriver (Firefox)</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
