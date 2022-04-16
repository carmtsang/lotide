const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countOnly', () => {
  it('should take in a string and count the number of each letters', () => {
    assert.deepEqual(countLetters('LHL'), {L: 2, H: 1});
  })
})


//test cases
// console.log(countLetters('Carmen Tsang'));
// countLetters('Lighthouse Labs');
// countLetters('bananarama');
// console.log(countLetters('LHL'))
// assertEqual(countLetters('LHL'), {L: 2, H: 1})
