'use strict';

function fizzBuzzTree(tree) {
  if (!tree) {
    throw 'Tree is not defined!';
  }

  let root = tree.root;
  if (!root) {
    throw 'The tree is empty!';
  }

  traverseTree(root);
  return tree;

  function traverseTree(root) {
    if (root.value % 15 === 0) {
      root.value = 'FizzBuzz';
    } else if (root.value % 3 === 0) {
      root.value = 'Fizz';
    } else if (root.value % 5 === 0) {
      root.value = 'Buzz';
    }

    if (root.left) {
      traverseTree(root.left);
    }
    if (root.right) {
      traverseTree(root.right);
    }
  }
}

module.exports = fizzBuzzTree;
