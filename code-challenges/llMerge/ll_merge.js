'use strict';

function mergeLists(list1, list2) {
  let size = list1.size + list2.size;
  list1 = list1.head;
  list2 = list2.head;
  let head = { value: -1, next: null };
  let runner = head;

  while (list1 && list2) {
    runner.next = list1;
    list1 = list1.next;
    runner = runner.next;
    runner.next = list2;
    list2 = list2.next;
    runner = runner.next;
  }

  runner.next = list1 || list2;


  return { head: head.next, size: size };
}


module.exports = mergeLists;
