/* eslint-disable no-unused-vars */
let array = [1, 2, 3, 4, 5, 6];

function reverseArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[array.length - 1 - i]);
  }
  return newArray;
}

//Another method
function reverseArray2(array) {
  for (let i = 0; i < array.length/2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

console.log(reverseArray2(array));




