'use strict';

const { Cat, Dog, Animal } = require('./animal-classes');
const LinkedList = require('../../linkedList/linked-list');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.list = new LinkedList;
  }

  enqueue(animal) {
    this.list.insert(animal);
  }

  dequeue(pref) {
    if (this.list.size === 0) {
      throw 'Sorry, there are no animals in the shelter.';
    }
  }

}

module.exports = AnimalShelter;