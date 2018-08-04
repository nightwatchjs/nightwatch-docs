### Using Grunt

<div class="alert alert-danger">
  Support for Grunt has been deprecated and removed from Nightwatch v1.
</div>

<a href="http://gruntjs.com/" target="_blank">Grunt</a> is a popular JavaScript task runner. Starting with version `0.6` Nightwatch is bundled with 
an easy to use Grunt task which can be used in your existing Grunt-based build configuration for running the tests.

#### Usage
First, load the Nightwatch grunt task at the top in your `Gruntfile.js`. 

<div class="sample-test">
<pre><code class="language-javascript">
module.exports = function(grunt) {
  var nightwatch = require('nightwatch');
  nightwatch.initGrunt(grunt);
  
  // ...
  
};
</code></pre>
</div>

#### Task Configuration and Targets
The Nightwatch task will have one or more targets which can be used in various ways, one way being to map them to environments. Available settings are:

* `options` - the only available option so far is `cwd` - current working directory
* `argv` - command-line arguments that would normally be passed to the Nightwatch runner (e.g.: `env`);
* `settings` - the test settings specified to a single Nightwatch environment.

#### Example
<div class="sample-test">
<pre><code class="language-javascript">
grunt.initConfig({
  nightwatch: {
    options: {
      cwd: './'
    },

    'default' : {},

    browserstack: {
      argv: {
        env: 'browserstack'
      },
      settings: {
        silent: true
      }
    },
    
    'all' : {
      argv: {
        env: 'default,browserstack'
      }
    },
  }
});
</code></pre>
</div>

<br>

Run the task as follows:
<pre><code class="language-bash">$ grunt nightwatch:default</code></pre> 
or 

<pre><code class="language-bash">$ grunt nightwatch:browserstack</code></pre>

<br>

There are also a few third-party Grunt plugins for Nightwatch which can be used instead, if you prefer. The most popular one is <a href="https://github.com/gextech/grunt-nightwatch" target="_blank">grunt-nightwatch</a>. 
