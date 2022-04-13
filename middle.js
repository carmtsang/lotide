
// take in an array and return the middle-most elements of the given array
//for array with 1 or two elements, there is no middle - return an empty array
// odd number array - return a single element
// even number array - return 2 elements

const middle = function(array) {
  let arrayMid = [];
  let midIndex = Math.floor(array.length / 2);
  //Math.floor for whole number for the middle of the array.
  if (array.length > 2 && array.length % 2 === 0) {
  //if array has more than 2 values and the # of values is even.
    arrayMid.push(array[midIndex] - 1);
    // -1 to capture the value in the index before.
    arrayMid.push(array[midIndex]);
  } else if (array.length > 2 && array.length % 2 !== 0) {
    arrayMid.push(array[midIndex]);
  }
  return arrayMid;
};

module.exports = middle;