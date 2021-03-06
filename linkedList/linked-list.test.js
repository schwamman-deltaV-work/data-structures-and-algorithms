const LinkedList = require('./linked-list');

describe('LinkedList', () => {
  let list = new LinkedList;

  it('instantiates an empty linked list', () => {
    expect(list).toEqual({ head: null, size: 0 });
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

    it('can add a new node', () => {
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

  describe('append()', () => {
    let list = new LinkedList;
    list.insert(2);
    list.insert(1);
    list.append(3);
    let result = list.toString();

    it('can successfully add a node to the end of the linked list', () => {
      expect(list.size).toEqual(3);
      expect(result).toEqual('1 2 3');
    })

    let list2 = new LinkedList;
    list2.append(4);
    list2.append(5);
    let result2 = list2.toString();

    it('can successfully add multiple nodes to the end of a linked list', () => {
      expect(list2.size).toEqual(2);
      expect(result2).toEqual('4 5');
    })

  });

  describe('insertBefore()', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(2);
    list.append(4);
    list.insertBefore(4, 3);

    let result = list.toString();


    it('Can successfully insert a node before a node located in the middle of a linked list', () => {
      expect(result).toEqual('1 2 3 4');
      expect(list.size).toEqual(4);
    });

    let list2 = new LinkedList;
    list2.insert(1);
    list2.insertBefore(1, 2);
    let result2 = list2.toString();

    it('Can successfully insert a node before the first node of a linked list', () => {
      expect(list2.size).toEqual(2);
      expect(result2).toEqual('2 1');
    });

    it('Throws trying to insert after value that does not exist', () => {
      expect(() => {
        list2.insertBefore(5, 1);
      }).toThrow('value not found to insert before!');
    })
  })

  describe('insertAfter()', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(2);
    list.append(4);
    list.insertAfter(2, 3);

    let result = list.toString();

    it('Can successfully insert after a node in the middle of the linked list', () => {
      expect(result).toEqual('1 2 3 4');
      expect(list.size).toEqual(4);
    });

    let list2 = new LinkedList;
    list2.insert(1);
    list2.append(2);

    it('Can successfully insert a node after the last node of the linked list', () => {
      list2.insertAfter(2, 3);
      let result2 = list2.toString();

      expect(list2.size).toEqual(3);
      expect(result2).toEqual('1 2 3');
    });

    it('Throws trying to insert after value that does not exist', () => {
      expect(() => {
        list2.insertAfter(5, 1);
      }).toThrow('value not found to insert after!');
    });
  })

  describe('kthFromEnd()', () => {
    let list = new LinkedList;
    list.insert(1);
    list.append(2);
    list.append(3);

    it('returns error Where k is greater than the length of the linked list', () => {
      expect(() => {
        list.kthFromEnd(10);
      }).toThrow('11 (k + 1) is larger than the size of the linked list!');
    })

    it('returns error where k and the length of the list are the same', () => {
      expect(() => {
        list.kthFromEnd(3);
      }).toThrow('4 (k + 1) is larger than the size of the linked list!');
    })

    it('returns error where k is not a positive integer', () => {
      expect(() => {
        list.kthFromEnd(-2);
      }).toThrow('kthFromEnd() can not take in a negative number');
    })

    it('returns value when linked list is a size of 1', () => {
      let list2 = new LinkedList;
      list2.insert(5);
      let result = list2.kthFromEnd(0);
      expect(result).toEqual(5);
    })

    it('returns value where k is not at the end, but somewhere in the middle of the linked list', () => {
      let list2 = new LinkedList;
      list2.append(1);
      list2.append(2);
      list2.append(3);
      list2.append(4);
      list2.append(5);

      expect(list2.kthFromEnd(2)).toEqual(3);
      expect(list2.kthFromEnd(3)).toEqual(2);
    })
  })

  describe('findMiddle()', () => {
    it('returns value if linked list has only 1 value', () => {
      let list = new LinkedList;
      list.insert(5);

      expect(list.findMiddle()).toEqual(5);
    })

    it('returns middle value if multiple values in the list', () => {
      let list = new LinkedList;
      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.insert(4);
      list.insert(5);

      expect(list.findMiddle()).toEqual(3);
    })
  })
})


