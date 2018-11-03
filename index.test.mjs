import { strict as assert } from 'assert';
import T from './index.mjs';

assert.strictEqual(T.includes(1, [1,2,3]), true);
