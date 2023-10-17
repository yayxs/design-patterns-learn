const Fei = function () {}

Fei.prototype.fire = function () {
  console.log('发射1111111')
}

const Cls1Decorator = function (fei) {
  this.fei = fei
}

Cls1Decorator.prototype.fire = function () {
  this.fei.fire()
  console.log('发射2222222222')
}

const Cls2Decorator = function (fei) {
  this.fei = fei
}

Cls2Decorator.prototype.fire = function () {
  this.fei.fire()
  console.log('发射333333333')
}

let feiji = new Fei()
feiji = new Cls1Decorator(feiji)
feiji = new Cls2Decorator(feiji)

feiji.fire()
