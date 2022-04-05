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

#### Generating a new config file

While it's completely safe to run `npm init nightwatch` again in your existing Nightwatch project, if you want to just generate a new config file and install all the required dependencies and nothing else, you can use this tool with the `--generate-config` flag:

##### 1) Generate new config file based on your preferences:

<pre><code class="language-bash">npm init nightwatch -- --generate-config</code></pre>

##### 2) Generate new config file with default configurations:

<pre><code class="language-bash">npm init nightwatch -- --generate-config --yes</code></pre>
