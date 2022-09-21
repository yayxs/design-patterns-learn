/**
 * 适配器模式通过把一个类的接口变换成客户端期待的另一种接口
 */

class Http {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: this.changeData(data),
      })
    })
  }
  static changeData(obj) {
    let prop,
      str = '',
      i = 0
  }
}
