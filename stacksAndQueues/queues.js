class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(value) {
    if(this.size === 0) {
      let newNode = new Node(value);
      this.front = newNode;
      this.back = newNode;
    } else {
      let newNode = new Node(value);
      let nextNode = this.back;
      newNode.next = this.back;
      nextNode.previous = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue() {
    if(this.size < 1) {
      let error = 'Nothing to remove! The queue is empty.';
      throw error;
    } else {
      let dequeued = this.front.value;
      this.front = this.front.previous;
      this.front.next = null;

      return dequeued;
    }
  }

  peek() {
    return this.front.value;
  }

  peekAtRear() {
    return this.back.value;
  }

  toArray() {
    let current = this.front
    let result = [];
    while(current) {
      result.push(current.value);
      current = current.previous
    }
    return result;
  }
}

module.exports = Queue;
