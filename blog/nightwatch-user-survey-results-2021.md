---
title: Insights from the Nightwatch 2021 User Survey
author: Abhishek Choudhary
author_title: Product @ Browserstack
author_url: https://github.com/abhishekchoudhary
author_image_url: https://avatars.githubusercontent.com/u/2182972?v=4
tags:
    - nightwatch-v2
description: We are excited to share the results from the first-ever user survey we did for Nightwatch.
draft: false
date: 2021-11-09
image: https://nightwatchjs.org/img/blog/nightwatch-user-survey.png
link_to_discussions: https://github.com/nightwatchjs/nightwatch-docs/discussions/137
---

<div class="top-post-card">
  <img src="/img/blog/image-20211108-112356.png"/>
</div>

A few months ago when [we announced](https://nightwatchjs.org/blog/a-first-look-at-nightwatch-v2.html) that we’re working on Nightwatch v2, we also sent out a short survey to help us gather more feedback from the community about the kind of features we should build.

Now that the v2 is [available in beta](https://nightwatchjs.org/blog/nightwatch-v2-beta-is-available.html) we are also excited to share the results from the first-ever user survey we did for Nightwatch.

## Key asks

We had 262 responses and the aks from the survey can be broadly classified into three sections:

#### 1. Test setup

There were quite a few inputs on the way users would like to set their tests up with Nightwatch:

- 67% responders believe Nightwatch should download drivers for popular browsers automatically
- 67% responders want to run tests in headless mode

#### 2. Infrastructure

Interestingly, there were varied responses about the kind of infrastructure our community wants to work with:

- 73% responders want to run tests against mobile browsers
- 57% responders want to use Nightwatch in conjunction with a Cloud provider (we have built-in Browserstack integration since v1.5, while configuration for other providers like SauceLabs is a straightforward)

#### 3. Browser communication

Nearly 90% responders wanted more information out (and more control in general) of the browser when running tests. For example:

- 82% responders want to listen for JS exceptions
- 83% responders want to listen for console messages
- 80% responders want to intercept network calls or mock requests

## Other notable asks

#### 1. Better integration with Cucumber JS

Good news - Nightwatch 2.0-beta includes built-in support for CucumberJS; have a look at the [examples](https://github.com/nightwatchjs/nightwatch/tree/v2/examples/cucumber-js) and you can use our new [CucumberJS boilerplate repo](https://github.com/nightwatchjs/cucumberjs-boilerplate) to get you started right away.

#### 2. Test runner enhancements

From a live UI runner to easier setup and integration - we heard you, watch this space.

#### 3. Improvements to documentation and community engagement

It’s at the top of our priorities and you should expect steady progress.

## In Conclusion

We asked users to rate us out of 10, and the average of all results was 7.7 - we’re glad to see such positive sentiment in the community. However, we want to take this number much higher and we have some exciting updates planned to achieve this.

Furthermore, we plan to do these surveys annually going forward and keep on improving Nightwatch based on the feedback we receive. We will also continue to share insights from these surveys with you.
