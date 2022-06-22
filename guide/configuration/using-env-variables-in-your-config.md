## Use ENV variables

Any config value in either `nightwatch.conf.js` or `nightwatch.json` can be specified as the name of an environment variables. Nightwatch will automatically populate the value, if found, from `process.env`.

[Dotenv](https://www.npmjs.com/package/dotenv) files are also supported and will be used if an `.env` file is found in the current working directory.

Here's an example from the generated `nightwatch.conf.js`:

<div class="sample-test"><i>nightwatch.conf.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  src_folders: [],

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org'
    },

    browserstack: {
      webdriver: {
        start_process: false
      },
  
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443
      },
  
      desiredCapabilities: {
         browserName: 'chrome',
        'bstack:options' : {
          userName: '${BROWSERSTACK_USERNAME}',
          accessKey: '${BROWSERSTACK_ACCESS_KEY}',
        }
      }
    }
  }
}</code></pre></div>