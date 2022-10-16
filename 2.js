// 防抖
function debounce(fn,wait) {
    let timeout=null;
    return function () {
        let context=this
        let args=arguments
        // 如果存在原来的定时器则取消定时器 重新计时
        if(timeout){
            clearTimeout(timeout);
            timeout=null
        }
        
        timeout=setTimeout(() => {
            fn.apply(context,args)
        }, wait);
    }
}
// 节流
function throttle(fn,delay) {
    let curTime=Date.now();

    return function(){
        
        let nowTime=Date.now()
        if(nowTime-curTime>=delay){
            curTime=nowTime
            return fn.apply(context,arguments)
        }
    }

}