# ObjectSort

Easy way to sort an array of objects by key.

[![npm](https://img.shields.io/npm/v/objectsort.svg?style=flat-square)](https://www.npmjs.com/package/objectsort)
[![npm](https://img.shields.io/npm/dt/objectsort.svg?style=flat-square)](https://www.npmjs.com/package/objectsort)


## Install

You can install **ObjectSort** using NPM:

```sh
npm install objectsort
```


## Usage

```
ObjectSort(array, columns, order);
```

Where:

- `array`: array that you want to sort.
- `columns`: an array or string with the `array` keys that you want to sort.
- `order`: an array or string with the order. You must use `ASC`for ascendent order, or `DESC` for descendent order.

The method returns a new array sorted with your specifications.

Example of single column sort:

```javascript
//Import library
var ObjectSort = require('objectsort');

//Create the new array with your objects
var array = [
  { "id": 1, "name": "John" },
  { "id": 2, "name": "Kevin" },
  { "id": 3, "name": "Alexis" },
  { "id": 4, "name": "Tom" }
];

//Sort by name in ascendent order
var sorted = ObjectSort(array, 'name', 'ASC');

/* Will generate:
[ { "id": 2, "name": "Kevin" },
  { "id": 1, "name": "John" },
  { "id": 2, "name": "Kevin" },
  { "id": 4, "name": "Tom" } ]
*/
```

Example of multicolumn sort:

```javascript
//Import library
var ObjectSort = require('objectsort');

//Create the new array with your objects
var array = [
  { "id": 1, "name": "John", "points": 40 },
  { "id": 2, "name": "Kevin", "points": 50 },
  { "id": 3, "name": "Alexis", "points": 30 },
  { "id": 4, "name": "Tom", "points": 40 }
];

//First sort by points (order DESC) and then by name (order ASC)
var sorted = ObjectSort(array, ['points', 'name'], ['DESC', 'ASC']);

/* Will generate:
[ { "id": 2, "name": "Kevin", "points": 50 },
  { "id": 1, "name": "John", "points": 40 },
  { "id": 4, "name": "Tom", "points": 40 },
  { "id": 3, "name": "Alexis", "points": 30 } ]
*/

```


## License

**ObjectSort** is under the [MIT](LICENSE) license.
