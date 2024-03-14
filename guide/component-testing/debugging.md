---
title: Debugging Component Tests
description: Learn how to do debug component tests using Nightwatch.
---

<div class="page-header"><h1>Debugging component tests in Nightwatch</h1></div>


### Overview

Debugging component tests in Nightwatch isn't as straightforward as debugging a regular Node.js application or service, since Nightwatch needs to inject the code to render to component into the browser.

However, since Nightwatch v2.4 we provide several ways to inspect and debug the mounted component using the browser devtools console.

### Preview the component

Nightwatch provides the ability to run a component tests in preview mode (using the `--preview` CLI argument) which would only open the Vite test renderer and pause the execution indefinitely.

This can be useful during development, since the Vite renderer has the ability to automatically reload the component via its built-in Hot Module Replacement (HMR) functionality.

<pre class="hide-indicator"><code class="language-bash">npx nightwatch test/components --preview</code></pre>


You can use the Nightwatch built-in parallelism to open the story in both Firefox and Chrome:

<pre class="hide-indicator"><code class="language-bash">npx nightwatch test/components --env chrome,firefox --preview</code></pre>

### Debug the component

In addition to previewing the story, it's also possible to use Nightwatch to debug the story. Here's how to do this: 
1. pass the `--debug` and `--devtools` CLI flags – this will inject the `.debug()` command right after the component is rendered  
2. use the `debugger` statement to add breakpoints inside `play()` function.

#### Example (React)

In the example below, we use the `debugger` to debug the `play()` function using the browser Devtools. This functionality is currently available in Chrome, Edge, and Safari.

This example is based of a Storybook project with the `@nightwatch/storybook` plugin installed. Refer to the [Storybook integration](/guide/component-testing/storybook-component-testing.html) page for more details.

<div class="sample-test"><i>Form.stories.jsx</i><pre class="line-numbers language-javascript"><code class="language-javascript">import { userEvent, within } from '@storybook/testing-library';
import Form from './Form.jsx';
<br>
export default {
  title: 'Form',
  component: Form,
}
<br>
const Template = (args) =&gt; &lt;Form {...args} /&gt;
<br>
// Component story for an empty form
export const EmptyForm = Template.bind({});
<br>
// Component story simulating filling in the form
export const FilledForm = Template.bind({});
<br>
FilledForm.play = async ({ canvasElement }) =&gt; {
  <br>
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  <br>
  debugger;
  <br>
  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('new-todo-input'), 'outdoors hike');
  await userEvent.click(canvas.getByRole('button'));
};
<br>
FilledForm.test = async (browser, { component }) =&gt; {
  // 👇 Run commands and assertions in the Nightwatch context
  await expect(component).to.be.visible;
}
</code></pre></div>

Run the example and observe the breakpoint in the Chrome devtools console.

<pre class="hide-indicator"><code class="language-bash">npx nightwatch src/stories/Form.stories.jsx --env chrome --devtools --debug --story=FilledForm</code></pre>

<a href="https://raw.githubusercontent.com/nightwatchjs/nightwatch-storybook-plugin/main/.github/assets/debugger.png"><img src="https://raw.githubusercontent.com/nightwatchjs/nightwatch-storybook-plugin/main/.github/assets/debugger.png" alt="Screenshot of the Chrome Devtools debugger paused at a breakpoint" style="max-width:800px"></a>

You can also use the [integrated debug console](https://nightwatchjs.org/guide/debugging-tests/using-debug.html) to issue commands from Nightwatch.


### Recommended content
- [Blog > Introducing Component Testing in Nightwatch](https://nightwatchjs.org/blog/introducing-component-testing-in-nightwatch/)


<div class="doc-pagination pt-40" style="align-items: flex-end">
 <div class="previous">
    <a href="https://nightwatchjs.org/guide/component-testing/testing-angular-components.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Using Angular</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/mobile-app-testing/introduction.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Mobile App Testing</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>