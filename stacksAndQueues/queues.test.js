'use strict';
let Queue = require('./queues');

describe('Queue', () => {
  it('can instantiate an empty queue', () => {
    let queue = new Queue;

    expect(queue).toHaveProperty('front', null)
    expect(queue).toHaveProperty('back', null);
    expect(queue).toHaveProperty('size', 0);
  });

  it('can enqueue() to any empty stack', () => {
    let queue = new Queue;
    queue.enqueue(5);

    expect(queue).toHaveProperty('size', 1);
    expect(queue).toHaveProperty('back', {'next': null, 'previous': null, 'value': 5})
    expect(queue).toHaveProperty('front', {'next': null, 'previous': null, 'value': 5})
  });

  it('can enqueue() to a non-empty stack', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let result = queue.toArray();

    expect(queue).toHaveProperty('size', 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('returns error if dequeue() on an empty queue', () => {
    let queue = new Queue;

    try {
      queue.dequeue();
    }
    catch(error) {
      expect(error).toEqual('Nothing to remove! The queue is empty.')
    }
  })

  it('can dequeue() an non-empty queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let dequeued = queue.dequeue();
    let results = queue.toArray();

    expect(dequeued).toEqual(1)
    expect(results).toEqual([2, 3])
  })

  it('can peek() to return the first value', () => {
    let queue = new Queue;
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');

    let peeked = queue.peek();

    expect(peeked).toEqual('A')
  })

  it('can peekAtRear() to return the last value', () => {
    let queue = new Queue;
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');

    let peeked = queue.peekAtRear();

    expect(peeked).toEqual('C')
  })

  it('can toArray() which returns an array from front to back', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let array = queue.toArray();

    expect(array).toEqual([1, 2, 3])
    expect(array.length).toEqual(queue.size)
  });
})
