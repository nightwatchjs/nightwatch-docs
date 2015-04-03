### Basic settings

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
     <td>src_folders</td>
     <td>string|array</td>
     <td>none</td>
     <td>An array of folders (excluding subfolders) where the tests are located.</td>
   </tr>
   <tr>
     <td>output_folder <br><span class="optional">Optional</span></td>
     <td>string</td>
     <td>tests_output</td>
     <td>The location where the JUnit XML report files will be saved.</td>
   </tr>
   <tr>
     <td>custom_commands_path <span class="optional">Optional</span></td>
     <td>string|array</td>
     <td>none</td>
     <td>Location(s) where custom commands will be loaded from.</td>
   </tr>
   <tr>
     <td>custom_assertions_path <span class="optional">Optional</span></td>
     <td>string|array</td>
     <td>none</td>
     <td>Location(s) where custom assertions will be loaded from.</td>
   </tr>
   <tr>
    <td>page_objects_path <br><span class="optional">Optional</span> <span class="optional">since v6.0.1</span></td>
    <td>string</td>
    <td>none</td>
    <td>Location(s) where page object files will be loaded from.</td>
  </tr>
   <tr>
     <td>globals_path <br><span class="optional">Optional</span> <span class="optional">since v0.4.8</span></td>
     <td>string</td>
     <td>none</td>
     <td>Location of an external globals module which will be loaded and made available to the test as a property <code>globals</code> on the main client instance. <br><br>Globals can also be defined/overwritten inside a <code>test_settings</code> environment.</td>
   </tr>
   <tr>
     <td>selenium <br><span class="optional">Optional</span></td>
     <td>object</td>
     <td></td>
     <td>An object containing Selenium Server related configuration options. See below for details.</td>
   </tr>
    <tr>
     <td>test_settings</td>
     <td>object</td>
     <td></td>
     <td>This object contains all the test related options. See below for details.</td>
   </tr>
   <tr>
     <td>live_output <br><span class="optional">Optional</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Whether or not to buffer the output in case of parallel running. See below for details.</td>
   </tr>
   <tr>
     <td>disable_colors <br><span class="optional">Optional</span></td>
     <td>boolean</td>
     <td>false</td>
     <td>Controls whether or not to disable coloring of the cli output globally.</td>
   </tr>
   <tr>
     <td>parallel_process_delay <br><span class="optional">Optional</span></td>
     <td>integer</td>
     <td>10</td>
     <td>Specifies the delay(in milliseconds) between starting the child processes when running in parallel mode.</td>
   </tr>
  </tbody>
</table>