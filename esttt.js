// 打印1到end中5的倍数
function printQuintupling( end ) {
  // write code here
  const result=[]
  let sum=5
  let count=1
  while (end>=sum) {
    result.push(sum)
    sum+=5
  }
  return result
}
// console.log(printQuintupling(100))
// stack=['(','{','[']
// console.log(stack.pop())
// console.log(stack)

function isValid( s ) {
  // write code here
  const left='({['
  const right=')}]'
  const stack=[]
  // 
  for(let i=0;i<s.length;i++){
    if(left.indexOf(s[i])!==-1){
      stack.push(s[i])
    }else{
       str=stack.pop()
       console.log(str)
       switch(str){
        case '(':
          if(s[i]!==')'){
            return false
          }else{
            continue
          }
          case '{':
            if(s[i]!=='}') {return false}else{
              continue
            }
          case '[':
            if(s[i]!=='[') {return false}else{
              continue
            }
       }
    }
  }
  return stack.length===0
}

console.log(isValid("{{}}"))


// 
function numFormat( num ) {
  // write code here
  let str=num.toString()
  let len=str.length
  if(len<=2) return str
  
  let remain=len%3
  if(remain===0){
    return str.slice(0, len).match(/\d{3}/g).join(',')
  }else{
    return str.slice(0, remain).match(/\d{3}/g).join(',')+str.slice(remain, len).match(/\d{3}/g).join(',')
  }
  
}
console.log(numFormat(123456))