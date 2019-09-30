'use strict';

const Stack = require('../../stacksAndQueues/stacks');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
    this.size = this.stack1.size + this.stack2.size;
  }

  enqueue(value) {
    this.stack1.push(value);
    this.size++;
  }

  dequeue() {
    if (this.stack1.size + this.stack2.size === 0) {
      throw 'Nothing to remove! The queue is empty.';
    } else if (this.stack2.size === 0) {
      while(this.stack1.size > 0) {
        this.stack2.push(this.stack1.pop());
      }
      this.size--;
      return this.stack2.pop();
    }
  }

  toArray() {
    let results = [];
    if (this.stack1.size > 0 && this.stack2.size === 0) {
      let current = this.stack1.top;
      while(current) {
        results.unshift(current.value);
        current = current.next;
      }
    } else if (this.stack1.size === 0 && this.stack2.size > 0) {
      let current = this.stack2.top;
      while(current) {
        results.push(current.value);
        current = current.next;
      }
    } else if (this.stack1.size > 0 && this.stack2.size > 0) {
      let results1 = [];
      let results2 = [];
      let current = this.stack1.top;
      while(current) {
        results1.unshift(current.value);
        current = current.next;
      }
      current = this.stack2.top;
      while(current) {
        results2.push(current.value);
        current = current.next;
      }
      results = results2.concat(results1);
    }
    return results;
  }
}

module.exports = PseudoQueue;
