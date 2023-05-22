## Defining Sections

Sometimes it is useful to define sections of a page. Sections do 2 things:

* Provide a level of namespacing under the page
* Provide element-level nesting so that any element defined within a section is a descendant of its parent section in the DOM

You can create sections using the `sections` property:

```js
module.exports = {
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
```

Your tests would use it as follows:

```js
module.exports = {
  'Test': function (browser) {
    var google = browser.page.google();
    google.expect.section('@menu').to.be.visible;

    var menuSection = google.section.menu;
    menuSection.expect.element('@mail').to.be.visible;
    menuSection.expect.element('@images').to.be.visible;

    menuSection.click('@mail');

    browser.end();
  }
};

```

<div class="alert alert-info">
Note that every command and assertion on a section (other than `expect` assertions) returns that section for chaining. If desired, you can nest sections under other sections for complex DOM structures.
</div>

#### Example of nesting page object sections

```js
module.exports = {
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
```

Using a nested section in your test is straightforward:

```js
module.exports = {
  'Test': function (browser) {
    var google = browser.page.google();
    google.expect.section('@menu').to.be.visible;

    var menuSection = google.section.menu;
    var appSection = menuSection.section.apps;
    menuSection.click('@appSection');

    appSection.expect.element('@myAccount').to.be.visible;
    appSection.expect.element('@googlePlus').to.be.visible;

    browser.end();
  }
};

```
