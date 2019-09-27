'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    console.log(this.top);
    if(this.top === null) {
      let error = 'Cannot pop from an empty stack';
      throw error;
    }
    let popped = this.top;
    this.top = this.top.next;
    return popped;
  }

  peek() {
    return this.top;
  }

  peekAtRear() {
    let current = this.top;
    while(current.next) {
      current = current.next;
    }
    return current;
  }

}

module.exports = Stack;

