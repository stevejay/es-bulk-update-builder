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

Usage is basically as follows:

```js
const BulkUpdateBuilder = require('es-bulk-update-builder');

const body = new BulkUpdateBuilder()
    .index({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id', 3)
    .update({ name: 'other-doc' }, 'other-index', 'other-type', 'other-id', 4)
    .delete('another-index', 'another-type', 'another-id', 5)
    .build();

// The body variable can now be passed to the JavaScript elasticsearch client, e.g.:
// client.bulk({ body: body });
```

The `index` method is for adding a document, the `update` method is for updating a document, and the `delete` method is for deleting a document.

For each action you can specify a version number, for example `3` in the following example:

```js
const body = new BulkUpdateBuilder()
    .index({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id', 3);
```

If you do specify a version, the [version type](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html#_version_types) is set to `external`. You can override that by specifying the desired version type, which in the following example is `external_gte`:

```js
const body = new BulkUpdateBuilder()
    .index({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id', 3, 'external_gte');
```

To specify no versioning information, simply omit it:

```js
const body = new BulkUpdateBuilder()
    .index({ name: 'my-doc' }, 'some-index', 'some-type', 'some-id');
```

## License

[MIT](LICENSE)
