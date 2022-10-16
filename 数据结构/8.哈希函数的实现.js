function hashFunc(str,size) {
  // 1.初始化hashcode的值
    let hashCode=0
  //2. 霍纳算法
    for(let i=0;i<str.length;i++){
      hashCode=37*hashCode+str.charCodeAt(i)
    }
// 3.取模算法
  hashCode=hashCode%size
  return hashCode
}
// test hashFunc 
console.log(hashFunc('aaa',7))
console.log(hashFunc('abc',7))
console.log(hashFunc('cba',7))
console.log(hashFunc('nbs',7))