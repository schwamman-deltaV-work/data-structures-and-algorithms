'use strict';
const mergeSort = require('./merge-sort');

describe('mergeSort', () => {
  it('can handle an empty array', () => {
    let arr = [];

    mergeSort(arr);
    expect(arr).toEqual([]);
  });

  it('can handle an array with 1 element', () => {
    let arr = [5];

    mergeSort(arr);
    expect(arr).toEqual([5]);
  });

  it('can sort array with multiple elements', () => {
    let arr = [5, 3, 8, 20];

    mergeSort(arr);
    expect(arr).toEqual([3, 5, 8, 20]);
  });

  it('can sort array with negative numbers', () => {
    let arr = [-2, 7, 8, -10];

    mergeSort(arr);

    expect(arr).toEqual([-10, -2, 7, 8]);
  });

  it('can sort array with odd number of elements', () => {
    let arr = [2, 10, 8, 9, 44];

    mergeSort(arr);

    expect(arr).toEqual([2, 8, 9, 10, 44]);
  });
});
