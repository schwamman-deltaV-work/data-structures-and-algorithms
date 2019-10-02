'use strict';
const multiBracketValidation = require('./multi-bracket-validation');

const cases = [
  ['Hello', true],
  ['', true],
  ['()', true],
  ['{}', true],
  ['[]', true],
  ['{[]}', true],
  ['([])', true],
  ['{[()]}', true],
  ['[()]', true],
  ['{', false],
  ['}', false],
  ['(', false],
  ['hell[o', false],
  [']', false],
  ['([]', false]
];

describe('multiBracketValidation()', () => {
  test.each(cases)(
    'given string %p as input, returns %p',
    (input, expectedResult) => {
      let result = multiBracketValidation(input)
      expect(result).toEqual(expectedResult);
    }
  );
});
