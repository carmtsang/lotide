// const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

//test
// const numArray = tail([1, 2, 3, 4, 5]);
// assertEqual(numArray[0], 2);

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const tailWords = tail(words);
// assertEqual(words.length, 3);
// assertEqual(tailWords[1], 'Labs');
describe('#tails', () => {
  it('should return [2, 3] from [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it('should return an empty array when the array only has one number', () => {
    assert.deepEqual(tail([1]), []);
  });
});