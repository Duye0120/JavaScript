# JavaScript 高级程序设计(第四版);

注：前三章知识点在 JavaScript 权威指南里面

## 第四章 变量、作用域与内存（新知识点）

### 原始值和引用值

- ES 的变量可以包含两种不同类型的数据：原始值和引用值
  - 原始值：最简单的数据
  - 引用值：由多个值构成的对象
- 保存原始值的变量是**按值**访问的
- 引用值：保存在内存中的对象。
- JavaScript 不允许直接访问内存位置，也就不能直接操作对象所在的内存空间。所转移在操作对象的时候，实际上的操作是对该对象的引用。为此，保存引用值的变量是**按引用**访问的

#### 动态属性

- 原始类型的初始化可以只使用原始字面量形式。
- 如果使用 new 关键字，则 js 会自动创建一个 Object 类型的实例

例

```javascript
let name1 = "test";
let name2 = new String("test2");
name1.age = 24;
name2.age = 26;
console.log(name1.age); //undefined
console.log(name2.age); //26
console.log(typeof name1); //string
console.log(typeof name2); //object
```

#### 复制值

除了存储方式不同，原始值和引用值在通过变量复制时也有所不同。

- 复制数值时，如 Number 类型数据，两个变量可以完全独立使用，互不干扰
- 把引用值从一个变量变成另一个变量的时候，存储变量的值也会被复制到新变量所在的位置。**这里复制的实际上是一个指针**，所以实际上，这两个只是指向的值是相等的。

例

```javascript
let obj1 = new Object();
let obj2 = obj1;
obj1.name = "test";
console.log(obj2.name); //test
obj1.name = "test2";
console.log(obj1.name); //test2
console.log(obj2.name); //test2
```

#### 传递参数

- ECMAScript 中所有的参数都是按值传递的。
- 在按值传递参数时，值会被复制到一个局部变量
- ECMAScript 中函数的参数就是局部变量

#### 确定类型

- typeof 操作符在用于检测函数时，也会返回“function”
- typeof 对正则表达式也返回 function

### 执行上下文与作用域

- 每个上下文都有一个关联的变量对象
- 全局上下文：window 对象。因此，所有通过 var 定义的全局变量的函数都会成为 window 对象的属性和方法。
- 上下文中的代码执行的时候，会创建变量对象的一个**作用域链**

#### 作用域链增强

### 垃圾回收

JavaScript 是使用垃圾回收的语言

- 最常用的垃圾回收策略是**标记清理**

## 第五章 基本引用类型

### String

#### 字符串大小写转换

- `toLowerCase()`
- `toLocaleLowerCase`
- `toUpperCase`
- `toLocaleUpperCase`

#### 字符串模式匹配方法

- `match()`:接收一个参数，可以是正则表达式字符串，也可以是 RegExp 对象
  - 如果检索到则返回第一个匹配的索引位置，如果没有找到则返回-1
- `replace()`：**简化字符串替换操作**。接收两个参数，第一个参数是 RgeExp 对象或一个字符串，第二个参数可以是一个字符或一个函数。
- `split()`:会根据传入的分隔符将字符串拆分成数组。
  - 可以是字符串，也可以是 RegExp 对象
  - 第二个参数是数组的大小。

#### `localCompare()`方法

- `localCompare()`:比较两个字符串，返回如下 3 个值之一
  - 如果按照字符表顺序，字符串应该排在字符串参数前头，则返回负值
  - 如果字符串与字符串参数相等，则返回 0
  - 如果按照字母表顺序，字符串应该排在字符串参数后头，则返回指正

## 单例内置对象

内置对象的定义：“任何由 ECMAscript 实现提供、与宿主环境无关，并在 ECMAScript 程序开始执行时就存在的对象”

### Global

在全局作用域中定义的变量和函数都会变成 Global 对象的属性。

### Math

提供 Math 对象作为保存数学公式、信息和计算的地方。

