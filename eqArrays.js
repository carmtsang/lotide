const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { //if the length of array 1 does not equal array 2, return false
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { //loop through array 1, if the value of array 1 does not equal array 2, return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;