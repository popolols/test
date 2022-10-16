// // while (line = readline()) {

// // }
// // /**
// //  * 元音字母都变小写  辅音字母都变大写
// //  */
// // var line = 'AGfaeGUh'.split('')
// // // console.log(line)
// // const yuanyin = 'AEIOUaeiou'
// // for (let i = 0; i < line.length; i++) {
// //   if (yuanyin.includes(line[i])) {
// //     line[i]=line[i].toLowerCase()
// //   }else{
// //     line[i]=line[i].toUpperCase()
// //   }
// // }
// // console.log(line.join(''))

// // 用哈希表来存储每个字母出现的次数
// // 遍历字符串


// var line='abcaba'
// const map=new Map()
// let str=''
// for(let i=0;i<line.length;i++){
//   if(map.has(line[i])){
//     var a=map.get(line[i])
//     map.set(line[i],++a)
//   }else{
//     map.set(line[i],1)
//   }
// }
// map.forEach((values,key)=>{
//   if(values>=2){
//     str+=key
//   }
// })
// console.log(str)



// // f
// function minOperation(arr,num){
//   if(num===2){
//     arr.forEach(item=>{
//       if(item%2==0){
//         return 0
//       }else{
//         return 1
//       }
//     })
//   }
// }
line = '2 2 2'
line = line.split(' ')
for (var j = 0; j < line.length; j++) {
  line[j] = parseInt(line[j]);
}
const arr = line.slice(1)
console.log(arr)
function minOperation(arr, num) {
  if (num === 2) {
    for(let i=0;i<num;i++){
      if(arr[i]%2==0){
        return 0
      }
    }
    return 1
}
}
console.log(minOperation(arr, line[0]))