'use strict';

const BinaryTree = require('./find-max-binary-tree');
const { Node } = require('../../tree/tree');

describe('findMaxValue', () => {
  it('returns error if tree is empty', () => {
    let tree = new BinaryTree;

    try {
      tree.findMaxValue();
    } catch(error) {
      expect(error).toEqual('The tree is empty!');
    }
  });

  it('returns max value if only 1 node in tree', () => {
    let tree = new BinaryTree(5);

    let result = tree.findMaxValue();

    expect(result).toEqual(5);
  });

  it('returns max value if multiple nodes - max value to left', () => {
    let tree = new BinaryTree(0);
    tree.root.left = new Node(10);
    tree.root.right = new Node(8);

    let result = tree.findMaxValue();

    expect(result).toEqual(10);
  });

  it('returns max value if multiple nodes - max value to right', () => {
    let tree = new BinaryTree(0);
    tree.root.left = new Node(10);
    tree.root.right = new Node(50);

    let result = tree.findMaxValue();

    expect(result).toEqual(50);
  });

  it('returns max value if negative values', () => {
    let tree = new BinaryTree(-25);
    tree.root.left = new Node(-10);
    tree.root.right = new Node(-50);

    let result = tree.findMaxValue();

    expect(result).toEqual(-10);
  });

  it('returns max value from tree with height of 3', () => {
    let tree = new BinaryTree(0);
    tree.root.left = new Node(10, new Node(-5), new Node(7));
    tree.root.right = new Node(50, new Node(11), new Node(-2));

    let result = tree.findMaxValue();

    expect(result).toEqual(50);
  })
});
