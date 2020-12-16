# JavaScript 权威指南

## JavaScript 概述

1. 轻型的，解释型程序设计语言，具有面向对象的能力
2. 它的变量不必具有一个明确的类型
3. 可能的用途：编写执行任意计算的程序
4. 对浏览器的控制

cookie 是客户永久性存储或暂时存储的少量数据状态。cookie 将随网页被服务器发送给客户，客户在本地将它们存储起来。

### 1.6.6 更多的特性

    * 可以改变img标签，产生图片翻转和动画的效果
    * js可以和java小程序或其他出现在浏览器中的嵌入对象进行交互

- 可以执行任何计算，有浮点数据、操作这种类型的算术运算符以及所有的标准浮点运算函数
  - date 对象简化了计算和使用日期与实践的方法

### 1.6.7 不能做什么

    * 不具有任何图形处理能力
    * 不允许对文件进行读写操作
    * 不支持任何形式的联网技术

# JavaScript 的核心

- 词语结构
- 数据类型和值
- 变量
- 表达式和运算符
- 语句
- 函数
- 对象
- 数组
- 使用正则表达式的模式匹配
- JavaScript 的更多主体

## 词语结构

### 2.1 字符集

 JavaScript 每个字符都是用两个字节表示的

### 2.2 大小写敏感

### 2.3 空白符和换行符

### 2.4 可选的分号

 分隔语句，使用( ; )，如果语句分别放置在不同的行中，就可以省去分号，但是如果不分行，就必须写分号

### 2.5 注释（单行注释/多行注释）

### 2.6 直接量

### 2.7 标识符

    * 用来命名变量和函数，或者作为某些循环的标签
    * 第一个字符必须是字母、下划线或美元符号
    * 标识符不能和js的关键字同名

### 2.8 保留字

## 数据类型和值

    * 计算机程序时通过操作值来运行的。
    * js允许使用的三种基本数据类型——数字、文本字符串、布尔值，null和undefined
    * 复合数据类型——对象，对象表示的是值的集合。
    * 无序集合和有序集合（数组）
    * 特殊的对象——函数(function)

![image-20201213111502570](C:\Users\Dario\AppData\Roaming\Typora\typora-user-images\image-20201213111502570.png)

转义序列"\"

![image-20201213111939921](C:\Users\Dario\AppData\Roaming\Typora\typora-user-images\image-20201213111939921.png)

![image-20201213111949706](C:\Users\Dario\AppData\Roaming\Typora\typora-user-images\image-20201213111949706.png)

大多数 js 运算符都是二元运算法，三元运算符"?:"

# 第七章 函数

函数是 js 中重要且复杂的部分

## 函数的定义和调用

例 7-1

```javascript
// 有时快捷函数比document.write()方法更有用
// 由于该函数没有return语句，所有没有返回值
function print(msg) {
  document.write(msg, "<br>");
}
// 以下是计算并返回两点之间距离的函数
function distance(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}
// 以下是一个递归函数（调用自身的函数），计算阶乘的值
function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
```

在调用函数时，先要计算括号之间指定的所有表达式，然后把它们的结果作为函数的参数。

函数 print()不包含 return 语句。所以它返回的值总是 undefined。

v3 以后，函数定义可以嵌套在其他函数中

例：

```javascript
function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}
```

函数定义不能出现在循环或条件语句中。

### Function（）构造函数

 function 语句并非是定义新函数的唯一方法。

```javascript
var f = new Function("x", "y", "return x*y;");
function f(x, y) {
  return x * y;
}
```

上面两个函数是等价的。

`Function()`构造函数可以接受任意多个字符串参数。最后一个参数是函数的主体。

主体中可以包含任何 JavaScript 语句，语句之间用分号分割。其他的参数都是用来说明函数要定义的形式参数名的字符串。

`传递给Function()的参数没有一个用于说明它要创建的函数名`

### 函数直接量

第三种 创建函数的方式。

```javascript
//定义函数的三种方式
function f(x) {
  return x * x;
} //function语句
var f = new Function("x", "return x*x;"); //Function()构造函数
var f = function (x) {
  return x * x;
}; //函数直接量
```

虽然直接量创建的是未命名函数，但是它的语法也规定它可以指定函数名

例

```javascript
var f = function fact(x) {
  if (x <= 1) return 1;
  else return x * fact(x - 1);
};
```

定义了一个未命名函数，然后把它的引用存储在变量 f 中。

适用于那些只使用一次，而且无需命名的函数。创建的是未命名函数

```javascript
//一个函数直接量表达式指定的函数可以存储在一个变量中，传递给其他的函数甚至被直接调用
a[0] = function(x) {return x*x; }; 		//定义一个函数并保存它
a.sort{function(a,b){return a -b;}};	//定义一个函数，并把它传递给另外一个函数
var tensquared = (function(x) {return x*x;})(10);	//定义并调用一个函数
```

## 作为数据的函数

函数最重要的特性就是它们能够被定义和调用。

