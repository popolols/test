// function add(a) {
//     return function(b){
//         return a+b
//     }
// }


function once(fn){
    var count;
    return function(){
        if(!count){
            count=1
        }

        if(count===1){
            fn()
            count--
        }else{
            return
        }
        
    }
}
function log(){
    console.log(1)
}

once(log());
once(log());