# Promise

## Promise 是什么

- 优点：

  - 支持链式调用，可以解决回调地狱问题
  - 指定回调函数的方式更加灵活
    `Promise:启动异步任务 => 返回Promise对象 => 给Promise对象绑定回调函数（甚至可以在异步任务结束指定/多个）`

- fs 文件操作

  ```js
  require("fs"), readFile("./index.html", (err, data) => {});
  ```

- 数据库操作
- AJAX

  ```js
  $.get("/server", (data) => {});
  ```

- 定时器

  ```js
  setTimeout(() => {}, 2000);
  ```

## 异步编程

### Promise 的状态

实例对象中的一个属性 [PromiseState]

- pending 未决定的
- resolved / fullfilled 成功
- rejected 失败

### Promise 对象的值

实例对象中的另一个属性 [PromiseResult]
保存着异步任务[成功/失败] 的结果

- resolve
- reject

## Promise API

1. Promise 构造函数：Promise(excutor){}
   1. executor 函数：执行器 (resolve,reject) =>{}
   2. resolve 函数：内部定义成功时我们调用的函数 value=>{}
   3. reject 函数：内部定义失败时我们调用的函数 reason=>{}
      说明：executor 会在 Promise 内部立即同步调用，异步操作在执行器中执行
2. Promise.prototype.then 方法(value,reason)=>{}
   1. 成功回调函数(value) => {}
   2. 失败回调函数(reason) =>{}
    说明：指定用于得到成功value的成功回调和用于得到失败reason的失败回调，返回一个新的Promise对象

## Promise 关键问题

## Promise 自定义封装(手写Promise)

## async 与 await
