---
title: Advance Test Source Filtering
description: Learn how to define test files
---

<div class="page-header"><h1>Advanced Test Source Filtering</h1></div>

The below settings can be used to define ways of filtering test files.

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
      <td>`exclude`</td>
      <td>array</td>
      <td></td>
      <td>An array of folders or file patterns to be skipped (relative to the main source folder).<br>
        Example:<br><br>
         <code>"exclude" : ["excluded-folder"]</code><br>
        or:<br>
         <code>"exclude" : ["test-folder/\*-smoke.js"]</code><br>
      </td>
    </tr>

  <tr>
    <td>`filter`</td>
    <td>string</td>
    <td></td>
    <td>Folder or file pattern to be used when loading the tests. Files that don't match this pattern will be ignored.<br>
      Example:<br><br>
       <code>"filter" : "tests/\*-smoke.js"</code><br>
    </td>
  </tr>    

  <tr>
     <td>`skipgroup`<br></td>
     <td>string</td>
     <td></td>
     <td>Skip a group of tests (a subfolder); can be a list of comma-separated values (no space).</td>
  </tr>

  <tr>
     <td>`skiptags`<br></td>
     <td>string</td>
     <td></td>
     <td>Skip tests by tag name; can be a list of comma-separated values (no space).</td>
  </tr>  
  </tbody>
</table>

### Recommended content
- [Reference > All configuration settings](https://nightwatchjs.org/guide/reference/settings.html)
- [Reference > Configuration defaults](https://nightwatchjs.org/guide/reference/defaults.html)

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/configuration/customising-test-output.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Test output</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/configuration/web-driver-settings.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">WebDriver settings</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
