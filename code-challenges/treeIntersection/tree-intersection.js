'use strict';
const Hashtable = require('../../hashtable/hashtable');

function tree_intersection(tree1, tree2) {
  let hashtable = new Hashtable;
  let result = [];

  if(tree1.size === 0 || tree2.size === 0) {
    return undefined;
  }

  let array1 = tree1.preOrder();
  array1.forEach(element => {
    hashtable.add(element, element);
  });
  let array2 = tree2.preOrder();
  array2.forEach(element => {
    if(hashtable.contains(element)){
      result.push(element);
    }
  })

  console.log(array1, array2);

  return result;
}

module.exports = tree_intersection;
