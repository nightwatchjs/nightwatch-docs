### Code Coverage
At the moment, Nightwatch doesn't provide a coverage reporter but it is something that's being planned for a future release.
In the meantime you can write a custom reporter which will output coverage data. See the [custom reporter](http://nightwatchjs.org/guide#custom-reporter) section for details and the [Mocha HTMLCov](http://mochajs.org/#htmlcov) reporter for how the reporter should look like.

#### 3rd party coverage service
There are some hosted services which provide the reporting and metrics for you in a modern web interface. These services will typically require coverage data in LCOV format. Nightwatch uses [coveralls.io](https://coveralls.io/github/nightwatchjs/nightwatch?branch=master).

For details on how an LCOV reporter should look like and how to integrate with your project, you can check out the [mocha-lcov-reporter](https://www.npmjs.com/package/mocha-lcov-reporter).
