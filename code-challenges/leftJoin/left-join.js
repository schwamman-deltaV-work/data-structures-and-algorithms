'use strict';

function leftJoin(hash1, hash2) {
  let result = [];

  for(let i = 0; i < hash1.array.length; i++){
    let current = hash1.array[i].head;
    while(current){
      let object = current.value;
      let key = Object.keys(object)[0];
      let synonym = current.value[key];
      object[key] = { synonym: synonym, antonym: null};

      let antonym = hash2.get(key);
      if (antonym) {
        object[key].antonym = antonym;
      }

      result.push(object);
      current = current.next;
    }
  }

  return result;
}

module.exports = leftJoin;
