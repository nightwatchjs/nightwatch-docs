---
title: End-to-End Testing and Feedback Loops
author: Andrei Rusu
author_title: Author and maintainer of Nightwatch
author_url: https://github.com/beatfactor
author_image_url: https://avatars.githubusercontent.com/u/419506?v=4
tags:
description: Automated end-to-end testing can help you to dramatically reduce your feedback loops in your development process.
draft: false
date: 2021-07-30
image: https://nightwatchjs.org/img/blog/test_engineering.png
link_to_discussions: https://github.com/nightwatchjs/nightwatch-docs/discussions/133
---
Among all the types of tests which make up [the pyramid of software testing](https://martinfowler.com/articles/practical-test-pyramid.html), the end-to-end UI tests are considered by far the most difficult to manage, slow to execute, unstable, flaky, and sometimes even downright impractical. Just consider this recent post from the [ThoughtWorks blog](https://www.thoughtworks.com/insights/blog/why-test-user-journey) – the author recalls a response from an engineering team that was asked about the state of their UI testing: 

_"Well, we have a couple of Selenium tests, but they're pretty brittle. They always seem to be broken, so we rarely run them._  

Not only that, but just by looking at what the team behind the Cypress project write on [their website](https://www.cypress.io/about), it seems that software testing doesn't enjoy a favourable reputation among software developers:
_“Testing sucks. It’s the part that every developer dreads.”_ 

What is it about UI tests that makes them so brittle and ‘dreaded’? The Cypress team is also claiming that frontend testing hasn’t evolved for the past decade, at least not at the same pace of web development.

### The Internet Is Faster, but Websites Aren’t
First of all, web development hasn't really evolved that much in the last decade, or it all depends on what you mean by “evolved”. Sure, there’s webpack and React and ES6, but according to data from [httparchive.org](http://httparchive.org) the median page load time has remained about the same over the past 10 years, even though internet speeds have been steadily increasing, along with rapid advancements in hardware. So it’s safe to say that [the internet is faster, but websites aren’t](https://www.nngroup.com/articles/the-need-for-speed/). In addition, as the team behind the [Skypack](https://www.skypack.dev/about) utility has pointed out, “building for the web has never been more complicated.” 

With this in mind, I’d be quite confident in affirming that actually web development hasn’t really evolved all that much, even though we now have better and more sophisticated tools. On the other hand, frontend testing did evolve and is still evolving on multiple fronts, maybe even more rapidly than web development itself.

### Coding vs Testing
Testing is “dreaded” by developers simply because the entire software industry has adopted a dualist view of the software development process. We have developers on this side, who are always promised to build cool stuff, to experiment with the latest technologies and so on, and we have testing and quality assurance on this other side, which is often regarded as too tedious and unexciting by developers.

Convincing developers that software testing is exciting and cool, the same way as frontend development is perceived to be, will take some stretching of the imagination. As long as this duality between development and testing exists, with developers dreading the testing part (and perhaps also quality engineering dreading the developers’ obsession with constant change and slickness), the tests will continue to be flaky and brittle, which will lead to overall poor quality.

What I will try to suggest is that coding and testing are not two separate activities that happen independent of each other. Testing is an integral part of software development, in the same way as coding is. Every developer who thinks that testing is not their thing, is still doing some form of testing. They are just not doing it in an automated fashion, but rather in a manual, tedious, and somewhat random one.

### Using Nightwatch for UI Automation
About ten years ago, when Node.js had been released, there were barely any tools available for end-to-end testing using JavaScript and the ones that existed required significant effort to setup and use in an effective manner. Nowadays however, there are several UI testing frameworks powered by Node.js, all of them promising to deliver fast installation, stable tests written in JavaScript. 

Surely the days when you had to spend hours, if not days, to set up a UI automation project are behind us. With Nightwatch it only takes a minute or two now to be up and running with a testing automation project using Chrome, Firefox, Safari, including built-in support for Selenium Grid and Browserstack. Additional services are easy to add.

But are the tests still brittle and/or flaky? Right, the two most popular adjectives used with UI tests, especially with Selenium tests. In Nightwatch there is now pretty much all you can expect from an open source framework to mitigate brittleness and flakiness in the test runs, like implicit waits for elements, automatic retries on failed assertions, retries on failed test cases, retries on network errors, and so on. Our plan is not just try to detect and mitigate flakiness, but to make it impossible.

### What are Feedback Loops?
The feedback loop is an iterative activity made of the following steps: plan, code, verify, exit – the process of planning a code change, implementing it, and then verify if the outcome is as intended.

Feedback loops are everywhere in software development and beyond. I’ve first heard about it from a colleague who delivered [a presentation](https://www.slideshare.net/mennovanslooten/rapid-testing-rapid-development) at a jQuery conference, back in in 2010. Feedback loops are a common concept in Agile software methodologies, but the same concept is found also in control theory, biology, math, engineering, etc. Even the Earth’s [climate system](https://www.climaterealityproject.org/blog/how-feedback-loops-are-making-climate-crisis-worse) has feedback loops.

One of founding texts of cognitive science, Plans and the Structure of Behavior (1960), introduced an early form of the feedback loop as a fundamental unit of behaviour in humans. The authors identified  the following steps: Test-Operate-Test-Exit which make a TOTE unit. As they described, “in its weakest form, the TOTE asserts simply  that the operations an organism performs are constantly guided by the outcomes of various tests.” <sup><a id="ffn1" href="#fn1" class="footnote">1</a></sup>
<figure style="max-width: 650px; margin: 0 auto 20px;">
![The TOTE unit](/img/blog/tote.002.png "The TOTE unit")
<figcaption>The TOTE Unit</figcaption>
</figure>

The feedback loop is the fundamental building block of the nervous system<sup><a id="ffn2" href="#fn2" class="footnote">2</a></sup>. Which brings me to my earlier point that every developer saying they don’t do testing in their  process is still doing some form of testing. Any task that we have to complete, either being implementing a new feature or fixing a bug, the process involves at least one feedback loop – a TOTE unit, usually with multiple iterations.

### Completing a Task

Here’s an example task. [Browserstack](https://browserstack.com) is a popular choice for users of Nightwatch who are looking to run their tests on a distributed cloud infrastructure which contains multiple desktop and mobile browsers. 

Say you’re a developer building the Browserstack Automate UI dashboard and your task is to make a new Nightwatch test appear in the list, in real-time.

Considering the above TOTE unit, the _Test_ phase will be quite complex and will involve a few different operations that are needed before asserting if the feature is implemented successfully (the condition which will stop the loop). There are even some sub-feedback loops in there.
<figure>
![The TOTE unit](/img/blog/tote.001.png "The TOTE unit")
<figcaption>Implementing a new feature as a TOTE unit</figcaption>
</figure>

Once you implement the changes, you need to perform the following manual steps of the verification process:
1. ensure the local dev server is running
2. execute a sample test script against the local dev backend
3. open the browser and navigate to the local dev url (or reload the page)
4. check the test script appears in the dashboard list

### How to Shorten the Feedback Loop

The implementation phase is variable at each iteration, but the testing phase is quite fixed, involving the same steps and roughly the same amount of effort every time. Therefore if we manage to reduce it, not only it will be less complex to execute, but it will be shorter.

Thankfully now we can automate all the manual steps involved in the preparation phase and we can also add a test assertion to verify if the condition was met (the test script that was executed appears in the dashboard list). Then the actual _Test_ phase of the feedback loop will consist of only running this newly created automated script.
<figure>
![The TOTE unit](/img/blog/tote.003.png "The TOTE unit")
<figcaption>Automating the Test phase</figcaption>
</figure>

### Demo Project
If you’re still not convinced, maybe [this demo project](https://github.com/beatfactor/nightwatch-feedback-loops) will help, which is available on Github. The project contains all the code for the experiment I’ve described above. 

<figure class="github-card">
[![beatfactor/nightwatch-feedback-loops - GitHub](https://gh-card.dev/repos/beatfactor/nightwatch-feedback-loops.svg)](https://github.com/beatfactor/nightwatch-feedback-loops)
</figure>

I've included the public url here in order to have a working example, but of course during the implementation phase, a dev server would be used instead.

Here's what the main end-to-end test does:
1. perform a login against the browserstack.com service 
2. save the cookies needed to maintain the session state for subsequent test runs
3. start the second Nightwatch test inside a child process 
4. assert if the second test was found in the list, in the Browserstack dashboard.

By using this technique, not only you will have shorter feedback loops, but you’ll also have an end-to-end test as well when the task is done, which can be used for the purpose of regression testing and continuous integration.

<ol id="footnotes">
	<li id="fn1">George A. Miller, Eugene Galanter, Karl H. Pribram – Plans and the Structure of Behavior (Henry Holt and Co, 1960) p. 39 <a href="#ffn1">&#x21A9;&#xFE0E;</a></li>
	<li id="fn2">The “cybernetic hypothesis” formulated by Norbert Wiener in Cybernetics or Control and Communication in the Animal and the Machine (New York: Wiley, 1948) <a href="#ffn2">&#x21A9;&#xFE0E;</a></li>
</ol>
