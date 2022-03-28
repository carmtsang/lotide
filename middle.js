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

// take in an array and return the middle-most elements of the given array
//for array with 1 or two elements, there is no middle - return an empty array
// odd number array - return a single element
// even number array - return 2 elements

const middle = function(array) {
  let arrayMid = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 3 && array.length % 2 === 0) {
    arrayMid.push(array[midIndex] - 1);
    arrayMid.push(array[midIndex]);
  } else if (array.length > 3 && array.length % 2 !== 0) {
    arrayMid.push(array[midIndex]);
  }
  return arrayMid;
};

//test code
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);