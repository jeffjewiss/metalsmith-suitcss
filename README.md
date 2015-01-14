# metalsmith-suitcss

A [Metalsmith](http://metalsmith.io) plugin to preprocess CSS files with [SUITCSS](http://suitcss.github.io).

## Installation

```shell
$ npm install metalsmith-suitcss
```

## CLI Usage

Install via npm and then add the `metalsmith-suitcss` key to your `metalsmith.json` plugin:

```json
{
  "plugins": {
    "metalsmith-suitcss": true
  } 
}
```

## JavaScript Usage

```js
var suit = require(‘metalsmith-suitcss’);

metalsmith.use(suit(options));
```

### Options

`suit({...})` | Type     | Description
---           | ---      | ---
`files`       | `String` | [Minimatch](https://github.com/isaacs/minimatch) pattern of files to match. __Default__: `*.css`.
