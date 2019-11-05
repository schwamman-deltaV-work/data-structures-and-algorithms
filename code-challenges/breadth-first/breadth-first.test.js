'use strict';
const BreadthFirstGraph = require('./breadth-first');

describe('BreadthFirstGraph', () => {
  it('returns empty array node does not exist', () => {
    let graph = new BreadthFirstGraph;

    let result = graph.breadthFirst('Node A');
    expect(result).toEqual([]);
  });

  it('returns single node if no neighbors', () => {
    let graph = new BreadthFirstGraph;
    graph.addNode('Node B');

    let result = graph.breadthFirst('Node B');
    expect(result).toEqual(['Node B']);
  });

  it('returns array of neighbors', () => {
    let graph = new BreadthFirstGraph;
    graph.addNode('Node A');
    graph.addNode('Node B');
    graph.addNode('Node C');
    graph.addEdge('Node A', 'Node B');
    graph.addEdge('Node B', 'Node C');

    let result = graph.breadthFirst('Node A');

    expect(result).toEqual(['Node A', 'Node B', 'Node C'])
  })

  it('returns array of neighbors in correct order', () => {
    let graph = new BreadthFirstGraph;
    graph.addNode('Node A');
    graph.addNode('Node B');
    graph.addNode('Node C');
    graph.addNode('Node D');
    graph.addNode('Node E');
    graph.addEdge('Node A', 'Node B');
    graph.addEdge('Node A', 'Node D');
    graph.addEdge('Node B', 'Node C');
    graph.addEdge('Node D', 'Node B');
    graph.addEdge('Node C', 'Node E');

    let result = graph.breadthFirst('Node A');

    expect(result).toEqual(['Node A', 'Node B', 'Node D', 'Node C', 'Node E']);
  })
});
