'use strict';
let Stack = require('./stacks');

describe('Stack', () => {
  it('can instantiate empty stack', () => {
    let stack = new Stack;
    expect(stack).toHaveProperty('top', null)
    expect(stack).toHaveProperty('size', 0)
  })

  it('can push() new value to empty stack', () => {
    let stack = new Stack;
    stack.push(5);

    expect(stack.top).toHaveProperty('value', 5)
    expect(stack.top).toHaveProperty('next', null)
    expect(stack.size).toEqual(1);
  })

  it('can push() to non-empty stack', () => {
    let stack = new Stack;
    stack.push(5);
    stack.push(10);

    expect(stack.size).toEqual(2);
    expect(stack.top).toHaveProperty('value', 10);
    expect(stack.top).toHaveProperty('next', { value: 5, next: null })
  })

  it('can pop() from stack with one node', () => {
    let stack = new Stack;
    stack.push(5);

    let popped = stack.pop();

    expect(popped).toHaveProperty('value', 5);
    expect(popped).toHaveProperty('next', null);
    expect(stack).toHaveProperty('top', null);
  })

  it('throws error if pop() is used on empty stack', () => {
    let stack = new Stack;
    let result;
    try {
      stack.pop();
    }
    catch(error) {
      result = error;
    }

    expect(result).toEqual('Cannot pop from an empty stack');
  })

  it('can pop() from stack with multiple nodes', () => {
    let stack = new Stack;
    stack.push('Ice');
    stack.push('The');
    stack.push('In');
    stack.push('Bottles');

    let popped = stack.pop();
    expect(stack).toHaveProperty('size', 3);
    expect(popped).toHaveProperty('value', 'Bottles');
    expect(popped).toHaveProperty('next', {'next': {'next': {'next': null, 'value': 'Ice'}, 'value': 'The'}, 'value': 'In'});
    expect(stack).toHaveProperty('top', {'next': {'next': {'next': null, 'value': 'Ice'}, 'value': 'The'}, 'value': 'In'});
  })

  it('can peak() from stack and return the top node', () => {
    let stack = new Stack;
    stack.push(5);

    let peeked = stack.peek();

    expect(peeked).toHaveProperty('value', 5)
    expect(peeked).toHaveProperty('next', null);
  })

  it('can peakAtRear() to return the last node in the stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);

    let rear = stack.peekAtRear();

    expect(rear).toHaveProperty('value', 1);
    expect(rear).toHaveProperty('next', null);
  })

});
