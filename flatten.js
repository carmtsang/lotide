//flatten to take in an array with elements that include nested arrays and return a flattened version of the array and return a new array

const flatten = unflatArray => {
  let flatArray = [];
  for (const element of unflatArray) {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(element); //if the value is an array, use concat to merge the arrays
    } else {
      flatArray.push(element); //if not an array, push value to the flatArray variable
    }
  }
  return flatArray;
};

module.exports = flatten;