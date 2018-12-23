## WebDriver Settings

Below are a number of options for the WebDriver service. Nightwatch can start and stop the WebDriver process automatically which is very convenient as you don't have to manage this yourself and focus only on the tests.

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
   <td>Whether or not to manage the WebDriver process automatically.</td>
 </tr>

 <tr>
   <td>`server_path`</td>
   <td>string</td>
   <td>none</td>
   <td>The location of the WebDriver binary. This needs to be specified if <code>start_process</code> is enabled.<br>E.g.: <code>bin/chromedriver</code></td>
 </tr>
 
 <tr>
   <td>`port`</td>
   <td>integer</td>
   <td></td>
   <td>The port number on which the WebDriver service will listen and/or on which Nightwatch will attempt to connect.</td>
 </tr>
 
  <tr>
    <td>`host`</td>
    <td>string</td>
    <td></td>
    <td>Only needed when the WebDriver service is running on a different machine.</td>
  </tr>
  
  <tr>
     <td>`log_path` <span class="optional">Optional</span></td>
     <td>string|boolean</td>
     <td>none</td>
     <td>The location where the WebDriver service log file <code>output.log</code> file will be placed. Defaults to current directory.<br>To disable WebDriver logging, set this to <code>false</code></td>
   </tr>
  
   <tr>
     <td>`cli_args` <span class="optional">Optional</span></td>
     <td>object</td>
     <td>none</td>
     <td>List of cli arguments to be passed to the WebDriver process. This varies for each WebDriver implementation.</td>
   </tr>
    
  <tr>
    <td>`request_timeout_options` <span class="optional">Optional</span></td>
    <td>object</td>
    <td>
      timeout: 60000
      <br>
      retry_attempts: 0
    </td>
    <td>Requests to the WebDriver service will timeout in `timeout` ms; A retry will happen `retry_attempts` number of times.
    <br><br>Example:<br><br>
    <code>{timeout: 15000, retry_attempts: 5}</code>
    </td>
  </tr>
  
   <tr>
     <td>`username` <span class="optional">Optional</span></td>
     <td>string</td>
     <td>none</td>
     <td>Usually only needed for cloud testing Selenium services. In case the server requires credentials this username will be used to compute the <code>Authorization</code> header. <br><br>The value can be also an environment variable, in which case it will look like this:<br>
       <code>"username" : "${SAUCE_USERNAME}"</code>
     </td>
   </tr>
   
   <tr>
     <td>`access_key` <span class="optional">Optional</span></td>
     <td>string</td>
     <td>none</td>
     <td>This field will be used together with <code>username</code> to compute the <code>Authorization</code> header. <br><br>Like <code>username</code>, the value can be also an environment variable:<br>
       <code>"access_key" : "${SAUCE_ACCESS_KEY}"</code>
     </td>
   </tr>
   
   <tr>
      <td>`proxy` <span class="optional">Optional</span></td>
      <td>string</td>
      <td>none</td>
      <td>Proxy requests to the WebDriver (or Selenium) service. http, https, socks(v5), socks5, sock4, and pac are accepted. Uses <a href="https://github.com/TooTallNate/node-proxy-agent" target="_blank">node-proxy-agent</a>.<br><br>Example: <code>http://user:pass@host:port</code></td>
   </tr>
   <tr>
    <td>`default_path_prefix` <span class="optional">Optional</span></td>
    <td>string</td>
    <td></td>
    <td>Needed sometimes when using a Selenium Server. The prefix to be added to to all requests (e.g. /wd/hub). 
    </td>
  </tr>
      
 <tr>
   <td>`use_legacy_jsonwire` <span class="optional">Optional</span></td>
   <td>boolean</td>
   <td>false</td>
   <td>Some WebDriver implementations (Safari, Edge) support both the <a href="https://www.w3.org/TR/webdriver/" target="_blank">W3C WebDriver API</a> as well as the legacy <a href="https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol" target="_blank">JSON Wire</a> (Selenium) API.</td>
 </tr> 

 </tbody>
</table>

### Selenium Settings

The Selenium Server can still be used as prior to Nightwatch v1. If both `webdriver` and `selenium` dictionaries are present, the `selenium` options will be merged onto the `webdriver` ones. 

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
   <td>start_process</td>
   <td>boolean</td>
   <td>false</td>
   <td>Whether or not to manage the Selenium process automatically.</td>
 </tr>
 
 <tr>
   <td>server_path</td>
   <td>string</td>
   <td>none</td>
   <td>The location of the Selenium <code>jar</code> file. This needs to be specified if <code>start_process</code> is enabled.<br>E.g.: <code>bin/selenium-server-standalone-2.43.0.jar</code></td>
 </tr>
 
 <tr>
   <td>log_path</td>
   <td>string|boolean</td>
   <td>none</td>
   <td>The location where the Selenium <code>output.log</code> file will be placed. Defaults to current directory.<br>To disable Selenium logging, set this to <code>false</code></td>
 </tr>
 
 <tr>
   <td>version2</td>
   <td>boolean</td>
   <td>false</td>
   <td>Set this to `true` if you need to use legacy Selenium Server 2.</td>
 </tr>
 
 <tr>
   <td>port</td>
   <td>integer</td>
   <td>4444</td>
   <td>The port number Selenium will listen on and/or Nighwatch will attempt to connect to.</td>
 </tr>
 
 <tr>
   <td>cli_args</td>
   <td>object</td>
   <td>none</td>
   <td>List of cli arguments to be passed to the Selenium process. Here you can set various options for browser drivers, such as:<br><br>
     <ul>
       <li>
         <code>webdriver.firefox.profile</code>: Selenium will by default create a new Firefox profile for each session. If you wish to use an existing Firefox profile you can specify its name here.<br>
         Complete list of Firefox Driver arguments available <a href="https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver" target="_blank">here</a>.
       </li>
       <li>
         <code>webdriver.chrome.driver</code>: Nightwatch can run the tests using <strong>Chrome</strong> browser also. To enable this you have to download the <a href="http://chromedriver.storage.googleapis.com/index.html" target="_blank">ChromeDriver binary</a> and specify it's location here.
     Also don't forget to specify chrome as the browser name in the <code>desiredCapabilities</code> object.<br>
     More information can be found on the <a href="https://sites.google.com/a/chromium.org/chromedriver/" target="_blank">ChromeDriver website</a>.<br>
       </li>
       <li>
         <code>webdriver.ie.driver</code>:
         Nightwatch has support for <strong>Internet Explorer</strong> also. To enable this you have to download the <a href=
         "https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver" target="_blank">IE Driver binary</a> and specify it's location here.
     Also don't forget to specify "internet explorer" as the browser name in the <code>desiredCapabilities</code> object.
       </li>
     </ul>
   </td>
 </tr>
 </tbody>
</table>

