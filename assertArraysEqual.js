const assertArraysEqual = function(arr1, arr2) {
  const passed = `\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ${arr1} === ${arr2}`;
  const failed = `\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${arr1} !== ${arr2}`;
  if (arr1.length !== arr2.length) {
    console.log(failed);
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(failed);
      }
    }
  } else {
    console.log(passed);
  }
};

//test code
assertArraysEqual(["this", 2, 3], ["this", 2, 3]);