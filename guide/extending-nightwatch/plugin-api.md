## Plugin API (beta)
Nightwatch `v2.0` also introduces a new interface for defining plugins and extending the base functionality of Nightwatch with your own custom commands and assertions. 

Plugins are essentially wrappers over custom commands and assertions. Plugins are installed in your `node_modules` folder. The plugin API is still in beta at the moment. 

#### Authoring a Nightwatch plugin
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

#### Installing a new plugin
Once the plugin will is available in NPM (or another package repository), you can simply install it in your project folder and then update the Nightwatch config file by adding it to the `plugins` Array.

First, install the plugin from NPM:

<div class="sample-test"><pre data-language="bash"><code class="language-bash">npm i my-new-plugin --save-dev</code></pre></div>

Then update your `nightwatch.conf.js` (or `nightwatch.json`) and add it to the `plugins` list:

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">{
  src_folders: [...],
    
  plugins: ['my-new-plugin']
  
  // other nightwatch config options

}
</code></pre></div>

#### Example
See our new `Vite` plugin [vite-plugin-nightwatch](https://github.com/nightwatchjs/vite-plugin-nightwatch) for an example.
