/**
 * 代理模式：事件代理 虚拟代理 缓存代理 保护代理 防火墙代理 远程代理
 * 在JS开发中常用的是虚拟代理和缓存代理
 * 虚拟代理：图片的预加载
 */

const loadImg = (function () {
  const imgNode = document.createElement('img')
  document.body.appendChild(imgNode)

  return function (src) {
    imgNode.src = src
  }
})()

const proxyImg = (function () {
  const i = new Image()
  i.onload = function () {
    loadImg(this.src)
  }

  return function (src) {
    loadImg('xxx')
    i.src = src
  }
})()
