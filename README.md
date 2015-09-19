# ObjectSort

Easy way to sort an array of objects by key.

[![npm](https://img.shields.io/npm/v/dir2array.svg?style=flat-square)](https://www.npmjs.com/package/objectsort)
[![npm](https://img.shields.io/npm/dt/dir2array.svg?style=flat-square)](https://www.npmjs.com/package/objectsort)


## Install

You can install **ObjectSort** using NPM:

```sh
npm install objectsort
```


## Usage

**ObjectSort** will return a new array with all the objects sorted by key. For example:

```javascript
//Import library
var ObjectSort = require('objectsort');

//Create the new array with your objects
var array = [{"id": 1, "name": "John"}, {"id": 2, "name": "Kevin"}, {"id": 3, "name": "Alexis"}, {"id": 4, "name": "Tom"}];

//Sort by name
var sorted = ObjectSort(array, 'name');

/* Will generate:
[ { id: 3, name: 'Alexis' },
  { id: 1, name: 'John' },
  { id: 2, name: 'Kevin' },
  { id: 4, name: 'Tom' } ]
*/
```


## License

**ObjectSort** is under the [MIT](LICENSE) license.







