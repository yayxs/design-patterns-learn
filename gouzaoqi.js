
/**
 * CreateUser 新建对象内存被分配后 用来初始化该对象的特殊函数 构造器
 * @param {*} name 
 * @param {*} age 
 */
function CreateUser(name,age){
  this.name = name
  this.age = age
}


const u1 = new CreateUser()


console.log('构造器模式 run')