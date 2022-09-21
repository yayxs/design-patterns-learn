/**
 * 内层循环中判断，达到某个条件退出外层的循环
 */

function func() {
  let flag = false

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i * j > 4) {
        flag = true
        break
      }
    }
  }
}

func()

/**
 * 设置循环标记
 */
function func1(){
  outerLoop
  for(let i =0;i<10;i++){
    innerLopp
    
  }
}

console.log('重构 run')
