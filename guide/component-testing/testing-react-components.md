---
title: React component testing
description: Learn how to do write and execute React component tests in Nightwatch.
summary\_image: /img/banners/react-component-testing.png
---
<div class="page-header"><h1>React component testing in Nightwatch</h1></div>

### Overview
React component testing in Nightwatch is available using our official **[`@nightwatch/react`][1]** plugin, which is built on top of the [vite-plugin-nightwatch][2] plugin. The React plugin manages its own Vite dev server internally, so it can be used in any project, irrespective of whether it is using Vite or not.  

<div style="text-align: center; max-width: 80%; margin-bottom: 30px; ">
<a href="https://github.com/nightwatchjs/nightwatch-plugin-react"><img class="github-embed" src="https://opengraph.githubassets.com/default/nightwatchjs/nightwatch-plugin-react" alt="nightwatch-react-plugin on Github" /></a>
</div>

### Installation

#### Step 1.
The `@nightwatch/react` plugin can be installed from NPM with:

<pre class="hide-indicator"><code class="language-bash">npm install @nightwatch/react</code></pre>

#### Step 2.
Then update your Nightwatch configuration and add the plugin to the list:

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">module.exports = {
  plugins: ['@nightwatch/react']
}
</code></pre></div>

#### Step 3.
#### a. Non-Vite projects
The `@nightwatch/react` plugin manages its own Vite dev server internally so if you don’t use Vite already in your project, then you are done (for now). 

#### b. Already using Vite
If you already have a Vite project, then the `@nightwatch/react` plugin will try to use the existing `vite.config.js` or `vite.config.ts`, if either one is found. You can also supply a different Vite config file via the plugin options (see below).

Update the `vite.config.js` and add the `vite-plugin-nightwatch` plugin:
<div class="sample-test"><i>vite.config.js</i><pre class="line-numbers language-javascript"><code class="language-javascript">import nightwatchPlugin from 'vite-plugin-nightwatch'

export default {
  plugins: [
	// ... other plugins, such as vue() or react()
	nightwatchPlugin()
  ]
})</code></pre></div>

### Write tests

#### Using JSX + Component Story Format
Starting with version 2.4, Nightwatch supports running React component tests with JSX and which are written in a [Component Story Format][3] (CSF) subset. CSF is an [open standard][4] based on ES6 modules introduced by [Storybook][5].

File names must use `.jsx` or `.tsx` as extension. In its simplest form, the component test looks as follows:

<div class="sample-test"><i>test/sampleTest.jsx</i><pre class="line-numbers language-javascript"><code class="language-javascript">import Form from '../components/Form.jsx';

export default {
  title: 'Form',
  component: Form,
}

export const FormStory = () => &lt;Form /&gt;

</code></pre></div>

In component testing terms, a "story" is representation of a particular component with props or args. In our concrete case, it is a single `export const` declaration. 

