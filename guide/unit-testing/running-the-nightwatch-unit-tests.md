### Running the Nightwatch unit tests
To get an idea of how running unit tests with Nightwatch works you can head over to our [GitHub page](https://github.com/nightwatchjs/nightwatch), clone the project and follow the instructions on how to run the tests.

You can also check out Nightwatch's own complete test suite for examples:
https://github.com/nightwatchjs/nightwatch/tree/master/test/src

Here's the configuration needed to run them:

<div class="sample-test">
<pre data-language="javascript"><code class="language-javascript">
{
  "src_folders" : ["./test/src"],
  "selenium" : {
    "start_process" : false,
    "start_session" : false
  },

  "test_settings" : {
    "default" : {
      "filter" : "**/*.js",
      "compatible_testcase_support" : true
    }
  }
}
</code></pre>
</div>
