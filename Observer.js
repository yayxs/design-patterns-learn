/**
 * 发布订阅：又叫做观察者模式：定义对象间的一种一对多的依赖关系，当一个对象的形态发生变化时，所有依赖于它的对象都得到通知
 * 两个重要的角色 发布者 订阅者
 */

/**
 * 发布者
 */
class Publisher {
  constructor() {
    this.observers = []
    console.log('发布者 constructor执行')
  }
  addOne(observer) {
    console.log('发布者 增加订阅者')
    this.observers.push(observer)
  }
  removeOne(observer) {
    console.log('发布者 移除订阅者')
    const len = this.observers.length
    for (let i = 0; i < len; i++) {
      const item = this.observers[i]
      if (item === observer) {
        this.observers.splice(i, 1)
      }
    }
  }
  notifyAll() {
    console.log('发布者 通知所有的订阅者')
    this.observers.forEach((item) => {
      item.update(this)
    })
  }
}

/**
 * 订阅者 被通知 被执行
 */
class Observer {
  constructor() {
    console.log('订阅者 constructor执行')
  }
  update() {
    console.log('订阅者 更新')
  }
}
