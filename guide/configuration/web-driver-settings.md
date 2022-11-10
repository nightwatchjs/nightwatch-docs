---
title: Webdriver Settings
description: List of webdriver settings in Nightwatch
---

<div class="page-header"><h1>WebDriver Settings</h1></div>


Below are a number of options for the Webdriver service. Nightwatch can start and stop the Webdriver process automatically which is very convenient as you don't have to manage this yourself and focus only on the tests.

If you'd like to enable this, set `start_process` to `true` and specify the location of the binary file inside `server_path`.

<table class="table table-bordered table-striped">
<thead>
 <tr>
   <th style="width: 100px;">Name</th>
   <th style="width: 100px;">type</th>
   <th style="width: 50px;">default</th>
   <th>description</th>
 </tr>
</thead>
<tbody>
 <tr>
   <td>`start_process`</td>
   <td>boolean</td>
   <td>false</td>
   <td>When this is enabled, the Webdriver server is run in background in a [child process](https://nodejs.org/api/child_process.html) and started/stopped automatically.
    <br>Nightwatch includes support for managing Chromedriver, Geckodriver (Firefox), Safaridriver, and Selenium Server. Please refer to the [Install Webdriver](https://v2.nightwatchjs.org/gettingstarted/installation/#webdriver-service) section for details.  
   </td>
 </tr>

 <tr>
    <td>`server_path`</td>
    <td>string</td>
    <td>none</td>
    <td>Only useful if <code>start_process</code> is enabled. </td>
  </tr>

  <tr>
    <td>`host`</td>
    <td>string</td>
    <td></td>
    <td>Only needed when the Webdriver service is running on a different machine.</td>
  </tr>

  <tr>
     <td>`port`</td>
     <td>integer</td>
     <td></td>
     <td>The port number on which the Webdriver service will listen and/or on which Nightwatch will attempt to connect.</td>
  </tr>

  <tr>
     <td>`ssl`</td>
     <td>boolean</td>
     <td></td>
     <td>Should be set to `true` if connecting to a remote (cloud) service via HTTPS. Also don't forget to set port to 443.</td>
  </tr>

   <tr>
     <td>`log_path`</td>
     <td>string|boolean</td>
     <td>none</td>
     <td>The location where the Webdriver service log file <code>output.log</code> file will be placed. Defaults to current directory.<br>To disable Webdriver logging, set this to <code>false</code></td>
   </tr>

   <tr>
     <td>`log_file_name`</td>
     <td>string|none</td>
     <td>none</td>
     <td>By default, the log file name will be the same as the testsuite file name, but a different filename can be specified as well.</td>
   </tr>

   <tr>
     <td>`cli_args`</td>
     <td>object</td>
     <td>none</td>
     <td>List of cli arguments to be passed to the Webdriver process. This varies for each Webdriver implementation.</td>
   </tr>

   <tr>
    <td>`keep_alive`</td>
    <td>boolean|object</td>
    <td>false</td>
    <td>Enable [HTTP Keep-Alive](https://nodejs.org/api/http.html#http_new_agent_options). If set to `true` the keepAlive option is enabled with default settings (`keepAliveMsecs` = 3000).
    <br>If set to an object, can specify specify the `keepAliveMsecs` value.
     <br><br>Example: <code>"keep_alive" : {"enabled" : true, "keepAliveMsecs" : 2000}</code></td>
  </tr>

  <tr>
    <td>`timeout_options`</td>
    <td>object</td>
    <td>
      timeout: 60000
      <br>
      retry_attempts: 0
    </td>
    <td>Requests to the Webdriver service will timeout in `timeout` miliseconds; a retry will happen `retry_attempts` number of times.
    <br><br>Example:<br>
    <code>{timeout: 15000, retry_attempts: 5}</code>
    </td>
  </tr>

  <tr>
    <td>`status_poll_interval`<br><span class="optional">since v1.2.2</span></td>
    <td>integer</td>
    <td>100</td>
    <td>Interval (in ms) to use between status ping checks when checking if the Webdriver server is up and running</td>
  </tr>

   <tr>
     <td>`max_status_poll_tries`<br><span class="optional">since v1.2.2</span></td>
     <td>integer</td>
     <td>5</td>
     <td>Maximum number of ping status check attempts when checking if the Webdriver server is up and running before returning a timeout error.</td>
   </tr>

   <tr>
     <td>`process_create_timeout`<br><span class="optional">since v1.2.2</span></td>
     <td>integer</td>
     <td>120000</td>
     <td>The entire time (in ms) to wait for the Node.js process to be created and running (default is 2 min), including spawning the child process and checking the status</td>
   </tr>

   <tr>
     <td>`username`</td>
     <td>string</td>
     <td>none</td>
     <td>Usually only needed for cloud testing Selenium services. In case the server requires credentials this username will be used to compute the <code>Authorization</code> header. <br><br>The value can be also an environment variable, in which case it will look like this:<br>
       <code>"username" : "${SAUCE_USERNAME}"</code>
     </td>
   </tr>

   <tr>
     <td>`access_key`</td>
     <td>string</td>
     <td>none</td>
     <td>This field will be used together with <code>username</code> to compute the <code>Authorization</code> header. <br><br>Like <code>username</code>, the value can be also an environment variable:<br>
       <code>"access_key" : "${SAUCE_ACCESS_KEY}"</code>
     </td>
   </tr>

   <tr>
      <td>`proxy`</td>
      <td>string</td>
      <td>none</td>
      <td>Proxy requests to the Webdriver (or Selenium) service. http, https, socks(v5), socks5, sock4, and pac are accepted. 
<br>Uses <a href="https://www.npmjs.com/package/proxy-agent" target="_blank">proxy-agent</a> which needs to be installed as a separate package from NPM.
<br><br>Example: <code>http://user:pass@host:port</code></td>
   </tr>

   <tr>
    <td>`default_path_prefix`</td>
    <td>string</td>
    <td></td>
    <td>Needed sometimes when using a Selenium Server. The prefix to be added to to all requests (e.g. /wd/hub).
    </td>
  </tr>

 </tbody>
</table>


### Recommended content
- [Reference > All configuration settings](https://nightwatchjs.org/guide/reference/settings.html)
- [Reference > Configuration defaults](https://nightwatchjs.org/guide/reference/defaults.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/configuration/advanced-test-source-filtering.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Advanced test source filtering</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/configuration/selenium-settings.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Selenium settings</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>