
<div class="page-header"><h2>Style Guide</h2></div>

This style guide is for any one who is not part of the core documentation team. Use this document as a primer to make decisions about appropriate word choices.

Apart from the guidelines mentioned here, if you are confused, defer on the [Google Style guide]() for any decisions. 

### Voice and tone

* Use active voice. Think of it as you being the guiding teacher to the user. 
* Be in the present. The learner is probably going through the implementation example and folders as we ask them.
* Sparingly use future tense only to indicate resultant. 
    * Use: When you send a request, the response will include the following information.
    * Avoid: The New Window will appear.
* Write short sentences that are crisp and concise. If you are left hanging for a breath in saying the entire sentence you wrote, break it into two sentences.

### Titles

* Avoid gerunds for procedure topics 
    * Use: Select an automation engine
    * Avoid: Selecting an automation engine

* Use sentence casing for titles
    * Use: Select an automation engine
    * Avoid: Select an Automation Engine

* Use a noun phrase that doesn't start with an -ing verb.
    * Use: Overview of the Nightwatch API
    * Avoid: Understanding the Nightwatch API

### Text formatting

* Avoid excessive use of bolding. Only apply bold for UI elements when referring to them as an action.
    * Use: Click the **Access Key** on the **Automate** dashboard.
    * Avoid: You can get your BrowserStack **Access Key** from the **Automate dashboard**. 
* Do not use <i>italics</i>.
* Avoid using <u>underline</u>.
* Use sentence casing for all sentences. Apart from Product Names, industry terms, or BrowserStack-specific feature/keywords, do not capitalize any word.
    * Use: Python, Local Testing, Chrome
    * Avoid: Session ID, Logs, Desktop, Authentication
* Use jargon sparingly. Wherever possible, aim for simpler words.
    * Avoid parenthesis () to indicate optional information. For example, 
    * Avoid: Hub executes tests concurrently on multiple machines (nodes).
    * Use: Hub executes tests concurrently on multiple machines or nodes.
* Use `code` font to indicate filenames, file paths, inline code.
* Use code formatting for input values. For ex, In the abc box, enter `abc`.

### Folder/Web navigation

* Folder navigation
    * Use: Navigate to the `/opt/home` directory.
    * Use: Navigate to the `/opt/home` directory and open the `abc.js` file.
    * Avoid: Go to `/opt/home` directory.
* Web navigation
    * Use: Go to https://localhost:45691 and log in using your BrowserStack credentials.
    * Avoid: Browse to https://localhost:45691 and log in using your BrowserStack credentials.

### Lists 

* Every list needs a lead-in sentence that explains what the list does.
* Use numbered list for procedures that need to be followed in a particular order.
* Maintain parallel sentence construction. For ex, see below: 
    * Configure your BrowserStack credentials
    * Embed BrowserStack test results in your job results
* Do not use a bullet (number or symbol) when there is only one item; there must be a least two
items to make a list. In such cases, convert it to a sentence.

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/reference/defaults.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Default Settings</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="https://nightwatchjs.org/guide/migrating-to-nightwatch/from-nightwatch-v1.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">From Nightwatch v1</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>
