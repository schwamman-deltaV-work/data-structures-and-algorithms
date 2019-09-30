# Stacks and Queues

Implement a Queue using two Stacks.

## Challenge
Create a brand new `PseudoQueue` class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 `Stack` objects. Ensure that you create your class with the following methods:  

* `enqueue(value)` which inserts `value` into the PseudoQueue, using a first-in, first-out approach.
* `dequeue()` which extracts a value from the PseudoQueue, using a first-in, first-out approach.  

The `Stack` instances have only `push`, `pop`, and `peek` methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency
#### constructor():
The constructor function instantiates 2 empty stacks named `stack1` and `stack2`.  
#### enqueue(value):  
Pushes the value into `stack1`.

#### dequeue():
First it checks if `stack2` is empty. If it is then it pushes all nodes from `stack1` into `stack2` while simultaneously popping the value from `stack1`. Then it will finally `pop()` the value from `stack2` and return the value of the popped node.


