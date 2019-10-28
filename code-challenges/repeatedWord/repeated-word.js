'use strict';
const Hashtable = require('../../hashtable/hashtable');

function checkRepeated(string) {
  let hashtable = new Hashtable(1024);
  let regex = / |,|\.|!|\?/;
  let words = string.split(regex);

  for (let i = 0; i < words.length; i++) {
    if(words[i] === '') {
      continue;
    } else {
      if(hashtable.contains(words[i].toLowerCase())){
        return words[i].toLowerCase();
      }
      hashtable.add(words[i].toLowerCase(), words[i]);
    }
  }

  let error = 'No Repeated Words!'
  throw error;
}

module.exports = checkRepeated;
