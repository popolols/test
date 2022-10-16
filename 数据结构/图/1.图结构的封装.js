import Dictionay from './2.字典结构的封装.js'
import Queue from './Queue.js'
// 创建图
function Graph() {
  // 属性
  this.vertexes = [] //存储顶点
  this.edges = new Dictionay() //存储边的关系
  //添加顶点
  Graph.prototype.addVertex = function (v) {
    this.vertexes.push(v)
    this.edges.set(v, [])
  }
  //添加边的关系
  Graph.prototype.addEdge = function (v1, v2) {
    this.edges.get(v1).push(v2)
    this.edges.get(v2).push(v1)
  }

  //toString方法
  Graph.prototype.toString = function () {
    let resultStr = ''
    const vertexes = this.vertexes
    for (let i = 0; i < vertexes.length; i++) {
      resultStr += vertexes[i] + '---->'
      const edges = this.edges.get(vertexes[i])
      for (let j = 0; j < edges.length; j++) {
        resultStr += edges[j] + ' '
      }
      resultStr += '\n'
    }
    return resultStr
  }
  //广度优先算法 
  //初始化颜色
  Graph.prototype.initializeColor = function () {
    const colors = []
    for (let i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = 'white'
    }
    return colors
  }
  //bfs
  Graph.prototype.bfs = function (v, handler) {
    //1.初始化颜色 创建队列
    const colors = this.initializeColor()
    const queue = new Queue()
    //2.将初始节点放进队列中 
    queue.enqueue(v)
    //3.从队列中一次取出和放入队列中
    while (!queue.isEmpty()) {
      //4.1从队列中取出元素
      let vNode = queue.dequeue()
      //4.2获取相邻的所有节点
      var vList = this.edges.get(vNode)
      //4.3修改相应的颜色
      colors[vNode] = 'gray'
      //4.4vnode相邻的顶点依次入栈
      for (let i = 0; i < vList.length; i++) {
        var a = vList[i]
        if (colors[a] === 'white') {
          colors[a] = 'gray'
          queue.enqueue(a)
        }
      }
      //4.5探测完毕 将vnode的颜色设置为黑色
      colors[vNode] = 'black'
      // 处理vnode 打印
      if (handler) {
        handler(vNode)
      }
    }

  }
  //深度优先搜索算法
  Graph.prototype.dfs=function(initV,handler){
    //1.初始化颜色
    var colors=this.initializeColor()
    // 2.从某个顶点开始递归遍历
    // console.log(handler)
    this.dfsVisit(initV,colors,handler)

  }
  Graph.prototype.dfsVisit=function(v,colors,handler){
    //1.将颜色设置为灰色
    colors[v]='gray'
    
    // 2.处理V 顶点
    handler(v)
    // 3.访问相连 的顶点
    const vList=this.edges.get(v)
    for(let i=0;i<vList.length;i++){
      const e=vList[i]
      if(colors[e]==='white'){
        this.dfsVisit(e,colors,handler)
      }
    }
    // 4.设置为黑色
    colors[v]='black'
  }
}
// 测试代码
var graph = new Graph()

// 添加顶点
var myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
for (var i = 0; i < myVertexes.length; i++) {
  graph.addVertex(myVertexes[i])
}

// 添加边
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

console.log(graph.toString())

let resultStr = ''
graph.bfs(graph.vertexes[0], function (v) {
  resultStr += v + ' '
})
console.log(resultStr)
// 调用s深度优先算法
var result = ""
graph.dfs(graph.vertexes[0],function (v) {
  result += v + ' '
})
console.log('深度优先:',result)