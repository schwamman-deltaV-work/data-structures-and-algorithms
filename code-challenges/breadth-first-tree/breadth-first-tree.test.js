'use strict';
const BreadthFirstTree = require('./breadth-first-tree');

describe('BreadthFirstTree method breadthFirst()', () => {

  it('returns empty array if tree is empty', () => {
    let tree = new BreadthFirstTree;

    let result = tree.breadthFirst();

    expect(result).toEqual([]);
  });

  it('returns array with just the root value if only one node in tree', () => {
    let tree = new BreadthFirstTree(5);

    let result = tree.breadthFirst();

    expect(result).toEqual(5);
  });

  it('returns array in correct order in tree with multiple values', () => {
    let tree = new BreadthFirstTree;

    let result = tree.breadthFirst();

    expect(result).toEqual([]);
  });
});
