/**
 * 迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，不需要暴露该对象的内部表示
 * 迭代器分为：内部迭代器和外部迭代器
 * 聚合对象：拥有length属性 可以通过下标访问
 * 迭代器模式：目的性极强的设计模式，解决的问题就是遍历
 */

const Iterator = function (obj) {
  let curr = 0

  let next = function () {
    curr += 1
  }
  let done = function () {
    return curr >= obj.length
  }
  let getCurr = function () {
    return obj[curr]
  }
  return {
    next,
    done,
    getCurr,
  }
}

function iteratorGenerator(list) {
  let idx = 0 // 记录当前的索引
  let len = list.length

  return {
    next() {
      let done = idx >= len
      let value = !done ? list[idx++] : undefined

      return {
        done,
        value,
      }
    },
  }
}
