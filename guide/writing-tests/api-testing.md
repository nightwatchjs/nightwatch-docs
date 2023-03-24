---
title: API Testing
description: Learn how to do API testing in Nightwatch.
summary_image: https://nightwatchjs.org/img/banner.png
---

<div class="page-header"><h1>API using Nightwatch</h1></div>

### Overview

API testing is a type of software testing that involves testing the API layer of an application.

API testing involves testing the requests and responses between the client application and the server. This is typically done by sending HTTP requests to the API endpoints and verifying the responses returned. The main goal of API testing is to ensure that the API behaves as expected, and that it returns the correct data and errors for different input scenarios.

Overall, API testing is an important aspect of software testing that ensures the reliability and functionality of an application's API layer, enabling developers to build robust and scalable software applications.

### How does it work?

To perform API testing, the official [Nightwatch API testing plugin][1] will have to be installed. 

This plugin brings support for API testing into Nightwatch. It contains the following features:

1. Integration with [supertest][2] for testing HTTP requests
2. Bsuilt-in mock server based on [express][3] with support for [sinon][4] assertions on mocked HTTP requests

<p class="alert alert-info">Requires Nightwatch 2.6.4 or higher.</p>


### Installation

#### Step 1
Install the plugin with this command: 

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npm i @nightwatch/apitesting --save-dev</code></pre>

#### Step 2

Update the Nightwatch configuration to add the plugin to the list

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">module.exports = {
  plugins: ['@nightwatch/apitesting']
    
  // other nightwath settings...
}
</code></pre></div>

#### Step 3

We also need to turn off the browser session, since we're only doing API testing. This can be accomplished by adding a new environment for API testing as shown below in nightwatch.conf.js

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">test_settings{
  ....
  api_testing: {
    start_session: false,
    webdriver: {
      start_process: false,
    }
  },
}
</code></pre></div>

### API Test Settings

The plugin has for now only one configuration option, which is weather or not to log the HTTP responses to the console. This can be configured in the `nightwatch.json` (or `nightwatch.conf.js`) config file:

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">{
  "@nightwatch/apitesting" : {
    "log_responses": true
  }
}
</code></pre></div>

### Test API headers & responses

Since Nightwatch use `Supertest` under the hood, you can test different types of REST API headers & response.

E.g. GET REQUEST

<div class="sample-test">
<i>get-api-test.js</i><pre class="line-numbers"><code class="language-javascript">describe('api testing', function () {
  it('get api test', async function({supertest}) {
    await supertest
      .request("https://petstore.swagger.io/v2")
      .get("/pet/findByStatus?status=available")
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function(response){
          expect(response._body.length).to.be.greaterThan(0);
      });
  });
});
</code></pre></div>

E.g. POST REQUEST

<div class="sample-test">
<i>post-api-test.js</i><pre class="line-numbers"><code class="language-javascript">describe('api testing', function () {
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
</code></pre></div>

### Mock Server

In case APIs are not ready you can also create mock APIs. The plugin provides a built-in mock server based on [express][3] that can be used to assert incoming http requests.

E.g. Sample mock server

<div class="sample-test">
<i>mock-server.js</i><pre class="line-numbers"><code class="language-javascript">const express = require('express');

describe('mock server', function () {
    let app;
    let server;

    before(async function(client, done) {
        app = express();
        
        app.get('/pet/findByStatus', function (req, res) {
            res.status(200).json([
                {
                    id: 'pet1'
                },
                {
                    id: 'pet2'
                }
            ]);
        });

        server = app.listen(3000, function() {
            done();
        });
    });

    after(() => {
        console.log("server closed");
    });

    it('get api test', async function({supertest}) {
    await supertest
        .request(app)   
        .get("/pet/findByStatus")
        .query({ status: 'available' })
        .expect(200)
        .expect('Content-Type', /json/)
        .then(function(response){
            console.log(response._body);
            expect(response._body.length).to.be.greaterThan(0);
        });
    });
});
</code></pre></div>

### Running API tests

Ensure that the API tests are run against an `environment` where the `start_session` and `webdriver -> start_process` are set to false

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash" style="font-size: 20px">npx nightwatch &#60;path to tests&#62; --env api_testing</code></pre>


### HTML Report

Once the tests are run, the results can be reviewed in the HTML report.     

![HTML report][image-1]


[1]:  https://github.com/nightwatchjs/nightwatch-plugin-apitesting
[2]:  https://www.npmjs.com/package/supertest
[3]:  https://www.npmjs.com/package/express
[4]:  https://www.npmjs.com/package/sinon

[image-1]:  https://user-images.githubusercontent.com/1677755/224906440-9cc1679c-854a-44d7-81ae-e872ab396b79.png
