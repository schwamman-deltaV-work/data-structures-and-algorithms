/* eslint-disable no-unused-vars */
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    let current = this.head;
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    current = newNode;
    this.size++;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let result = [];

    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result.join(' ');
  }
}

module.exports = LinkedList;
