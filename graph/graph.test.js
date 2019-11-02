'use strict';
const Graph = require('./graph');

describe('Graph', () => {
  it('can instantiate an empty graph', () => {
    let graph = new Graph;

    expect(graph).toHaveProperty('adjList');
    expect(graph.adjList.size).toEqual(0);
  });

  it('can add a vertex', () => {
    let graph = new Graph;
    let result = graph.addNode('A');
    let result2 = graph.addNode('B');

    expect(result).toHaveProperty('A');
    expect(result2).toHaveProperty('B');
    expect(graph.adjList.size).toEqual(2);
  });

  it('cannot add the same vertex more than once', () => {
    let graph = new Graph;
    graph.addNode('A');

    try {
      graph.addNode('A');
    } catch(error) {
      expect(error).toEqual('That vertex already exists');
    }

  })

  it('can connect 2 vertices', () => {
    let graph = new Graph;
    graph.addNode('A');
    graph.addNode('B');

    graph.addEdge('A', 'B', 5)

    let neighborsA = graph.adjList.get('A');
    let neighborsB = graph.adjList.get('B');

    expect(neighborsA.length).toEqual(1);
    expect(neighborsB.length).toEqual(1);
    expect(neighborsA[0]['vertex']).toEqual('B');
    expect(neighborsA[0]['weight']).toEqual(5);
    expect(neighborsB[0]['vertex']).toEqual('A');
    expect(neighborsB[0]['weight']).toEqual(5);
  });

  it('throws error if connecting vertices that do not exist', () => {
    let graph = new Graph;

    try {
      graph.addEdge('A', 'B');
    } catch(error) {
      expect(error).toEqual('Vertex not found!');
    }
  });

  it('can return all vertices', () => {
    let graph = new Graph;
    graph.addNode('A');
    graph.addNode('B');

    let result = graph.getNodes();

    expect(result[0]).toHaveProperty('vertex');
    expect(result[0]).toHaveProperty('neighbors');
    expect(result[0].vertex).toEqual('A');
    expect(result[0].neighbors).toEqual([]);

    expect(result[1]).toHaveProperty('vertex');
    expect(result[1]).toHaveProperty('neighbors');
    expect(result[1].vertex).toEqual('B');
    expect(result[1].neighbors).toEqual([]);
  });

  it('can return all neighbors for a vertex', () => {
    let graph = new Graph;
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');

    graph.addEdge('A', 'B', 5);
    graph.addEdge('A', 'C', 3);
    graph.addEdge('A', 'D', 1);

    let result = graph.getNeighbors('A');

    expect(result.length).toEqual(3);

    expect(result[0]).toHaveProperty('vertex');
    expect(result[0].vertex).toEqual('B');
    expect(result[0]).toHaveProperty('weight');
    expect(result[0].weight).toEqual(5);

    expect(result[1]).toHaveProperty('vertex');
    expect(result[1].vertex).toEqual('C');
    expect(result[1]).toHaveProperty('weight');
    expect(result[1].weight).toEqual(3);

    expect(result[2]).toHaveProperty('vertex');
    expect(result[2].vertex).toEqual('D');
    expect(result[2]).toHaveProperty('weight');
    expect(result[2].weight).toEqual(1);
  });

  it('can return the size as a method or property', () => {
    let graph = new Graph;
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');

    let size = graph.getSize();

    expect(size).toEqual(4);
    expect(graph.size).toEqual(4);
  });
})
