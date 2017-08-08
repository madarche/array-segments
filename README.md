
array-segments
==============

Finds element segments matches in an array.


Usage
-----

```js
const array_segments = require('array-segments');

let res

res = array_segments.match(
    ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'z', 'a', 'b'],
    [
        ['c', 'd', 'e'],
        ['b', 'c', 'd', 'e'],
        ['a', 'z'],
        ['a', 'b'],
        ['a']
    ])

console.log(res)
// [ { segment: [ 'c', 'd', 'e' ], indices: [ 2 ] },
//   { segment: [ 'a', 'z' ], indices: [ 6 ] },
//   { segment: [ 'a', 'b' ], indices: [ 0, 8 ] } ]

// Case insensitive match
res = array_segments.match(
    ['a', 'b', 'c', 'D', 'E', 'f', 'a', 'z', 'a', 'b'],
    [
        ['C', 'd', 'E'],
        ['b', 'c', 'd', 'e'],
        ['a', 'z'],
        ['a', 'b'],
        ['a']
    ],
    true)

console.log(res)
// [ { segment: [ 'c', 'd', 'e' ], indices: [ 2 ] },
//   { segment: [ 'a', 'z' ], indices: [ 6 ] },
//   { segment: [ 'a', 'b' ], indices: [ 0, 8 ] } ]
```


Contributions
-------------

Pull Requests and contributions in general are welcome as long as they follow
the [Node aesthetic].

[Node aesthetic]: http://substack.net/node_aesthetic
