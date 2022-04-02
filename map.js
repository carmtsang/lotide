//map function will take in 1. an array to map, 2. a callback function
//map function wwill return a new array based on the results of the callback function
const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    console.log(`item Before: ${item}`);
    console.log(`item AFTER: ${callback(item)}`);
    console.log('---')
  }

  return results;
};

const result1 = map(words, word => word[0]);


console.log(result1)