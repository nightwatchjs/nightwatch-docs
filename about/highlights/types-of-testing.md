# Multiple types of Testing
<br>

Nightwatch has extended its capabilities to beyond functional testing. Now you can perform visual regression testing, API testing & accessibility testing using Nightwatch. 

![Multiple types of testing][image-2]


## Visual Regression Testing
<br>

Nightwatch v3 introduces [visual regression testing][1] as an in-house plugin. The plugin takes care of

1. Capturing screenshots
2. Comparison with baseline to highlight visual differences using [JIMP][2]
3. Report to review the differences
4. Approve the changes

VRT can be done on real desktop & mobile browsers. Also, VRT can be run on components as part of component testing as well. Here is an example of how a VRT report looks like the visual differences highlighted. 

![VRT][image-1]

## API testing
<br>

API testing is an important aspect of software testing that ensures the reliability and functionality of an application's API layer, enabling developers to build robust and scalable software applications. [API testing][3] is now available with Nightwatch since v2.6.4. The following functionality can be achieved with API testing

1. Request assertions
2. Response assertions
3. Viewing API tests in the HTML report
4. Mock server

## Accessibility testing
<br>

Nightwatch v3 packages the [aXe-core][4] package developed by [Deque Systems][5] as a plugin. It enables 90 different types of accessibility tests for [WCAG compliance][6].

<br>
<br>
<br>
<br>

[1]: /guide/writing-tests/visual-regression-testing.html
[2]: https://www.npmjs.com/package/jimp
[3]: /guide/writing-tests/api-testing.html
[4]: https://www.npmjs.com/package/axe-core
[5]: https://www.deque.com/
[6]: https://www.w3.org/WAI/standards-guidelines/wcag/

[image-1]:  https://user-images.githubusercontent.com/1677755/222640496-99bff9fd-406e-4600-b4eb-a4426e521e64.png
[image-2]:  https://github.com/nightwatchjs/nightwatch-storybook-plugin/assets/1677755/c020c52b-c105-4ae9-b239-3c2cab67c31b