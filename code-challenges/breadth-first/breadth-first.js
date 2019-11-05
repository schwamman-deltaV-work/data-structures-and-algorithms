'use strict';
const Graph = require('../../graph/graph');
const Queue = require('../../stacksAndQueues/queues');

class BreadthFirstGraph extends Graph {
  constructor(value) {
    super(value);
  }

  breadthFirst(vertex) {
    if(!this.adjList.has(vertex)) {
      console.log(vertex);
      return [];
    }
    let visited = new Set;
    let queue = new Queue;
    queue.enqueue(vertex);

    while(queue.peek()) {
      let front = queue.dequeue();
      front = front.vertex ? front.vertex : front;
      visited.add(front);

      let neighbors = this.getNeighbors(front);
      neighbors.forEach(node => {
        if (!visited.has(node.vertex)) {
          visited.add(node.vertex);
          queue.enqueue(node.vertex);
        }
      })
    }

    return [...visited];
  }
}

module.exports = BreadthFirstGraph;
