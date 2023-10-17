/**
 * 单例模式的基本实现 保证一个类仅仅有一个实例
 * 保证一个类仅有一个实例 提供一个访问它的全局访问点
 *
 * 页面中的常见的 全局唯一的弹窗（页面中一般是只显示一个弹窗） 线程池 全局缓存封装 浏览器中 window
 *
 */

function Func(name) {
  this.name = name
  this.instance = null
}

Func.prototype.getName = function () {
  console.log(this.name)
}

// 获取实例

Func.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Func(name)
  }

  return this.instance
}

/**
 * 如果没有一个实例的情况是
 */

class DanLiCls {
  show() {
    console.log('这是单例对象')
  }
  static getInstance() {
    // 没有实例的情况 创建一个
    if (DanLiCls.instance) {
      DanLiCls.instance = new DanLiCls()
    }

    // 返回这个实例
    return DanLiCls.instance
  }
}
console.log(DanLiCls.getInstance() === DanLiCls.getInstance()) // true

/**
 * 使用闭包来实现
 */

class PatternDanli {}
PatternDanli.getInstance = (function () {
  let instance = null

  return function () {
    if (!instance) {
      instance = new PatternDanli()
    }
    return instance
  }
})()
