function ArrayList() {
  // 属性
  this.array = []
  // 方法
  ArrayList.prototype.insert = function (item) {
    this.array.push(item)
  }
  ArrayList.prototype.toString = function () {
    return this.array.join(' ')
  }
  // 冒泡排序
  ArrayList.prototype.bubleSort = function () {

    for (let j = 0; j < this.array.length; j++) {

      for (let i = 0; i < this.array.length - j - 1; i++) {
        if (this.array[i] > this.array[i + 1]) {
          var temp = this.array[i + 1]
          this.array[i + 1] = this.array[i]
          this.array[i] = temp
        }
      }
    }
  }
  //选择排序
  ArrayList.prototype.selectSort = function () {
    // 1.
    for (let i = 0; i < this.array.length; i++) {
      var minIndex = i
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[j] < this.array[i]) {
          minIndex = j
        }
      }
      // 两者进行交换
      var temp = this.array[minIndex]
      this.array[minIndex] = this.array[i]
      this.array[i] = temp
    }
  }
  // 插入排序
  ArrayList.prototype.insertionSort = function () {
    for (let i = 0; i < this.array.length; i++) {
      // 拿到元素下标
      var j = i
      // 暂时存储当前元素
      var temp = this.array[i]
      // 对前面局部有序数组进行插入排序
      while (j > 0 && temp < this.array[j - 1]) {
        this.array[j] = this.array[j - 1]
        j--
      }
      // 将选出来的j位置，放入temp元素
      this.array[j] = temp
    }
  }
  //希尔排序
  ArrayList.prototype.shellSort = function () {
    let length = this.array.length
    let gap = Math.floor(length / 2) //定义插入排序的步长

    while (gap >= 1) {

      for (let i = gap; i < length; i++) {
        //从第一个元素开始
        let j = i
        let temp = this.array[i] //存储当前元素
        while (this.array[j - gap] > temp && j > j - gap) {
          this.array[j] = this.array[j - gap]
          j -= gap
        }
        this.array[j]=temp
      }

      // 5.重新计算新的间隔
      gap = Math.floor(gap / 2)
    }
  }

  //快速排序
  ArrayList.prototype.quickSort=function(){
    this.quickSortArr(0,this.array.length-1,this.array)
  }
  ArrayList.prototype.quickSortArr=function(start,end,nums){
    if(start<end){
      const mid=this.sort(start,end,nums)
      this.quickSortArr(start,mid-1,nums)
      this.quickSortArr(mid+1,end,nums)
    }
  }
  ArrayList.prototype.sort=function(start,end,arr){
    let base=arr[start]
    let left=start
    let right=end

    while (left!=right) {
      while (right>left&& arr[right]>base) {
        right--
      }
      arr[left]=arr[right]
      while (left<right && arr[left]<base) {
        left++
      }
      arr[right]=arr[left]
    }
    arr[left]=base
    return left
  }

}

// 测试代码

const arr = new ArrayList()
arr.insert(66)
arr.insert(99)
arr.insert(88)
arr.insert(77)
arr.insert(55)
arr.insert(70)
arr.insert(190)
arr.insert(7)
arr.insert(12)
console.log(arr.toString())
// arr.bubleSort()
// console.log(arr.toString())
// arr.selectSort()
// arr.insertionSort()
// arr.shellSort()
arr.quickSort()
console.log(arr.toString())