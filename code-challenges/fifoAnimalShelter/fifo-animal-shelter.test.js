'use strict';
const { Cat, Dog } = require('./animal-classes');
const AnimalShelter = require('./fifo-animal-shelter');

describe('AnimalShelter', () => {
  let dog = new Dog('Clifford', 'Mutt');
  let cat = new Cat('Tigger', 'Tiger');

  it('can instantiate an empty queue', () => {
    let shelter = new AnimalShelter;
    expect(shelter).toHaveProperty('list', { head: null, size: 0 })
    expect(shelter).toHaveProperty('list')
    expect(shelter.list).toHaveProperty('size', 0);
  });

  it('can enqueue() to an empty shelter', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue(dog);

    expect(shelter.list).toHaveProperty('head', {'next': null, 'value': {'breed': 'Mutt', 'name': 'Clifford'}});
  })

  it('can enqueue() to a non-empty shelter', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue(dog);
    shelter.enqueue(cat);

    expect(shelter.list).toHaveProperty('head',
      {
        'next': {
          'next': null,
          'value': {'breed': 'Tiger', 'name': 'Tigger'}
        },
        'value': {'breed': 'Mutt', 'name': 'Clifford'}
      });
  })

  it('can throws error if dequeue() on an empty shelter', () => {
    let shelter = new AnimalShelter;

    expect(() => {
      shelter.dequeue()
    }).toThrow('Sorry, there are no animals in the shelter.');

    try {
      shelter.dequeue();
      throw 'Test fails!';
    } catch(error) {
      expect(error).toEqual('Sorry, there are no animals in the shelter.')
    }
  })

  it('can throws error if dequeue(pref) on shelter without that pref', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue(dog);
    shelter.enqueue(dog);

    let res = shelter.dequeue('Cat');
    expect(res).toBe(null);
  });

  it('can dequeue() from front of a non-empty shelter', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue(dog);
    shelter.enqueue(cat);

    console.log(shelter);

    let dequeued = shelter.dequeue('Dog');

    expect(dequeued).toEqual({'name': 'Clifford', 'breed': 'Mutt'});

    expect(shelter.list).toHaveProperty('head',
      {
        'next': null,
        'value': {'breed': 'Tiger', 'name': 'Tigger'}
      });
  })

  it('can dequeue() without pref from front of a non-empty shelter', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue(dog);
    shelter.enqueue(cat);

    console.log(shelter);

    let dequeued = shelter.dequeue();

    expect(dequeued).toEqual({'name': 'Clifford', 'breed': 'Mutt'});

    expect(shelter.list).toHaveProperty('head',
      {
        'next': null,
        'value': {'breed': 'Tiger', 'name': 'Tigger'}
      });
  })

  it('can dequeue() from back of a non-empty shelter', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue(dog);
    shelter.enqueue(cat);

    console.log(shelter);

    let dequeued = shelter.dequeue('Cat');

    expect(dequeued).toEqual({'name': 'Tigger', 'breed': 'Tiger'});

    expect(shelter.list).toHaveProperty('head',
      {
        'next': null,
        'value': {'breed': 'Mutt', 'name': 'Clifford'}
      });
  })

  it('can dequeue() from middle of a non-empty shelter', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue(dog);
    shelter.enqueue(cat);
    shelter.enqueue(dog);

    console.log(shelter);

    let dequeued = shelter.dequeue('Cat');

    expect(dequeued).toEqual({'name': 'Tigger', 'breed': 'Tiger'});

    expect(shelter.list).toHaveProperty('head',
      {
        'next': {
          'next': null,
          'value': {'breed': 'Mutt', 'name': 'Clifford'}
        },
        'value': {'breed': 'Mutt', 'name': 'Clifford'}
      });
  })

  it('can dequeue() from back of a longers shelter', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(cat);

    console.log(shelter);

    let dequeued = shelter.dequeue('Cat');

    expect(dequeued).toEqual({'name': 'Tigger', 'breed': 'Tiger'});

    expect(shelter.list).toHaveProperty('head',
      {
        'next': {
          'next': {
            'next': null,
            'value': {'breed': 'Mutt', 'name': 'Clifford'}
          },
          'value': {'breed': 'Mutt', 'name': 'Clifford'}
        },
        'value': {'breed': 'Mutt', 'name': 'Clifford'}
      });
  })
})
