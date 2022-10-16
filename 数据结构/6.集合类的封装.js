function Set() {
  // 属性
  this.items={}
  // 操作方法
  // add（value）添加元素
  Set.prototype.add=(value)=>{
    if(this.has(value)) return false
    this.items[value]=value
    return true
  }
  // 判断是否已经有了该元素has(value)
  Set.prototype.has=(value)=>{
    return this.items.hasOwnProperty(value)
  }
  // remove(value)
  Set.prototype.remove=(value)=>{
    if(!this.has(value)) return false
    return delete this.items[value]
  }

  // clear()
  Set.prototype.clear=()=>{
    this.items={}
  }
  // size()
  Set.prototype.size=()=>{
    return Object.keys(this.items).length
  }
  // values获取集合中所有的元素
  Set.prototype.values=()=>{
    return Object.keys(this.items)
  }
  // 集合的操作方法
  // 并集的操作
  Set.prototype.union=function(){
    let values=this.values()
    console.log('values',values)
    // var newSet=new Set()
    // for(let i=0;i<values.length;i++){
    //   newSet.add(values[i])
    // }
    // console.log('合并前',newSet.values())
    // var  newValues=otherSet.values()
    //  for(let i=0;i<values.length;i++){
    //   newSet.add(newValues[i])
    // }
    // console.log('合并后',newSet.values())
    // return newSet
  }
}

console.log('-----====集合的操作方法-=====--------')
var setA=new Set()
setA.add('aaa')
setA.add('bbb')
setA.add('ccc')
console.log(setA.values())
var setB=new Set()
setB.add('ddd')
console.log(setA.values())
// setB.add('bbb')
// setB.add('ccc')
setA.union()

// console.log(unionSet.values())