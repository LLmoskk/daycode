const sleep = (seconds) => new Promise(resolve => setTimeout(resolve,seconds))

function delay (func, seconds, ...args) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      Promise.resolve(func(...args)).then(resolve).catch(reject);
    },seconds);
  })
}

// 在 3s 之后返回 hello, world
// await delay((str) => str, 3000, 'hello, world')

// 在 3s 之后返回 hello, world，第一个函数可返回 promise
// await delay((str) => Promise.resolve(str), 3000, 'hello, world')

// 测试用例
console.log(new Date())
delay((str) => {
  console.log(new Date())
  return str
}, 3000, 'hello').then(o => console.log(o))