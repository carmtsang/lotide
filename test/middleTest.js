//const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

//test code
// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe('#middle', () => {
  it('should return an empty array if the array only has 1 number', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('should return an empty array if the array has 2 numbers', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('should return 2 in an array of [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2,3]), [2]);
  });
  it('should return 2 numbers for the middle for even number arrays', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it('should return 1 number for the middle for an odd number array', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })
})