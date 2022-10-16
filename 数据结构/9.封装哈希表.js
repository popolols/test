function HashTable() {
  // 属性
  this.storage = [] //仓库

  this.count = 0 // 已存入数组中的元素个数
  this.limit = 7

  // 哈希函数
  HashTable.prototype.hashFunc = function (str, size) {
    // 1.初始化hashcode的值
    let hashCode = 0
    //2. 霍纳算法
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    // 3.取模算法
    hashCode = hashCode % size
    return hashCode
  }
  // 操作方法
  // 插入&修改方法
  HashTable.prototype.put = function (key, value) {
    // 1.根据key值哈希获得index,根据index从仓库中拿到bucket
    var index = this.hashFunc(key, this.limit)
    var bucket = this.storage[index]
    // 2.判断bucket是否为空
    if (bucket == null) {
      bucket = []
      this.storage[index] = bucket
    }
    // 4.判断是否修改元素
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        return
      }
    }
    // 5.进行添加操作
    bucket.push([key, value])
    this.count += 1
    // 6.判断是否需要进行扩容操作
    if(this.count>this.limit*0.75){
      const newSize=this.getPrime(this.limit*2)
      this.resize(newSize)
    }

    
  }
  // 获取方法
  HashTable.prototype.get = function (key) {
    // 1.根据key获取hashcode
    let index = this.hashFunc(key, this.limit)
    // 2.根据index拿到bucket
    let bucket = this.storage[index]
    // 3.判断bucket是否为null
    if (bucket == null) return null
    // 4.假如youbucket 就进行线性查找
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    // 假如没有找到 则返回null
    return null
  }
  // 删除操作
  HashTable.prototype.remove = function (key) {
    // 1.根据key获取hashcode
    let index = this.hashFunc(key, this.limit)
    // 2.根据index拿到bucket
    let bucket = this.storage[index]
    // 3.判断bucket是否为null
    if (bucket == null) return null
    // 4.假如youbucket 就进行线性查找并删除
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] == key) {
        // 删除操作
        bucket.splice(i, 1)
        this.count -= 1
        if(this.limit>7 && this.count<this.limit*0.25){
          const newSize=Math.floor(this.limit/2)
          const newPrime=this.getPrime(newSize)
          this.resize(newPrime)
        }
        return tuple[1]
      }
    }
    //  5.最后仍然没有找到 则返回null
    return null
  }
  // isEmpty
  HashTable.prototype.isEmpty = function () {
    return this.count == 0
  }
  // size()
  HashTable.prototype.size = function () {
    return this.count
  }

  // 哈希表的扩容方法
  HashTable.prototype.resize = function (newLimit) {
    // 1.保存就数组的内容
    var oldstorage = this.storage
    // 2.重置所有属性
    this.storage = []
    this.count = 0
    this.limit = newLimit
    // 3.遍历仓库 拿到bucket
    for (var i = 0; i < oldstorage.length; i++) {
      // 3.1取出对应的bucket
      var bucket = oldstorage[i]
      // 3.2判断bucket是否为空
      if (bucket == null) {
        continue //跳出本次循环，执行下次循环
      }
      // 3.3bucket中有数据 拿到tuple 添加到新仓库当中
      for (var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j]
        this.put(tuple[0], tuple[1])
      }
    }
  }
  // 判断某个数字是否是植树
  HashTable.prototype.isPrime= function (num) {
    if (num <= 0) return false
    var temp = parseInt(Math.sqrt(num))
    for (var i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true
  }
  // 获取质数的方法
  HashTable.prototype.getPrime=function(num){
    while (!this.isPrime(num)) {
      num+=1
    }
    return num
  }

}
// 测试哈希表的功能
var ht = new HashTable()
ht.put('abc', '123')
ht.put('cba', '321')
ht.put('nba', '521')
ht.put('mba', '621')
// get
console.log(ht.get('abc'))
// 修改
ht.put('abc', '111')
console.log(ht.get('abc'))

// 删除
ht.remove('abc')
console.log(ht.get('abc'))