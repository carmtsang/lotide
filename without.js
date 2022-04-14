//filter out array and remove unwanted items
const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) { //loop through source array
    if (itemsToRemove[i] !== source[i]) { // if different from itemsToRemove, push it to new array
      newArray.push(source[i]);
    }
  }
  return newArray;
};

//test scenario


module.exports = without;