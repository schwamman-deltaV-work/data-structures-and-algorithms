'use strict';

const { BinarySearchTree } = require('../../tree/tree');
const Queue = require('../../stacksAndQueues/queues');

class BreadthFirstTree extends BinarySearchTree {
  constructor(value) {
    super(value);
  }

  breadthFirst(root = this.root) {
    if(root === null) {
      return [];
    }

    let results = [];
    let breadth = new Queue;
    breadth.enqueue(root);

    while(breadth.peek()) {
      let front = breadth.dequeue();
      results.push(front.value);

      if (front.left) {
        breadth.enqueue(front.left);
      }
      if (front.right) {
        breadth.enqueue(front.right);
      }
    }

    return results;
  }
}

module.exports = BreadthFirstTree;
