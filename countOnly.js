const assertEqual = require('./assertEqual');
//allItems - an array of strings that we need to look through.
// itemsToCount - an object specifying what to count
const countOnly = (allItems, itemsToCount) => {
  const results = {}; //create an empty object
  for (const item of allItems) {
    if (itemsToCount[item]) { //for each item if
      if (results[item]) { //
        results[item] += 1; //if it exists, add an additonal one
      } else {
        results[item] = 1; //else there is 1 of that item
      }
    }
  }
  return results;
};

const firstNames = [
  'Karl',
  'Salima',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];

const result1 = countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;