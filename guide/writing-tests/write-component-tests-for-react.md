---
title: Write component tests for react
description: Learn about how to write component tests for react.
---
## React component tests

### React component

Here's a basic example of a React component. It’s using Functional style of writing React Components. However, using Class style works as well.

<div class="sample-test"><i>Form.jsx</i>
<pre data-language="javascript"><code class="language-javascript">
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name.trim()) {
      return;
    }
    this.props.addTask(this.state.name);
    this.setState({name: ''});
  };

  handleChange = (e) => {
    this.setState({name: e.target.value});
  };

  render() {
    return (
      &lt;form onSubmit={this.handleSubmit} method='post'&gt;
        &lt;h2 className='label-wrapper'&gt;
          &lt;label htmlFor='new-todo-input' className='label__lg'&gt;
            What needs to be done?
          &lt;/label&gt;
        &lt;/h2&gt;
        &lt;input
          type='text'
          id='new-todo-input'
          className='input input__lg'
          name='text'
          autoComplete='off'
          value={this.state.name}
          onChange={this.handleChange}
        /&gt;
        &lt;button type='submit' className='btn btn__primary btn__lg'&gt;
          Add
        &lt;/button&gt;
      &lt;/form&gt;
    );
  }
}

export default Form;
</code></pre>
</div>

### Install the React plugin

For testing out React component we need to use the `@nightwatch/react` Nightwatch plugin. It uses the [Vite](https://vitejs.dev/) dev server under the hood and [vite-plugin-nightwatch](https://github.com/nightwatchjs/vite-plugin-nightwatch).

<pre><code class="language-bash">npm install @nightwatch/react</code></pre>

Update your Nightwatch configuration and add the plugin to the list:

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">module.exports = {
  plugins: ['@nightwatch/react']
}
</code></pre></div>

### Update the Nightwatch globals file

To be able to run component tests we need to make sure the `Vite` dev server is running and the localhost URL matches that which is set in the `.env` file. By default, it is set to `http://locahost:3000`

If you're not already using external globals with Nightwatch, go ahead and create a new file (e.g. `test/globals.js`) and then set the path in your Nightwatch config file:

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">module.exports = {
  plugins: ['@nightwatch/react'],
  
  globals_path: 'test/globals.js'
  // other nightwatch settings...
}
</code></pre></div>

Read more about [test globals](https://nightwatchjs.org/guide/concepts/test-globals.html).

<div class="sample-test">
<i>test/globals.js</i><pre class="line-numbers"><code class="language-javascript">const {setup} = require('@nightwatch/react');

let viteServer;
module.exports = {
  async before() {
    viteServer = await setup({
      // you can optionally pass an existing vite.config.js file
      // viteConfigFile: '../vite.config.js'
    });
    
    // This will make sure the launch Url is set correctly when mounting the React component
    this.launchUrl = `http://localhost:${viteServer.config.server.port}`;
  },

  async after() {
    await viteServer.close();
  }
}
</code></pre></div>

### Write the test

Below is a basic test for the Form component. In this test we mount a component and then we use the `expect` API to make sure the component is visible.

<div class="sample-test">
<i>test/src/formTest.js</i><pre class="line-numbers"><code class="language-javascript">describe('form test', function() {
  let component;

  before(async () => {
    component = await browser.mountComponent('/test/components/Form.jsx');
  });

  it('should render functional components without error', async function() {
    await browser.expect(component).to.be.visible;
  })
})
</code></pre></div>

### Recommended content
- [Concepts > Component testing](https://nightwatchjs.org/guide/concepts/component-testing.html)
- [Nightwatch React plugin on Github](https://github.com/nightwatchjs/nightwatch-plugin-react)
- [Sample todo app built with React and Vite and using Nightwatch for end-to-end & component tests](https://github.com/nightwatchjs-community/todo-react)
- [Blog > Introducing Component Testing in Nightwatch](https://nightwatchjs.org/blog/introducing-component-testing-in-nightwatch/)

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/writing-tests/global-test-hooks.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Use global hooks</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/write-nodejs-unit-integration-tests.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Write unit & integrations tests</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>