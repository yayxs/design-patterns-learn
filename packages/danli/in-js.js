/**
 * 单例模式
 * 核心是只有一个实例 提供全局的访问
 * 全局变量不是单例的模式
 */

/**
 * 使用闭包封装私有的变量
 */

let user = (function () {
  let _name = 'name'
  _age = 12
  return {
    getUserInfo: function () {
      return _name + _age
    }
  }
})()
