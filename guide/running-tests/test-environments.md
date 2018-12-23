## Test Environments

You can define multiple sections (environments) of test settings so you could overwrite specific values per environment.
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