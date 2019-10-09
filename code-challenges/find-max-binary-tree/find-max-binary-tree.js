'use strict';

const { BinaryTree } = require('../../tree/tree');

class FindMax extends BinaryTree {
  constructor(value) {
    super(value);
  }

  findMaxValue(root = this.root, max = null) {
    if(!this.root) {
      throw 'The tree is empty!';
    }
    if (max === null || root.value > max) {
      max = root.value
    }
    if (root.left) {
      max = this.findMaxValue(root.left, max);
    }
    if(root.right) {
      max = this.findMaxValue(root.right, max);
    }
    return max;
  }
}

module.exports = FindMax;

