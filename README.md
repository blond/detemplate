detemplate
==========

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]
[![Coverage Status][coverage-img]][coveralls]
[![Dependency Status][david-img]][david]

[npm]:          https://www.npmjs.org/package/detemplate
[npm-img]:      https://img.shields.io/npm/v/detemplate.svg

[travis]:       https://travis-ci.org/blond/detemplate
[test-img]:     https://img.shields.io/travis/blond/detemplate.svg?label=tests

[coveralls]:    https://coveralls.io/r/blond/detemplate
[coverage-img]: https://img.shields.io/coveralls/blond/detemplate.svg

[david]:        https://david-dm.org/blond/detemplate
[david-img]:    http://img.shields.io/david/blond/detemplate.svg?style=flat

Parse string by template.

Install
-------

```
$ npm install --save detemplate
```

Usage
-----

```js
const detemplate = require('detemplate');

const template = '${name} ${middlename} «${nickname}» ${surname}';
const parseNames = detemplate.compile(template);

parseNames('Bartholomew Jo-Jo «Bart» Simpson');

// Ay, caramba! Eat my shorts!
//
// ➜ {
//     name: 'Bartholomew',
//     surname: 'Simpson',
//     middlename: 'Jo-Jo',
//     nickname: 'Bart'
// }
```

API
---

### compile(template)

Creates a compiled function that can extract data properties from place holders (ES template literal delimiters).

### template

Type: `string`

The string that contains place holders (ES template literal delimiters). These are indicated by the Dollar sign and curly braces (`${placeHolder}`).

License
-------

MIT © [Andrew Abramov](https://github.com/blond)
