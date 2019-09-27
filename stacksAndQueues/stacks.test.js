'use strict';
let Stack = require('./stacks');

describe('Stack', () => {
  it('can initiate empty stack', () => {
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
});
