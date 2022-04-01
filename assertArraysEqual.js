const assertArraysEqual = function(actual, expected) {
  const passed = `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  const failed = `😱😱😱 Assertion Failed: ${actual} !== ${expected}`;
  if (actual.length !== expected.length) {
    console.log(failed);
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(failed);
      }
    }
  } else {
    console.log(passed);
  }
};

//test code
assertArraysEqual(["this", 2, 3], ["this", 2, 3]);