'used strict';

const { BinarySearchTree } = require('./tree');

describe('BinarySearchTree', () => {
  it('can instantiate an empty binary tree', () => {
    let tree = new BinarySearchTree;

    expect(tree).toHaveProperty('size', 0);
    expect(tree).toHaveProperty('root', null);
  });

  it('can successfully instantiate a tree with a single root node', () => {
    //Can instantiate by passing in value to constructor
    let tree = new BinarySearchTree(5);

    //Can instantiate empty tree and then add root value
    let tree2 = new BinarySearchTree();
    tree2.add(5);

    expect(tree).toHaveProperty('size', 1);
    expect(tree.root).toHaveProperty('value', 5);
    expect(tree.root).toHaveProperty('left', null);
    expect(tree.root).toHaveProperty('right', null);
    expect(tree2).toHaveProperty('size', 1);
    expect(tree2.root).toHaveProperty('value', 5);
    expect(tree2.root).toHaveProperty('left', null);
    expect(tree2.root).toHaveProperty('right', null);
  });

  it('add() can successfully add a left child and right child to a single root node', () => {
    let tree = new BinarySearchTree(10);
    tree.add(2);
    tree.add(13);

    expect(tree.size).toEqual(3);
    expect(tree.root).toEqual({'value': 10, 'left': {'value': 2, 'left': null, 'right': null}, 'right': {'value': 13, 'left': null, 'right': null}});
  });

  it('preOrder() can successfully return a collection from a preorder traversal', () => {
    let tree = new BinarySearchTree(10);
    tree.add(2);
    tree.add(13);
    tree.add(7);
    tree.add(7);

    let result = tree.preOrder();

    expect(tree.size).toEqual(result.length);
    expect(result).toEqual([10, 2, 7, 7, 13]);
  });

  it('preOrder() throws error if nothing in tree', () => {
    let tree = new BinarySearchTree();
    try {
      tree.preOrder();
    } catch(error) {
      expect(error).toEqual('The tree is empty!');
    }
  });

  it('inOrder() can successfully return a collection from an inorder traversal', () => {
    let tree = new BinarySearchTree(10);
    tree.add(2);
    tree.add(13);
    tree.add(7);
    tree.add(7);

    let result = tree.inOrder();

    expect(tree.size).toEqual(result.length);
    expect(result).toEqual([2, 7, 7, 10, 13]);
  });

  it('inOrder() throws error if nothing in tree', () => {
    let tree = new BinarySearchTree();
    try {
      tree.inOrder();
    } catch(error) {
      expect(error).toEqual('The tree is empty!');
    }
  });

  it('postOrder() can successfully return a collection from a postorder traversal', () => {
    let tree = new BinarySearchTree(10);
    tree.add(2);
    tree.add(13);
    tree.add(7);
    tree.add(7);

    let result = tree.postOrder();

    expect(tree.size).toEqual(result.length);
    expect(result).toEqual([7, 7, 2, 13, 10]);
  });

  it('postOrder() throws error if nothing in tree', () => {
    let tree = new BinarySearchTree();
    try {
      tree.postOrder();
    } catch(error) {
      expect(error).toEqual('The tree is empty!');
    }
  });

  it('contains() returns false if value not in tree', () => {
    let tree = new BinarySearchTree(10);
    tree.add(2);
    tree.add(13);
    tree.add(7);
    tree.add(7);

    let result = tree.contains(5);
    expect(result).toEqual(false);
  })

  it('contains() returns true if value in tree', () => {
    let tree = new BinarySearchTree(10);
    tree.add(2);
    tree.add(13);
    tree.add(7);
    tree.add(7);

    let result = tree.contains(7);
    let result2 = tree.contains(2);
    let result3 = tree.contains(13);

    expect(result).toEqual(true);
    expect(result2).toEqual(true);
    expect(result3).toEqual(true);
  })

});