在 JavaScript 中，函数并不只是一种语法，还可以是数据，意味着可以把函数赋给变量、存储在对象的属性中或存储在数组的元素中、传递给函数，等等。

```javascript
//定义创建了一个新的函数对象。并把这个对象赋值给变量square
function square(x) {
  return x * x;
}
var a = square(4); //a存放数字16
var b = square; //现在b引用的函数和square的作用相同
var c = b(5); //c存放数字25
```

除了赋值给全局变量之外，讲函数赋给对象的属性，我们称函数为方法

```javascript
var o = new object();
o.square = new Function("x", "return x*x"); //注意Function()构造函数
y = o.square(16); //y=256
```

例 7-2：将函数作为数据的用法

```javascript
<script>
        // 定义了一些简单的函数
        function add(x, y) { return x + y; };
        function subtract(x, y) { return x - y; };
        function multiply(x, y) { return x * y; };
        function divide(x, y) { return x / y };
        // 以下函数可以将上面的某个函数作为参数
        // 它的两个参数是两个运算数
        function operate(operator, operand1, operand2) {
            return operator(operand1, operand2);
        }
        // 我们可以调用该函数来计算值（2+3） + （4*5）；
        var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
        console.log(i);

        //考虑到本例的需要，我们再次实现了这些函数这次，直接使用函数直接量
        // 我们吧这些函数存放在一个关联数组中
        var operators = new Object();
        operators["add"] = function (x, y) { return x + y; };
        operators["substract"] = function (x, y) { return x - y; };
        operators["multiply"] = function (x, y) { return x * y; };
        operators["divide"] = function (x, y) { return x / y; };
        operators["pow"]  = Math.pow;   //也用于预定义函数

        // 以下的函数将运算符名作为参数，在数组中检索这个运算符
        // 然后对运算数调用检索到函数
        // 注意调用这个运算符函数的语法
        function operate2(op_name,operand1,operand2){
            if (operators[op_name] == null) {
                return "unkown oprator"
            }else{
                return operators[op_name](operand1,operand2);
            }
        }
        // 我们可以采用如下的方式调用该函数计算值("hello" + " " +"world");
        var j = operate2("add","hello",operate2("add"," ", "world"))
        // 使用预定义的Math.pow()函数：
        var k = operate2("pow",10,2)
        console.log('---------------');
        console.log(j);
        console.log('---------------');
        console.log(k);
</script>
```

## 函数的作用域：调用对象

JavaScript 函数的主体是在局部作用域中执行的

用 var 语句声明的局部变量创建后作为调用对象的属性。

## 函数的实际参数：Arguments 对象

标识符 arguments 具有特殊含义。它是调用对象的一个特殊属性，用来引用 Arguments 对象.

Argumenst 对象就像是数组，可以按照数组传递给函数参数值。

arguments[]还为 js 函数开发了一项重要的功能,`可以编写函数,使之能够使用任意数目的实际参数`

例：是否使用了正确数目的实际参数。

```javascript
function f(x, y, z) {
  //首先检查传递的参数数量是否正确
  if (arguments.length != 3) {
    throw new Error(
      "function f called with " +
        arguments.length +
        "arguments,but it expects 3 arguments."
    );
  }
  // 下面运行真正的函数
}

function max() {
  var m = Number.NEGATIVE_INFINITY;
  //遍历所有的参数，检索并保存其中最大的参数
  if (arguments[i] > m) m = arguments[i];
  return m;
}
var largest = max(1, 10, 2, 3, 1000, 4, 5, 10000, 6);
```

## 属性 length

arguments 数组的 length 属性制定了传递给该函数的实际参数数目。

但是函数自身的 length 属性的含义却不是这样，是只读特性，返回的是函数需要的实际参数的数目，也就是在函数的形式参数列表中声明的参数的数目。

```javascript
function check(args) {
  var actual = args.length; //实际的参数个数
  var expected = args.callee.length; //要求的参数个数
  if (actual != expected) {
    throw new Error(
      "Wrong number of arguments:expected: " +
        expectd +
        "; actually passed " +
        actual
    );
  }
}
function f(x, y, z) {
  //检查实际的参数个数和期望的参数个数是否匹配
  //如果它们不匹配，则抛出异常
  check(arguments);
  return x + y + z;
}
```

## 方法 apply()和 call()

call()和 apply()的第一个参数都是要掉用函数的对象，在函数体内这一参数是关键字 this 的值。

call()的剩余参数是传递给调用的函数的值。

# 第八章 对象

## 对象和属性

对象是一种复合型数据类型，将多个数据值集中在一个单元中，而且允许使用名字来存储这些值

对象是一个无序的属性集合，每个属性都有自己的名字和值。存储在已命名的值既可以是数字和字符串这样的初始值，也可以是对象。

js 支持内部构造函数。可以用另一种简洁的方式初始化新创建的对象。

```javascript
var now = new Date(); //当前的日期和时间
var new_years_eve = new Date(2000, 12, 31); //表示2000年12月31日
```

