'use strict';
const { Cat, Dog } = require('./animal-classes');
const AnimalShelter = require('./fifo-animal-shelter');

describe('AnimalShelter', () => {
  let dog = new Dog('Clifford', 'Mutt');
  let cat = new Cat('Tigger', 'Tiger');

  it('can instantiate an empty queue', () => {
    let shelter = new AnimalShelter;
    expect(shelter).toHaveProperty('list', { head: null, size: 0 })
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

    expect(shelter.list).toHaveProperty('head', {'next': {'next': null, 'value': {'breed': 'Tiger', 'name': 'Tigger'}}, 'value': {'breed': 'Mutt', 'name': 'Clifford'}});
  })

  it('can throws error if dequeue() on an empty shelter', () => {
    let shelter = new AnimalShelter;
    try {
      shelter.dequeue();
    } catch(error) {
      expect(error).toEqual('Sorry, there are no animals in the shelter.')
    }
  })

  it('can dequeue() from a non-empty shelter', () => {
    let shelter = new AnimalShelter;
    shelter.enqueue(dog);
    shelter.enqueue(cat);

    console.log(shelter);

    let dequeued = shelter.dequeue('Dog');

    expect(dequeued).toEqual({'name': 'Clifford', 'breed': 'Mutt'});
  })
})
