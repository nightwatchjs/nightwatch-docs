# Nightwatch.js Documentation

Documentation sources for [nightwatchjs.org](http://nightwatchjs.org) website.

[![npm](https://img.shields.io/npm/v/nightwatch.svg)](https://www.npmjs.com/package/nightwatch)
[![Node.js CI](https://github.com/nightwatchjs/nightwatch/actions/workflows/build-node.yaml/badge.svg?branch=main)](https://github.com/nightwatchjs/nightwatch/actions/workflows/build-node.yaml)
[![codecov](https://codecov.io/gh/nightwatchjs/nightwatch/branch/main/graph/badge.svg?token=MSObyfECEh)](https://codecov.io/gh/nightwatchjs/nightwatch)
[![npm package](https://img.shields.io/npm/dm/nightwatch.svg)](https://www.npmjs.com/package/nightwatch)
[![Discord][discord-badge]][discord]
[![Twitter Follow](https://img.shields.io/twitter/follow/nightwatchjs.svg?style=social)](https://twitter.com/nightwatchjs)

<p align="center">
  <img alt="Nightwatch.js Logo" src="https://raw.githubusercontent.com/nightwatchjs/nightwatch/main/.github/assets/nightwatch-logo.png" width=300 />
</p>

#### [Homepage](https://nightwatchjs.org) &bullet; [Developer Guide](https://nightwatchjs.org/guide) &bullet; [API Reference](https://nightwatchjs.org/api) &bullet; [About](https://nightwatchjs.org/about) &bullet; [Blog](https://nightwatchjs.org/blog)

***

## Overview

The website is built with **PostDoc** (a static site generator built with Vite and EJS). It supports Markdown, EJS, and front matter. It comes with a dev server with Hot module replacement (HMR).

The content is written in Markdown and it is located in the `docs` folder. The individual API command pages are generated from the Nightwatch source code. based on the JSDoc comments.

### Run the website locally

First, simply clone the repository and install the dependencies.

```bash
git clone https://github.com/nightwatchjs/nightwatch-docs.git
npm install
```

### Configuration

Since the API documentation is generated directly from source code, you need to have the Nightwatch source code cloned locally.

#### Step 1: Clone the Nightwatch repository

```bash
git clone https://github.com/nightwatchjs/nightwatch.git
npm install
```

#### Step 2: Configure the path to the Nightwatch repository

Next, you have specify the path to where the api commands are in the `postdoc.config.js` file. You can also set the `API_DOCS_FOLDER` environment variable.

```js
// postdoc.config.js
export default {
  apidocs: {
    source: '/path/to/nightwatch/lib/api/'
}
```

You can also disable the API docs generation by setting the `apidocs` property to `false` in the `postdoc.config.js` file:

```js
// postdoc.config.js
export default {
  apidocs: false
}
```

### Run the website dev server

```bash
npm start
```

The website will be available at `http://127.0.0.1:5173/`.


### PostDoc CLI

To view the available options, run:

```bash
npx postdoc --help
```

#### Automatically open the website in the browser

```bash
npm start -- --open [chrome|firefox|edge|safari]
```

## Build

To build the website, run:

```bash
npm run build
```

The generated files will be in the `out` folder.

Quickly serve the generated files with:

```bash
npx postdoc preview
```

## License
MIT

[discord-badge]: https://img.shields.io/discord/618399631038218240.svg?color=7389D8&labelColor=6A7EC2&logo=discord&logoColor=ffffff&style=flat-square
[discord]: https://discord.gg/SN8Da2X
