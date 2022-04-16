const countLetters = sentence => {
  const results = {};
  for (const letter of sentence) {
    if (letter !== " ") { //remove spaces
      if (results[letter]) {
        results[letter]  += 1; //if the letter exists, add 1 to the letter
      } else {
        results[letter] = 1; //if it is the only letter, it is equal to 1
      }
    }
  }
  return results;
};


module.exports = countLetters;