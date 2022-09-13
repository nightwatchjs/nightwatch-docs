## Page Object API

### Overview
Page objects provide an additional layer of abstraction for test case creation. Page objects are defined in modules and parsed into factory functions that create page object instances. 

For an introduction to the Page Object Model in Nightwatch, refer to the [Getting started](https://nightwatchjs.org/guide/using-page-objects/getting-started.html) guide.

### Page object module

<div class="table-responsive">
<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 100px;">Name</th>
    <th style="width: 100px;">Type</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>

  <tr>
    <td>`commands`</td>
    <td>`Array`</td>
    <td>A list of objects containing functions to represent methods added to the page object instance.</td>
  </tr>
  <tr>
    <td>`elements`</td>
    <td>`Object` | `Array`</td>
    <td>An object, or array of objects, of named element definitions to be used as element selectors within element commands called from the page object.</td>
  </tr>
  <tr>
    <td>`props`</td>
    <td>`Object` | `Function`</td>
    <td>An object or a function returning an object representing a container for user variables. Props objects are copied directly into the props property of the page object instance.</td>
  </tr>
  <tr>
    <td>`sections`</td>
    <td>`Object`</td>
    <td>An object of named sections definitions defining the sections within the page object.</td>
  </tr>
  <tr>
    <td>`url`</td>
    <td>`String` | `Function`</td>
    <td>A url or function returning a url to be used in a <code>url()</code> command when the page's <code>navigate()</code> method is called.</td>
  </tr>

  </tbody>
</table>
</div>

### Page object instance

Page object module definitions are used to define page object instances when their respective factory functions within the `page` reference of the standard command API is called.

<pre style="padding-top: 10px"><code class="language-javascript">const myPageObject = browser.page.MyPage(); // defined in MyPage.js module</code></pre>

Every time a factory function like MyPage above is called, a new instance of the page object is created.

#### Properties

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 100px;">Type</th>
      <th>description</th>
    </tr>
    </thead>
    <tbody>

    <tr>
      <td>`api`</td>
      <td>`Object`</td>
      <td>A reference providing access to the full Nightwatch command API, usually known as `browser` in test cases. This is used to access those commands that are not part of the subset of commands within the page object API.</td>
    </tr>
    <tr>
      <td>`elements`</td>
      <td>`Object`</td>
      <td>A map of Element objects used by element selectors.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>The name of the page object as defined by its module name (not including the extension). This is the same name used to access the page object factory from the `page` reference in the command API.</td>
    </tr>
    <tr>
      <td>`props`</td>
      <td>`Object`</td>
      <td>A reference to props object assigned from the module definition. <br><br><strong>Note:</strong> this will be the same props object for all instances of the page object if defined as an object instance within the page object module. If you wish for each props object to be unique, define props in the module as a function that would return a new props object for each new page object instance.</td>
    </tr>
    <tr>
      <td>`section`</td>
      <td>`Object`</td>
      <td>A map of Sections objects defined for the page object. This will only contain sections within the page object module's root `sections` definition. Nested sections are accessible through their parent section's own `section` reference.</td>
    </tr>

    <tr>
      <td>`url`</td>
      <td>`string`|`Function`</td>
      <td>The url value from the page object module, either a string or a function depending on how it was defined there.</td>
    </tr>

    </tbody>
  </table>
</div>

#### Example
<div class="sample-test">
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  // can be string or function
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    // shorthand, specifies selector
    mySubmitButton: 'input[type=submit]'

    // full
    myTextInput: {
      selector: 'input[type=text]',
      locateStrategy: 'css selector'
    }
  },
  commands: [
    {
      myCustomPause: function () {
        this.api.pause(this.props.myPauseTime);
      }
    }
  ],
  // object version (best considered immutable)
  props: {
    myPauseTime: 1000
  },

  sections: {
    myFooterSection: {
      selector: '#my-footer',
      locateStrategy: 'css selector',
      elements: {
        myLogo: {
          selector: '.my-logo',
          locateStrategy: 'css selector'
        }
      },
      commands: [
        {
          myMoveToLogo: function () {
            this.moveToElement('@myLogo', this.props.myLogoX, this.props.myLogoY);
          }
        }
      ],
      // function version (recommended)
      props: function () {
        return {
          myLogoX: 10,
          myLogoY: 10
        };
      },
      sections: {
        // additional, nested sections
      }
    }
  }
};</code></pre></div>

#### Page Object Methods

<h4 id="page-navigate"><code>.navigate()</code></h4>
Navigates to the resolved url defined for the page object using the command API's <code>url()</code> command. This command is generally used in place of the command API's <code>url()</code> when working with page objects because the `url` member of the page object is the user-defined url string or function and not the call used to navigate to a url.

#### Element Instances

Element instances encapsulate the definition used to handle element selectors. Generally you won't need to access them directly, instead referring to them using their <code>@</code>-prefixed names for selector arguments, but they are available through a page object or section's `elements` property.

#### Section Instances

For an introduction to creating sections, see the [Define Sections](https://nightwatchjs.org/guide/using-page-objects/defining-sections.html) guide page.

Page object section instances are accessed from the `section` property of a page object instance (note that this is the singular version of "section" whereas the plural version, "sections", was used in the module definition). 

Sections are created automatically through the page object factory and are available directly as properties from the `section` reference.

<pre style="padding-top: 10px"><code class="language-javascript">const myPageObject = browser.page.MyPage();
const mySection = myPageObject.section.MySection; // from a `sections: {}` block in page object</code></pre>

<h3 id="page-commands">Page Object Commands</h3>

For an introduction to writing page object custom commands, see the [Writing page-specific commands](https://nightwatchjs.org/guide/using-page-objects/writing-page-specific-commands.html) guide page.

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 100px;">Type</th>
      <th>description</th>
    </tr>
    </thead>
    <tbody>

    <tr>
      <td>`commands`</td>
      <td>Array</td>
      <td>A list of objects containing functions to represent methods added to the page object instance.</td>
    </tr>

    </tbody>
  </table>
</div>

#### Page object commands considerations

Page object commands in the module root commands are not available in child sections and section commands are not available in parent sections or the root page object.

- <strong>Context:</strong> Page object command context (the value of `this`) is the page object (for sections it's the section instance);
- <strong>Execution:</strong> Page object commands are not called from within the command queue. Code in a page object command is executed immediately when the function is called;
- <strong>Chaining:</strong> Page object commands must return a value for chaining. This can be anything, but it's recommended you stick to `this` to allow your commands to be chained in the context of the page object instance.
