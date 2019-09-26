const mergeLists = require('./ll_merge');
const LinkedList = require('../../linkedList/linked-list');

describe('mergeLists()', () => {
  it('returns combined list where both lists have a length of 1', () => {
    let list1 = new LinkedList;
    list1.insert(1);
    let list2 = new LinkedList;
    list2.insert(2);

    let merged1 = mergeLists(list1, list2);

    expect(merged1).toHaveProperty('head', {'next': {'next': null, 'value': 2}, 'value': 1});
  })

  it('returns combined list where lengths are greater than 1 and lengths are equal', () => {
    let list1 = new LinkedList;
    list1.insert(1);
    list1.append(3);
    let list2 = new LinkedList;
    list2.append(2);
    list2.append(4);

    let merged = mergeLists(list1, list2);

    expect(merged).toHaveProperty('head', {'next': {'next': {'next': {'next': null, 'value': 4}, 'value': 3}, 'value': 2}, 'value': 1})
    expect(merged).toHaveProperty('size', 4);
  })

  it('returns combined list where list1 longer than list2', () => {
    let list1 = new LinkedList;
    list1.insert(1);
    list1.append(3);
    let list2 = new LinkedList;
    list2.append(2);

    let merged = mergeLists(list1, list2);

    expect(merged).toHaveProperty('size', 3);
    expect(merged).toHaveProperty('head', {'next': {'next': {'next': null, 'value': 3}, 'value': 2}, 'value': 1});
  });

  it('returns combined list where list2 longer than list1', () => {
    let list1 = new LinkedList;
    list1.insert(1);
    let list2 = new LinkedList;
    list2.insert(2);
    list1.append(3);

    let merged = mergeLists(list1, list2);

    expect(merged).toHaveProperty('size', 3);
    expect(merged).toHaveProperty('head', {'next': {'next': {'next': null, 'value': 3}, 'value': 2}, 'value': 1});
  });

  it('returns empty linkedlist if both lists are empty', () => {
    let list1 = new LinkedList;
    let list2 = new LinkedList;

    let merged = mergeLists(list1, list2);

    expect(merged).toHaveProperty('size', 0);
    expect(merged).toHaveProperty('head', null);
  })

  it('returns list1 if list2 is empty', () => {
    let list1 = new LinkedList;
    list1.insert(1);
    list1.insert(2);
    let list2 = new LinkedList;

    let merged = mergeLists(list1, list2);

    expect(merged).toHaveProperty('size', 2);
    expect(merged).toHaveProperty('head', {'next': {'next': null, 'value': 1}, 'value': 2})
  })

  it('returns list2 if list1 is empty', () => {
    let list1 = new LinkedList;
    let list2 = new LinkedList;
    list2.insert(1);
    list2.insert(2);

    let merged = mergeLists(list1, list2);

    expect(merged).toHaveProperty('size', 2);
    expect(merged).toHaveProperty('head', {'next': {'next': null, 'value': 1}, 'value': 2})
  })
});
