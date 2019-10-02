'use strict';

class Animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name, breed);
  }

  meows() {
    console.log(`${this.name} meowed at you. You better pet it!`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, breed);
  }

  meows() {
    console.log(`${this.name} barked at you. You better pet it!`);
  }
}

module.exports = { Cat, Dog, Animal };
