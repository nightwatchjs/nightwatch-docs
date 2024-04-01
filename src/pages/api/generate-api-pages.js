const fs = require('node:fs');
const {join, dirname, basename, extname} = require('node:path');
const path = require('path');
const ejs = require('ejs');
const ejsTemplate_JS = fs.readFileSync(path.join(__dirname, 'example-js.ejs')).toString('utf-8');
const ejsTemplate_IFRAME = fs.readFileSync(path.join(__dirname, 'example-iframe.ejs')).toString('utf-8');


function getDataForPages({apiData, sourceDirectories, outputDirectories, methodNames, config}) {
  const sourceApiDirectory = join(config.apiFolder, ...sourceDirectories);
  const outputApiDirectory = join(config.mdFolder, 'api', ...outputDirectories);



  return apiData
    .filter(({file}) => {
      if (!file.startsWith(sourceApiDirectory)) {
        return false;
      }

      return methodNames.some((name) => {
        return file.endsWith(path.join(...sourceDirectories, `${name}.js`));
      });
    })
    .map(({file, entities: [method]}) => {
      const name = basename(file);

      const sourcePath = join(sourceApiDirectory, name);
      const outputPath = join(outputApiDirectory, name.replace(extname(name), '.ejs'));

      const fileLink = /\/lib.+$/.exec(sourcePath)[0];
      const editLink = `${config.apiRepoUrl}/${config.githubRepo}/edit/main${fileLink}?message=api-docs%20update`;

      return {
        name,
        method,
        fileLink,
        editLink,
        outputPath
      };
    });
}

async function generateExampleFiles({method, name, config}) {
  if (method.exampleLink) {
    const exampleFile = path.resolve(path.join(config.examples.source_folder, method.exampleLink));
    const fileExists = fs.existsSync(exampleFile);

    if (fileExists) {
      const exampleLink = `tests/api/${name}`;
      const contents = fs.readFileSync(exampleFile).toString('utf-8');

      const jsResult = ejs.render(ejsTemplate_JS, {
        name: method.name,
        editorOnly: method.editorOnly,
        contents
      });

      const iframeResult = ejs.render(ejsTemplate_IFRAME, {
        name: method.name,
        pageTitle: `${method.name} command example - Nightwatch.js`,
        pageDescription: `Live example for Nightwatch.js ${method.name} command running in the browser.`,
        pageImage: 'https://nightwatchjs.org/img/banners/nightwatchjs.jpg',
        editorOnly: method.editorOnly,
        contents
      });

      const jsOutputFile = path.join(config.examples.output_folder, `${method.name}.js`);
      const htmlOutputFile = path.join(config.examples.output_folder, `${method.name}.html`);

      fs.mkdirSync(config.examples.output_folder, {recursive: true});
      fs.writeFileSync(jsOutputFile, jsResult);
      fs.writeFileSync(htmlOutputFile, iframeResult);

      return {
        exampleLink
      };
    }
  }

  return {
    exampleLink: null
  };
}

async function generateIndependentPages({apiData, sourceDirectories, outputDirectories, methodNames, config}) {
  getDataForPages({apiData, sourceDirectories, outputDirectories, methodNames, config})
    .map(function({name, method, fileLink, editLink, outputPath}) {
      const data = generateExampleFiles({method, name, config});

      return {
        name,
        method,
        fileLink,
        exampleLink: data.exampleLink,
        editLink,
        outputPath
      };
    })
    .map(async ({name, fileLink, method, editLink, outputPath}) => {
      let content = '';

      content += '<%\n';
      content += `const methodName = "${name.replace(extname(name), '.js')}";\n`;
      content += `const fileLink = "${fileLink}";\n`;
      content += 'const methods = await api;\n';
      content += 'const {entities: [method]} = methods.find(({file}) => file.endsWith(fileLink));\n';
      content += '%>\n';

      content += `<%- include('api-method', { method, editLink: "${editLink}" }); %>`;

      await fs.promises.mkdir(dirname(outputPath), {recursive: true});
      await fs.promises.writeFile(outputPath, content, 'utf8');
    });
}

