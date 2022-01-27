## Plugin API (alpha)
Nightwatch `v2.0` also introduces a new interface for defining plugins and extending the base functionality of Nightwatch with your own custom commands and assertions. 

Plugins are essentially wrappers over custom commands and assertions. Plugins are installed in your `node_modules` folder.

#### Authoring a New Nightwatch Plugin

#### Using The `--reporter` command-line argument
Define your reporter in a separate file, using the below interface, and then specify the path to the file using the `--reporter` cli argument.

##### Interface:
<div class="sample-test">
<pre><code class="language-javascript">
module.exports = {
  write : function(results, options, done) {
    done();
  }
};</code></pre>
</div>

#### The `reporter` method in your external globals

Add your reporter in the external globals file. Read more about [external globals](/guide/using-nightwatch/external-globals.html).

See the provided [globalsModule.js](https://github.com/nightwatchjs/nightwatch/blob/main/examples/globalsModule.js) for an example.

#### Example:
<div class="sample-test">
<pre><code class="language-javascript">
module.exports = {
  reporter : function(results, done) {
    console.log(results);
    done();
  }
};</code></pre>
</div>
