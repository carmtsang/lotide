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

//filter out array and remove unwanted items

const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) { //loop through source array
    if (itemsToRemove[i] !== source[i]) { // if itemsToRemove
      newArray.push(source[i]);
    }
  }
  return newArray;
}

//test scenario
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
