const assertEqual = function(actual, expected) {
  const passed = `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  const failed = `😱😱😱 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

const head = function(arr) {
  return arr[0];
};

console.log(head([10, 5, 15]));
//test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");