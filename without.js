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

//filter out array and remove unwanted items
const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) { //loop through source array
    if (itemsToRemove[i] !== source[i]) { // if different from itemsToRemove, push it to new array
      newArray.push(source[i]);
    }
  }
  return newArray;
};

//test scenario
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]);// => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);