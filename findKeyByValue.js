//loop through the object
//if searchValue = object value
//return object key
const findKeyByValue = (objList, searchValue) => {
  const keys = Object.keys(objList); //turn object keys into an array
  for (const key of keys) {
    if (objList[key] === searchValue) { //return key if the value is the same as the searchValue
      return key;
    }
  }
};

module.exports = findKeyByValue;