/**
 * 策略模式：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换
 */

const strategies = {
  // 不为空
  isNonEmpty: function (val, errMsg) {
    if (val === '') {
      return errMsg
    }
  },
  // 限制最小长度
  minLen(val, len, errMsg) {
    if (val.length < len) {
      return errMsg
    }
  },
  // 是否是手机号
  isMo(val, errMsg) {
    if (/(^1[3|5|8][0-9]{9}$)/.test(val)) {
      return errMsg
    }
  },
}
/**
 * 校验函数
 */
const validateFunc = function () {
  const v = new Validator() // 创建校验对象
  v.add()
  v.add()
  v.add()

  const errMsg = v.start() // 获得校验结果
}

const formNode = document.getElementById('form')
formNode.onsubmit = function () {
  const errMsg = validateFunc()
  if (errMsg) {
    // 如果errMsg 有返回值 说明校验没有通过
    return false
  }
}

function Validator() {
  this.cache = [] // 保存校验规则
}

Validator.prototype.add = function () {}
Validator.prototype.start = function () {}
