## Nightwatch Onboarding CLI

#### Overview

This CLI tool lets you setup Nightwatch.js in your new or existing project, with all the required configs and dependencies, with just one command.

#### Usage

All you need to do is, run:

##### 1) If you're in your existing project's root directory:

<pre><code class="language-bash">npm init nightwatch</code></pre>

##### 2) If you want to create a new project:

<pre><code class="language-bash">npm init nightwatch path/to/new/project</code></pre>

and answer a few questons. We'll setup everything for you based on your preferences.


If you'd like to skip all the questions (we'd assume best defualts for you), you can use the above commands with `--yes` or `-y` flag:

##### 1) If you're in your existing project's root directory:

<pre><code class="language-bash">npm init nightwatch -- --yes
# or
npm init nightwatch -- -y</code></pre>

##### 2) If you want to create a new project:

<pre><code class="language-bash">npm init nightwatch path/to/new/project -- --yes
# or
npm init nightwatch path/to/new/project -- -y</code></pre>