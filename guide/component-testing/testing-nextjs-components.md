---
title: Next.js component testing
description: Learn how to do write and execute Next.js component tests in Nightwatch.
---
<div class="page-header"><h1>NextJS component testing in Nightwatch</h1></div>

### Overview
[Next.js][1], developed by [Vercel][2], is a framework built on top of React. NextJS component testing setup with Nightwatch is the same as React component testing setup. Next.js makes full stack web development easier by extending the latest React functionality. The Rust based Javacript tooling integrated into the framework makes the builds blazing fast. 

### Installation

#### New Project
When you initiate a Nightwatch project using 
<pre class="hide-indicator"><code class="language-bash">npm init nightwatch@latest</code></pre>

select component testing and React.js and let Nightwatch handle the setup for you. 


#### Existing Project
Follow the same steps as [React component testing installation][3]

### Testing NextJS components
Simply mount the component using the `mountComponent('path_to_component_file')` command and write your tests like you would for any other test.


<div class="sample-test"><i>NextJS component test</i><pre class="line-numbers language-javascript"><code class="language-javascript">describe('Next.js test', function() {
  it('NextJS component testing', async function(browser) {
    browser
        .mountComponent("/src/components/About.jsx")
        .assert.textEquals("h1","About");
  }); 
}); 
</code></pre></div>

[1]:	https://nextjs.org/
[2]:  https://vercel.com/
[3]:	https://nightwatchjs.org/guide/component-testing/testing-react-components.html#installation