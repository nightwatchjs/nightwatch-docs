### Base Settings
Below are the default settings that will be passed to the Nightwatch instance during test execution.

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
    <td>`test_settings`</td>
    <td>object</td>
    <td></td>
    <td>An object in which all the test environments are defined, each overwriting test settings as needed. A `default` environment is always required, from which the other environments inherit settings from. See [Defining Test Environments](/gettingstarted/configuration/#defining-test-environments) below for details.</td>
  </tr>
  <tr>
    <td>`webdriver`</td>
    <td>object</td>
    <td></td>
    <td>An object containing **WebDriver** related configuration options.</td>
  </tr>
  <tr>
     <td>`src_folders`</td>
     <td>string|array</td>
     <td>none</td>
     <td>
      An array of folders (excluding subfolders) where the tests are located.
      <br><br>
      If this is not specified, the test source must be passed inline as the second argument to the [test runner](/guide/running-tests/#nightwatch-runner).
     </td>
  </tr>
  <tr>
    <td>`selenium`</td>
    <td>object</td>
    <td></td>
    <td>
    An object containing **Selenium Server** related configuration options. If Selenium is not used, `webdriver` options should be set instead.
    <br> 
    Starting with Nightwatch 1.0, Selenium is only required when testing against a Grid setup or a cloud testing service (such as <a href="https://saucelabs.com/" target="_blank">SauceLabs</a> or <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a>).
    </td>
  </tr>
  
   <tr>
     <td>`custom_commands_path`</td>
     <td>string|array</td>
     <td>none</td>
     <td>Location(s) where custom commands will be loaded from.</td>
   </tr>
   
   <tr>
     <td>`custom_assertions_path`</td>
     <td>string|array</td>
     <td>none</td>
     <td>Location(s) where custom assertions will be loaded from.</td>
   </tr>
   
   <tr>
    <td>`page_objects_path`</td>
    <td>string|array</td>
    <td>none</td>
    <td>Location(s) where page object files will be loaded from.</td>
  </tr>
  
   <tr>
     <td>`globals_path`</td>
     <td>string</td>
     <td>none</td>
     <td>Location of an external globals module which will be loaded and made available to the test as a property <code>globals</code> on the main client instance. <br><br>Globals can also be defined/overwritten inside a <code>test_settings</code> environment.</td>
   </tr>
  </tbody>
</table>

[1]:	https://nightwatchjs.org/guide#test-environments
[2]:	https://github.com/nightwatchjs/nightwatch/blob/main/bin/nightwatch.json
