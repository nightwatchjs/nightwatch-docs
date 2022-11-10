---
title: Using JSX in React component tests
description: Learn how to do write and execute React component tests in Nightwatch using the JSX syntax.
summary\_image: /img/banners/react-component-testing.png
---
<div class="page-header"><h1>Using JSX in React component tests</h1></div>

### Overview

Starting with version 2.4, Nightwatch supports running React component tests with JSX and which are written in a [Component Story Format][1] (CSF) subset. 

### What is Component Story Format

Component Story Format (CSF) is an [open standard][2] based on ES6 modules introduced by the [Storybook][3] team as a declarative model for writing [component _stories_][4]. 

A **story** is a named `export` which is an instance of the component, together with _props_, _args_, and/or _test capabilities_. A component test file contains **one or more stories**.

File names must use `.jsx` or `.tsx` as extension. In its simplest form, the component test looks as follows:

<div class="sample-test"><i>test/sampleTest.jsx</i><pre class="line-numbers language-javascript"><code class="language-javascript">import Form from '../components/Form.jsx';

export default {
  title: 'Form',
  component: Form,
}

export const FormStory = () => &lt;Form /&gt;

</code></pre></div>


Considering the above example, let's add a second story for our component test:

<div class="sample-test"><i>test/sampleTest.spec.jsx</i><pre class="line-numbers language-javascript"><code class="language-javascript">import Form from '../components/Form.jsx';

export default {
  title: 'Form Component',
  component: Form
}

export const EmptyForm = () => &lt;Form /&gt;

export const AnotherForm = Object.assign(() => &lt;Form addTask={function(value) {
  console.log('Add Task', value);
}} /&gt;, {
  // additional parameters
});

</code></pre></div>

### Add interaction tests

Each component story (i.e. named export) takes several (`async`) function properties which define the tests that need to be executed. The testing functionality can be written using the following functions:

- `play({canvasElement, args})` – is executed in the DOM context and receives the component story element
- `test(browser, {component, result})` – is executed in the Node context and receives the Nightwatch api object (`browser`); receives the `component` element object as a Nightwatch compatible element instance
- `preRender()` – runs before the component is rendered 
- `postRender()` – runs after the component is rendered

In addition, component level test hooks can be declared on the top level, in the `default export` section. 

#### Example

In the example below, the `play()` function uses the DOM utilities from the [Testing Library](https://testing-library.com/).

<div class="sample-test"><i>test/sampleTest.spec.jsx</i><pre class="line-numbers language-javascript"><code class="language-javascript">import { fireEvent, within } from '@testing-library/dom';
import Form from '../components/Form.jsx';

export default {
  title: 'Form Component',
  component: Form,

  // executed before all the individual component stories; runs in Node context
  async setup(browser) {
    console.log('global setup hook', browser.capabilities)
  },

  // executed after all the individual component stories; runs in Node context
  async teardown(browser) {
    console.log('global teardown hook')
  },

  // executed before each individual component story; runs in Node context
  async preRender(browser, context) {
    // context is made of {id, name, title}
    console.log('preRender', context.id);
  },

  // executed after each individual component story; runs in Node context
  async preRender(browser, context) {
    // context is made of {id, name, title}
    console.log('preRender', context.id);
  }
}

export const AnotherForm = Object.assign(() => &lt;Form addTask={function(value) {
  console.log('Add Task', value);
}} /&gt;, {
  async preRender() {},

  async postRender() {
    console.log('after mount', window);
  },

  async play({canvasElement, args}) {
    console.log('play function', args);

    const root = within(canvasElement);
    const input = root.getByTestId('new-todo-input');


    fireEvent.change(input, {
      target: {
        value: 'another one bites the dust'
      }
    });

    return {
      fromPlay: input
    }
  },

  test: async (browser, {component, result}) => {
    console.log('Result from play', result)
    await expect(component).to.be.visible;

    await expect(component.find('input')).to.have.property('value').equal('another one bites the dust');
  }
});

</code></pre></div>

### Loading static assets

When loading components in isolation, it's often needed to load additional static assets, such as CSS files, which contain styles used by the component. 

Beside loading assets in the (JSX) test file directly, Nightwatch provides 2 ways to accomplish this:

1. create a `nightwatch/index.jsx` file in the current project 
2. create an entirely new test renderer file and use the `renderPage` option in the [Vite plugin][5]

### Example project
We've put together a basic To-do app written in React and built on top of Vite which can be used as a boilerplate. It can be found at [https://github.com/nightwatchjs-community/todo-react][6]  

<div style="text-align: center; max-width: 80%; margin-bottom: 30px; ">
<a href="https://github.com/nightwatchjs-community/todo-react"><img class="github-embed" src="https://opengraph.githubassets.com/default/nightwatchjs-community/todo-react" alt="nightwatch-react-plugin on Github" /></a>
</div>

### Recommended content
- [Blog \> Introducing Component Testing in Nightwatch][7]

<div class="doc-pagination pt-40">
  <div class="previous">
	<a href="https://nightwatchjs.org/guide/component-testing/testing-react-components.html">
	  <span>←</span><div class="d-flex flex-column"><span class="smallT">Back</span><span class="bigT">Test React components</span></div>
	</a>
  </div>
  <div class="next">
	<a href="https://nightwatchjs.org/guide/component-testing/storybook-component-testing.html">
      <div class="d-flex flex-column"><span class="smallT">Next Page</span><span class="bigT">Storybook integration</span></div><span>→</span>
	</a>
  </div>
</div>



[1]:	https://storybook.js.org/docs/react/api/csf
[2]:	https://github.com/ComponentDriven/csf
[3]:	https://storybook.js.org/
[4]:	https://storybook.js.org/docs/react/writing-stories/introduction
[5]:	http://local-new.nightwatchjs.org/guide/component-testing/vite-plugin.html#plugin-options
[6]:	https://github.com/nightwatchjs-community/todo-react "nightwatchjs-community/todo-react"
[7]:	https://nightwatchjs.org/blog/introducing-component-testing-in-nightwatch/