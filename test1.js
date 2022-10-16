function isValid(s){
  const result=[]
  const map=new Map()
  map.set('(',')')
  map.set('{','}')
  map.set('[',']')

  for(let i =0;i<s.length;i++){
    if(map.has(s[i])){
      result.push(s[i])
    }else{
      
      if(s[i]!==map.get(result.pop())) return false
    }
  }

  return result.length===0
}
// test 
console.log(isValid('{{}}'))
// console.log(isValid('{()}}'))
// console.log(isValid('{}[]('))



  let format = num => {
    let str = num.toString();
    let len = str.length;
    //小数点后的值
    let floatstr = ''
    // 判断是否一个整数
    let tartgetArr = ''
    let donum = str.indexOf('.');
    if (donum !== -1) {
      tartgetArr = str.slice(0, donum)
      floatstr = str.slice(donum, len)
    } else {
      tartgetArr = str.slice()
    }

    // 处理整数部分
    let tartlen = tartgetArr.length;
    if (tartlen == 3) {
      return tartgetArr + floatstr
    } else {
      if (tartlen % 3 === 0) {
        return tartgetArr.match(/\d{3}/g).join(',') + floatstr
      } else {
        return tartgetArr.slice(0,tartlen % 3)+','+tartgetArr.slice(tartlen % 3,tartlen).match(/\d{3}/g).join(',') + floatstr
      }
    }
  }

// console.log(format(12323.3356))
console.log(format(1231231.123))