对象提供了另一种创建并初始化对象的方式。

对象直接量由属性说明列表构成，每个属性说明都由属性名加冒号和属性值构成。

```javascript
var circle = { x: 0, y: 0, radius: 2 };
var homer = {
  name: "Homer Simpson",
  age: 34,
  married: true,
  occupation: "plant operator",
  email: "homer@simpsons.com",
};
```

### 属性的设置和查询

对象的属性和变量的工作方式相似，既可以把值存储到其中，也可以从中读取值

```javascript
//创建一个对象，并把对它的引用保存到一个变量中
var book = new Object();
// 设置该对象的属性
book.title = "JavaScript:The Definitive Guide";
// 设置更多的属性。注意嵌套的对象。
book.chapter1 = new Object();
book.chapter1.title = "Introduction to JavaScript";
book.chapter1.pages = 19;
book.chapter2 = { title: "Lexical Structure", pages: 6 };

// 读取该对象的某些属性值
alert(
  "Outline:" +
    book.title +
    "\n\t" +
    "Chapter 1" +
    book.chapter1.title +
    "\n\t" +
    "Chapter 2" +
    book.chapter2.title
);
```

### 属性的枚举

for/in 循环提供了一种遍历（枚举）对象属性的方法。

代码展示了一个函数，可以用它列出对象的所有属性名

```javascript
function DisplayPropertyName(obj) {
  var names = " ";
  for (var name in obj) names += name + "\n";
  alert(names);
}
```

## 构造函数

 构造函数是具有两个特性的 JavaScript 函数

    	- 它由new运算符调用
    	- 传递给它的是一个对新创建的空对象的引用，将该引用作为关键字this的值，而且它还要对新创建的对象进行适当的初始化。

例 8-1

```javascript
			// 定义构造函数
			// 注意它如何初始化this函数
			function Rectangle(w,h){
				this.width = w;
				this.height = h;
			}
			// 调用构造函数创建两个矩形对象
			// 注意，我们把宽度和高度传递给了构造函数，这就他就能正确初始化每个新对象了
			var rect1 = new Rectangle(2,4);
			var rect2 = new Rectangle(8.5,11);
			console.log(rect1.height);
			console.log(rect2.height,rect2.width);
```

例8-3

```javascript
 // 首先定义一个函数，他们将被用作方法
        function Rectangle_area() {
            return this.width * this.height;
        }
        function Rectangle_perimeter() {
            return 2 * this.width + 2 * this.height;
        }
        function Rectangle_set_size(w, h) {
            this.width = w;
            this.height = h;
        }
        function Rectangle_enlarge() {
            this.width *= 2;
            this.height *= 2;
        }
        function Reactangle_shrink() {
            this.width /= 2;
            this.height /= 2;
        }

        // 为Rectangle对象定义一个构造函数方法。
        // 构造函数不仅要初始化属性，还要给方法赋值。
        function Rectangle(w,h){
            // 初始化对象的属性
            this.width = w;
            this.height = h;
            // 定义对象的方法。
            this.area = Rectangle_area;
            this.perimeter  = Rectangle_perimeter;
            this.set_size = Rectangle_set_size;
            this.enlarge = Rectangle_enlarge;
            this.shrink = Reactangle_shrink;
        }
        var r = new Rectangle(2,2);
        var a = r.area();
        r.enlarge();
        var p = r.perimeter();
        console.log(a);
        console.log(p);
```

例 8-4

```javascript
 		// 为我们的类定义一个构造函数方法
        // 为它初始化circle对象的属性
        // 每个CIrcle对象的属性值都不同
        function Circle(x, y, r) {
            this.x = x;
            this.y = y;
            this.r = r;
        }
        // 创建并舍弃初始的Circle对象
        // 在JavaScript中，这将创建原型对象
        new Circle(0, 0, 0);
        // 定义一个常量，及所有Circle对象共享的属性
        // 事实上，这只是使用了Math.pi
        Circle.prototype.pi = 3.14159;
        // 定义一个计算周长的方法
        // 声明一个函数，然后把它赋给原型对象的一个属性
        // 注意上面定义常量的用法
        function Circle_circumference() {
            return 2 * this.pi * this.r;
        }
        Circle.prototype.circumference = Circle_circumference;
        // 定义另一个方法。这次试用函数直接量来定义函数
        // 并且试用一步就将它赋给对象的属性。
        Circle.prototype.area = function () {
            return this.pi * this.r * this.r;
        }
        // Circle类已经定义了
        // 我们可以实例并调用它的方法
        var c = new Circle(0.0, 0.0, 1.0);
        var a = c.area();
        var p = c.circumference();
        console.log(a);
        console.log(p);
```

## 面向对象的JavaScript

在JavaScript中，同一个类可以具有多个对象。

### 实例属性

每个对象都有它自己单独的实例属性的副本。

JavaScript中的任何对象属性都是实例属性。

### 实例方法

实例方法由特定的对象或实例调用

实例方法使用关键字this来引用它们要操作的对象或实例。

### 