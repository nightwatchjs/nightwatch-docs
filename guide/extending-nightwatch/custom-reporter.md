## Custom Reporter
If you'd like to define your own reporter in addition to the built-in ones (stdout and junit-xml) you can do so in two ways:

#### The `--reporter` command-line argument

##### Interface:

<div class="sample-test">
<pre><code class="language-javascript">
module.exports = {
  write : function(results, options, done) {
    done();
  }
};</code></pre>
</div>

#### The `reporter` method in your external `globals` file.

See the provided [globalsModule.js](https://github.com/beatfactor/nightwatch/blob/master/examples/globalsModule.js) for an example.

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
