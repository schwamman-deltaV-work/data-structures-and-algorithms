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
