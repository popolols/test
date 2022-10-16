function Queue() {
  this.items=[]

  // 队列方法封装

  Queue.prototype.enqueue=(element)=>{
    this.items.push(element)
  }

  Queue.prototype.dequeue=()=>{
    return this.items.shift()
  }

  Queue.prototype.front=()=>{
    return this.items[0]
  }

  Queue.prototype.isEmpty=()=>{
    return this.items.length===0
  }

  Queue.prototype.size=()=>{
    return this.items.length
  }

  Queue.prototype.toString=()=>{
    return this.items.join(' ')
  }
}

var q=new Queue()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.enqueue(4)
// console.log(q)
// q.dequeue()
// q.dequeue()

// console.log("@"+q.front())

// console.log(q.size())

// console.log(q.toString())

// 击鼓传花实现代码
function passGame(nameList,num) {
  let  queue=new Queue()
  // 名字加入队列
  for(let i=0;i<nameList.length;i++){
    queue.enqueue(nameList[i])
  }
  // 开始数数  先出后进 数到那个pop出队列
  while(queue.size()>1){
    for(let i=0;i<num-1;i++){
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }

  console.log(queue.size())

  let endName=queue.front()
  console.log(endName)
  return endName
}

const names=['Lily','Tom','popolo','layn','joe']

passGame(names,3)

export default Queue