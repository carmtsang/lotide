const assertEqual = function(actual, expected) {
  const passed = `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  const failed = `😱😱😱 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter] += 1) {
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

//test cases
countLetters('Carmen Tsang');
countLetters('Lighthouse Labs');
countLetters('bananarama');

module.exports = countLetters;