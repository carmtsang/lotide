const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  const passed = `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  const failed = `😱😱😱 Assertion Failed: ${actual} !== ${expected}`;
  if (eqArrays(actual, expected)) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};


module.exports = assertArraysEqual;

