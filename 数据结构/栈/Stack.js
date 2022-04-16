/**
 * 栈： 先进后出 LIFO
 * 需要实现的方法:
 * push 栈顶插入一个元素
 * pop 弹出栈顶元素
 * top 获取栈顶元素
 * isEmpty 判断栈是否为空
 * size 获取栈的长度
 * clear 清空栈
 */
function Stack() {
  let items = [];

  // 从栈顶添加元素  压栈
  this.push = function(item) {
    items.push(item);
  }

  // 弹出栈顶元素
  this.pop = function() {
    return items.pop();
  }

  // 获取栈顶元素
  this.top = function() {
    return items[items.length - 1];
  }

  // 判断栈是否为空
  this.isEmpty = function() {
    return items.length === 0;
  }

  // 返回栈的大小
  this.size = function() {
    return items.length;
  }

  // 清空栈
  this.clear = function () {
    items = [];
    items.length = 0;
  }
}

module.exports = Stack;
