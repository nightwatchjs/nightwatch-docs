## Using Test Tags

You can also selectively target tests to run based on tags, such that a test may be belong to multiple tags. For example, you might have a login test that belongs to a login suite as well as a sanity suite.

The tagging can be accomplished by adding the `@tags` property to a test module:

```js module.exports = {
  '@tags': ['login', 'sanity'],
  'demo login test': function (browser) {
     // test code
  }
};```
</div>

Or, if using the describe interface:


```js describe('testsuite', function() {
  this.tags = ['login', 'sanity'];

  it('demo login test', function(browser) {

  });
});```
</div>

To select which tags to run, use the `--tag` command line flag:

```bash
nightwatch --tag login```

<br/>
Specify multiple tags as:

```bash
nightwatch --tag login --tag something_else```

<br/>
To skip running tests with a specific tag, use the `--skiptags` flag:

```bash
nightwatch --skiptags login```
<br/>
Or to skip multiple tags, add each tag you want to skip as comma-separated:

```bash
nightwatch --skiptags login,something_else```

- Previous: [Using Test Groups](https://nightwatchjs.org/guide/running-tests/test-groups.html)
- Next: [Running in Parallel](https://nightwatchjs.org/guide/running-tests/parallel-running.html)
