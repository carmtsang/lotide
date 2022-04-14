//map function will take in 1. an array to map, 2. a callback function
//map function wwill return a new array based on the results of the callback function
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


module.exports = map;