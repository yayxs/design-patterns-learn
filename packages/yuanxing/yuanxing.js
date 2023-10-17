/**
 * 原型模式不仅是是设计模式 也是编程范式
 * 利用实例来描述对象 实例作为定义对象和继承的基础
 */

const a = {
  name: 'a',
  list: ['a'],
}

const aStr = JSON.stringify(a)
const aCopy = JSON.parse(aStr)

function deepCopy() {}

console.log('原型 run')
