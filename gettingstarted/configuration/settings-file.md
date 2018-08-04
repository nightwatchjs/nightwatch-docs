The `nightwatch` test runner expects a configuration file to be passed, using by default a `nightwatch.json` file from the current directory, if present. A `nightwatch.conf.js` file will also be loaded by default, if found.

At this point you should have at least one WebDriver service downloaded and available in your project.

Let's create the `nightwatch.json` in the project's root folder. Assuming you have downloaded or installed the ChromeDriver service, the simplest `nightwatch.json` file will look like this,
where `node_modules/.bin/chromedriver` is the path where ChromeDriver is installed:
<pre><code class="language-javascript">{
  <strong>"src_folders"</strong> : ["tests"],
  
  <strong>"webdriver"</strong> : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  <strong>"test_settings"</strong> : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}</code></pre>



<br>
Using both configuration files is also possible, with `nightwatch.conf.js` always taking precedence if both are found.

#### Example

<pre><code class="language-javascript">
module.exports = (function(settings) {
  settings.test_workers = false;
  return settings;
})(require('./nightwatch.json'));
</code></pre>
