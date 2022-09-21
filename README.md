# JavaScript 设计模式

> 本文较少包含原生 js 的原型以及原型链的相关内容，以及手写 vue 的发布者-订阅模式。后续会更新在手写实现系列

## 前言

不知不觉这已经是前端厚说的第四大篇了，在前端的圈子里很少有人分享设计模式相关的，东西至于为什么分享这篇，我想我有几点要说的

- 1 设计模式是大学里的导师才会提及的，在实际的开发中很少用到，会写代码不算的优秀，会组织代码才行
- 2 面试的时候面试你的不仅仅是前端开发者，一些“上了年纪的”领导基本都会问你设计模式，因为这是他们基本功
- 3 正是计算机网络和设计模式，操作系统这些核心的本才是区别能否走的长久

好啦，`html` `css` `javascript` 那么本篇就来说一说`设计模式` 吧

## 什么是设计模式？

> 在面向对象的软件设计过程中针对特定问题的简洁优雅的解决方案

或者说是一种编程的套路，让代码更好的维护等

## 常见的设计模式有哪些？

一般我们所说的设计模式差不多有`23` 中。比较有`js` 特色的就是 `原型模式` 以及 vue 中不识庐山真面目的`观察者模式`

## 构造器模式

首先我们来聊一聊第一个设计模式，那就是**构造器模式** 可能看文章的小伙伴对这个名字有点陌生，让我们把时光拉到小学的时候，或者中学，此时你是班级里的班长，老师班主任的二把手，接着让你出一版班级里的花名册。这时候就是你大展身手的时候了。

- 学生一 班花 王二花
- 学生二 班草 李二蛋
- 等等……

那你说好办

```javascript
const wangerhua = {}

wangerhua.name = 'weh'
wangerhua.age = 16
wangerhua.sex = '女'

const lierdan = {}

lierdan.name = 'led'
lierdan.age = 15
lierdan.sex = '男'
```

为了在你的女神`三菜` 面前耍一手，你熬夜写了班级全部的`40` 多人，眼看花名册即将完事，你满怀期待的发给你的女神，打算先让她看看……，但是呢，作为旁观者的我们呢，发现是有点问题的，这样熬夜效率不高，虽然也能造出一个花名册，但是此举并不会得到女神的芳心。改进下吧

```javascript
function Student() {
  this.name = 'wangerhua'
  this.age = '16'
  this.sex = '女'
}
// 然后通过`new` 关键词 活生生的`new` 出 一个王二花
```

但是现在是写死的肯定不行，把`三菜` 放在何处对吧，那好办

```javascript
// 然后通过`new` 关键词 活生生的`new` 出 一个王二花

function Student(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
}

const 王二花 = new Student('', '', '')
const 李二蛋 = new Student('', '', '')
```

或者我们使用最舒服的方式`es6` 的`class` 方式

```javascript
class Student {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
}
```

## 工厂模式

其核心目的是为了实现无脑的传参。将创建对象的过程单独封装.较快的生成几类对象

```js
function Persion(name, age, profession, work) {
  this.name = name
  this.age = age
  this.profession = profession
  this.work = work
}
```

- 第一个简单的工厂

```js
function Factory(name, age, profession) {
  let work // 是干什么的
  switch (profession) {
    case 'coder':
      work = ['摸鱼']
      break
    case 'coder':
      work = ['摸鱼']
      break
    case 'Fisherman':
      work = ['捕鱼']
    default:
      break
  }
  return new Persion(name, age, profession, work)
}
```

- 第二个工厂

  我们设想一个场景，我记得笔者在`高二` 年级的时候是文理分科的，我想大多在文章的你是理科生，好的那我们就来看一下这个工厂

  ```javascript
  // name 你的名字
  // choose 你的选择
  function factory(name, choose) {
    let stu = []
    if (type === '理科生') {
      stu = ['敲代码', '摸鱼']
    } else {
      stu = ['琴棋', '书画']
    }
    return new Student(name, stu)
  }

  const yayxs = factory('洋小洋同学', '理科生')
  ```

## 单例模式 The Singleton Pattern

- 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
- 一些应用场景：线程池 全局缓存 还有浏览器的`window对象`
- 优秀的项目：我们的`vuex` 就是应用了单例模式保证全局`store`
- 实现的思路：是用一个变量来标志当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象

如果能封装一个全局缓存的话，大致包括 `get` 和 `set`

```js
class Storage {
  get(k) {
    return localStorage.getItem(k)
  }
  set(k, val) {
    return localStorage.setItem(k, val)
  }
}
```

一些实现思路：

```js
class SingletonMode {
  sayHi() {
    console.log('你好，我是单例模式')
  }
  static isHaveInstance() {
    if (!SingletonMode.isHaveInstance) {
      // 不存在采取重新创建
      SingletonMode.instance = new SingletonMode()
    }

    return SingletonMode.instance
  }
}
```

我们还是简单的说一下`vuex` 中，如果我们不能控制全局一个`vuex` 的话，那我们的数据就会乱了套了，不是吗

```javascript
let vue
export function install(_vue) {
  if (Vue && _vue === vue) {
    // 首先都是先判断是否已经存在，如果已经存在的话就不重新创建了
    return
  }
  Vue = _vue
}
```

我们通过上述的的 code 片段，能够得到要想实现单例模式，可以用一个变量来标记这个类是否已经创建过对象，接着完善一下`全局缓存`

```js
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
```

不过在`js` 中，全局变量不是单例模式

