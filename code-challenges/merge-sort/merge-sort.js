'use strict';

function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }

  let n = arr.length;
  let mid = Math.floor(n / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }

  if(i === left.length) {
    while(j < right.length) {
      arr[k] = right[j];
      k++;
      j++;
    }
  } else {
    while(i < right.length) {
      arr[k] = left[i];
      k++;
      i++;
    }
  }
}

module.exports = mergeSort;
