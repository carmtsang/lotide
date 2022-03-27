const assertArraysEqual = function(arr1, arr2) {
  const passed = `\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ${arr1} === ${arr2}`;
  const failed = `\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${arr1} !== ${arr2}`;
  if (arr1.length !== arr2.length) {
    console.log(failed);
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
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

//flatten to take in an array with elements that include nested arrays and return a flattened version of the array.
//return new array

const flatten = function(unflatArray) {
  let flatArray = [];
  for (const element of unflatArray) {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(element);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

//test case
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4, [5, 6]]]));