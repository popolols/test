// 封装集合的构造函数
function Set() {
  // 使用一个对象来保存集合的元素
  this.items = {}

  // 集合的操作方法
  // 判断集合中是否有某个元素
  Set.prototype.has = function (value) {
      return this.items.hasOwnProperty(value)
  }

  // 向集合中添加元素
  Set.prototype.add = function (value) {
      // 1.判断集合中是否已经包含了该元素
      if (this.has(value)) return false

      // 2.将元素添加到集合中
      this.items[value] = value
      return true
  }

  // 从集合中删除某个元素
  Set.prototype.remove = function (value) {
      // 1.判断集合中是否包含该元素
      if (!this.has(value)) return false

      // 2.包含该元素, 那么将元素删除
      delete this.items[value]
      return true
  }

  // 清空集合中所有的元素
  Set.prototype.clear = function () {
      this.items = {}
  }

  // 获取集合的大小
  Set.prototype.size = function () {
      return Object.keys(this.items).length

      /*
      考虑兼容性问题, 使用下面的代码
      var count = 0
      for (var value in this.items) {
          if (this.items.hasOwnProperty(value)) {
              count++
          }
      }
      return count
      */
  }

  // 获取集合中所有的值
  Set.prototype.values = function () {
      return Object.keys(this.items)

      /*
      考虑兼容性问题, 使用下面的代码
      var keys = []
      for (var value in this.items) {
          keys.push(value)
      }
      return keys
      */
  }

  // 集合的操作方法
  // uinon
  Set.prototype.union=function(otherSet){
    let values=this.values()
    console.log(values)
  }
}
var setA=new Set()
setA.add('aaa')
setA.add('bbb')
setA.add('ccc')
console.log('setA',setA.values())
var setB=new Set()

setB.add('ddd')
console.log('setA',setA.values())
console.log('setB',setB.values())
setA.union(setB)