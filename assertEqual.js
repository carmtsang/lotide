const assertEqual = (actual, expected) => {
  const passed = `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  const failed = `😱😱😱 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) { //if actual is equal to expected, print passed, else print failed
    console.log(passed);
  } else {
    console.log(failed);
  }
};

module.exports = assertEqual;