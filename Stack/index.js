// 栈 先进后出 first in last out
class Stack {
  constructor() {
    this.items = []; // 存储数据
  }
  // 从栈顶添加元素， 也叫压栈 -- 无返回值，改变原数据
  push(item) {
    this.items.push(item);
  }
  // 从栈顶弹出元素 出栈-- 返回值 -栈顶元素，改变原数据
  pop(item) {
    return this.items.pop(item);
  }

  // 返回栈顶元素 弹出 -- 返回值 - 栈顶元素
  top() {
    return this.items[this.items.length - 1];
  }

  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回栈的大小
  size() {
    return this.items.length;
  }

  // 清空栈
  clear() {
    this.items = [];
  }

  // 打印print
  print() {
    console.log(this.items);
  }
}

module.exports = Stack;