## 策略模式 Strategy Pattern

```js
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
```

## 原型模式(创建一个对象)

> 在 Brendan Eich 为 JavaScript 设计面向对象系统时，借鉴了 Self 和 Smalltalk 这两门基于原型
> 的语言。之所以选择基于原型的面向对象系统，并不是因为时间匆忙，它设计起来相对简单，而
> 是因为从一开始 Brendan Eich 就没有打算在 JavaScript 中加入类的概念。

接下来我们提到的原型模式不仅仅是一个设计模式，也被称之为一种编程的泛型。

- 作用适用于创建对象的一种模式

原型模式的实现关键，是语言本身是否提供了 clone 方法。`ECMAScript 5` 提供了 `Object.create`方法，可以用来克隆对象。因为本文主要是介绍分享`设计模式相关` 不会具体分析 js 的`api`

```js
class Coder1 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  like() {
    console.log('i like mofish')
  }
}

function Coder2(name, age) {
  this.name = name
  this.age = age
}
Coder2.prototype.like = function () {
  console.log('i like mofish')
}
```

- `构造函数Coder2`.prototype.constructor===构造函数 Coder2
- `实例对象coderYayxs`.**proto** // 原型对象 {like: ƒ, constructor: ƒ}

> 当我试图访问一个 JavaScript 实例的属性/方法时，它首先搜索这个实例本身；当发现实例没有定义对应的属性/方法时，它会转而去搜索实例的原型对象；如果原型对象中也搜索不到，它就去搜索原型对象的原型对象，这个搜索的轨迹，就叫做原型链。

或者说，我们通过`es5` 的语法来创建一个对象，当然比如当前的学生有个说自己名字的能力，至于这个能力是每个人都拥有的

```javascript
function Student(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex

  function sayName() {
    console.log(`Iam ${this.name}`)
  }
}

const 王二花 = new Student('', '', '')
const 李二蛋 = new Student('', '', '')
```

这时候我们可以把通用的能力放在`构造函数` 的外部，然后类似这样的代码

```javascript
function Student(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
  // 引用了sayName函数
  this.sayName = sayName
}

function sayName() {
  console.log(`Iam ${this.name}`)
}
```

接着我们使用原型的方式，类似上文的程序员 `coder` 然后把通用的能力（这里暂且这样称之吧） 放在原型上

```javascript
Student.prototype.sayName = function () {}
```

## 装饰器模式(Nest.js 中应用）

它的定义是“在不改变原对象的基础上，通过对其进行包装拓展，使原有对象可以满足用户的更复杂需求”。

```ts
import { Controller, Get } from '@nestjs/common'

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats'
  }
}
```

## 适配器模式(axios 中应用)

- 应用
  - 至于为什么说在`axios` 中有应用，之所以`axios` 是如此优秀的一个库，是因为它的 api 足够统一，却带来的在`浏览器` 以及`node` 环境 统一的请求能力，这是因为在库中已经做了适配，调用者使用者只需要传入统一化的参数即可
  - 还有就是在`vue` 的组件化开发中使用计算属性对一些怪异的数据进行转换适配等

## 代理模式 Proxy Pattern

- 定义：在某些情况下，出于种种考虑/限制，一个对象不能直接访问另一个对象，需要一个第三者（代理）牵线搭桥从而间接达到访问目的，这样的模式就是代理模式。`es6中` 的`proxy` 一个 Proxy 对象包装另一个对象并拦截诸如读取写入等其他的操作,简言之，拦截对象的操作。为一个对象提供一个代用品或占位符，以便控制对它的访问
- 场景：图片的懒加载、合并`http `请求
- 其他代理：
  - 防火墙代理
  - 远程代理
  - 保护代理
  - 智能引用

```js
const user = {
  name: 'lee',
  age: 18,
}

/**
 * 参数一 target目标对象  要包装的对象（可以是函数）
 * 参数二 handler对象    代理配置 拦截操作方法
 */
const proxy = new Proxy(user, {
  get(user, key) {},
  /**
   * 参数一 target目标对象
   * 参数二 prop目标属性名称
   * 参数三 val 目标属性的值
   * 参数四
   */
  set: function (user, key, val) {},
})
```

虚拟代理的一种场景，图片的预加载

```js
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
```

## 观察者模式/发布-订阅模式

观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新，有人也称之为`发布者订阅模式`

```js
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
```

```js
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
```

## 迭代器模式 Iterator

```js
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
```

`MDN` 有关于 [**迭代协议**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) 相关的内容

## 模式与重构

**设计模式的目的就是为许多重构行为提供目标**

1、提炼函数：把函数的功能点更细粒度

```js
// 每个函数判断一种类型
const toString = Object.prototype.toString
const hasOwnProperty = Object.prototype.hasOwnProperty

const isObject = (value) => {
  return toString.call(value) === '[object Object]'
}

const isArray = (value) => {
  return toString.call(value) === '[object Array]'
}
```

2、过长的条件分支语句拆成函数

```js
const nameOk = (val) => {
  if (typeof val !== 'string') return false
  const NAME_KW_ARR = ['van', 'lee']
  const nameOk = NAME_KW_ARR.some((name) => val.includes(name))

  return nameOk
}
```

3、少使用三目运算符
4、使用`return` 退出多层循环

## 资料

- [JavaScript patterns](https://www.patterns.dev/posts/introduction/)
- [设计模式](https://refactoringguru.cn/design-patterns)
