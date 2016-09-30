### Selenium settings

Below are a number of options for the selenium server process. Nightwatch can start and stop the Selenium process automatically which is very convenient as you don't have to manage this yourself and focus only on the tests.

If you'd like to enable this, set `start_process` to `true` and specify the location of the `jar` file inside `server_path`.

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
   <td>Whether or not to manage the selenium process automatically.</td>
 </tr>
 <tr>
  <td>start_session</td>
  <td>boolean</td>
  <td>true</td>
  <td>Whether or not to automatically start the Selenium session. This will typically be set to `false` when running unit/integration tests that don't interact with the Selenium server.</td>
 </tr>

 <tr>
   <td>server_path</td>
   <td>string</td>
   <td>none</td>
   <td>The location of the selenium <code>jar</code> file. This needs to be specified if <code>start_process</code> is enabled.<br>E.g.: <code>bin/selenium-server-standalone-2.43.0.jar</code></td>
 </tr>
 <tr>
   <td>log_path</td>
   <td>string|boolean</td>
   <td>none</td>
   <td>The location where the selenium <code>output.log</code> file will be placed. Defaults to current directory.<br>To disable Selenium logging, set this to <code>false</code></td>
 </tr>
 <tr>
   <td>port</td>
   <td>integer</td>
   <td>4444</td>
   <td>The port number Selenium will listen on.</td>
 </tr>
 <tr>
   <td>cli_args</td>
   <td>object</td>
   <td>none</td>
   <td>List of cli arguments to be passed to the Selenium process. Here you can set various options for browser drivers, such as:<br><br>
     <ul>
       <li>
         <code>webdriver.firefox.profile</code>: Selenium will be default create a new Firefox profile for each session. If you wish to use an existing Firefox profile you can specify its name here.<br>
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
