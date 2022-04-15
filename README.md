# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @carmtsang/lotide`

**Require it:**

`const _ = require('@carmtsang/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Assertion test that compares two arrays
* `assertEqual`: Assertion test to compare two primitive types.
* `assertObjectEqual`: Assertion test to compare two objects
* `countLetters`: Count the number of times a value appears in a string.
* `countOnly`: Take a collection of items and return coutns for a specific subset of those items
* `eqArrays`: Compare two arrays for a perfect match.
* `eqObjects`: Compare two objects for a perfect match
* `findKey`: Scans an object and return the first key which the callback returns a truthy value.
* `findKeyByValue`: Scan an object and return the first key that contains that given value.
* `flatten`: Flatten array by 1 level
* `head`: Return the first value of an array
* `letterPositions`: Return all the indices each letter of the string
* `map`: Creates a new array with the results of calling a provided function on the elements in the calling array.
* `middle`: Return the middle value of the array
* `tail`: Return the tail of the array
* `takeUntil`: Return a slice of the array with elements taken from the beginning.
* `without`: Filter out array and remove unwanted items