//const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');
const assert = require('chai').assert;

describe('#map', () => {
  it('should create a new array with the results of calling a provided function', () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], num => num * 2), [2, 4, 6, 8, 10]);
  });
});

// //assertArraysEqual(result2, [6, 7, 2, 5, 3]);
// assertArraysEqual(map([1, 2, 3, 4, 5], num => num * 2), [2, 4, 6, 8, 10]);
// assertArraysEqual(map([1, 2, 3, 4, 5], num => num + 5), [6, 7, 8, 9, 10]);
