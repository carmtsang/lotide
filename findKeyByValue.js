const assertEqual = function(actual, expected) {
  const passed = `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  const failed = `😱😱😱 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

//loop through the object
//if searchValue = object value
//return object key

const findKeyByValue = function(objList, searchValue) {
  const keys = Object.keys(objList); //turn object keys into an array
  for (const key of keys) {
    if (objList[key] === searchValue) {
      return key;
    }
  }
};

//test case
const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestMoviesByGenre = {
  "sci_fi": "Star Trek",
  comedy: "Hard and Kumar",
  drama: "Parasite",
  romcom: "The Holiday"
};

assertEqual(findKeyByValue(bestMoviesByGenre, "Parasite"), "drama");
assertEqual(findKeyByValue(bestMoviesByGenre, "Parasite"), undefined);

module.exports = findKeyByValue;