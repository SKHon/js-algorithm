function Graph() {
  var vertices = []; // 放节点
  var adjList = new Map(); // 存边

  this.addVertex = function(v) {
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = function(v, w) {
    adjList.get(v).push(w); //{5}
    adjList.get(w).push(v);
  };

  this.print = function() {
    var s = '';
    for (var i = 0; i < vertices.length; i++) {
      //{10}
      s += vertices[i] + ' -> ';
      var neighbors = adjList.get(vertices[i]); //{11}
      for (var j = 0; j < neighbors.length; j++) {
        //{12}
        s += neighbors[j] + ' ';
      }
      s += '\n'; //{13}
    }
    return s;
  };

  this.bfs = function(v, cb) {
    // white:没被访问  gray：被访问，没被探索  black：被探索

    // 1. 先初始化一下
    let visit = [];
    for (let i = 0; i < vertices.length; i++) {
      visit[vertices[i]] = false;
    }

    let queue = [];
    queue.push(v);
    visit[v] = true;
    while (queue.length > 0) {
      let u = queue.shift();
      let neighbors = adjList.get(u);
      for (let j = 0; j < neighbors.length; j++) {
        if (!visit[neighbors[j]]) {
          queue.push(neighbors[j]);
          visit[neighbors[j]] = true;
        }
      }
      if (cb) {
        cb(u);
      }
    }
  };

  this.dfs = function(v, cb) {
    // 1. 先初始化一下
    let visit = [];
    for (let i = 0; i < vertices.length; i++) {
      visit[vertices[i]] = false;
    }

    for (let j = 0; j < vertices.length; j++) {
      if (!visit[vertices[j]]) {
        dfsVisit(visit, vertices[j], cb);
      }
    }
  };

  var dfsVisit = function(visit, u, cb) {
    visit[u] = true;
    if (cb) {
      cb(u);
    }
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      if (!visit[neighbors[i]]) {
        dfsVisit(visit, neighbors[i], cb);
      }
    }
  };
}

var graph = new Graph();

var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.print());
function printNode(value) {
  console.log('Visited vertex: ' + value);
}
graph.bfs(myVertices[0], printNode); //{18}
console.log('---');
graph.dfs(myVertices[0], printNode);
