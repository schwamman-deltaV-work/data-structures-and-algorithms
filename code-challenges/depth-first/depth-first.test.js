'use strict';
const Graph = require('../../graph/graph');
const depthFirst = require('./depth-first');

describe('', () => {
  it('returns [] if adjList is empty', () => {
    let graph = new Graph;

    let result = depthFirst(graph.adjList);

    expect(result).toEqual([]);
  });

  it('defaults to first node in adjList if none passed in', () => {
    let graph = new Graph;
    graph.addNode('Node A');
    graph.addNode('Node B');
    graph.addEdge('Node A', 'Node B', 5);

    let result = depthFirst(graph.adjList);

    expect(result).toEqual(['Node A', 'Node B']);
  })

  it('traverses depth first', () => {
    let graph = new Graph;
    graph.addNode('Node 1');
    graph.addNode('Node 2');
    graph.addNode('Node 3');
    graph.addNode('Node 4');
    graph.addNode('Node 5');

    graph.addEdge('Node 1', 'Node 2', 5);
    graph.addEdge('Node 2', 'Node 3', 5);
    graph.addEdge('Node 1', 'Node 4', 5);
    graph.addEdge('Node 2', 'Node 5', 5);

    let result = depthFirst(graph.adjList);

    expect(result).toEqual(['Node 1', 'Node 2', 'Node 3', 'Node 5', 'Node 4']);
  });

  it('passes example graph', () => {
    let graph = new Graph;
    graph.addNode('Node A');
    graph.addNode('Node B');
    graph.addNode('Node C');
    graph.addNode('Node D');
    graph.addNode('Node E');
    graph.addNode('Node F');
    graph.addNode('Node G');
    graph.addNode('Node H');

    graph.addEdge('Node A', 'Node B', 5);
    graph.addEdge('Node A', 'Node D', 5);
    graph.addEdge('Node B', 'Node D', 5);
    graph.addEdge('Node B', 'Node C', 5);
    graph.addEdge('Node C', 'Node G', 5);
    graph.addEdge('Node D', 'Node E', 5);
    graph.addEdge('Node D', 'Node F', 5);
    graph.addEdge('Node D', 'Node H', 5);
    graph.addEdge('Node F', 'Node H', 5);

    let result = depthFirst(graph.adjList);

    expect(result).toEqual([]);
  })
});
