const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  it('should return the value from the key specified', () => {
    let inputObject = {
      "sci_fi": "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    let value = 'The Wire'
    assert.deepEqual(findKeyByValue(inputObject, value), 'drama')
  });
});

// const bestTVShowsByGenre = {
//   "sci_fi": "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// findKeyByValue(bestTVShowsByGenre, "The Wire");

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const bestMoviesByGenre = {
//   "sci_fi": "Star Trek",
//   comedy: "Hard and Kumar",
//   drama: "Parasite",
//   romcom: "The Holiday"
// };

// assertEqual(findKeyByValue(bestMoviesByGenre, "Parasite"), "drama");
// assertEqual(findKeyByValue(bestMoviesByGenre, "Parasite"), undefined);

