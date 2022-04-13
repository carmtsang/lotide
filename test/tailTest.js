const assertEqual = require('../assertEqual');
const tail = require('../tail');

//test
const numArray = tail([1, 2, 3, 4, 5]);
assertEqual(numArray[0], 2);

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailWords = tail(words);
assertEqual(words.length, 3);
assertEqual(tailWords[1], 'Labs');
