'use strict';
const insertionSort = require('./insertion-sort');

describe('insertionSort', () => {
  it('can sort an empty array', () => {
    let array = [];

    insertionSort(array);

    expect(array).toEqual([]);
  });

  it('can sort an array with one element', () => {
    let array = [5];

    insertionSort(array);

    expect(array).toEqual([5]);
  });

  it('can sort an unsorted array of integers', () => {
    let array = [5, 2, 9, 1, 17, 11];
    let length = array.length;

    insertionSort(array);

    expect(array.length).toEqual(length);
    expect(array).toEqual([1, 2, 5, 9, 11, 17])
  });

  it('can sort an array with negative numbers', () => {
    let array = [4, -2, 11, 8, -50];

    insertionSort(array);

    expect(array).toEqual([-50, -2, 4, 8, 11]);
  })

});
