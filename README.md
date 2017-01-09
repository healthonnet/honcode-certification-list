HONcode Certification List
==========================

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]
[![NPM version][npm-image]][npm-url]

HONcode Certification List as NPM module

Usage
-----

```bash
$ npm install honcode-certification-list --save
```

Then you can `require('honcode-certification-list')`.

```js
var HONcodeCertificationList = require('honcode-certification-list');

HONcodeCertificationList.getHONcodeCertificationList().then(function(hash) {
  console.log(hash);
});
```

API
---

### .getHONcodeCertificationList()

Type: `function`

Return a Promise with the HONcode MD5 list has parameter

### .isInList(array)

Type: `function`

Return true if the urls in the list match an entry in HONcode MD5 list.

See Also
--------

 * [HONcode Certification Utils](https://github.com/healthonnet/honcode-certification-utils)

Contributing to HONcode Certification List
------------------------------------------

Contributions are always welcome, no matter how large or small.

See [Contributing](CONTRIBUTING.md).

Developer
---------

  * William BELLE

License
-------

Apache License 2.0

[npm-image]: https://img.shields.io/npm/v/honcode-certification-list.svg
[npm-url]: https://www.npmjs.com/package/honcode-certification-list
[travis-image]: https://travis-ci.org/healthonnet/honcode-certification-list.svg?branch=master
[travis-url]: https://travis-ci.org/healthonnet/honcode-certification-list
[coverage-image]: https://coveralls.io/repos/github/healthonnet/honcode-certification-list/badge.svg
[coverage-url]: https://coveralls.io/github/healthonnet/honcode-certification-list
[gemnasium-image]: https://gemnasium.com/badges/github.com/healthonnet/honcode-certification-list.svg
[gemnasium-url]: https://gemnasium.com/github.com/healthonnet/honcode-certification-list
