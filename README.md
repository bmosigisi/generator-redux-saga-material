# Generator-React-Redux-Saga-MaterialUI
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

**generator-redux-saga-material**

A bare-bones yeoman generator built from [create-react-app](https://github.com/facebook/create-react-app) with some additions to make it easy to kick-start and manage projects that use:

- [React](https://reactjs.org/) for building the UI.
- [Redux](https://github.com/reduxjs/redux) for state management.
- [Redux Saga](https://github.com/redux-saga/redux-saga) redux middleware for handling side effects.
- [Material-UI](https://github.com/mui-org/material-ui) for react components based on google's material design.
- [JSS](https://github.com/cssinjs/jss) for css in js styling.
- [Immutable JS](https://github.com/facebook/immutable-js/) for immutable data in stores.

### Also contains:

- Linting using eslint
- Precommit hooks that run the linter.

## Installation and usage

Prerequisites:

- [Node.js](https://nodejs.org/) version >=8.0.0. You can use [nvm](https://github.com/creationix/nvm) to manage different node versions.
- Install yeoman and generator-redux-saga-material globally.

```bash
npm install -g yo
npm install -g generator-redux-saga-material
```

Then to set up a new project:

```bash
# Create a directory and cd into it
mkdir web-app && cd web-app

# To create a new project in the current directory, run the generator
yo redux-saga-material

# Start the project
yarn start

# Generating a new component
yo redux-saga-material:component SomeComponentName

# Generating a new container
yo redux-saga-material:container SomeContainerName
```

## Contribute

Contributions are welcome. Create issues for errors and requests, submit PRs against the *develop* branch.

## License

[MIT license](http://opensource.org/licenses/MIT)

[npm-image]: https://badge.fury.io/js/generator-redux-saga-material.svg
[npm-url]: https://npmjs.org/package/generator-redux-saga-material
[travis-image]: https://travis-ci.org/bmosigisi/generator-redux-saga-material.svg?branch=master
[travis-url]: https://travis-ci.org/bmosigisi/generator-redux-saga-material
[daviddm-image]: https://david-dm.org/bmosigisi/generator-redux-saga-material.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bmosigisi/generator-redux-saga-material
