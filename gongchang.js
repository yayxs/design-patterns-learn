/**
 * 工厂模式创建对象的过程单独封装
 * @param {*} name 
 * @param {*} age 
 * @param {*} type 
 * @returns 
 */
function Factory(name,age,type){
  let work
  switch (type) {
    case 'jser':
      // return new JSer(name,age)
      work = ['code']
      break;
  
    default:
      break;
  }

  return new CreateUser(name,age,type,work)
}


function CreateUser(name,age,type,){

}

/**
 * 抽象工厂：抽象类 不能被用于生成具体实例 围绕一个超级工厂创建其他工厂
 * 具体工厂：用于生成产品家族里的一个具体产品
 * 抽象产品：
 */
console.log('工厂模式 run')