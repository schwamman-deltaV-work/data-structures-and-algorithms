'use strict';

'use strict';
let Queue = require('./queue-with-stacks');

describe('Queue', () => {
  it('can instantiate an empty queue', () => {
    let queue = new Queue;

    expect(queue.stack1).toHaveProperty('top', null)
    expect(queue.stack2).toHaveProperty('top', null)
    expect(queue.stack1).toHaveProperty('size', 0);
    expect(queue.stack2).toHaveProperty('size', 0);
  });

  it('can enqueue() to any empty stack', () => {
    let queue = new Queue;
    queue.enqueue(5);

    expect(queue.stack1).toHaveProperty('size', 1);
    expect(queue.stack1).toHaveProperty('top', {'next': null, 'value': 5})
  });

  it('can enqueue() to a non-empty stack', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let result = queue.toArray();

    expect(queue.stack1).toHaveProperty('size', 3);
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

  it('can toArray() which returns an array from front to back', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let array = queue.toArray();

    expect(array).toEqual([1, 2, 3])
    expect(array.length).toEqual(queue.size)
  });

  it('can toArray() after enqueueing and dequeueing', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.enqueue(4);
    queue.enqueue(5);

    let array = queue.toArray();

    expect(array.length).toEqual(queue.size)
    expect(array).toEqual([2, 3, 4, 5])
  })
})
