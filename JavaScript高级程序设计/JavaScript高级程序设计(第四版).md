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

- 复制数值时，如Number类型数据，两个变量可以完全独立使用，互补干扰