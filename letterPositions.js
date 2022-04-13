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

const assertArraysEqual = function(actual, expected) {
  const passed = `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  const failed = `😱😱😱 Assertion Failed: ${actual} !== ${expected}`;
  if (eqArrays(actual, expected)) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};



// function that will return all the indices in the string

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) { //if there is value, add an array of the index to the key
        results[sentence[i]] = [i];
      } else if (results[sentence[i]]) { // if there is a key, push the index to existing key
        results[sentence[i]].push(i);
      }
    }
  }
  console.log(results);
};

//test cases
letterPositions('lighthouse in the house');

module.exports = letterPositions;