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

## 第五章 基本引用类型

### String

#### 字符串大小写转换

- `toLowerCase()`
- `toLocaleLowerCase`
- `toUpperCase`
- `toLocaleUpperCase`

#### 字符串模式匹配方法

- `match()`:接收一个参数，可以是正则表达式字符串，也可以是RegExp对象
  - 如果检索到则返回第一个匹配的索引位置，如果没有找到则返回-1
- `replace()`：**简化字符串替换操作**。接收两个参数，第一个参数是RgeExp对象或一个字符串，第二个参数可以是一个字符或一个函数。
- `split()`:会根据传入的分隔符将字符串拆分成数组。
  - 可以是字符串，也可以是RegExp对象
  - 第二个参数是数组的大小。

#### `localCompare()`方法

- `localCompare()`:比较两个字符串，返回如下3个值之一
  - 如果按照字符表顺序，字符串应该排在字符串参数前头，则返回负值
  - 如果字符串与字符串参数相等，则返回0
  - 如果按照字母表顺序，字符串应该排在字符串参数后头，则返回指正

## 单例内置对象

内置对象的定义：“任何由ECMAscript实现提供、与宿主环境无关，并在ECMAScript程序开始执行时就存在的对象”

### Global

在全局作用域中定义的变量和函数都会变成Global对象的属性。

### Math

提供Math对象作为保存数学公式、信息和计算的地方。

#### `Min()`方法和`Max()`方法

用于确定一组数值中的最小值和最大值

#### 舍入方法

- `Math.ceil()`:从上舍入为最接近的整数
- `Math.floor()`：向下舍入为最接近的整数
- `Math.round()`：执行四舍五入
- `Math.fround()`：返回数值最接近的单精度浮点值表示

#### `random()`方法

`Math.random()`方法返回一个0~1范围内的随机数，包含0但是不包含1

