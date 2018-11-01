/**
 * which methods to get from Array.
 */
const keys = [
  'concat',
  'entries',
  'every',
  'filter',
  'find',
  'findIndex',
  'includes',
  'indexOf',
  'join',
  'keys',
  'lastIndexOf',
  'map',
  'reduce',
  'reduceRight',
  'slice',
  'some',
  'sort',
  'values',
]

var curry = (f, arr=[]) => (
    (...args) => (
        a => a.length == f.length
             ? f(...a)
             : curry(f, a)
    )([...arr, ...args])
);

const T = keys.reduce((acc, method) => ({
    ...acc,
    [method]: curry((f, arr) => Array.prototype[method].call(arr, f))
}), {});
