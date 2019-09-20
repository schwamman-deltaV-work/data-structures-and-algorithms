'use strict';
const search = require('./array-binary-search');


describe('BinarySearch', () => {
  let value = 5;
  let emptyArray = [];
  let oneElement = [5];
  let manyElements = [1, 5, 7, 9, 15, 100];
  let notInArray = [1, 7, 9, 11, 13, 25, 50];

  it('returns -1 if empty array', () => {
    expect(search(emptyArray, value)).toEqual(-1);
  })
  it('returns index of array with one element', () => {
    expect(search(oneElement, value)).toEqual(0);
  })
  it('returns index of array with multiple elements', () => {
    expect(search(manyElements, value)).toEqual(1);
  })
  it('returns -1 if value not in array', () => {
    expect(search(notInArray, value)).toEqual(-1);
  })
})
