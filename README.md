# es-bulk-update-builder

Bulk update request body builder for Elasticsearch

[![npm version](https://badge.fury.io/js/es-bulk-update-builder.svg)](https://badge.fury.io/js/es-bulk-update-builder)
[![Codeship Status for stevejay/es-bulk-update-builder](https://app.codeship.com/projects/6cc5dcf0-aa06-0134-4024-3e211d17d664/status?branch=master)](https://app.codeship.com/projects/191800)
[![Coverage Status](https://coveralls.io/repos/github/stevejay/es-bulk-update-builder/badge.svg?branch=master)](https://coveralls.io/github/stevejay/es-bulk-update-builder?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/stevejay/es-bulk-update-builder/badges/score.svg)](https://www.bithound.io/github/stevejay/es-bulk-update-builder)
[![bitHound Dependencies](https://www.bithound.io/github/stevejay/es-bulk-update-builder/badges/dependencies.svg)](https://www.bithound.io/github/stevejay/es-bulk-update-builder/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/stevejay/es-bulk-update-builder/badges/devDependencies.svg)](https://www.bithound.io/github/stevejay/es-bulk-update-builder/master/dependencies/npm)
![license](https://img.shields.io/npm/l/es-bulk-update-builder.svg)

[![NPM](https://nodei.co/npm/es-bulk-update-builder.png)](https://nodei.co/npm/es-bulk-update-builder/)

## Install

```
$ npm install --save es-bulk-update-builder
```

## Usage

```js
const BulkUpdateBuilder = require('es-bulk-update-builder');

const result = new BulkUpdateBuilder()
    .index({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id', 3)
    .index({ name: 'other-doc' }, 'other-index', 'other-type', 'other-id', 4)
    .build();
```

## License

MIT
