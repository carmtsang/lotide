const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should flatten an arrays within the array', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('should only flatten an array 1 level', () => {
    assert.deepEqual(flatten([1, 2, [3, 4, [5, 6]]]), [1, 2, 3, 4, [5, 6]]);
  });
});

//test case
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, 2, [3, 4, [5, 6]]])); // [1, 2, 3, 4, [5, 6]]
