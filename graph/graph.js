'use strict';

class Graph {
  constructor() {
    this.adjList = new Map();
    this.size = 0;
  }

  addNode(vertex) {
    if(this.adjList.has(vertex)) {
      throw 'That vertex already exists';
    }
    this.adjList.set(vertex, []);
    let result = {};
    result[vertex] = [];
    this.size++;
    return result;
  }

  addEdge(vertex1, vertex2, weight = null) {
    if(this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
      this.adjList.get(vertex1).push({vertex: vertex2, weight: weight});
      this.adjList.get(vertex2).push({vertex: vertex1, weight: weight});
    } else {
      throw 'Vertex not found!';
    }
  }

  getNodes() {
    let result = [];
    for(let [key, value] of this.adjList) {
      let obj = {};
      obj['vertex'] = key;
      obj['neighbors'] = value;
      result.push(obj);
    }
    return result;
  }

  getNeighbors(vertex) {
    let neighbors = this.adjList.get(vertex);
    console.log(neighbors);
    return neighbors;
  }

  getSize() {
    return this.size;
  }

}

module.exports = Graph;
