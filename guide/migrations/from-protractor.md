# Migrating from Protractor to Nightwatch

## Introduction 

Protractor was a popular end-to-end test framework for Angular and 
Protractor was a popular end-to-end test framework for Angular and AngularJS applications. However, Protractor will [no longer be shipped][AngualarRFC] with the new Angular Projects as of Angular 12. We've got you covered with this migration guide to help make the transition from Protector on your team to Nightwatch easier.

> If you believe this migration guide has any missing information or is wrongly misrepresented, then please raise an issue here.

## Benefits of using Nightwatch
Many developers fail to thoroughly test their products because they have to look at every nook and cranny of the product and ensure no mistakes have been made.
With the advent of automation, automated testing frameworks like Nightwatch came to the rescue.

Nightwatch.js facilitates end-to-end functional browser tests in a pure Node.js environment, allowing testing of web apps independent of third party software.

The main features offered by Nightwatch are:

- **Clean Syntax** - Simple yet powerful syntax helps testers quickly write more efficient and effective test cases for web element selectors using JavaScript and CSS or XPath.
- **In-built CLI test runner** - Inbuilt command-line test runner for automation execution with retry and implicit wait.
- **Selenium Server** - Ability to manage Selenium or various WebDriver (ChromeDriver, GeckoDriver, etc.)
- **Flexible command and assertions** - Various assertions and commands for Document Object Model (DOM) operations, XPath and CSS selectors can be used to identify page elements. That's what makes this framework flexible and easy to extend, especially when executing application-specific assertions and commands.
- **Continuous Integration (CI)** - It can be easily integrated with continuous build process systems like Jenkins, TeamCity, etc. and provides inbuilt Junit XML reporting, which can continually help software developers build and test their application.
- **Easy to scale** - It can easily be extended to write custom commands and assertions for testing.
- **Cloud Services Support** - It provides excellent support for cloud-based testing platforms such as BrowserStack and supports cross-browser tests with Selenium JavaScript.
- **Stability** - Nightwatch is stable in terms of performance in automated testing.
- **Page Object Model** - It makes automated testing more flexible by providing a page object model and supporting CSS and Xpath selectors.
- **Easy to plugin with other frameworks** - Nightwatch provides excellent support for extending different like [Selenium][SeleniumPluginExtendLink], [WebdriverIO][WebdriverIOPluginExtendLink], etc.

## Getting Started

We recommend using our official Nightwatch Angular schematic to add cypress to your angular project.

```sh
ng add @nightwatch/schematics
```

This command will install Nightwatch, add different scripts to run Nightwatch, scaffold Nightwatch config, and test files. It also prompts you to remove Protractor from your project and reconfigure your default `ng e2e` command to use Nightwatch.

Now we had installed the schematic and Protractor being removed. You can now run Nightwatch with the following command

```sh
ng e2e
```

You can also use the following command to run Nightwatch alternatively.

```sh
ng run {your-project-name}:nightwatch-run
```

> Check out our [Nightwatch Schematic documentation][NightwatchSchematicDocumentation] for more details like running tests in a specific browser, etc.

## Questions or having issues?

The best way to ask for questions or report issues related to Nightwatch Angular Schematic is to [open an issue][GithubIssueLink].


[AngualarRFC]:https://github.com/angular/protractor/issues/5502
[SeleniumPluginExtendLink]:https://nightwatchjs.org/guide/extending-nightwatch/using-with-selenium-webdriver.html
[WebdriverIOPluginExtendLink]:https://nightwatchjs.org/guide/extending-nightwatch/using-with-webdriverio.html
[NightwatchSchematicDocumentation]:https://github.com/nightwatchjs/nightwatch-schematics#readme
[GithubIssueLink]:https://github.com/nightwatchjs/nightwatch-schematics/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
