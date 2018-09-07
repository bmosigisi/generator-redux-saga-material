# WIP

# generator-redux-saga-material [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

A bare-bones yeoman generator built from [create-react-app](https://github.com/facebook/create-react-app) with some additions to make it easy to kick-start and manage projects that use:

- [Redux](https://github.com/reduxjs/redux) for state management.
- [Redux Saga](https://github.com/redux-saga/redux-saga) redux middleware for handling side effects.
- [Material-UI](https://github.com/mui-org/material-ui) for components based on google's material design.
- [JSS](https://github.com/cssinjs/jss) for css in js styling.
- [Immutable JS](https://github.com/facebook/immutable-js/) for immutable data in stores.

### Also contains:

- Linting using eslint
- Precommit hooks that currently only run the linter.

### In the Pipeline:

- Test everything
- Add generators for different kinds of tests.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-redux-saga-material using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-redux-saga-material
```

Then generate your new project:

```bash
yo redux-saga-material
```


## License

MIT

[npm-image]: https://badge.fury.io/js/generator-redux-saga-material.svg
[npm-url]: https://npmjs.org/package/generator-redux-saga-material
[travis-image]: https://travis-ci.org/bmosigisi/generator-redux-saga-material.svg?branch=master
[travis-url]: https://travis-ci.org/bmosigisi/generator-redux-saga-material
[daviddm-image]: https://david-dm.org/bmosigisi/generator-redux-saga-material.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bmosigisi/generator-redux-saga-material
