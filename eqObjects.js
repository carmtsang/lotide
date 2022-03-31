const assertEqual = function(actual, expected) {
  const passed = `\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`;
  const failed = `\uD83D\uDE31\uD83D\uDE31\uD83D\uDE31 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

//eqObjects should take in two objects and return a true/false based on a perfect match

//return true if both objects have identical keys with identical values
//otherwise return false

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


const eqObjects = function(object1, object2) {
  let result = true;
  for (const key in object1) { //loop through obj1 for keys
    if (Array.isArray(object1[key])) { //if obj1 keys is an array
      if (!eqArrays(object1[key], object2[key])) { //check if the array in obj2 keys matches obj1 keys
        result = false;
      }
    } else {
      if (object1[key] !== object2[key]) { //if not array, check of object1 keys marches obj2 keys
        result = false;
    }
    }
  }
  for (const key2 in object2) {
    if (Array.isArray(object2[key2])) {
      if (!eqArrays(object2[key2], object1[key2])) {
        result = false;
      }
    } else {
      if (object2[key2] !== object1[key2]) {
        result = false;
      }
    }

  }
  return result;
}

// test code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // true

// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // false

// assertEqual(eqObjects(ab, abc), false);

//array testing

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);
