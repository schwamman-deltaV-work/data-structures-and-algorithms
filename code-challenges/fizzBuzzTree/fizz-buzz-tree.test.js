'use strict';

const fizzBuzzTree = require('./fizz-buzz-tree');
const BinarySearchTree = require('../../tree/tree');

describe('fizzBuzzTree()', () => {

  it('returns error if tree is not defined', () => {
    try {
      fizzBuzzTree();
    } catch(error) {
      expect(error).toEqual('Tree is not defined!');
    }
  });

  it('returns error if tree is empty', () => {
    let tree = new BinarySearchTree;

    try {
      fizzBuzzTree(tree);
    } catch(error) {
      expect(error).toEqual('The tree is empty!');
    }
  });

  it('returns a tree of the same size', () => {
    let tree = new BinarySearchTree(5);
    tree.add(2);
    tree.add(8);

    let originalSize = tree.size;
    let result = fizzBuzzTree(tree);

    expect(result.size).toEqual(originalSize);
  });

  it('replaces values divisible by 3 with Fizz', () => {
    let tree = new BinarySearchTree(6);
    tree.add(3);
    tree.add(9);

    let result = fizzBuzzTree(tree);

    expect(result.root).toHaveProperty('value', 'Fizz');
    expect(result.root.left).toHaveProperty('value', 'Fizz');
    expect(result.root.right).toHaveProperty('value', 'Fizz');
  });

  it('replaces values divisible by 5 with Buzz', () => {
    let tree = new BinarySearchTree(10);
    tree.add(5);
    tree.add(20);

    let result = fizzBuzzTree(tree);

    expect(result.root).toHaveProperty('value', 'Buzz');
    expect(result.root.left).toHaveProperty('value', 'Buzz');
    expect(result.root.right).toHaveProperty('value', 'Buzz');
  });

  it('replaces values divisible by 3 and 5 with FizzBuzz', () => {
    let tree = new BinarySearchTree(30);
    tree.add(15);
    tree.add(45);

    let result = fizzBuzzTree(tree);

    expect(result.root).toHaveProperty('value', 'FizzBuzz');
    expect(result.root.left).toHaveProperty('value', 'FizzBuzz');
    expect(result.root.right).toHaveProperty('value', 'FizzBuzz');
  });

  it('replaces values only if multiples of 3, 5 or both 3 & 5', () => {
    let tree = new BinarySearchTree(15);
    tree.add(2);
    tree.add(20);
    tree.add(3);
    tree.add(5);
    tree.add(16);
    tree.add(23);

    let result = fizzBuzzTree(tree);

    expect(result.root).toHaveProperty('value', 'FizzBuzz')
    expect(result.root.left).toHaveProperty('value', 2)
    expect(result.root.right).toHaveProperty('value', 'Buzz')
    expect(result.root.left.right).toHaveProperty('value', 'Fizz')
    expect(result.root.right.left).toHaveProperty('value', 16)
    expect(result.root.right.right).toHaveProperty('value', 23)
  });

});
