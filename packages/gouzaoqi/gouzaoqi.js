/**
 * 构造器模式
 * 使用js的构造函数
 * 录入用户信息
 */
function User(username, age) {
  this.username = username
  this.age = age
}

const user = new User('user', 12)
