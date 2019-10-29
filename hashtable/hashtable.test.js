'use strict';
const Hashtable = require('./hashtable');

let strings = ['hello', '123', '--3241', 'asfh:1234', '][[34123frf', 'string']

describe('Hashtable', () => {
  it('can instatiate and empty table', () => {
    let numBuckets = 5;
    let hashtable = new Hashtable(5);

    expect(hashtable.array.length).toEqual(5);

    for(let i = 0; i < numBuckets; i++) {
      expect(hashtable.array[i].head).toEqual(null);
    }
  });

  it('can get sum of ASCII characters for a string', () => {
    let hashtable = new Hashtable(1);

    let result = hashtable.sumASCII('hello');
    let result2 = hashtable.sumASCII('123-ASCII-String')

    expect(result).toEqual(532);
    expect(result2).toEqual(1232);
  });

  it('throws error if no key to hash', () => {
    let hashtable = new Hashtable(1);

    try {
      hashtable.getHash();
    } catch(error) {
      expect(error).toEqual('Must provide a key to be hashed');
    }
  });

  it('can get the hash value', () => {
    let hashtable = new Hashtable(100);

    for(let i = 0; i < strings.length; i++) {
      let hashValue = hashtable.getHash(strings[i]);
      expect(hashValue < 100 && hashValue >= 0).toBe(true);
    }

  });

  it('can add a key value pair', () => {
    let key = 'key';
    let value = 'value';
    let hashtable = new Hashtable(10);

    let index = hashtable.getHash(key);
    hashtable.add(key, value);

    expect(hashtable.numItems).toEqual(1);
    expect(hashtable.array[index].head.value).toEqual({key: value});
  });

  it('can handle a collision', () => {
    let key = 'key';
    let value = 'value';
    let hashtable = new Hashtable(10);

    let index = hashtable.getHash(key);
    hashtable.add(key, value);
    hashtable.add(key, value);

    expect(hashtable.numItems).toEqual(2);
    expect(hashtable.array[index].size).toEqual(2);
    expect(hashtable.array[index].head.value).toEqual({key: value});
    expect(hashtable.array[index].head.next.value).toEqual({key: value});
  });

  it('can get the value by the key', () => {
    let hashtable = new Hashtable(5);

    hashtable.add('randomkey', 'value');
    let value = hashtable.get('randomkey');

    expect(value).toEqual('value');
  });

  it('returns undefined if no matching key', () => {
    let hashtable = new Hashtable();
    hashtable.add('key', 'value');
    let index1 = hashtable.getHash('key');
    let index2 = hashtable.getHash('yek');

    let result = hashtable.get('yek');

    expect(index1 === index2).toBe(true);
    expect(result).toBe(undefined);
  });

  it('returns true only if key exists', () => {
    let hashtable = new Hashtable();
    hashtable.add('foo', 'bar');

    let result = hashtable.contains('foo');
    let result2 = hashtable.contains('randomkey');

    expect(result).toBe(true);
    expect(result2).toBe(false);
  })

})
