function GouZaoFunc() {}
console.log('构造函数的prototype === 构造函数的原型对象', GouZaoFunc.prototype)

const insObj = new GouZaoFunc()

console.log(
  '实例对象的__proto__ === 构造函数的原型对象',
  insObj.__proto__ === GouZaoFunc.prototype
)

console.log(
  '构造函数的原型对象的constructor === 构造函数',
  GouZaoFunc.prototype.constructor === GouZaoFunc
)
