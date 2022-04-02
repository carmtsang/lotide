const assertEqual = function(actual, expected) {
  const passed = `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  const failed = `😱😱😱 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

//find keyshould take an object and a call back, it should scan the object and return the first key that returns a truthy value
//if no key, return undefined.
const findKey = (object, callback) => {
  for (const key in object) { //loop through the object
    if (callback(object[key])) { // if the object's key = callback function. return the key
      return key
    }
  }
};

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) 

console.log(result)