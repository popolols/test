var n=3
var queue=['3','1','2']
const res=[]
let n=queue.length

for(let i=0;i<n;i++){
  // i为偶数的时候弹出最大值
  // i为奇数时弹出最小值
  
  if(i%2===0){
    let temp=parseInt(queue[0])>parseInt(queue[queue.length-1])?parseInt(queue.shift()):parseInt(queue.pop())
    res.push(temp)
    if(parseInt(queue[i])>parseInt(queue[queue.length-1])){
      res.push(parseInt(queue[i]))
    }
  }else{
    let temp=parseInt(queue[0])<=parseInt(queue[queue.length-1])?parseInt(queue.shift()):parseInt(queue.pop())
    res.push(temp)
  }
}
print(res)