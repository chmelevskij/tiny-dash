# Tiny-dash

## WHY?

I love the point free style code, but to use it we need to import 3rd party
libraries. This tiny module leverages Js own array methods, just swaps the order.
Allowing for piping and currying.

Note it's uses es6 modules and some fancy newer node features so be aware.

## Usage

Just import as you would import any module and use the functions you need.
```javascript
import T from 'tiny-dash';

T.map(console.log, [1,2,3]);
```

This module supports most of the common methods from array which allow for fp style
code by chaining. E.G. `map`, `filter`, `reduce` and so on.

Extra functions added are `curry`, `pipe` and `compose`.
