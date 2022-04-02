//map function will take in 1. an array to map, 2. a callback function
//map function wwill return a new array based on the results of the callback function
const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  console.log(`array: ${array}`)
  console.log(`callback: ${callback}`)

  const results = [];
  return results;
};

const result1 = map(words, word => word[0]);


console.log(result1)