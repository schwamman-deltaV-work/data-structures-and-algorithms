'use strict';
const { BinarySearchTree } = require('../../tree/tree')
const tree_intersection = require('../treeIntersection/tree-intersection');

describe('tree_intersection', () => {
  it('returns undefined if empty trees', () => {
    let tree1 = new BinarySearchTree;
    let tree2 = new BinarySearchTree;

    let result = tree_intersection(tree1, tree2);

    expect(result).toEqual(undefined);
  });

  it('returns empty array if no matches', () => {
    let tree1 = new BinarySearchTree;
    tree1.add('hello');
    tree1.add('testing');
    let tree2 = new BinarySearchTree;
    tree2.add('keith');
    tree2.add('soundboard');

    let result = tree_intersection(tree1, tree2);

    expect(result).toEqual([]);
  });

  it('returns matching value', () => {
    let tree1 = new BinarySearchTree;
    tree1.add('hello');
    tree1.add('testing');
    tree1.add('matching');
    let tree2 = new BinarySearchTree;
    tree2.add('keith');
    tree2.add('soundboard');
    tree2.add('matching');

    let result = tree_intersection(tree1, tree2);

    expect(result).toEqual(['matching']);
  })

  it('returns multiple matching values', () => {
    let tree1 = new BinarySearchTree;
    tree1.add('hello');
    tree1.add('testing');
    tree1.add('matching');
    tree1.add('testing');
    let tree2 = new BinarySearchTree;
    tree2.add('keith');
    tree2.add('soundboard');
    tree2.add('matching');
    tree2.add('testing');

    let result = tree_intersection(tree1, tree2);

    expect(result).toEqual(['matching', 'testing']);
  })
});
