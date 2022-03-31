const assertEqual = function(actual, expected) {
  const passed = `\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`;
  const failed = `\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

//loop through the object
//if

const findKeyByValue = function(object, value) {

}


//test case
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestMoviesByGenre = {
  sci_fi: "Star Trek",
  comedy: "Hard and Kumar",
  drama: "Parasite",
  romcom: "The Holiday"
};

assertEqual(findKeyByValue(bestMoviesByGenre, "Parasite"), "drama");
assertEqual(findKeyByValue(bestMoviesByGenre, "ShaolinSoccer"), undefined);