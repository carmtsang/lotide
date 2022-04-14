const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];




//assertArraysEqual(result2, [6, 7, 2, 5, 3]);
assertArraysEqual(map([1, 2, 3, 4, 5], num => num * 2), [2, 4, 6, 8, 10]);
assertArraysEqual(map([1, 2, 3, 4, 5], num => num + 5), [6, 7, 8, 9, 10]);
