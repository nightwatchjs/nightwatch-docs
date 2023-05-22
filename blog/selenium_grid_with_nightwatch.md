---
title: Cross-browser testing with NightWatch and Selenium Grid
author: Puja Jagani
author_title: Selenium contributor
author_url: https://github.com/pujagani
tags:
    - nightwatch-v2
description: Leveraging Grid with Nightwatch for distributed testing
draft: true
date: 2021-11-18
---

Developing a good web application means it is usable, fully functional, and compatible. Rigorous end-to-end testing ensures rolling out a stable web application. Testing across all possible browsers guarantees a great user experience.

Nightwatch is an end-to-end automated testing solution for web applications. Web developers can write tests using Nightwatch and effortlessly test across various browsers without worrying about flakiness.

Consider an infrastructure setup with different browsers on different operation system machines. Now, the tests and infrastructure are ready. But how do we delegate the tests to run on the infrastructure? Well, Selenium Grid seamlessly stitches the two together. Selenium Grid helps in efficiently finding the accurate environment to run the tests on.

## What is Selenium Grid?

Selenium Grid is a central point that aids in distributed testing, scaling multiple environments, and load-balancing incoming tests. Grid improves testing efficiency by supporting parallel testing across multiple browser-os combinations. All tests point to the Grid, and it intelligently routes them to run on the underlying infrastructure.
If you have a local or a cloud device farm, Selenium Grid will handle all the delegation needs for web testing.

