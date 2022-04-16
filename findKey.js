const assertEqual = require('./assertEqual');

//find keyshould take an object and a call back, it should scan the object and return the first key that returns a truthy value
//if no key, return undefined.
const findKey = (object, callback) => {
  for (const key in object) { //loop through the object
    if (callback(object[key])) { // if the object's key = callback function. return the key
      return key;
    }
  }
};

//testcase
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const test1 = findKey({
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  thriller: "The Walking Dead",
  romcom: "Emily in Paris",
  "post_apocalyptic": "The Walking Dead"
}, x => x === "The Walking Dead");
assertEqual(test1, 'thriller');

module.exports = findKey;