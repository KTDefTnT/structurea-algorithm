/**
 * 实现一个栈，除了常见的push，pop方法以外，提供一个min方法，返回栈里最小的元素，且时间复杂度为o(1) - 栈顶就是最小值
 * 
 * 分而治之： data_stack只进行数据的处理，min_stack只进行最小值存储处理
 */
const Stack = require('./index.js');

function MinStack() {
  var data_stack = new Stack(); // 存储数据
  var min_stack = new Stack(); // 存储每次数据操作的最小值

  this.push = function(item) {
    data_stack.push(item);

    // 先判断min_stack中是否有数据，若无数据则直接插入
    if (min_stack.isEmpty() || min_stack.top() > item) {
      min_stack.push(item);
    } else {
      // 若插入的数据大于当前已存在的最小值 则将最小值重新插入一次
      min_stack.push(min_stack.top());
    }
  }

  // 弹出栈顶元素
  this.pop = function() {
    min_stack.pop(); // 同步弹出当前最小值
    return data_stack.pop();
  }

  // 获取最小值
  this.min = function() {
    return min_stack.top();
  }
}

minStack = new MinStack();

minStack.push(3);
minStack.push(6);
minStack.push(1);
console.log(minStack.min());
minStack.push(2);
minStack.push(8);
console.log(minStack.min());