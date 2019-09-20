const LinkedList = require('./linked-list');

describe('LinkedList', () => {
  let list = new LinkedList;

  it('instantiates an empty linked list', () => {
    expect(list).toEqual({ head: null, size: 0 });
  })
})

describe('insert()', () => {
  let list = new LinkedList;
  list.insert('Is?');
  list.insert('JPEG');
  list.insert('A');
  list.insert('What');
  list.insert('Know');
  list.insert('I');
  list.insert('Like');
  list.insert('Look');
  list.insert('I');
  list.insert('Do');

  let parsedList = list.toString();

  it('adds an new node', () => {
    expect(list.size).toEqual(10);
    expect(parsedList).toEqual('Do I Look Like I Know What A JPEG Is?');
  })
  it('points head to first node', () => {
    expect(list.head.value).toEqual('Do');
  })
})

describe('includes()', () => {
  let list = new LinkedList;
  list.insert(1);
  list.insert(2);
  list.insert(3);

  it('returns true only if value exists', () => {
    expect(list.includes(2)).toEqual(true);
  })
  it('returns false if value doesnt exist', () => {
    expect(list.includes(5)).toEqual(false);
  })
})

describe('toString()', () => {
  let list = new LinkedList;
  list.insert('Is?');
  list.insert('JPEG');
  list.insert('A');
  list.insert('What');
  list.insert('Know');
  list.insert('I');
  list.insert('Like');
  list.insert('Look');
  list.insert('I');
  list.insert('Do');

  it('returns all node values as one string', () => {
    expect(list.toString()).toEqual('Do I Look Like I Know What A JPEG Is?');
  })
})
