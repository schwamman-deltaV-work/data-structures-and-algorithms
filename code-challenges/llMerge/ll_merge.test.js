const mergeLists = require('./ll_merge');
const LinkedList = require('../../linkedList/linked-list');

describe('mergeLists()', () => {
  it('returns combined list where both lists have a length of 1', () => {
    let list1 = new LinkedList;
    list1.insert(1);
    let list2 = new LinkedList;
    list2.insert(2);

    console.log(mergeLists(list1, list2));
    expect(mergeLists(list1, list2)).toEqual({value: 1, next: {}});
  })

  it('returns combined list where lengths are greater than 1 and lengths are equal', () => {
    let list1 = new LinkedList;
    list1.insert(1);
    list1.append(3);
    list1.append(5);
    let list2 = new LinkedList;
    list2.append(2);
    list2.append(4);
    list2.append(6);

    console.log(list1.head);
    console.log(list2.head);
    console.log(mergeLists(list1, list2));

    expect(mergeLists(list1, list2)).toMatch({ value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: {}}}}})
  })
})
