function red() {
  console.log('red');
}

function green() {
  console.log('green');
}

function yellow() {
  console.log('yellow');
}
/** 
 * 用回调函数实现
*/

const task = (timer, light, callback) => {
  setTimeout(() => {
    if (light === 'red') {
      red()
    } else if (light === 'yellow') {
      yellow()
    } else if (light === 'green') {
      green()
    }
    callback()
  }, timer);
}

const step = () => {
  task(3000, 'red', () => {
    task(2000, 'yellow', () => {
      task(1000, 'green', step)
    })
  })
}
// step()

// 用promise实现
const takeTurn=(timer,light)=>{
  return new Promise((res,rej)=>{

  })
}

// 函数防抖的实现
function debounce(fn,wait){
  let timer=null
  return function(){

    let context=this
    let arg=arguments
    if(timer){
      clearTimeout(timer)
      timer=null
    }else{
      setTimeout(() => {
        fn.apply(context,arg)
      }, wait);
    }
  }
}

// 函数节流的实习啊
function throttle(fn,delay){
  let curTime=Date.now()

  return function(){
    let context=this
    let nowTime=Date.now()
    let args=arguments
    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - curTime >= delay) {
      curTime = Date.now();
      return fn.apply(context, args);
    }
  }
}

// 快速排序
  