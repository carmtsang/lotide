const assertArraysEqual = function(actual, expected) {
  const passed = `\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`;
  const failed = `\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${actual} !== ${expected}`;
  if (actual.length !== expected.length) {
    console.log(failed);
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(failed);
      }
    }
  } else {
    console.log(passed);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//filter out array and remove unwanted items
const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) { //loop through source array
    if (itemsToRemove[i] !== source[i]) { // if different from itemsToRemove, push it to new array
      newArray.push(source[i]);
    }
  }
  return newArray;
};

//test scenario
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]);// => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);