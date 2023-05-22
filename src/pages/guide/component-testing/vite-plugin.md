---
title: Vite Plugin for Nightwatch
description: Learn how to do write and execute component tests in Nightwatch using Vite.
summary\_image: /img/banners/component-testing-overview.png
---
# Component Testing with Vite

### Overview

Component testing in Nightwatch is built out of our [**vite-plugin-nightwatch**][1] plugin. The plugin can be used in projects that are using Vite.

<div style="text-align: center; max-width: 80%; margin-bottom: 30px; ">
<a href="https://github.com/nightwatchjs/vite-plugin-nightwatch"><img class="github-embed" src="https://opengraph.githubassets.com/b9f11016590a96e4846d047aa81077a62d81c8d38ed769e4ff4ca6638f8e13e4/nightwatchjs/vite-plugin-nightwatch" alt="vite-plugin-nightwatch on Github" /></a>
</div>

### What is Vite?

[Vite][2] is an extremely fast build tool for modern web applications, initially created for Vue.js apps but now with support for React and other UI frameworks as well. Vite is the French word for fast, which is appropriate because among the available front-end build tools, Vite is the fastest and also one of the easiest build tools to use.

If you have used tools like **Babel** or **Webpack** you may be familiar with the problems that arise from the complexity of the build setup and the slow startup times. Vite has somehow managed to eliminate all these issues by providing a tool that it's already configured out of the box and which leverages the new capabilities of modern browsers to handle [ES Modules][3] directly, so there's no need of using tools like Babel.

In addition, Vite is using [ESBuild][4] under the hood for bundling the Javascript code and related assets, which appears to be the fastest among the bunch by a great deal.

![Screenshot-2022-02-05-at-16.37.10.png][image-1]

### Installation

#### Step 1

The Vite plugin can be installed from NPM with:

```bash npm install vite-plugin-nightwatch```

#### Step 2

Skip this step if already using `@nightwatch/react` or `@nightwatch/vue` in your project. Nightwatch loads the Vite plugin automatically. Otherwise, update your Nightwatch configuration and add the plugin to the list:

nightwatch.conf.js

```
js module.exports = {
  plugins: ['vite-plugin-nightwatch']
}

```

#### Step 3

Update your [Vite configuration][5]:

vite.config.js

```js
import { defineConfig } from 'vite'
import nightwatchPlugin from 'vite-plugin-nightwatch'

export default defineConfig({
  plugins: [
    // ... other plugins, such as vue() or react()
    nightwatchPlugin()
  ]
})```

Nightwatch assumes the Vite dev server is already running and will be using `http://localhost:3000` as base url. You can change that in your `nightwatch.conf.js` by setting either `launchUrl` or `baseUrl` properties.

To start the Vite dev server, in your project run:
```bash
npm run dev
```

### Plugin options

The plugin accepts a few config options:

#### - `componentType`

Specify the type of component to be tested. Possible values:

- `vue` (default, if none specified)
- `react`

vite.config.js

```js
export default {
  plugins: [
    // ... other plugins, such as vue() or react()
    nightwatchPlugin({
      componentType: 'vue'
    })
  ]
}
```

#### - `renderPage`

Specify the path to a custom test renderer to be used. Default renderers are included in the package for both Vue and React components, but this option can overwrite that value.

vite.config.js

```js
export default {
  plugins: [
    // ... other plugins, such as vue() or react()
    nightwatchPlugin({
      renderPage: './src/test_renderer.html'
    })
  ]
}

```

### API Commands

This plugin provides a few Nightwatch commands which can be used while writing tests.

#### - `browser.mountVueComponent(`componentPath`,`[options]`,`[callback]`)`

**Parameters:**

- `componentPath` – location of the component file (`.vue`) to be mounted
- `options` – this can include:
  - `plugins`: if needed, a store (VueX or Pinia) and a router can be loaded together with the component
  - `mocks`: this can be a list of url calls that can be mocked (will be passed to [sinon][6] automatically); at the moment only [Fetch API][7] calls can be mocked, but XHR support will be added soon.
- `callback` – an optional callback function which will be called with the component element

#### Example

```js
const component = await browser.mountVueComponent('/src/components/Form.vue', {
  plugins: {
    store: '/src/lib/store.js',
    router: '/src/lib/router.js'
  },

  mocks: {
    '/api/get-user': {
      type: 'fetch',
      body: {
        data: {
          "firstName": "Jimmy",
          "lastName": "Hendrix"
        }
      }
    }
  }
})

```

#### - `browser.mountReactComponent(`componentPath`,`[props]`,`[callback]`)`

**Parameters:**

- `componentPath` – location of the component file (`.jsx`) to be mounted
- `props` – properties to be passed to the React component, this will be serialized to JSON
- `callback` – an optional callback function which will be called with the component element

##### Example

```js
const component = await browser.mountReactComponent('/src/components/Form.jsx')
```

#### - `browser.launchComponentRenderer()`

This will call `browser.navigateTo('/nightwatch/')` and open the browser. Needs to be used before the `.importScript()` command, if used.

You can also set `launchUrl` as a global at runtime and then the url to be used will be `${browser.globals.launchUrl}/nightwatch`, which makes it possible to set the launch url dynamically.

#### - `browser.importScript(`scriptPath`,`[options]`,`[callback]`)`

**Parameters:**

- `scriptPath` – location of the script file to inject into the page which will render the component; needs to be written in ESM format
- `options` – this can include:
  - `scriptType`: the `type` attribute to be set on the `<script>` tag (default is `module`)
  - `componentType`: either `vue` or `react` (default is `vue`)
- `callback` – an optional callback function which will be called with the component element

##### Example

```js
const formComponent = await browser
  .launchComponentRenderer()
  .importScript('/test/lib/scriptToImport.js');
```

Example `scriptToImport.js`:

scriptToImport.js

```js
import {mount} from '/node_modules/@vue/test-utils/dist/vue-test-utils.esm-browser.js'
import Component from '/test/components/vue/Form.vue'

let element = mount(Component, {
 attachTo: document.getElementById('app'),
 global: {
   plugins: []
 }
});

// This will be used by Nightwatch to inspect properties of this component
window['@@component_element'] = element;
```

### Recommended content

- [Blog \> Introducing Component Testing in Nightwatch][8]

<div class="doc-pagination pt-40">
  <div class="previous">
 <a href="/guide/component-testing/introduction.html">
   <span>←</span><div class="d-flex flex-column"><span class="smallT">Back</span><span class="bigT">Introduction</span></div>
 </a>
  </div>
  <div class="next">
 <a href="/guide/component-testing/testing-react-components.html">
      <div class="d-flex flex-column"><span class="smallT">Next Page</span><span class="bigT">Test React components</span></div><span>→</span>
 </a>
  </div>
</div>

[1]: https://github.com/nightwatchjs/vite-plugin-nightwatch
[2]: https://vitejs.dev/
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[4]: https://esbuild.github.io/ "ESBuild"
[5]: https://vitejs.dev/config/
[6]: https://sinonjs.org/
[7]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[8]: https://nightwatchjs.org/blog/introducing-component-testing-in-nightwatch/

[image-1]: https://blog.nightwatchjs.org/content/images/2022/02/Screenshot-2022-02-05-at-16.37.10.png "esbuild performance metrics screenshot"
