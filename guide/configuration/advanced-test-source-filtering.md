---
title: Advance Test Source Filtering
description: Learn how to define test files
---

<div class="page-header"><h2>Advanced Test Source Filtering</h2></div>

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