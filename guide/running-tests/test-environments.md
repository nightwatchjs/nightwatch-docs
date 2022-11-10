## Using Test Environments

Test environments are a useful concept which Nightwatch provides to be used for a better structure of configuration for using large-scale projects. For a complete overview of what test environments are and how they can be used, please refer to the [Defining test environments](https://v2.nightwatchjs.org/guide/using-nightwatch/concepts.html#defining-test-environments) page in the Getting Started section.

You can define multiple sections (environments) in `test_settings` so you could overwrite specific values per environment.
<p class="alert alert-info">A "default" environment is required. All the other environments are inheriting from default and can overwrite settings as needed.</p>

An environment inherits all the base settings and all the settings defined under the "default" environment.

<pre><code class="language-javascript">{
  ...
  <strong>"test_settings"</strong> : {
    "default" : {
      "launch_url" : "http://localhost",
      "globals" : {
        "myGlobalVar" : "some value",
        "otherGlobal" : "some other value"
      }
    },

    "integration" : {
      "launch_url" : "http://staging.host",
      "globals" : {
        "myGlobalVar" : "other value"
      }
    }
  }
}</code></pre>
<br>

The key of the settings group can be passed then to the runner as the `--env` argument to use the specified settings, like so:

<pre><code class="language-bash">nightwatch --env integration</code></pre>

This can be useful if you need to have different settings for your local machine and the Continuous Integration server.

### Further Reading:
- [Understanding Test Environments](/gettingstarted/concepts/#defining-test-environments)
- Previous: [Command-line Options](https://nightwatchjs.org/guide/running-tests/command-line-options.html)
- Next: [Using Test Groups](https://nightwatchjs.org/guide/running-tests/test-groups.html)
