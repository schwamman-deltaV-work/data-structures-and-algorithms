'use strict';
const LinkedList = require('../linkedList/linked-list');


class Hashtable {
  constructor(numBuckets = 100) {
    this.array = this.generateArray(numBuckets);
    this.numBuckets = numBuckets;
    this.numItems = 0;
  }

  generateArray(numBuckets) {
    let array = [];
    for(let i = 0; i < numBuckets; i++) {
      array.push(new LinkedList);
    }
    return array;
  }

  getHash(key, numBuckets = this.numBuckets) {
    if (!key) {
      let error = 'Must provide a key to be hashed';
      throw error;
    }
    let asciiSum = this.sumASCII(key);
    let hash = (asciiSum * 599) % numBuckets;
    return hash;
  }

  sumASCII(string) {
    let sum = 0;
    if (!string) {
      return sum;
    } else {
      for (let i = 0; i < string.length; i++) {
        sum += string.charCodeAt(i);
      }
      return sum;
    }
  }

  add(key, value) {
    let obj = {};
    obj[key] = value;
    let index = this.getHash(key);
    this.array[index].insert(obj);
    this.numItems++;
  }

  get(key) {
    let index = this.getHash(key);
    if (this.array[index].size === 0) {
      return undefined;
    }
    let node = this.array[index].head;
    while (node) {
      let keyAtIndex = Object.keys(node.value)[0];
      if(key === keyAtIndex) {
        return node.value[key];
      }
      node = node.next;
    }
  }

  contains(key) {
    let result = this.get(key)
    return result ? true: false;
  }
}

module.exports = Hashtable;
