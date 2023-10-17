/**
 * 工厂模式
 * 把创建对象的过程单独的封装
 */

function User(name, age, type, loveArray) {
  this.name = name
  this.age = age
  this.type = type
  this.loveArray = loveArray
}

function GongChang(name, age, type) {
  let loveArray
  switch (type) {
    case 'student':
      loveArray = ['yuwen', 'shuxue']

      break

    default:
      break
  }

  return new User(name, age, type, loveArray)
}
