const assertArraysEqual = require('./assertArraysEqual')

// function that will return all the indices in the string

const letterPositions = sentence => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) { //if there is value, add an array of the index to the key
        results[sentence[i]] = [i];
      } else if (results[sentence[i]]) { // if there is a key, push the index to existing key
        results[sentence[i]].push(i);
      }
    }
  }
  console.log(results);
};

//test cases
letterPositions('lighthouse in the house');

module.exports = letterPositions;