const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0];
};

console.log(head([10, 5, 15]));
//test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");