#### `Min()`方法和`Max()`方法

用于确定一组数值中的最小值和最大值

#### 舍入方法

- `Math.ceil()`:从上舍入为最接近的整数
- `Math.floor()`：向下舍入为最接近的整数
- `Math.round()`：执行四舍五入
- `Math.fround()`：返回数值最接近的单精度浮点值表示

#### `random()`方法

`Math.random()`方法返回一个 0~1 范围内的随机数，包含 0 但是不包含 1

## 第六章 集合引用类型

### Object

- 大多数引用值的实例都是使用 Object 类型，它也是 ES 中最常用的类型之一。
- 适合存储和在应用程序之间交换数据

- 创建 Object 实例的两种方式

  - 第一种，使用 new 操作符和 Object 构造函数

    - ```javascript
      let person = new Object();
      person.name = "Duye";
      person.age = 29;
      ```

  - 第二种，使用**对象字面量**表示法**更倾向于这一种**

    - ```javascript
      let person = {
        name: "Duye",
        age: 20,
      };
      ```

    - ```javascript
      function displayInfo(args) {
        let output = "";
        if (typeof args.name == "string") {
          output += "Name: " + args.name + "\n";
        }
        if (typeof args.age == "number") {
          output += "Age: " + args.age + "\n";
        }
        alert(output);
      }
      displayInfo({
        name: "Duye",
        age: 20,
      });
      displayInfo({
        name: "test",
      });
      ```

### **Array**

- 除了 Object，Array 是 ES 中最常用的类型了
- ES 数组也是一组有序的数据，但不同的是，数组中每个槽位可以存储任意类型的数据，比如第一个是字符串，第二个是数值，第三个是对象
- 数组也可以是动态大小的，会随着数据添加自动增长。

#### 创建数组

```javascript
// 1.使用Array构造函数
let colors = new Array();
let colors = new Array(20); //创建一个初始值length为20的数组
let colors = new Array("red", "blue", "green"); //创建一个包含三个字符串的数组
// 在使用构造函数时，也可以省略new操作数
let colors = Array(3);

// 另一种使用数组字面量。数组字面量是在中括号中包含以逗号分隔的元素列表
// 不会调用Array()构造函数
let colors = ["red", "green", "blue"];
let name = [];
let values = [1, 2]; //最后一个逗号的效果，values是一个包含两个值的数组
```

- ES6 新增，用于创建数组的静态方法
  - `from()`:用于将**数组结构**转换为数组实例
    - 第一个参数是一个类数组对象，任何可迭代的结构，或者有一个 length 属性和可索引元素的结构。
  - `of()`：用于将**一组参数**转换为数组实例

#### 数组索引

```javascript
//  要取得或设置数组的值，需要使用中括号，并提供相应的数字索引
let colors = ["red", "green", "blue"];
alert(colors[0]); // 显示第一项
colors[2] = "black"; // 修改第三项
colors[3] = "brown"; // 创建第四项
```

#### 检测数组

在只有一个网页的情况下，使用`instanceof`操作符

```javascript
if (value instanceof Array) {
  // 操作数组
}
```

`Array.isArray()`方法：确定一个值是否为数组，而不用管它是哪个全局执行上下文中创建的

```javascript
if (Array.isArray(value)) {
  // 操作数组
}
```

#### 复制和填充方法

`fill()`批量复制方法和`copyWith()`填充数组方法：包括开始索引，不包含结束索引

#### 转换方法

```javascript
let person1 = {
  toLocaleString() {
    return "duye";
  },
  toString() {
    return "duye1";
  },
};
let person2 = {
  toLocaleString() {
    return "test";
  },
  toString() {
    return "test_1";
  },
};

let people = [person1, person2];
alert(people);
alert(people.toString());
alert(people.toLocaleString());

let colors = ["red", "green", "blue"];
alert(colors.join(","));
alert(colors.join("||"));
```
