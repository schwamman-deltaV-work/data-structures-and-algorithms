'use strict';
const Stack = require('../../stacksAndQueues/stacks');


function multiBracketValidation(input) {
  let inputStack = new Stack;
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < input.length; i++) {
    if(input[i] === '(' || input[i] === '{' || input[i] === '[' ) {
      inputStack.push(input[i]);
    } else {
      try {
        let popped = inputStack.pop();

        if (input[i] !== map[popped]) {
          return false;
        }
      // eslint-disable-next-line no-empty
      } catch(err) {
        if (inputStack.size === 0 && (input[i] === ')' || input[i] === '}' || input[i] === ']')) {
          return false;
        }
      }
    }
  }
  if (inputStack.size !== 0) {
    return false;
  }

  return true;
}

module.exports = multiBracketValidation;
