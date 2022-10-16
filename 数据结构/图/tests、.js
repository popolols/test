var colors = []
var vertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
for (let i = 0; i < vertexes.length; i++) {
  colors[vertexes[i]] = 'white'
}

console.log(colors['A'])