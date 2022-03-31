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

const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1)
  const objKeys2 = Object.keys(object2)

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  for (const key of objKeys1) {
    if (object1[key] === object2[key]) {
      return true;
    } else {
      return false;
    }
  }
};

// test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // true

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // false

assertEqual(eqObjects(ab, abc), false);



