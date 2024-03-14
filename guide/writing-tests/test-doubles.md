---
title: Test Doubles
description: Nightwatch provides support for adding test doubles with the official test doubles plugin, build on top of sinonjs.
---

<div class="page-header"><h1>Test Doubles in Nightwatch</h1></div>

 Test doubles, also known as mocks, stubs, or fakes, are used in testing to replace real dependencies with simulated ones to isolate the code being tested.
 Nightwatch provides support for test doubles through its mock command, which allows you to create stubs and mocks for dependencies.

### Installation

##### 1) Install the plugin from NPM:


<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash">npm i @nightwatch/testdoubles --save-dev</code></pre>

##### 2) Add configuration:
Edit your `nightwatch.json` (or `nightwatch.conf.js`) file and add the following
<div class="sample-test"><i>nightwatch.conf.js</i>

<pre class="line-numbers"><code class="language-javascript">module.exports = {
  plugins: ['@nightwatch/testdoubles']

  // other Nightwatch settings...
}
</code></pre></div>
 


##### 3) Disable the browser session

We also need to turn off the browser session, since we're only doing unit testing. This can be accomplished by setting these properties:

<div class="sample-test">
<i>nightwatch.conf.js</i><pre class="line-numbers"><code class="language-javascript">module.exports = {
  // ....
  testdoubles: {
    start_session: false,
    webdriver: {
      start_process: false,
    }
  }
}
</code></pre></div>

<p class="alert alert-info">Requires Nightwatch 2.6.4 or higher.</p>

### Usage

Once `@nightwatch/testdoubles` is installed and added to your configuration file, you can use the sinon object in your test cases to create test doubles. Here are some examples:

##### Spy
A spy is a function that records some metadata about its calls, such as the number of times it was called, the arguments it was called with, etc. Spies are useful for verifying that a function was called, or for inspecting the arguments it was called with.

<div class="sample-test">
<i>spy.js</i><pre class="line-numbers"><code class="language-javascript">
describe('use spies in nightwatch', function() {
  it('should log message when called', function({sinon}) {
    const obj = {
      hello: () => console.log('Hello!')
    }
    const sayHello = () => obj.hello(); 
    const spy = sinon.spy(obj, 'hello'); // create a spy on hello
    sayHello();
    assert(spy.calledOnce);  // assert that the spy was called once
    spy.restore();  // restore original hello function
  })
})
</code></pre></div>

This example creates a spy on the hello method of an object, and then calls the `sayHello` function. The assertion checks whether the spy was called once. Finally, the spy is restored to its original state.

##### Stubs
A stub is a function that replaces the original function with a "dummy" implementation. This is useful when you need to control the behavior of a function during a test, for example to simulate an error condition.


<div class="sample-test">
<i>stub.js</i><pre class="line-numbers"><code class="language-javascript">describe('use stubs in nightwatch', function() {
  it('stub hello', function({sinon}) {
    const obj = {
      hello: () => console.log('Hello!')
    }
    const sayHello = () => obj.hello();
    const stub = sinon.stub(obj, 'hello').returns('hi'); // replace hello with a dummy implementation that returns 'hi'
    const result = sayHello();
    assert.strictEqual(result, 'hi'); // check that the stubbed function returned 'hi'
  });
});
</code></pre></div>


This example creates a stub on the console.log method and then calls it with the argument 'Hello!'. The assertion checks whether the stub was called once with the expected argument. Finally, the stub is restored to its original state.

##### Mocks
A mock is a function that "mocks" an object, i.e. it creates a fake version of the object with the same interface as the real object. You can set expectations on the mock object, i.e. specify which methods should be called and with what arguments, and the mock will verify that these expectations are met during the test.


<p class="alert alert-info">creating a mock automatically attaches a Nightwatch assertion to it. mock.verify() runs the checks and reports errors if the checks fail.</p>


<div class="sample-test">
<i>mock.js</i><pre class="line-numbers"><code class="language-javascript">
describe('use mocks in nightwatch', function() {
  it('mock hello obj', function({sinon}) {
    const obj = {
      hello: () => console.log('Hello!')
    }
    const sayHello = () => obj.hello();
    const mock = sinon.mock(obj).expects('hello').atLeast(1).returns(null); //set a mock on hello
    sayHello();
    mock.verify(); // mocks comes with inbuilt assertion 
  })
})
</code></pre></div>

This example creates a mock on the hello method of an object, and then calls the sayHello function. The mock.verify() method checks whether the mock was called at least once. Finally, the mock is restored to its original state.

For more information on how to use spy, stub, and mock, see the [Sinon.js documentation](https://sinonjs.org/releases/latest/). 


### Running API tests

Ensure that the API tests are run against an `environment` where the `start_session` and `webdriver -> start_process` are set to `false`.

<pre style="max-width: 800px; border-radius: 10px; padding: 10px 20px"><code class="language-bash">npx nightwatch &#60;path to tests&#62; --env testdoubles</code></pre>

We hope these examples help you get started with using `@nightwatch/testdoubles` in your Nightwatch tests!

<div class="doc-pagination pt-40">
  <div class="previous">
    <a href="https://nightwatchjs.org/guide/writing-tests/write-nodejs-unit-integration-tests.html">
      <span>←</span>
        <div class="d-flex flex-column">
          <span class="smallT">Back</span>
          <span class="bigT">Unit & integration testing</span>
        </div>
    </a>
  </div>
     <div class="next">
    <a href="https://nightwatchjs.org/guide/writing-tests/nightwatch-inspector.html">
        <div class="d-flex flex-column">
          <span class="smallT">Next Page</span>
          <span class="bigT">Nightwatch Inspector</span>
        </div>
        <span>→</span>
    </a>
  </div>
</div>