- Read more about [writing tests in Component Story Format](https://nightwatchjs.org/guide/component-testing/write-jsx-react-tests.html)

#### Without JSX

This plugin provides only the `mountComponent` command which can be used to mount a component in isolation and optionally with a set of given props.

<div class="apimethod">
  <h4>.mountComponent(`componentPath`, `[props]`, `[callback]`)</h4>

<h5>Parameters:</h5>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 100px;">Type</th>
        <th>componentPath</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>`componentPath`</td>
        <td>`string`</td>
        <td>Location of the component file (`.jsx`) to be mounted</td>
      </tr>
			<tr>
        <td>`props`<br><span class="optional">Optional</span></td>
        <td>`object` | `function`</td>
        <td>Properties to be passed to the React component; this can be an object which will be serialized to JSON or a function which returns the props object. The function will be executed in the browser's context.</td>
      </tr>
			<tr>
        <td>`callback`<br><span class="optional">Optional</span></td>
        <td>`function`</td>
        <td>An optional callback function which will be called with the component element.</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

### Configuration
We’ve designed the `@nightwatch/react` plugin to work with sensible configuration defaults, but in some more advanced scenarios you may need to change some of the config options. 

#### Vite dev server
By default, Nightwatch will attempt to start the Vite dev server automatically. You can disable that by adding the below in your `nightwatch.conf.js` file, under the `vite_dev_server` dictionary. 

This is common to other component testing plugins that are based on Vite, such as the `@nightwatch/vue` plugin.

<div class="sample-test"><i>nightwatch.conf.js</i><pre class="line-numbers language-javascript"><code class="language-javascript">module.exports = {
  plugins: ['@nightwatch/react'],
  vite_dev_server: {
    start_vite: true,
    port: 5173
  }
}
</code></pre></div>


#### Plugin options
The plugin accepts a few config options which can be set when working with an existing `vite.config.js` file in the project.

##### - `renderPage`
Specify the path to a custom test renderer to be used. A default renderer is included in the package, but this option can overwrite that value.

<div class="sample-test"><i>vite.config.js</i><pre class="line-numbers language-javascript"><code class="language-javascript">export default {
  plugins: [
    // ... other plugins, such as vue() or react()
    nightwatchPlugin({
      renderPage: './src/test_renderer.html'
    })
  ]
}
</code></pre></div>

##### Example
<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">const component = await browser.mountReactComponent('/src/components/Form.jsx')</code></pre></div>

<div class="sample-test"><i>test/sampleTest.js</i><pre class="line-numbers language-javascript"><code class="language-javascript">describe('user info test', function() {
  let component;

  before(async () => {
    component = await browser.mountComponent('/src/components/UserInfo.jsx', function() {
      return {
        date: new Date(),
        text: 'I hope you enjoy reading Ulysses!',
        author: {
          name: 'Leopold Bloom',
          avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Poldy.png'
        }
      }
    });
  });

  it('should render the component without error', function() {
    browser.expect(component).to.be.visible;
  })
})</code></pre></div>

### Loading static assets

When loading components in isolation, it's often needed to load additional static assets, such as CSS files, which contain styles used by the component. 

Beside loading assets in the (JSX) test file directly, Nightwatch provides 2 ways to accomplish this:

1. create a `nightwatch/index.jsx` file in the current project 
2. create an entirely new test renderer file and use the `renderPage` option in the [Vite plugin][6]

### Example project
We've put together a basic To-do app written in React and built on top of Vite which can be used as a boilerplate. It can be found at [https://github.com/nightwatchjs-community/todo-react][7]  

<div style="text-align: center; max-width: 80%; margin-bottom: 30px; ">
<a href="https://github.com/nightwatchjs-community/todo-react"><img class="github-embed" src="https://opengraph.githubassets.com/default/nightwatchjs-community/todo-react" alt="nightwatch-react-plugin on Github" /></a>
</div>

<div class="doc-pagination pt-40">
  <div class="previous">
	<a href="https://nightwatchjs.org/guide/component-testing/vite-plugin.html">
	  <span>←</span><div class="d-flex flex-column"><span class="smallT">Back</span><span class="bigT">Using the Vite plugin</span></div>
	</a>
  </div>
  <div class="next">
	<a href="https://nightwatchjs.org/guide/component-testing/write-jsx-react-tests.html">
      <div class="d-flex flex-column"><span class="smallT">Next Page</span><span class="bigT">JSX in React component tests</span></div><span>→</span>
	</a>
  </div>
</div>


### Recommended content
- [Blog \> Introducing Component Testing in Nightwatch][8]

[1]:	https://github.com/nightwatchjs/nightwatch-plugin-react
[2]:	https://nightwatchjs.org/guide/component-testing/vite-plugin.html
[3]:	https://storybook.js.org/docs/react/api/csf
[4]:	https://github.com/ComponentDriven/csf
[5]:	https://storybook.js.org/
[6]:	http://local-new.nightwatchjs.org/guide/component-testing/vite-plugin.html#plugin-options
[7]:	https://github.com/nightwatchjs-community/todo-react "nightwatchjs-community/todo-react"
[8]:	https://nightwatchjs.org/blog/introducing-component-testing-in-nightwatch/