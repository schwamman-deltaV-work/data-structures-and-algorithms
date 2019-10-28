'use strict';
const checkRepeated = require('./repeated-word');

describe('checkRepeated', () => {
  it('throws error if no repeats', () => {
    let string = 'Hello world';
    try {
      checkRepeated(string);
    } catch(error) {
      expect(error).toEqual('No Repeated Words!');
    }
  });

  it('returns repeated word', () => {
    let string = 'Repeated word in string of words, word';
    let result = checkRepeated(string);
    expect(result).toEqual('word');
  });

  it('returns only the first repeated word if multiple', () => {
    let string = 'Hello World, Hello World';
    let result = checkRepeated(string);
    expect(result).toEqual('hello');
  });

  it('can compare words even if different casing', () => {
    let string = 'Hello World, heLLo World';
    let result = checkRepeated(string);
    expect(result).toEqual('hello');
  });

  it('ignores spaces, commas, periods, exclamation marks, and question marks', () => {
    let string = ' . ? ! ? ! . , ? ,';
    try {
      checkRepeated(string);
    } catch(error) {
      expect(error).toEqual('No Repeated Words!');
    }
  });

});
