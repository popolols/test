// s='()'
// true
// [] () {}
function bihe(str){
   if (str.length<=0){
    return true;
   }
    var result;
    // let a=Array.from(str);
    //开头出现右括号 结尾出现左括号 false

    //左右括号成对出现
    // （）（）  （（（）））
    const leftBracket='([{'
    const rightBracket=')]}'
    const stack=[]
    
    for(var i=0;i<str.length;i++){
        if(leftBracket.includes(str[i])){
            stack.push(str[i])
        }else if(rightBracket.includes(str[i])){
            //判断是否匹配 匹配的话就出栈
            const top=stack[stack.length-1]
            if(isMatch(top,str[i])){
                stack.pop()
            }
        }
    }

    return  stack.length===0
}

function isMatch(left,right) {
    if(left==='('&&right===')'){
        return true
    }else if(left==='['&&right===']'){
        return true
    }else if(left==='{'&&right==='}'){
        return true
    }else{
        return false
    }
}

console.log(bihe('{}'),bihe('[['),bihe('('))
