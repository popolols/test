// 浅拷贝的实现
function shallowCopy(object) {
  if (!object || typeof object !== 'object') return

  let newObject = Array.isArray(object) ? [] : {}
  for (let key in object) {
    if (newObject.hasOwnProperty(key)) {
      newObject[key] = object[key]
    }
  }
  return newObject
}

// 深拷贝的实现
function DeepClone(object){
  if (!object || typeof object !== 'object') return

  let newObject = Array.isArray(object) ? [] : {}
  for (let key in object) {
    if (newObject.hasOwnProperty(key)) {
      newObject[key] = typeof object[key] ==='object'? DeepClone(object[key]):object[key]
    }
  }
  return newObject
}
// 实现数组求和

var  arr=[1,2,3,[[4,5],6],7,8,9]
// console.log(arr.toString().split(','));
arr= arr.toString().split(',').reduce( (total,i) => total += Number(i),0);
// console.log(arr);


// 数组的扁平化 
// 递归实现
let array = [1, [2, [3, 4, 5]]];
function flatten(arr){
  let result=[]
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result=result.concat(flatten(arr[i]))
    }else{
      result=result.concat(arr[i])
    }
  }
  return result
}
// console.log(flatten(array))

//  将数字每千分位用逗号隔开
// function format(n){
//   let num=n.toString()
//   let demical=''
//   num.indexOf('.')!==-1?demical=num.split('.')[1]:demical
//   let len=num.length

//   if()

// }
// format(12323.33) //12,323.33
var tel = 18877776666; 
tel = "" + tel; 
var ary = tel.split(""); 
ary.splice(3,4,"****"); 
var tel1 = ary.join(""); 
console.log(tel1);

// 选择排序
function insertionSort(arr){
  var length=arr.length
  
  for(let i=1;i<length;i++){
    var j=i
    var temp=arr[i]

    while (j>0 && arr[j-1]>temp) {
      arr[j]=arr[j-1]
      j--
    }
    arr[j]=temp
  }
}
// 希尔排序
function shellSort(arr){
  var length=arr.length
  var gap=Math.floor(length/2)
  while (gap>0) {

    for(let i=gap;i<length;i++){
      var j=i
      var temp=arr[i]
  
      while (j>gap-1 && arr[j-gap]>temp) {
        arr[j]=arr[j-gap]
        j-=gap
      }
      arr[j]=temp
    }
    gap=Math.floor(gap/2)
  }
  
}
