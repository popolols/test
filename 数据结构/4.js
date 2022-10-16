// 

function LinkList() {
  this.head=null
  this.length=0
  function Node(data) {
    this.data=data
    this.next=null
  }

  // 链表相关操作方法
  LinkList.prototype.append=(data)=>{
    let newNode=new Node(data)
        if(this.length===0){
          this.head=newNode
        }else{
          let current=this.head
          while(current.next){
            current=current.next
          }
          current.next=newNode
        }
      this.length+=1

  }
}