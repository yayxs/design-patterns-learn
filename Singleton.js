/**
 * The Singleton Pattern
 * 单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点
 * 应用单例模式的场景：线程池 全局缓存 浏览器中的window
 */

const ProxySingleton = (function () {
  let instance

  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html)
    }

    return instance
  }
})()

// 创建一个div

function CreateDiv(html) {
  this.html = html
  this.init()
}

CreateDiv.prototype.init = function () {
  const divNode = document.createElement('div')
  divNode.innerHTML = this.html
  document.body.appendChild(divNode)
}

class Single {
  log() {
    console.log('单例对象')
  }
  static getInstance() {
    if (!Single.instance) {
      Single.instance = new Single()
    }
    return Single.instance
  }
}

class Storage {
  static getIns() {
    // 判断是否已经new 过
    if (!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  }
  get(k) {
    return localStorage.getItem(k)
  }
  set(k, val) {
    return localStorage.setItem(k, val)
  }
}
