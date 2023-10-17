/**
 * 装饰器 又名装饰者模式：
 * 在不改变原来对象的基础上 通过对其进行包装拓展
 */

// 展示Modal

const Modal = (function () {
  let modal = null

  return function () {
    if (!modal) {
      modal = document.createElement('div')
      modal.innerHTML = '开始检测'
      modal.id = 'modal'
      modal.style.display = 'none'
      document.body.appendChild(modal)
    }

    return modal
  }
})()

// 展示弹窗
function openModal() {
  const modal = new Modal()
}

// 文字改变

function changeText() {
  const btn = document.getElementById('open')
  btn.innerText = '检测中'
}

// 按钮变灰色

function disabledBtn() {
  const btn = document.getElementById('open')

  btn.setAttribute('disabled', true)
}
