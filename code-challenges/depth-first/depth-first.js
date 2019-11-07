'use strict';
const Stack = require('../../stacksAndQueues/stacks');

function depthFirst(adjList, root) {
  let stack = new Stack;
  let visited = new Set;
  let result = [];

  if (adjList.size < 1) {
    return [];
  } else if (!root) {
    root = [...adjList][0][0];
  }

  stack.push(root);

  while(stack.size > 0) {
    let top = stack.pop();
    if (!visited.has(top)) {
      visited.add(top);
      result.push(top);
    }

    let neighbors = adjList.get(top);

    let unvistedNodes = getUnvisited(neighbors, visited);
    if (unvistedNodes.length > 0) {
      unvistedNodes.forEach( node => stack.push(node));
    }
  }

  return result;
}

function getUnvisited(nodes, visited) {
  let unvistedNodes = [];

  nodes.forEach( (node, i) => {
    if(!visited.has(nodes[i].vertex)) {
      unvistedNodes.push(nodes[i].vertex);
    }
  })
  return unvistedNodes;
}

module.exports = depthFirst;
