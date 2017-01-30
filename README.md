# nutty-logfile

[![npm](https://img.shields.io/npm/v/nutty-logfile.svg?style=flat-square)](https://www.npmjs.com/package/nutty-logfile)
[![npm](https://img.shields.io/npm/dt/nutty-logfile.svg?style=flat-square)](https://www.npmjs.com/package/nutty-logfile)
[![npm](https://img.shields.io/npm/l/nutty-logfile.svg?style=flat-square)](https://github.com/nuttyjs/nutty-logfile)

> Print logs to a file using streams

## Installation

```
npm install --save nutty-logfile
```

## API

Initialize the module in your project:

```javascript
var logfile = require('nutty-logfile');
```

### var file = new logfile(path, [ options])

Returns a new logfile object to print log messages to a file placed in `path`. The optionally `options` argument must be an object with the following keys:

- `encoding`: encoding. Default is `utf8`.  

```javascript
var file = new logfile('/path/to/my/file.log');
```

### file.<LEVEL>(message)

Prints a log message with the specified level. See [the supported](https://github.com/nuttyjs/nutty-log#levels) levels list.

```javascript
//Print a notice message to the file
file.notice('This is a notice message'); // Will print: [2017/01/30 11:02:33] [NOTICE] This is a notice message
```

### file.end()

Closes the stream file.


## Related

- [nutty](https://github.com/nuttyjs/nutty) A small and minimal CLI framework.
- [nutty-log](https://github.com/nuttyjs/nutty-log) Logger for cli apps and nutty middlewares

## License

[MIT LICENSE](./LICENSE) &copy; Josemi Juanes.
