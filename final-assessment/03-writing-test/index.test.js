import { sum } from './index.js'; 
import assert from 'node:assert';
import test from 'node:test';

test('sum adds two positive numbers correctly', () => {
    assert.strictEqual(sum(1, 2), 3); 
});

test('sum adds a positive and a negative number correctly', () => {
    assert.strictEqual(sum(5, -3), 2); 
});

test('sum adds two negative numbers correctly', () => {
    assert.strictEqual(sum(-4, -6), -10); 
});

test('sum adds a number and zero correctly', () => {
    assert.strictEqual(sum(7, 0), 7); 
});
