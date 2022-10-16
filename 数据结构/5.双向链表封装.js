function DoubleList() {
  this.head=null
  this.tail=null
  this.length=0
// 内部类
  function Node(data) {
    this.data=data
    this.pre=null
    this,next=null
  }
  // append(element)向列表尾部添加一个项
  DoubleList.prototype.append=(data)=>{
    const newNode=new Node(data)
    // 判断一下是否是第一个节点
    if(this.length===0){
      this.head=newNode
      this.tail=newNode
    }else{
      // 如果不是第一个节点
      this.tail.next=newNode
      newNode.pre=this.tail
      this.tail=newNode
      
    }
    this.length+=1
  }
  // insert方法实现 
  DoubleList.prototype.insert=(position,data)=>{
    // 如果超出范围限制 返回false
    if(position<0||position>this.length) return false
    const newNode=new Node(data)
    // 如果链表长度为0 即第一次插入节点
    if(this.length===0){
      this.head=newNode
      this.tail=newNode
    }else if(position===0){
      newNode.next=this.head
      this.head.pre=newNode
      this.head=newNode
    }else if(position===this.length){
      newNode.pre=this.tail
      this.tail.next=newNode
      this.tail=newNode
    }else{
      let index=0
      let current=this.head
      while(index++<position){
        current=current.next
      }
      newNode.next=current
      newNode.pre=current.pre
      current.pre.next=newNode
      current.pre=newNode
    }
    // 插入之后长度length+1
    this.length+=1
    return true
  }
  // get(position)获取某个位置的元素
  DoubleList.prototype.get=(position)=>{
    if(position<0||position>=this.length) return null
    // 改进：判断一this.length/2与position的大小
    // 如果this.length/2比position要大  则从前往后遍历
    // 反之，则从后往前遍历
    let index=0
    let current=this.head
    while(index++<position){
      current=current.next
    }
    return current.data
  }
  // update(position,element) 更新某个位置的元素
  DoubleList.prototype.update=(position,newData)=>{
    if(position<0||position>=this.length) return false
    let index=0
    let current=this.head
    while(index++<position){
      current=current.next
    }
    current.data=newData
    return true
  }
  // removeAt(position)移除某一个位置的元素
  DoubleList.prototype.removeAt=(position)=>{
    if(position<0||position>=this.length) return null
    let current=this.head
    // 判断一下是否只有一个节点
    if(this.length===1){
      this.head=null
      this.tail=null
    }else{
      // 如果移除的是第一个元素
      if(position===0){
        this.head.next.pre=null
        this.head=this.head.next
      }else if(position===this.length-1){
        this.tail.pre.next=null
        this.tail=this.tail.pre
      }else{
        let index=0
        while (index++<position) {
          current=current.next
        }
        current.pre.next=current.next
        current.next.pre=current.pre
      }
    }
    this.length-=1
    return current.data
  }
  // 返回元素在列表中的索引 如果列表中没有该元素就返回-1
  DoubleList.prototype.indexOf=(data)=>{
      let current=this.head
      let index=0
      while(current){
        
        if(current.data===data){
          return index
        }
        index+=1
        current=current.next
      }
      return -1
  }
  // 转成字符串
  DoubleList.prototype.toString=()=>{
    let current=this.head
    let str=''
    while(current){
      str+=current.data+" "
      current=current.next
    }
    return str
  }

}

var dbLiist=new DoubleList()
dbLiist.append('abc')
dbLiist.append('aaa')
dbLiist.append('bbb')
dbLiist.append('ccc')
console.log(dbLiist.toString())
dbLiist.insert(0,'ppl')
dbLiist.insert(5,'jjj')
dbLiist.insert(2,'ddd')
console.log('----插入后---')
console.log(dbLiist.toString())
console.log('获取某位置元素',dbLiist.get(6))
console.log('获取某元素位置',dbLiist.indexOf('ppl'))
console.log('----更新后----')
dbLiist.update(1,'qqq')
console.log(dbLiist.toString())
console.log('----remove后----')
console.log(dbLiist.removeAt(6))
console.log(dbLiist.toString())
