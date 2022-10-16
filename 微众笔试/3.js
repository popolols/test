/**
 *相等串
 *  
 * 如果一个字符串中字符A出现的次数、字符B出现的次数、字符C出现的次数均相等，则这样的字符串称为一个相等串。

给定一个由字符A、B、C构成的字符串s，请问s所有的非空子串中是否存在一个相等串，如果存在，输出最长相等子串的长度；否则输出0。

注：字符串中任意连续的字符组成的子序列称为该串的子串。例如，字符串abc中，a、b、c、ab、bc、abc均为abc串的子串，而ac不是abc的子串。

样例输入
12
ABBCBABBACCB
样例输出
6
 */

let s='ABBCBABBACCB'

let n=s.length
function num(n,s){
  let len=n-n%3
  // console.log(s.slice(0,n))
  while (len>=3) {
    for(let i=0;i<=n-len;i++){
      temp=s.slice(i,i+len)
      let map=new Map()
      // 遍历temp
      for(let x of temp){
        if(map.has(x)){
          map.set(x,map.get(x)+1)
        }else{
          map.set(x,1)
        }
      }

      if(map.get('A')===map.get('B') && map.get('A')===map.get('B') ){
        return len
      }

    }
    len-=3
  }

  return 0  
}
console.log(num(n,s))