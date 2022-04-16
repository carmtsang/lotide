const assertArraysEqual = require('./assertArraysEqual');

//function to return a 'slice of array with elements taken from the beginning'. It should keep going until the callback/predicate returns a truthy value
const takeUntil = (array, callback) => {
  const result = [];
  for (let element of array) {
    if (callback(element)) { //if callback of element = true, break the loop
      break;
    } else {
      result.push(element); //else push element to new array.
    }
  }
  return result;
};

//test cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

const data3 = [1, 10, 57, 26, 100, 278, 500];
const result3 = takeUntil(data3, x => x === 100);
assertArraysEqual(result3,[1, 10, 57, 26]);

module.exports = takeUntil;