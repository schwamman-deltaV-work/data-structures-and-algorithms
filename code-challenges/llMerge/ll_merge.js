'use strict';

function mergeLists(list1, list2) {
  list1 = list1.head;
  list2 = list2.head;
  let size = list1.size + list2.size;
  let head = { value: -1, next: null };
  let runner = head;

  while(list1 && list2) {
    if(list1.value > list2.value) {
      runner.next = list2;
      list2 = list2.next;
    } else {
      runner.next = list1;
      list1 = list1.next;
    }
    runner = runner.next;
  }

  runner.next = list1 || list2;

  return head.next;
}


module.exports = mergeLists;
