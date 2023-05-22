## Contributing

The Nightwatch project welcomes contributions from everyone. There are a
number of ways you can help:

## Report an issue

When reporting a new issues or commenting on existing issues please
make sure discussions are related to concrete technical issues with
Nightwatch, its site, and/or documentation.

All of the Nightwatch components change quite fast over time, so this
might cause the documentation to be out of date. If you find this to
be the case, as mentioned, don't hesitate to create an issue for that.
It also might be possible that you know how to bring up to date the
documentation, so please send us a pull request with the related
changes.

If you are not sure about what you have found is an issue or not,
please ask through the communication channels described at
[Nightwatch support](https://discord.gg/ZZ3ZJVFAZb).

## Contributions

The Nightwatch project welcomes new contributors. Individuals making
significant and valuable contributions over time are made _Committers_
and given commit-access to the project.

This guide will guide you through the contribution process.

### Step 1: Fork

Fork the project [on Github](https://github.com/nightwatchjs/nightwatch-docs)
and check out your copy locally.

```shell
% git clone git@github.com:nightwatchjs/nightwatch-docs.git
% cd nightwatch-docs
```

For any changes to the left-navigation pane, send a request to [this email id](mailto:nightwatch@browserstack.com).

### Step 2: Branch

Create a feature branch and start contributing:

```shell
% git checkout -b feature-branch
```

We practice HEAD-based development, which means all changes are applied
directly on top of `dev`.

### Step 3: Make changes

For making changes to the documentation site, go to the `/guide` folder. Each section on the left
navigation pane is a separate folder. Use the following resources to learn about different on-page markdown elements and the style guide that we use.

* [Markdown elements](https://nightwatchjs.org/guide/contributing/overview.html)
* [Style guide](https://nightwatchjs.org/guide/contributing/styleguide.html)

### Step 4: Commit

1. Set your git name and email address:

```shell
% git config --global user.name 'John Doe'
% git config --global user.email 'john@example.com'
```

**Writing good commit messages is important.** A commit message
should describe what changed, why, and reference issues fixed (if
any). Follow these guidelines when writing one:

1. The first line should be around 50 characters or less and contain a
    short description of the change.
2. Keep the second line blank.
3. Wrap all other lines at 72 columns.
4. Include `Fixes #N`, where _N_ is the issue number the commit
    fixes, if any.

A good commit message can look like this:

```text
explain commit normatively in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way `git log` will show things
nicely even when it is indented.

Fixes #141
```

The first line must be meaningful as it's what people see when they
run `git shortlog` or `git log --oneline`.

### Step 5: Rebase

Use `git rebase` (not `git merge`) to sync your work from time to time.

```shell
% git fetch upstream
% git rebase upstream/trunk
```

### Step 6: Test <Not sure if we want to document this?>

Always remember to [run the local server](https://gohugo.io/getting-started/usage/#livereload),
with this you can be sure that your changes have not broken anything.

### Step 7: Push

```shell
% git push origin feature-branch
```

{Needs review}
Go to <https://github.com/yourusername/nightwatchjs/nightwatch-docs.git> and
click _Pull Request_ and fill out the form. **Please indicate
that you've signed the CLA** (see Step 7).

Pull requests are usually reviewed within a few days. If there are
comments to address, apply your changes in new commits (preferably
[fixups](http://git-scm.com/docs/git-commit)) and push to the same
branch.

### Step 8: Integration

When code review is complete, a committer will take your PR and
integrate it on the repository's trunk branch. Because we like to keep a
linear history on the trunk branch, we will normally squash and rebase
your branch history.

## Communication

All details on how to communicate with the project contributors
and the community overall can be found at [Nightwatch community](https://nightwatchjs.org/about/community/)
