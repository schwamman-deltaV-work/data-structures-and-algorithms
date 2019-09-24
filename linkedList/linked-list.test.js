const LinkedList = require('./linked-list');

describe('LinkedList', () => {
  let list = new LinkedList;

  it('instantiates an empty linked list', () => {
    expect(list).toEqual({ head: null, size: 0 });
  })
})

describe('insert()', () => {
  // Arrange
  let list = new LinkedList;

  // Act
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
  // Arrange
  let list = new LinkedList;
  list.insert(1);
  list.insert(2);
  list.insert(3);

  it('returns true only if value exists', () => {
    // Act
    let res = list.includes(2);

    // Assert
    expect(res).toEqual(true);
  })
  it('returns false if value doesnt exist', () => {
    // Act + Assert
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

  it('can successfully add multiple nodes to the end of a linked list', () => {
    let list2 = new LinkedList;
    list2.append(4);
    list2.append(5);
    let result2 = list2.toString();

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

  describe('insertAfter()', () => {
    it('Can successfully insert after a node in the middle of the linked list', () => {
      let list = new LinkedList;
      list.append(1);
      list.append(2);
      list.append(4);
      list.insertAfter(2, 3);

      let result = list.toString();

      expect(result).toEqual('1 2 3 4');
      expect(list.size).toEqual(4);
    });

    it('Throws trying to insert after value that does not exist', () => {
      let list2 = new LinkedList;
      list2.insert(1);
      list2.append(2);
      list2.insertAfter(2, 3);

      expect(() => {
        list2.insertAfter(5, 1);
      }).toThrow('value not found to insert after!');

      // This is the harder way to do the above
      try {
        list2.insertAfter(5, 1);
        throw 'should not get here; error expected!'
      } catch(err) {
        expect(err).toBe('value not found to insert after!')
      }
    });
  })
})
