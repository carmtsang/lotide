const assertEqual = function(actual, expected) {
  const passed = `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  const failed = `😱😱😱 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

//test
console.log(tail([1, 2, 3, 4, 5]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);