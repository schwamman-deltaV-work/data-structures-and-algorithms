# Stacks and Queues

Implement a Stack and a Queue Data Structure

## Challenge
### Stack
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
* Create a `Stack` class that has a `top` property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to `top` when the stack is created.
* Define a method called `push` which takes any value as an argument and adds a new node with that value to the `top` of the stack with an O(1) Time performance.
* Define a method called `pop` that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
* Define a method called `peek` that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
### Queue
* Create a `Queue` class that has a `front` property. It creates an empty Queue when instantiated.
* This object should be aware of a default empty value assigned to `front` when the queue is created.
* Define a method called `enqueue` which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* Define a method called `dequeue` that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
* Define a method called `peek` that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

## Approach & Efficiency
### Stacks
#### push(value):
Creates a new node with a `next` property assigned to `this.top` (the previous top node). `this.top` is then reassigned to the new node.

Time Performance = O(1)

#### pop():
Stores the value to be removed in the `popped` variable and then reassigns `this.top` to the next value in the stack `this.top.next`. The `popped` variable is then returned.

#### peek():
Returns `this.top.value`.

### Queues
#### enqueue(value):
If the queue is empty then a new node is created and assigned to both `this.front` and `this.back`.  

If the queue is not empty then a `newNode` is created. The previous last node `this.back` is stored in a temporary variable `nextNode`. The `newNode.next` is assigned to `this.back` and `nextNode.previous` is assigned to the `newNode`. `this.back` is then reassigned to the `newNode`.

Time Performance = O(1)

