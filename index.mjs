const curry = (f, arr=[]) => (
    (...args) => (
        a => a.length == f.length
             ? f(...a)
             : curry(f, a)
    )([...arr, ...args])
);
const pipe = (...os) => os.reduce((f, g) => x => g(f(x)))
const T = [
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
].reduce((acc, method) => ({
    ...acc,
    [method]: curry((f, arr) => Array.prototype[method].call(arr, f))
}), {});

T.pipe = pipe;
T.curry = curry;

export default T;

