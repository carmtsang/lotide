const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${arr1} !== ${arr2}`);
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${arr1} !== ${arr2}`);
      }
    }
  } else {
    console.log(`\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ${arr1} === ${arr2}`);;
  }
  
};

//test code
assertArraysEqual(["this", 2, 3], ["this", 2, 3]);