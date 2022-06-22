---
id: overview-contributing
title: Contributing guidelines
sidebar_label: Contributing guidelines
description: Nightwatch Contribution Guidelines
---
<div class="page-header"><h2>Overview</h2></div>

This document describes the options available for creating content for the site,
along with some guidelines and conventions.
We are thankful to you for thinking about contributing to our doc set!

### Markdown

This site is built using propeitary documentation tooling that uses Markdown as it's authoring language. Learn more about Markdown:
- [Basic Markdown Syntax](https://www.markdownguide.org/basic-syntax) 
- [Extended Syntax](https://www.markdownguide.org/extended-syntax/)

The following sections provide information about different elements of a page. Use these as guidelines when you start authoring or editing a document. 

### Frontmatter

To ensure that each page can be correctly identified, we use the frontmatter. At the top of each docs page, include the following elements:

| Variable | Description |
| ----------- | ----------- |
|`id`|A brief string that uniquely identifies the page within its parent folder.|
|`title`|The main title of the page. 
|`sidebar_label`|This is what will appear in the left hand navigation tree for the page.|
|`description` (optional)|This is what appears when the page is referenced in a Google search result.|

When you are done, the document would look as follows:
```markdown
---
id: overview-contributing
title: Overview
sidebar_label: Overview
description: Nightwatch Contribution Guidelines
---
```

### Introduction

The first paragraph of the documentation is a window to setting expectation in terms of what the content on the page woudl help the user accomplish. As a guidelines, describe the benefits of the feature followed by an example of where they can use it. 

#### Headers

Apart from the standard markdown guidelines of heirarchical headers, for example, H2 must be nested under H1, H3 must be nested under H2, etc., use the following guidelines:

* H2 header is used as title that appears as page header and on the left navigation pane. Use the `<div class="page-header"><h2>Adding custom assertions</h2></div>` format to differentiate a H2 header that will be used as the page title.
* H2 header is used for SEO, so ensure that it is crafted concisely.
* Each page includes only one H2 header.
* H3 headers are included in the page's table of contents on the right. Use H3 headers to add actionable content. All H3 headers are underlined by default.
* H4 headers can be created using custom format <h4 id="install-geckodriver">GeckoDriver</h4>.

Markdown Code:
```
<div class="page-header"><h2>Adding custom assertions</h2></div>
```

#### H3 Header

```
<h3 id="install-geckodriver">GeckoDriver</h3>
```

### Content

Staying true to the nature of Markdown, all content is rendered as a single paragraph. When you add an empty line, a new paragraph begins. As such, it is good practice for each line to be less than 120 characters long for readability, when possible.

### Tabbed content

[Yet to write]

### Inline Code

To refer to a single class or method name within a sentence, place single backticks around the name.

<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>
```
<code>[element]</code>)
```
```
`code`
```
```
<pre style="font-size:20px"><code class="language-bash">npm install nightwatch</code></pre>
```
</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

This comment refers to the <code>[element]</code>) and 
`code`. 
<pre style="font-size:20px"><code class="language-bash">npm install nightwatch</code></pre>

</td>
    </tr>
  </tbody>
</table>

### Code Blocks

When you have code blocks, use the following format. Markdown highlights each language differently, so it is helpful
to specify which language you are using, and it's a good idea to include a title with the code block as well.

<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>

```
<pre class="hide-indicator" style="font-size:14px"><code class="language-bash">
[Ecosia.org Demo] Test Suite
============================
ℹ Connected to localhost on port 4444 (2153ms).
Using: firefox (94.0.1) on mac 20.6.0 platform.

✔ Running Demo test ecosia.org:

✔ Element <body> was visible after 24 milliseconds.
✔ Testing if the page title contains 'Ecosia' (10ms)
✔ Testing if element <input[type=search]> is visible (51ms)
✔ Testing if element <button[type=submit]> is visible (12ms)
✔ Testing if element <.mainline-results> contains text 'Nightwatch.js' (197ms)

OK. 5 assertions passed. (1.838s)
</code></pre>
```

```
<pre>your code goes here</pre>
```

```
<pre data-language="javascript"><code class="language-javascript">
"desiredCapabilities" : {
"browserName" : "chrome",
"javascriptEnabled" : true,
"acceptSslCerts" : true,
"chromeOptions" : {
    "args" : ["start-fullscreen"]
     }
}
</code></pre>
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

<pre class="hide-indicator" style="font-size:14px"><code class="language-bash">
[Ecosia.org Demo] Test Suite
============================
ℹ Connected to localhost on port 4444 (2153ms).
  Using: firefox (94.0.1) on mac 20.6.0 platform.

✔ Running Demo test ecosia.org:

✔ Element <body> was visible after 24 milliseconds.
✔ Testing if the page title contains 'Ecosia' (10ms)
✔ Testing if element <input[type=search]> is visible (51ms)
✔ Testing if element <button[type=submit]> is visible (12ms)
✔ Testing if element <.mainline-results> contains text 'Nightwatch.js' (197ms)

OK. 5 assertions passed. (1.838s)
</code></pre>

<pre>your code goes here</pre>


<pre data-language="javascript"><code class="language-javascript">
"desiredCapabilities" : {
  "browserName" : "chrome",
  "javascriptEnabled" : true,
  "acceptSslCerts" : true,
  "chromeOptions" : {
    "args" : ["start-fullscreen"]
  }
}
</code></pre>

</td>
    </tr>
  </tbody>
</table>

### Admonitions/Notes

There are two types of admonitions:
* info - Relevant information.
* Warning - A user might do something dangerous!

<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>
```
    <div class="alert alert-info">
    The below commands runs an example test which opens the search engine [Ecosia.org](https://www.ecosia.org/), types the term "nightwatch" into the search input field, then verifies if the results page contains the text "Nightwatch.js".
    </div>

    <div class="alert alert-warning">
    To improve support for displaying the output when running tests in parallel, we recommend setting `detailed_output` to `false` in your test settings (and also make sure `live_output` is enabled).
    </div>
```
</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

<div class="alert alert-info">
The below commands runs an example test which opens the search engine [Ecosia.org](https://www.ecosia.org/), types the term "nightwatch" into the search input field, then verifies if the results page contains the text "Nightwatch.js".
</div>

<div class="alert alert-warning">
To improve support for displaying the output when running tests in parallel, we recommend setting `detailed_output` to `false` in your test settings (and also make sure `live_output` is enabled).
</div>

</td>
    </tr>
  </tbody>
</table>

### Tables

Use the tables generator to generate markdown tables and use as is.

### List

List are used either to represent steps that must be followed in a particular order or list of prerequisites that must be adhered to:

<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>

```
<ul style="margin-top:20px">
<li>add **`-g`** option to make `nightwatch` runner available globally in your system.</li>
<li>add **`--save-dev`** option to save `nightwatch` as a `devDependency` in your <a href="https://docs.npmjs.com/files/package.json" target="_blank">package.json</a>.</li>
</ul>

<ol style="margin-top:20px">
<li>1. add **`-g`** option to make `nightwatch` runner available globally in your system.</li>
<li>2. add **`--save-dev`** option to save `nightwatch` as a `devDependency` in your <a href="https://docs.npmjs.com/files/package.json" target="_blank">package.json</a>.</li>
</ol>
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

<ul style="margin-top:20px">
<li>add **`-g`** option to make `nightwatch` runner available globally in your system.</li>
<li>add **`--save-dev`** option to save `nightwatch` as a `devDependency` in your <a href="https://docs.npmjs.com/files/package.json" target="_blank">package.json</a>.</li>
</ul>

<ol style="margin-top:20px">
<li>add **`-g`** option to make `nightwatch` runner available globally in your system.</li>
<li>add **`--save-dev`** option to save `nightwatch` as a `devDependency` in your <a href="https://docs.npmjs.com/files/package.json" target="_blank">package.json</a>.</li>
</ol>

</td>
    </tr>
  </tbody>
</table>

### Linking to another page

Use the markdown syntax for linking to another page:

<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>

```
External: [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

External: [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)

</td>
    </tr>
  </tbody>
</table>

