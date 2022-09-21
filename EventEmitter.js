/**
 * 发布者-订阅模式
 */
class EventEmitter {
  constructor() {
    this.handlers = {} // 存放事件和回调之间的对应关系
    // { 'a' ,[ ()=>{},()=>{}]}
  }

  on(eventName, cb) {
    // 判断map中是否有这个eventName
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = []
    }
    this.handlers[eventName].push(cb)
  }

  emit(eventName, ...args) {
    // 是否有监听函数队列
    if (this.handlers[eventName]) {
      // slice 浅拷贝
      const handlers = this.handlers[eventName].slice()
      handlers.forEach((cb) => {
        cb(...args)
      })
    }
  }

  off(eventName, cb) {
    const cbs = this.handlers[eventName]
    const index = cbs.indexOf(cb)
    if (index !== -1) {
      cbs.splice(index, 1)
    }
  }
}
