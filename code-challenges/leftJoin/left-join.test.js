'use strict';
const Hashtable = require('../../hashtable/hashtable');
const leftJoin = require('./left-join');

describe('leftJoin', () => {
  it('returns empty array if the first hashtable passed in is empty', () => {
    let table1 = new Hashtable;
    let table2 = new Hashtable;

    let result = leftJoin(table1, table2);

    expect(result).toEqual([]);
  });

  it('returns synonyms from first table and null for antonyms if no matching keys', () => {
    let table1 = new Hashtable(2);
    table1.add('test', 'experiment');
    table1.add('code', 'cipher');
    let table2 = new Hashtable;

    let result = leftJoin(table1, table2);

    console.log(result);
    expect(result).toEqual([{ test:{ synonym: 'experiment', antonym: null}}, { code:{ synonym: 'cipher', antonym: null}}]);
  });

  it('returns antonyms from 2nd table if matching key in 1st table', () => {
    let table1 = new Hashtable(2);
    table1.add('test', 'experiment');
    table1.add('code', 'cipher');
    let table2 = new Hashtable;
    table2.add('test', 'guess');

    let result = leftJoin(table1, table2);

    console.log(result);
    expect(result).toEqual([{ test:{ synonym: 'experiment', antonym: 'guess'}}, { code:{ synonym: 'cipher', antonym: null}}]);
  })
})
