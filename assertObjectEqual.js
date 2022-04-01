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
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  let result;

  if (objKeys1.length !== objKeys2.length) { //if obj1 length does not equal ob2 length
    result = false;
    return result; //return false and exit out of the function
  }

  for (const key of objKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //if obj 1 and ob2 have array
      result = eqArrays(object1[key], object2[key]); //compare the value arrays with eqArrays and return its result
      return result;
    } else {
      if (object1[key] !== object2[key]) { // if keys do not match return false
        result = false;
        break;
      } else {
        result = true;
      }
    }
  }
  return result;
};

const assertObjectEqual = function(actual, expected) {
  const passed = `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  const failed = `😱😱😱 Assertion Failed: ${actual} !== ${expected}`;

  if (eqObjects(actual, expected)) {
    console.log(passed);
  } else {
    console.log(failed);
  }
}

assertObjectEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" })
assertObjectEqual({ c: "5", d: ["2", 3], a: [1, "1", 5] }, { d: ["2", 3], c: "1" })