'use strict';
const quickSort = require('./quick-sort');

describe('quickSort', () => {
  it('can handle an empty array', () => {
    let array = [];
    quickSort(array);

    expect(array).toEqual([]);
  })

  it('can handle and array with one element', () => {
    let array = [5];
    quickSort(array);

    expect(array).toEqual([5]);
  })

  it('can sort odd numbered array', () => {
    let array = [7, 2, 19, 11, 8];
    quickSort(array);

    expect(array).toEqual([2, 7, 8, 11, 19]);
  })

  it('can sort even numbered array', () => {
    let array = [11, 9, 4, 42];
    quickSort(array);

    expect(array).toEqual([4, 9, 11, 42]);
  })

  it('can sort array with negative numbers', () => {
    let array = [4, -1, 9, -7, 15];
    quickSort(array);

    expect(array).toEqual([-7, -1, 4, 9, 15]);
  })
})
