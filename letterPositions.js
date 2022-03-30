const assertEqual = function(actual, expected) {
  const passed = `\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`;
  const failed = `\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
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


// function that will return all the indices in the string

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] += 1) {
    } else {
      results[sentence[i]] = 1;
    }
  }

  /*for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter] += 1) {
      } else {
        results[letter] = 1;
      }
    }
  }
*/
  console.log(results);
}

//test cases
letterPositions('lighthouse in the house')

//assertArraysEqual(letterPositions("hello").e, [1]);