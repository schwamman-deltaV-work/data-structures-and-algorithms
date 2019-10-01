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
    this.list.append(animal);
  }

  dequeue(pref) {
    if (this.list.size === 0) {
      throw 'Sorry, there are no animals in the shelter.';
    } else if (pref) {
      let removed;
      let current = this.list.head;
      let previous = current;
      while(current.next) {
        previous = current;
        if (current.value.constructor.name === pref) {
          break;
        }
        current = current.next;
      }
      if (current.next === null) {
        throw `No ${pref}s currently in the shelter.`;
      } else {
        removed = current.value;
      }
      current.next = current.next.next;
    } else {

    }
  }
}

module.exports = AnimalShelter;