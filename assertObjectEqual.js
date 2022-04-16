const eqObjects = require('./eqObjects');

const assertObjectEqual = (actual, expected) => {
  const inspect = require('util').inspect; //for printing out the arrays in the object
  const passed = `😁😁😁 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const failed = `😱😱😱 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  if (eqObjects(actual, expected)) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

assertObjectEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
assertObjectEqual({ c: "5", d: ["2", 3], a: [1, "1", 5] }, { d: ["2", 3], c: "1" });

module.exports = assertObjectEqual;