const assertArraysEqual = require('./assertArraysEqual')

//flatten to take in an array with elements that include nested arrays and return a flattened version of the array.
//return new array

const flatten = unflatArray => {
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

module.exports = flatten;