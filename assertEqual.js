//Function Implementation
const assertEqual = function(actual, expected) {
  const passed = `\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`;
  const failed = `\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Carmen will go for a run today", "Carmen will go for a run today");
assertEqual(123, "123");
assertEqual(123, 321);