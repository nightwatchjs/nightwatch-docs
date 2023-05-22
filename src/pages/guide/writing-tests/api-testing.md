---
title: API Testing in Nightwatch
description: Nightwatch provides support for API testing with the official API testing plugin, build on top of supertest.
summary_image: https://nightwatchjs.org/img/banner.png
---

# API Testing in Nightwatch

### Overview

API testing is a type of software testing that involves testing the API layer of an application.

API testing involves testing the requests and responses between the client application and the server. This is typically done by sending HTTP requests to the API endpoints and verifying the responses returned. The main goal of API testing is to ensure that the API behaves as expected, and that it returns the correct data and errors for different input scenarios.

Overall, API testing is an important aspect of software testing that ensures the reliability and functionality of an application's API layer, enabling developers to build robust and scalable software applications.

### How does it work?

To perform API testing, the official [@nightwatch/apitesting][1] plugin needs to be installed. The plugin provides the following features:

1. Integration with [supertest][2] for testing HTTP requests
2. Built-in mock server based on [express][3] with support for [sinon][4] assertions on mocked HTTP requests

<p class="alert alert-info">Requires Nightwatch 2.6.4 or higher.</p>

### Installation

#### 1) Install the plugin from NPM

```bash
npm i @nightwatch/apitesting --save-dev```

#### 2) Add the plugin to the list

Update the Nightwatch configuration to add the plugin to the list:

nightwatch.conf.js
```js
 module.exports = {
  plugins: ['@nightwatch/apitesting']

  // other Nightwatch settings...
}
```

#### 3) Disable the browser session

We also need to turn off the browser session, since we're only doing API testing. This can be accomplished by adding a new environment for API testing as shown below in nightwatch.conf.js

nightwatch.conf.js

```js
 module.exports = {
  // ....
  api_testing: {
    start_session: false,
    webdriver: {
      start_process: false,
    }
  }
}

```

### Config settings

The plugin has for now only one configuration option, which is weather or not to log the HTTP responses to the console. This can be configured in the `nightwatch.json` (or `nightwatch.conf.js`) config file:

nightwatch.conf.js

```js
{
  "@nightwatch/apitesting" : {
    "log_responses": true
  }
}
```

### Test API headers &amp; responses

Since Nightwatch use `supertest` under the hood, you can test different types of REST API headers & response.

**GET REQUEST**

get-api-test.js

```js
describe('api testing', function () {
  it('get api test', async function({supertest}) {
    await supertest
      .request("<https://petstore.swagger.io/v2>")
      .get("/pet/findByStatus?status=available")
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function(response){
          expect(response._body.length).to.be.greaterThan(0);
      });
  });
});

```

**POST REQUEST**

post-api-test.js

```js
describe('api testing', function () {
  it('post api test', async function({supertest}) {
    await supertest
      .request("https://petstore.swagger.io/v2")
      .post("/pet")
      .send({
        "id": 0,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function(response){
          expect(response._body.name).to.be.equal("doggie");
      });
  });
});
```

### Running API tests

Ensure that the API tests are run against an `environment` where the `start_session` and `webdriver -> start_process` are set to `false`.

```bash
npx nightwatch &#60;path to tests&#62; --env api_testing```

### HTML Report

Once the tests are run, the results can be reviewed in the HTML report.

![HTML report][image-1]

### Integrated mock server

The `@nightwatch/apitesting` plugin also provides a built-in mock server based on [express][3] that can be used to assert incoming http requests.

Here's a sample mock server:

mock-server.js
```js
describe('api testing with supertest in nightwatch POST', function () {

  let server;

  before(async function(client) {
    server = await client.mockserver.create();
    server.setup((app) => {
      app.post('/api/v1/datasets/', function (req, res) {
        res.status(200).json({
          id: 'test-dataset-id'
        });
      });
    });

    await server.start(3000);
  });

  after(() => {
    server.close();
  });

  it('demo test', async function(client) {
    const req = await server.request()
      .post('/api/v1/datasets/')
      .send({name: 'medea'})
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/);

    await client.assert.deepStrictEqual(server.route.post('/api/v1/datasets/').requestBody, {name: 'medea'});
  });

});
```

#### Mock server API

- `const mockServer = await client.mockserver.create()` – creates a new mock server instance
- `await mockServer.setup(definition)` – setup an existing mock server instance with the provided route definition
  Example:

```js
await mockServer.setup((app) => {
      app.get('/api/v1/schemas', function (req, res) {
        console.log('GET /api/v1/schemas called');

        res.status(200).json([
          {
            id: 'test-schema-id1'
          },
          {
            id: 'test-schema-id2'
          }
        ]);
      })
    });
```

- `await mockServer.start(port)` – starts an existing mock server instance on the specified port
- `await mockServer.route(path)` – returns a [sinon spy](https://sinonjs.org/releases/latest/spies/) on the specified route

#### Assert on incoming requests

Use the `mockServer.route(path)` method to retrive a spy on the specified route. You can then use the [sinon assertions](https://sinonjs.org/releases/latest/spies/#spyanonymous) to assert on the incoming requests.

##### Example

Consider the previous mock server setup example. If we want to assert that the `GET /api/v1/schemas` route was called, we can do the following:

```js
it('demo test', async function(client) {
    client
      .assert.strictEqual(mockServer.route.get('/api/v1/schemas').calledOnce, true, 'called once')
      .assert.strictEqual(mockServer.route.get('/api/v1/schemas').calledTwice, false);
  });
```

#### Assert on request headers

We can also assert on the request headers, for example using the built-in `expect()` assertions API which uses on [chai](https://www.chaijs.com/api/bdd/):

```js
it('demo test', async function(client) {
    const {requestHeaders} = mockServer.route.get('/api/v1/schemas');

    client.expect(requestHeaders).to.have.property('connection', 'close');
  });
```

#### Assert on incoming post data

We can also assert on the incoming post data:

1) First, set up a post route for the mock server:

```js
await mockServer.setup((app) => {
  app.post('/api/v1/datasets/', function (req, res) {
    res.status(200).json({
      id: 'test-dataset-id'
    });
  });
});
```

2) Then use the `mockServer.route.post(path)` method to retrive a spy on the specified route. You can then use the [sinon assertions](https://sinonjs.org/releases/latest/spies/#spyanonymous) to assert on the incoming requests.

```js
it('demo test', async function(client) {
    const {requestBody} = mockServer.route.post('/api/v1/schemas');

    await client.assert.deepStrictEqual(requestBody, {name: 'medea'});
});
```

For waiting for incoming requests tests, you can use the [`waitUntil()`](https://nightwatchjs.org/api/waitUntil.html) command.

Example using `waitUntil`:

```js
it('demo test', async function(client) {
    const timeoutMs = 15000;
    const retryIntervalMs = 500;

    await client.waitUntil(async function () {
      const spy = server.route.get('/api/v1/schemas');

      if (spy) {
        return spy.calledOnce;
      }

      return false;
    }, timeoutMs, retryIntervalMs, new Error(`time out reached (10000ms) while waiting for API call.`));

});
```

 <div class="doc-pagination pt-40">
  <div class="previous">
    <a href="/guide/writing-tests/visual-regression-testing.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Visual Testing</span>
        </div>
    </a>
  </div>
  <div class="next">
    <a href="/guide/writing-tests/write-nodejs-unit-integration-tests.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Unit &amp; integration testing</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>

[1]:  https://github.com/nightwatchjs/nightwatch-plugin-apitesting
[2]:  https://www.npmjs.com/package/supertest
[3]:  https://www.npmjs.com/package/express
[4]:  https://www.npmjs.com/package/sinon
