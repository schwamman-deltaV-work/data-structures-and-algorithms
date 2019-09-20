'use strict';

function binarySearch(array, key) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.ceil(low + high / 2);
    if (key < array[mid]) {
      high = mid - 1;
    }
    else if (key > array[mid]) {
      low = mid + 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}

module.exports = binarySearch;
