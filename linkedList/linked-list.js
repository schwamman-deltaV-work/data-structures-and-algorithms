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

  //Adds node to beginning of the list
  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  //Returns true if value is in list or false if not
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

  //Returns all list values as a string
  toString() {
    return this.toArray().join(' ');
  }

  toArray() {
    let result = [];

    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  //Adds new node to end of the list
  append(value) {
    if(this.head === null) {
      this.insert(value);
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new Node(value);
      this.size++;
    }
  }

  //add a new node with the given newValue immediately before the first value node
  insertBefore(value, newValue) {
    let current = this.head;
    if (this.includes(value)) {
      if (current.value === value) {
        this.insert(newValue);
      } else {
        while(current.next.value !== value) {
          current = current.next;
        }
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
      }
    } else {
      return 'Exception';
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    if (this.includes(value)) {
      while(current.value !== value) {
        current = current.next;
      }
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
      this.size++;
    } else {
      return 'Exception';
    }
  }
}

module.exports = LinkedList;
