const { assert } = require("console");

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

//map function will take in 1. an array to map, 2. a callback function
//map function wwill return a new array based on the results of the callback function
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const result1 = map(words, word => word[0]);
const result2 = map(words, word => word.length);

assertArraysEqual(result2, [6, 7, 2, 5, 3]);
assertArraysEqual(map(numbers, num => num * 2), [2, 4, 6, 8, 10]);
assertArraysEqual(map(numbers, num => num + 5), [6, 7, 8, 9, 10]);