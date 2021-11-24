---
title: Nightwatch v2 is Now in Beta
author: Andrei Rusu
author_title: Author and maintainer of Nightwatch
author_url: https://github.com/beatfactor
author_image_url: https://avatars.githubusercontent.com/u/419506?v=4
tags: [nightwatch-v2]
description: Nightwatch v2.0 is now in beta and available in NPM.
draft: false
date: 2021-11-04
image: https://nightwatchjs.org/img/blog/nightwatch2-beta.png
link_to_discussions: https://github.com/nightwatchjs/nightwatch/discussions/2939
---
We're finally ready to announce the first [beta release](https://github.com/nightwatchjs/nightwatch/releases/tag/v2.0.0-beta.1) for Nightwatch v2.0. Upcoming beta releases will incrementally be made available in NPM under the **_next_** tag, so in order to install it you'll have to run the following:  

<pre style="max-width: 500px; margin-left: 30px;"><code class="language-bash">npm i nightwatch@next</code></pre>

Over the coming weeks we will also finish updating the documentation with more pages in the Guide section and documenting the new APIs. 

## New features
Here are the [release notes](https://github.com/nightwatchjs/nightwatch/releases/tag/v2.0.0-beta.1) which contain details about important changes since the last [alpha release](https://github.com/nightwatchjs/nightwatch/releases/tag/v2.0.0-alpha.4).

You can also revisit the blog post which announced the first alpha release to get a better sense of the list of new features and enhancements, but let's quickly recap the most important ones here as well, briefly.

- ### New user actions API, support for Chrome DevTools Protocol, and WebDriver BiDi
One of the main changes in v2 is that the underlying architecture was completely reworked to use the official [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) library in communicating with the browser drivers. 

This means better cross-browser integration and more reliable DOM element handling. More details about changes related to this are available in the previous blog post about the [alpha release](https://nightwatchjs.org/blog/nightwatch-v2-alpha-is-released.html).

- ### New integrated test runner for using CucumberJS in Nightwatch
In the previous [v2.0.0-alpha.3](https://github.com/nightwatchjs/nightwatch/releases/tag/v2.0.0-alpha.3) we have announce the new integrated test runner for CucumberJS as well as an **upgraded Mocha test runner** which is based on Mocha v9. Another noticeable update in this version was the new programmatic API.

For using CucumberJs in Nightwatch 2, no other plugins are necessary, other than the [Cucumber library](https://www.npmjs.com/package/@cucumber/cucumber) itself (version 7.3 or higher). More details on how to use CucumberJs with Nightwatch 2 and examples are avatars in the bundled [examples folder](https://github.com/nightwatchjs/nightwatch/tree/v2/examples/cucumber-js).

You can also try out these examples immediately on a new project, the auto-generated Nightwatch config file contains the necessary settings:

<pre style="max-width: 500px; margin-left: 30px;"><code class="language-bash">npx nightwatch --env cucumber-js</code></pre>

Check the [v2.0.0-alpha.3](https://github.com/nightwatchjs/nightwatch/releases/tag/v2.0.0-alpha.3) for more details.

## Examples
We've also updated the bundled examples so do make sure to check those out in order to get a better feel about the new Nightwatch 2 features.

Here's one which uses the sample to-do app available on the AngularJS homepage.

<div class="sample-test"><pre data-language="javascript"><code class="language-javascript">
describe('angularjs homepage todo list', function() {

  // using the new element() global utility in Nightwatch 2 to init elements
  // before tests and use them later
  const todoElement = element('[ng-model="todoList.todoText"]');
  const addButtonEl = element('[value="add"]');

  it('should add a todo using global element()', function() {
    // adding a new task to the list
    browser
      .navigateTo('https://angularjs.org')
      .sendKeys(todoElement, 'what is nightwatch?')
      .click(addButtonEl);

    // verifying if there are 3 tasks in the list
    expect.elements('[ng-repeat="todo in todoList.todos"]').count.to.equal(3);

    // verifying if the third task if the one we have just added
    const lastElementTask = element({
      selector: '[ng-repeat="todo in todoList.todos"]',
      index: 2
    });

    expect(lastElementTask).text.to.equal('what is nightwatch?');

    // find our task in the list and mark it as done
    lastElementTask.findElement('input', function(inputResult) {
      if (inputResult.error) {
        throw inputResult.error;
      }

      const inputElement = element(inputResult.value);
      browser.click(inputElement);
    });

    // verify if there are 2 tasks which are marked as done in the list
    expect.elements('*[module=todoApp] li .done-true').count.to.equal(2);
  });
});
</code></pre></div>

### Send us your feedback
More details on the Beta release can be found in the [v2.0.0-beta.1](https://github.com/nightwatchjs/nightwatch/releases/tag/v2.0.0-beta.1) release notes. Please feel free to submit either bugs on our [Github Issues](https://github.com/nightwatchjs/nightwatch/issues) or general feedback on our [Discussions page](https://github.com/nightwatchjs/nightwatch/discussions/2939). We appreciate your help!
