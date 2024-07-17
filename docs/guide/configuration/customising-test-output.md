---
title: Customize Output Settings
description: Learn how to customize output settings in Nightwatch.
---

<div class="page-header"><h1>Output Settings</h1></div>

The below settings can be used to control the output and logging when running tests.

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
     <td><code>output_folder</code></td>
     <td>string</td>
     <td>tests_output</td>
     <td>The location where the JUnit XML report files will be saved.</td>
   </tr>
    <br>
    <tr>
     <td><code>folder_format</code></td>
     <td>string/function</td>
     <td>undefined</td>
     <td>Used as a prefix for HTML report folder. This can be utilised to <a href="https://github.com/nightwatchjs/nightwatch-docs/issues/310#issuecomment-2233833015">retain HTML report across test runs</a></td>
   </tr>
    
   <tr>
     <td><code>disable_colors</code></td>
     <td>boolean</td>
     <td>false</td>
     <td>Controls whether or not to disable coloring of the CLI output globally.</td>
   </tr>

   <tr>
    <td><code>live_output</code></td>
    <td>boolean</td>
    <td>false</td>
    <td>This option is only useful when running tests in parallel. Controls whether or not to buffer the output.</td>
  </tr>

  <tr>
    <td><code>silent</code></td>
    <td>boolean</td>
    <td>true</td>
    <td>Whether to show the extended HTTP traffic command logs from the WebDriver or Selenium server.</td>
  </tr>

  <tr>
    <td><code>output</code></td>
    <td>boolean</td>
    <td>true</td>
    <td>Used to disable CLI output completely.</td>
  </tr>

  <tr>
    <td><code>detailed_output</code></td>
    <td>boolean</td>
    <td>true</td>
    <td>By default detailed assertion output is displayed while the test is running. Set this to <code>false</code> if you'd like to only see the test case name displayed and pass/fail status. Detailed output is disabled by default when running tests in parallel.</td>
  </tr>

  <tr>
    <td><code>disable_error_log</code></td>
    <td>boolean</td>
    <td>false</td>
    <td>Set this to true if you'd like to not display errors during the execution of the test (they are shown at the end always).</td>
  </tr>

  <tr>
    <td><code>output_timestamp</code></td>
    <td>boolean</td>
    <td>false</td>
    <td>Set this to true if you'd like to see timestamps next to the logging output.</td>
  </tr>

  <tr>
    <td><code>log_screenshot_data</code></td>
    <td>boolean</td>
    <td>false</td>
    <td>Used to enable showing the Base64 image data in the (verbose) log when taking screenshots.</td>
  </tr>         
  </tbody>
</table>

### Recommended content
- [Reference > All configuration settings](/guide/reference/settings.html)
- [Reference > Configuration defaults](/guide/reference/defaults.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/configuration/taking-screenshots-on-fail.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Take screenshots on test failure</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/configuration/advanced-test-source-filtering.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Advanced test source filtering</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
