import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum', (t) => {
  t.test('angka positif', () => {
    assert.strictEqual(sum(2, 3), 5);
  });
});
