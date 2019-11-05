'use strict';
const Graph = require('../../graph/graph');
const getEdge = require('./get-edge');

describe('getEdge', () => {
  it('throws error if less than 2 cities provided', () => {
    let graph = new Graph;

    try {
      getEdge(graph, []);
    } catch(error) {
      expect(error).toEqual('Provide at least 2 cities');
    }
  });

  it('returns false if 2 cities are not connected', () => {
    let graph = new Graph;
    graph.addNode('Cedar Rapids');
    graph.addNode('New York');
    graph.addNode('Chicago');
    graph.addEdge('Cedar Rapids', 'Chicago', 33);

    let result = getEdge(graph, ['Cedar Rapids', 'New York']);

    expect(result).toEqual({ routeExists: false, cost: 0});
  });

  it('returns true if 2 cities are connected', () => {
    let graph = new Graph;
    graph.addNode('Cedar Rapids');
    graph.addNode('New York');
    graph.addNode('Chicago');
    graph.addEdge('Cedar Rapids', 'Chicago', 47);

    let result = getEdge(graph, ['Cedar Rapids', 'Chicago']);

    expect(result).toEqual({ routeExists: true, cost: 47});
  });

  it('returns true if there are multiple connected cities', () => {
    let graph = new Graph;
    graph.addNode('Cedar Rapids');
    graph.addNode('New York');
    graph.addNode('Chicago');
    graph.addEdge('Cedar Rapids', 'Chicago', 55);
    graph.addEdge('Chicago', 'New York', 49);

    let result = getEdge(graph, ['Cedar Rapids', 'Chicago', 'New York']);

    expect(result).toEqual({ routeExists: true, cost: 104});
  })
})
