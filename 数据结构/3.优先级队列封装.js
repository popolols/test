function PriorityQueue() {
  // 封装属性
  this.items=[]

  function QueueElement(element,priority) {
    this.element=element
    this.priority=priority
  }

  // 实现插入方法
  PriorityQueue.prototype.enqueue=function (element,priority){

    const queueElement=new QueueElement(element,priority)

    if(this.items.length===0){
      this.items.push(queueElement)
    }else{
      for(let i=0;i<this.items.length;i++){
        if(queueElement.priority<this.items[i].priority){
          this.items.splice(i,0,queueElement)
          return
        }
      }
      this.items.push(queueElement)
    }
  }

  PriorityQueue.prototype.dequeue=()=>{
    return this.items.shift()
  }

  PriorityQueue.prototype.front=()=>{
    return this.items[0]
  }

  PriorityQueue.prototype.isEmpty=()=>{
    return this.items.length===0
  }

  PriorityQueue.prototype.size=()=>{
    return this.items.length
  }

  PriorityQueue.prototype.toString=()=>{
    return this.items.join(' ')
  }

}

var queue=new PriorityQueue()
queue.enqueue('a',10)
queue.enqueue('c',101)
queue.enqueue('d',1011)
queue.enqueue('g',1015)
queue.enqueue('r',15)


console.log(queue)
console.log(queue.front())