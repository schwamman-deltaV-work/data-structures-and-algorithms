'use strict';

function insertShiftArray(array, value) {
  let results = [];
  let middleIndex = Math.ceil(array.length/2);

  for (let i = 0; i <= array.length; i++) {
    if(i < middleIndex) {
      results.push(array[i]);
    }
    if(i === middleIndex) {
      results.push(value);
    }
    if(i > middleIndex) {
      results.push(array[i - 1]);
    }
  }

  return results;
}


//Tests ====================================================

describe('insertShiftArray', () => {
  let arrayEven = [1,2,3,4,5,6];
  let correctEven = [1,2,3,10,4,5,6];
  let arrayOdd = [8,7,9,1,5];
  let correctOdd = [8,7,9,10,1,5];
  let emptyArray = [];
  let correctEmpty = [10];
  let value = 10;

  it('returns array data type', () => {
    expect(Array.isArray(insertShiftArray(arrayEven, value))).toBeTruthy();
  });
  it('returns correct array for any length', () => {
    expect(insertShiftArray(arrayEven, value).length).toEqual(arrayEven.length + 1);
  })
  it('returns value in middle for even length array', () => {
    expect(insertShiftArray(arrayEven, value)).toEqual(correctEven);
  })
  it('returns value in middle for odd length array', () => {
    expect(insertShiftArray(arrayOdd, value)).toEqual(correctOdd);
  })
  it('returns with an empty starting array', () => {
    expect(insertShiftArray(emptyArray, value)).toEqual(correctEmpty);
  })


})
