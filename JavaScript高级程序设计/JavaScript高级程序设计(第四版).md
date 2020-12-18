# JavaScript高级程序设计(第四版);

注：前三章知识点在JavaScript权威指南里面

## 第四章  变量、作用域与内存（新知识点）

### 原始值和引用值

- ES的变量可以包含两种不同类型的数据：原始值和引用值
  - 原始值：最简单的数据
  - 引用值：由多个值构成的对象
- 保存原始值的变量是**按值**访问的
- 引用值：保存在内存中的对象。
- JavaScript不允许直接访问内存位置，也就不能直接操作对象所在的内存空间。所转移在操作对象的时候，实际上的操作是对该对象的引用。为此，保存引用值的变量是**按引用**访问的

#### 动态属性

- 原始类型的初始化可以只使用原始字面量形式。
- 如果使用new关键字，则js会自动创建一个Object类型的实例

例

```javascript
let name1 = "test";
let name2 = new String("test2");
name1.age = 24;
name2.age = 26;
console.log(name1.age);		//undefined
console.log(name2.age);		//26
console.log(typeof name1);	//string
console.log(typeof name2);	//object
```

#### 复制值

除了存储方式不同，原始值和引用值在通过变量复制时也有所不同。

- 复制数值时，如Number类型数据，两个变量可以完全独立使用，互不干扰
- 把引用值从一个变量变成另一个变量的时候，存储变量的值也会被复制到新变量所在的位置。**这里复制的实际上是一个指针**，所以实际上，这两个只是指向的值是相等的。

例

```javascript
let obj1 = new Object();
let obj2 = obj1;
obj1.name = "test";
console.log(obj2.name);//test
obj1.name = "test2";
console.log(obj1.name);//test2
console.log(obj2.name);//test2
```

#### 传递参数

- ECMAScript中所有的参数都是按值传递的。
- 在按值传递参数时，值会被复制到一个局部变量
- ECMAScript中函数的参数就是局部变量

#### 确定类型

- typeof操作符在用于检测函数时，也会返回“function”
- typeof对正则表达式也返回function

### 执行上下文与作用域

- 每个上下文都有一个关联的变量对象
- 全局上下文：window对象。因此，所有通过var定义的全局变量的函数都会成为window对象的属性和方法。
- 上下文中的代码执行的时候，会创建变量对象的一个**作用域链**

#### 作用域链增强

### 垃圾回收

JavaScript是使用垃圾回收的语言

- 最常用的垃圾回收策略是**标记清理**

