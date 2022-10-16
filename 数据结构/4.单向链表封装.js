function LinkList() {
  this.head = null;
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  this.length = 0;
  LinkList.prototype.append = function (data) {
    //  创建一个新节点
    const newNode = new Node(data);
    // 判断是否是第一个节点
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length += 1;
  };

  // 插入方法 insert
  LinkList.prototype.insert = (position, data) => {
    let newNode = new Node(data);
    if (position < 0 || position > this.length) return false;
    if (position == 0) {
      // 1.如果插入的位置是第0个
      newNode.next=this.head
      this.head = newNode;

    } else {
      let index = 0;
      let current = this.head;
      let previous=null
      while (index < position) {
        previous=current
        current=current.next
        index++
      }
      newNode.next=current
      previous.next=newNode
    }
    this.length+=1
  };
  // 
  // 修改某个位置的元素update（position，element）
  LinkList.prototype.update=(position,newData)=>{
    if(position<0||position>=this.length) return false
    let index=0
    let current=this.head
    while(index++<position){
      current=current.next
    }
    current.data=newData
    return true
  }
//  获取对应位置的元素 get(position)
LinkList.prototype.get=(position)=>{
  if(position< 0||position>this.length) return null
  let index=0
  let current=this.head
  while(index++<position){
    current=current.next
  }
  return current.data

}
// indexOf(element )返回元素在列表中的索引
  LinkList.prototype.indexOf=(element)=>{
    let index=0
    let current=this.head
    // const newNode=new Node(element)
    while(current){
      if(element==current.data){
        return index
      } 
      current=current.next
      index+=1
      
    }
    return -1
  }
// removeAt(position)
LinkList.prototype.removeAt=(position)=>{
  if(position<0||position>=this.length) return null
 
  let current=this.head
  if(position===0){
    this.head=this.head.next
  }else{
    let index=0
    let previous=null
    while(index++<position){
      previous=current
      current=current.next
    }
    previous.next=current.next
  }
  
  this.length-=1
  return current.data


}
// remove(element)
LinkList.prototype.remove=(element)=>{
  let position=this.indexOf(element)
  return this.removeAt(position)
}
// size()方法
LinkList.prototype.size=()=>{
  return this.length
}
//  /isEmpty 
LinkList.prototype.isEmpty=()=>{
  return this.length===0
}
// toString方法
  LinkList.prototype.toString = function () {
    let current = this.head;
    let listString = "";
    while (current) {
      listString += current.data + " ";
      current = current.next;
    }
    return listString;
  };
}

var list = new LinkList();
list.append("acb");
list.append("jfh");
list.append("ppp");
list.insert(2,'ooo')
console.log(list.toString())
console.log(list.size())
list.update(3,'lll')

console.log('---------更新后------')
console.log(list.toString())
console.log('---------删除后------')

console.log(list.removeAt(0))
console.log(list.toString())