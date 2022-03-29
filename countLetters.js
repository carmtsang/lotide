const assertEqual = function(actual, expected) {
  const passed = `\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`;
  const failed = `\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

const countLetters = function(sentence) {
  const results = {};
  return results;
}