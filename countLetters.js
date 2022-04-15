const assertEqual = require('./assertEqual')

const countLetters = sentence => {
  const results = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter] += 1) {
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

//test cases
console.log(countLetters('Carmen Tsang'));
countLetters('Lighthouse Labs');
countLetters('bananarama');

module.exports = countLetters;