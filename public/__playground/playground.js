StackBlitzSDK.embedProject(
  'container',
  // Payload:
  {
    files: {
      'test/shadowRootExample.js': `test('Shadow root example test', async function (browser) {
  await browser
    .navigateTo('https://mdn.github.io/web-components-examples/popup-info-box-web-component/')
    .waitForElementVisible('form');

  const shadowRootEl = await browser.getShadowRoot('popup-info');
  const infoElement = await shadowRootEl.find('.info');

  await expect(infoElement.property('innerHTML')).to.include('card validation code');
  const iconElement = await shadowRootEl.find('.icon');
  const firstElement = await browser.getFirstElementChild(iconElement);

  await expect.element(firstElement).to.be.an('img');

});`,

      'test/vueTodoList.js': `/**
 * End-to-end test for the sample Vue3+Vite todo app located at
 *
 * https://github.com/nightwatchjs-community/todo-vue
 */
describe('To-Do List End-to-End Test', function() {

  // using the new element() global utility in Nightwatch 2 to init elements
  // before tests and use them later
  const todoElement = element('#new-todo-input');
  const addButtonEl = element('form button[type="submit"]');

  it('should add a todo using global element()', async function() {
    ///////////////////////////////////////////////////
    // browser can now also be accessed as a global   |
    ///////////////////////////////////////////////////

    // adding a new task to the list
    await browser
      .navigateTo('https://todo-vue3-vite.netlify.app/')
      .sendKeys(todoElement, 'what is nightwatch?')
      .click(addButtonEl);

    ///////////////////////////////////////////////////
    // global expect is equivalent to browser.expect  |
    ///////////////////////////////////////////////////

    // verifying if there are 5 tasks in the list
    await expect.elements('#todo-list ul li').count.toEqual(5);

    // verifying if the 4th task if the one we have just added
    const lastElementTask = element({
      selector: '#todo-list ul li',
      index: 4
    });

    await expect(lastElementTask).text.toContain('what is nightwatch?');

    // find our task in the list and mark it as done
    const inputElement = await lastElementTask.findElement('input[type="checkbox"]');
    await browser.click(inputElement);

    // verify if there are 3 tasks which are marked as done in the list
    await expect.elements('#todo-list ul li input:checked').count.toEqual(3);
  });

});
`,
      'test/usingFrames.js': `describe('Using frames in e2e tests', function () {
  
  beforeEach(browser => browser.navigateTo('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe'));
  afterEach(browser => browser.end());
  
  // with css selector
  it('Using .frame() test with CSS selector', function (browser) {
    const frameId = 'iframe.interactive';

    browser
      .navigateTo('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe')
      .frame(frameId, function (result) {
        console.log(result);
      })
      .assert.visible('#editor-container')
      .end();
  });
  
  it('Using frameElement example', function (browser) {
    const frameElement = 'iframe.interactive';
  
    browser
      .assert.elementPresent(frameElement)
      .frame(frameElement, function() {
        console.log(' > Switched to the inner iframe');
      })
      .assert.visible('#editor-container')
      .frameParent(function (result) {
        console.log(' > Switched back to the parent frame');
      })
      .assert.visible('.main-wrapper');
  });
});

      `,

      'README.md': `# Nightwatch Playground

  This is a live example of a Nightwatch.js project. The tests run in the browser against a remote Chrome driver service, so you can try it out without installing anything.

  ## How to run the tests

  The project runs npm install automatically so you can go ahead an run the tests with:

  \`\`\`sh
   npm test
  \`\`\`

  To run the tests and view the HTML report in the Preview pane, run:
  
  \`\`\`sh
   npm run test:with-preview
  \`\`\`

  Feel free to edit the test file or add your own. You can also add new files and folders to the project.
`,
      'package.json': `{
  "name": "nightwatch-playground",
  "version": "0.0.0",
  "scripts": {
    "start" : "pwd",
    "test": "nightwatch",
    "test:with-preview": "nightwatch --env stackblitz"
  },
  "dependencies": {
    "nightwatch": "latest",
    "serve-handler": "^6.1.3"
  }

}`,
      'nightwatch.conf.js': `
module.exports = {
  src_folders: ['test'],

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',

      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {}
      },
      
      webdriver: {
        default_path_prefix: '',
        start_process: false,
        host: 'remotedriver.nightwatchjs.org',
        port: 443
      }
    },

    stackblitz: {
      globals: {
        after(done) {
          const handler = require('serve-handler');
          const http = require('http');

          const server = http.createServer((request, response) => {
            return handler(request, response, {
              public: './tests_output/nightwatch-html-report',
            });
          });

          server.listen(3000, () => {
            console.log('Server running at http://localhost:3000. Make sure to enable third-party cookies for nightwatchjs.org in order to view the HTML report.');
          });
          done();
        }
      }
    }
  }
};`
    },
    template: 'node',
    title: 'Nightwatch Playground',
    description: 'Create and run Nightwatch tests directly in your browser.',
  },

  // Options
  {
    clickToLoad: false,
    hideNavigation: false,
    hideExplorer:  false ,
    terminalHeight:  45 ,
    height: document.body.clientHeight - 100,
    showSidebar: true,
    view:  'both',
    openFile: 'README.md'
  }
);
