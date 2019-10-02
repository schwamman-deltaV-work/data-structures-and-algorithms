'use strict';

const LinkedList = require('../../linkedList/linked-list');

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
      let current = this.list.head;
      if (current.value.constructor.name === pref) {
        this.list.head = current.next;
        return current.value;
      }

      while(current.next) {
        if (current.next.value.constructor.name === pref) {
          let result = current.next.value;
          current.next = current.next.next;
          return result;
        }
        current = current.next;
      }
      return null;
    } else {
      let current = this.list.head;
      this.list.head = current.next;
      return current.value;
    }
  }
}

module.exports = AnimalShelter;
