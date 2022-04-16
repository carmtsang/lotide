const assert = require('chai').assert;
const without = require('../without');

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]);// => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

describe('#without', () => {
  it('should have an arr1 [1, 2, 3], and arr2 shows what elements to remove [1], returning [2, 3]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('should return an array removing elements of the same datatype', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it('should return an emty array is both arrays are the same', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"],["hello", "world", "lighthouse"]),[]);
  });
});