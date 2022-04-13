//const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(['Hello', 'Lighthouse', 'Labs'],['Hello', 'Lighthouse', 'Labs']), true);
// assertEqual(eqArrays(['Goodbye', 'Lighthouse', 'Labs'],['Hello', 'Lighthouse', 'Labs']), false);

describe('#eqArrays', () => {
  it('should return true if both arrays input arrays are [1, 2, 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3],[1, 2, 3]), true);
  });
  it('should return false if arr1 is [1, 2, 3] and arr2 is [1, "2", 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3],[1, '2', 3]), false);
  });
});