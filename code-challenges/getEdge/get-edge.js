'use strict';

function getEdge(graph, cities) {
  if(!cities || cities.length <= 1) {
    throw 'Provide at least 2 cities';
  }

  let cost = 0;

  for(let i = 1; i < cities.length; i++) {
    let neighbors = graph.getNeighbors(cities[i - 1]);
    let citiesArray = neighbors.map(neighbor => neighbor.vertex);
    console.log(neighbors);
    if(!citiesArray.includes(cities[i])) {
      return { routeExists: false, cost: 0};
    }
    for(let j = 0; j < neighbors.length; j++) {
      if(neighbors[j].vertex === cities[i]) {
        cost += neighbors[j].weight;
      }
    }
  }

  return { routeExists:true, cost: cost };
}

module.exports = getEdge;