![Grid Architecture](https://user-images.githubusercontent.com/10705590/143004524-87117f3e-3fd3-4d75-a107-b875b4e75a96.png)

Selenium Grid's functionality is divided into various components as follows:

### Router

As the names suggest, the Router's primary responsibility is to route the request to the correct component. Any request to the Selenium Grid first goes to the Router. Based on the request, the Router identifies the Grid component that can handle it.

### Distributor

The Distributor maintains the model of all the registered Nodes. The Distributor matches the new session request to the appropriate Node and initiates session creation. It also regularly pings the Node's health check and tracks Node's heartbeat.

### Node

The Node is present on the machine that hosts the operating system and browser(s). Hence, a Node interacts with the web drivers and forwards browser commands to them. Each Node consists of a set of capabilities. A capability is a combination of browser name, browser version, and the operating system.

Upon startup, the Node registers itself with the Grid. Distributor handles the Node registration.

### Session Map

The Session map contains the mapping of the session-id and the Node where the session is running. For every request for an existing session, the Router uses the Session Map to look up the Node and forwards the request to the respective Node.

### New Session Queue

The New Session Queue enqueues every new session request. The New Session Queue is a FIFO queue. Meanwhile, the Distributor regularly checks if any of the Nodes have the capacity for the new session. If so, the Distributor blocks the matching slot in the Node and removes the request from the New Session Queue. The Node creates the session and responds to the client.

New Session Queue also has request retry and request timeout mechanisms.

### Event Bus

Grid components leverage the Event bus to interact with each other using messages. Grid components communicate with each other via the Event Bus.

## Setting up Selenium Grid

### Prequisites

 1. Ensure java is downloaded. If not, [download](https://www.java.com/en/download/help/download_options.html) and set up java on the machine that will run the Grid.
 2. Download the latest jar from the [Selenium downloads](https://www.selenium.dev/downloads/) page.
 3. Ensure that the web driver is on the system path. Refer [installing browser drivers](https://www.selenium.dev/documentation/getting_started/installing_browser_drivers/) for more details. The server will auto-detect drivers on the path. This behavior is configurable.

The Selenium Grid can be set up in any of the three modes: Standalone, Hub and Node, and Fully Distributed.

In all three modes, the default server address is <http://localhost:4444>.

### Standalone

The Standalone mode has all the Grid components in one. It is the quickest way to get started with the Grid.

    java -jar selenium-server-<grid-version>.jar standalone

### Hub and Node

Hub consists of Router, Distributor, New Session Queue, Session Map, and Event Bus. The Node consists of the Node and the Event Bus to allow communication with the Hub.

#### Start the Hub

    java -jar selenium-server-<grid-version>.jar hub

#### Start the Node

    java -jar selenium-server-<grid-version>.jar node

### Fully Distributed

Each Grid component runs independently in the fully distributed mode. All the Grid components rely on the Event Bus to communicate with each other.

#### Start the Event-Bus

    java -jar selenium-server-<grid-version>.jar event-bus

#### Start the Session Map

    java -jar selenium-server-<grid-version>.jar sessions

#### Start the New Session Queue

    java -jar selenium-server-<grid-version>.jar sessionqueue

#### Start the Distributor

    java -jar selenium-server-<grid-version>.jar distributor --sessions http://localhost:5556 --sessionqueue http://localhost:5559 --bind-bus false

#### Start the Router

    java -jar selenium-server-<grid-version>.jar router --sessions http://localhost:5556 --distributor http://localhost:5553 --sessionqueue http://localhost:5559

#### Start the Node

    java -jar selenium-server-<grid-version>.jar node

To check if the Grid is up, ping `http://<grid-url>/status` endpoint.

Each component has configurable [CLI options](https://www.selenium.dev/documentation/grid/configuring_components/cli_options/).

### Docker

Selenium Grid also supports Docker. Refer [Selenium Docker](https://github.com/SeleniumHQ/docker-selenium#docker-images-for-the-selenium-grid-server) to get started.

### Grid UI

Navigate to `http://<grid-url>/ui`.

Grid UI displays the Grid model with all the Nodes. A separate tab for sessions displays the ongoing sessions and sessions waiting in the queue.

## Integrating Nightwatch tests to run on Selenium Grid

#### Step 1:  [Write tests using Nightwatch.js](https://nightwatchjs.org/guide/using-nightwatch/) framework

Example:

```
describe('Test Ecosia website', function () {
 it('Assert search on Ecosia website', async  function () {
   browser
    .navigateTo('https://www.ecosia.org/')
    .waitForElementVisible('body')
    .assert.titleContains('Ecosia')
    .assert.visible('input[type=search]')
    .setValue('input[type=search]', 'nightwatch')
    .assert.visible('button[type=submit]')
    .click('button[type=submit]')
    .assert.containsText('.mainline-results', 'Nightwatch.js')
    .end();
 });
});
```

Ensure all the test files are in the `test` folder in your project.

#### Step 2:  Set up Nightwatch configuration to use the Grid

The test runner requires a configuration file. The file can have the extension ".json" or ".js". The ".js" is preferred since it has more configuration options and capabilities.

Nightwatch does the heavy-lifting of generating a config file with ".js" extension if it is not present. It contains a good set of options to test with any environment. For simplicity, just the sharing the configuration file with selenium-server related options. Just ensure the the selenium-server host and port match the Grid url and you are good to go!

```
// Autogenerated by Nightwatch
// Refer to the online docs for more details: https://nightwatchjs.org/gettingstarted/configuration/
const Services = {}; loadServices();

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: [],

  // See https://nightwatchjs.org/guide/working-with-page-objects/
  page_objects_path: ['node_modules/nightwatch/examples/pages/'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
  custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-assertions
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/#external-globals
  globals_path : '',

  webdriver: {},

  test_settings: {
    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the Selenium service, either locally or remote,  |
    //  like Selenium Grid                                                           |
    //////////////////////////////////////////////////////////////////////////////////
    selenium_server: {
      // Selenium Server is running locally and is managed by Nightwatch
      selenium: {
        start_process: false,
        host:"localhost",
        port: 4444,
        server_path: (Services.seleniumServer ? Services.seleniumServer.path : ''),
        cli_args: {
          'webdriver.gecko.driver': '<path/to/geckodriver>'),
          'webdriver.chrome.driver': '<path/to/chromedriver>')
        }
      }
    },

    'selenium.chrome': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: true
        }
      }
    },

    'selenium.firefox': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ]
        }
      }
    }
  },

// By default test_workers is disabled
// Enable if multiple test files need to be run parallel
// To run parallelly, ensure Grid's max-session CLI option is set to more than 1. By default, it is based on the number of available processors on the machine.
"test_workers" : {"enabled" : true, "workers" : "4"}
};

function loadServices() {
  try {
    Services.seleniumServer = require('selenium-server');
  } catch (err) {}

  try {
    Services.chromedriver = require('chromedriver');
  } catch (err) {}

  try {
    Services.geckodriver = require('geckodriver');
  } catch (err) {}
}

```

Refer to [Nightwatch Configuration](https://nightwatchjs.org/gettingstarted/configuration/) to understand and use the configuration options.

#### Step 3: Update the package.json to run in the desired environment

The environments are defined the config file as shown earlier. They are used to run the tests.

Update the "scripts" section as follows to run in a single environment

    "scripts": {
        "test": "node_modules/.bin/nightwatch -e selenium.chrome test"
      }

   Run the tests on multiple browsers by passing a comma-separated list of environments

     "scripts": {
        "test": "node_modules/.bin/nightwatch -e selenium.chrome, selenium.firefox test"
      }

#### Step 4: Run the tests

    npm test

### Documentation

Nightwatch: <https://nightwatchjs.org/guide/using-nightwatch/writing-tests.html>

Selenium Grid: <https://www.selenium.dev/documentation/grid/>
