import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('dua angka positif', () => {
  assert.strictEqual(sum(3, 4), 7);
  assert.strictEqual(sum(10, 20), 30);
});

test('angka negatif', () => {
  assert.strictEqual(sum(-1, 2), 0);
  assert.strictEqual(sum(3, -2), 0);
  assert.strictEqual(sum(-2, -5), 0);
});

test('bukan angka', () => {
  assert.strictEqual(sum('7', 7), 0);
  assert.strictEqual(sum(3, '1'), 0);
  assert.strictEqual(sum('1', '3'), 0);
});

test('tanpa argumen', () => {
  assert.strictEqual(sum(), 0);
});

test('satu argumen', () => {
  assert.strictEqual(sum(5), 0);
});
