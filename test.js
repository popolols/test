// var num = 100
// var time = 10
// var queue = []

// for (let i = 0; i < num; i++) {
//   queue.push(i)
// }
// while (queue.length !== 1) {
//   for (let i = 0; i < time; i++) {
//     queue.push(queue.shift())
//   }
//   queue.shift()
// }

// console.log(queue)
var str = 'yyyy年MM月dd日-HH:mm:ss'
var time = new Date(1660653659557)
console.log(time)
console.log(time.getDate())
var year = time.getFullYear()


// str = str.replace('y', 1)
// console.log(str)


while (line = readline()) {
  var lines = line.split(' ');
  var time = new Date(parseInt(lines[0]))
  for (let i = 1; i < lines.length;i++){
    lines[i]=lines[i].replace('yyyy',time.getFullYear())
    lines[i]=lines[i].replace('MM',time.getMonth())
    lines[i]=lines[i].replace('dd',time.getDate())
    lines[i]=lines[i].replace('HH',time.getHours())
    lines[i]=lines[i].replace('mm',time.getMinutes())
    lines[i]=lines[i].replace('ss',time.getSeconds())
  }
  //   print(lines[0]);
  // print(lines[1]);
  // print(time)

}

