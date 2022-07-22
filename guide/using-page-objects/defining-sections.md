---
title: Define Sections.
description: Learn about how to define page section.
---
## Define Sections

Sometimes it is useful to define sections of a page. Sections do 2 things:

* Provide a level of namespacing under the page
* Provide element-level nesting so that any element defined within a section is a descendant of its parent section in the DOM

### Declare sections
You can create sections using the `sections` property:

<div class="sample-test"><i>nightwatch/pages/samplePage.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  sections: {
    menu: {
      selector: '#gb',
      elements: {
        mail: {
          selector: 'a[href*="mail"]'
        },
        images: {
          selector: 'a[href*="imghp"]'
        }
      }
    }
  }
};
</code></pre></div>

<br>

### Using sections in tests

Your tests would use it as follows:

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('sample test with page objects', function() {
  it('Test', function (browser) {
    var google = browser.page.google();
    google.expect.section('@menu').to.be.visible;

    var menuSection = google.section.menu;
    menuSection.expect.element('@mail').to.be.visible;
    menuSection.expect.element('@images').to.be.visible;

    menuSection.click('@mail');

    browser.end();
  });
});
</code></pre></div>

<br>
<div class="alert alert-info">
Note that every command and assertion on a section (other than `expect` assertions) returns that section for chaining. If desired, you can nest sections under other sections for complex DOM structures.
</div>

### Nesting page object sections

<div class="sample-test"><i>nightwatch/pages/samplePage.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">module.exports = {
  sections: {
    menu: {
      selector: '#gb',
      elements: {
        mail: {
          selector: 'a[href*="mail"]'
        },
        images: {
          selector: 'a[href*="imghp"]'
        }
      },
      sections: {
        apps: {
          selector: 'div.gb_pc',
          elements: {
            myAccount: {
              selector: '#gb192'
            },
            googlePlus: {
              selector: '#gb119'
            }
          }
        }
      }
    }
  }
};
</code></pre></div>

<br>
Using a nested section in your test is straightforward:

<div class="sample-test"><i>tests/sampleTest.js</i>
<pre class="line-numbers" data-language="javascript"><code class="language-javascript">describe('sample test with page objects', function() {
  it('Test', function (browser) {
    var google = browser.page.google();
    google.expect.section('@menu').to.be.visible;

    var menuSection = google.section.menu;
    var appSection = menuSection.section.apps;
    menuSection.click('@appSection');

    appSection.expect.element('@myAccount').to.be.visible;
    appSection.expect.element('@googlePlus').to.be.visible;

    browser.end();
  });
});
</code></pre></div>

### Recommended content
- [Concepts > Page object model](/guide/concepts/page-object-model.html)
- [Define page elements](/guide/using-page-objects/defining-elements.html)
- [Add page-specific commands](/guide/using-page-objects/writing-page-specific-commands.html)