module.exports.generateApiPages = (apiData, config) => {
  const wasPagesGenerated = globalThis.generated;

  if (!wasPagesGenerated) {
    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['protocol'],
      outputDirectories: [''],
      methodNames: [
        'back',
        'forward',
        'getCurrentUrl',
        'url',
        'navigateTo',
        'quit',
        'refresh',
        'submit',
        'frame',
        'frameParent',
        'screenshot',
        'waitUntil',
        'session',
        'sessions',
        'status',
        'timeouts',
        'timeoutsAsyncScript',
        'timeoutsImplicitWait',
        'elementActive'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['client-commands'],
      outputDirectories: [''],
      methodNames: [
        'axeRun',
        'axeInject',
        'init',
        'getTitle',
        'urlHash',
        'end',
        'getLog',
        'getLogTypes',
        'isLogAvailable',
        'saveScreenshot',
        'saveSnapshot',
        'debug',
        'pause',
        'perform',
        'useCss',
        'useXpath',
        'captureBrowserConsoleLogs',
        'captureBrowserExceptions',
        'enablePerformanceMetrics',
        'getPerformanceMetrics',
        'registerBasicAuth',
        'setDeviceDimensions',
        'setGeolocation',
        'takeHeapSnapshot'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['web-element', 'commands'],
      outputDirectories: ['element'],
      methodNames: [
        'find',
        'findAll',
        'findByAltText',
        'findAllByAltText',
        'findByPlaceholderText',
        'findAllByPlaceholderText',
        'findByRole',
        'findAllByRole',
        'findByLabelText',
        'findByText',
        'findAllByText',
        'getFirstElementChild',
        'getLastElementChild',
        'getNextElementSibling',
        'getPreviousElementSibling',
        'getShadowRoot',
        'clear',
        'click',
        'dragAndDrop',
        'sendKeys',
        'setAttribute',
        'setProperty',
        'submit',
        'update',
        'upload',
        'getAccessibleName',
        'getAriaRole',
        'getAttribute',
        'getCssProperty',
        'getProperty',
        'getRect',
        'getTagName',
        'getText',
        'getValue',
        'setValue',
        'getId',
        'clickAndHold',
        'doubleClick',
        'rightClick',
        'moveTo',
        'takeScreenshot'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['web-element'],
      outputDirectories: ['element'],
      methodNames: [
        'waitUntil'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['element-commands'],
      outputDirectories: [''],
      methodNames: [
        'submitForm',
        'updateValue',
        'uploadFile',
        'getElementSize',
        'hasDescendants',
        'isEnabled',
        'isSelected',
        'isVisible',
        'isPresent',
        'clearValue',
        'waitForElementNotPresent',
        'waitForElementNotVisible',
        'waitForElementPresent',
        'waitForElementVisible'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['protocol', 'appium'],
      outputDirectories: ['appium'],
      methodNames: [
        'getContext',
        'getContexts',
        'getCurrentActivity',
        'getCurrentPackage',
        'getGeolocation',
        'getOrientation',
        'hideKeyboard',
        'isKeyboardShown',
        'longPressKeyCode',
        'pressKeyCode',
        'setContext',
        'setGeolocation',
        'setOrientation',
        'startActivity'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['client-commands', 'alerts'],
      outputDirectories: ['alerts'],
      methodNames: [
        'accept',
        'dismiss',
        'getText',
        'setText'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['client-commands', 'cookies'],
      outputDirectories: ['cookies'],
      methodNames: [
        'delete',
        'deleteAll',
        'getAll',
        'get',
        'set'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['client-commands', 'document'],
      outputDirectories: ['document'],
      methodNames: [
        'injectScript',
        'source',
        'executeScript',
        'executeAsyncScript'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['client-commands', 'network'],
      outputDirectories: ['network'],
      methodNames: [
        'captureRequests',
        'mockResponse',
        'setConditions'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['client-commands', 'window'],
      outputDirectories: ['window'],
      methodNames: [
        'close',
        'fullscreen',
        'getAllHandles',
        'getHandle',
        'getPosition',
        'getRect',
        'getSize',
        'maximize',
        'minimize',
        'open',
        'setPosition',
        'setRect',
        'setSize',
        'switchTo'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['assertions'],
      outputDirectories: ['assert'],
      methodNames: [
        'attributeContains',
        'attributeEquals',
        'attributeMatches',
        'cssProperty',
        'domPropertyContains',
        'domPropertyEquals',
        'domPropertyMatches',
        'elementsCount',
        'elementPresent',
        'hasClass',
        'hasAttribute',
        'hasDescendants',
        'enabled',
        'selected',
        'textContains',
        'textEquals',
        'textMatches',
        'titleContains',
        'titleEquals',
        'titleMatches',
        'urlContains',
        'urlEquals',
        'urlMatches',
        'valueContains',
        'valueEquals',
        'visible'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['expect', 'assertions', 'element'],
      outputDirectories: ['expect', 'element'],
      methodNames: [
        'type', // a
        'active',
        'attribute',
        'css',
        'enabled',
        'present',
        'property',
        'selected',
        'text',
        'value',
        'visible'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['expect', 'assertions', 'elements'],
      outputDirectories: ['expect', 'elements'],
      methodNames: [
        'count'
      ]
    });

    generateIndependentPages({
      config,
      apiData,
      sourceDirectories: ['expect', 'assertions', 'elements'],
      outputDirectories: ['expect', 'elements'],
      methodNames: [
        'count'
      ]
    });

    globalThis.generated = true;
  }
};
