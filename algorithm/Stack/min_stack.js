// const Stack = require('../../structure/stack/Stack');
const { Stack } = require('../../structure/stack/QueueStack');
/**
 * 实现一个栈，除了常见的push，pop方法以外，提供一个min方法，返回栈里最小的元素，且时间复杂度为o(1)
 * 思路：
 * 1、准备两个栈，一个单独存储数据  一个单独存储当前阶段的最小值
 * 2、push： 
 *   a.当min_stack中为空时，当前值直接push 为最小值，若再push  比较当前值和min_stack中的最小值，若当前值比最小值还小则push
 *   b.若当前item 比min_stack的最小值要大，则push min_stack的最小值
 * 3、min方法 直接获取min_stack.top()
 */

function MinStack() {
  let data_stack = new Stack();
  let min_stack = new Stack();

  this.push = function(item) {
    data_stack.push(item);
    if (min_stack.isEmpty() || item < min_stack.top()) {
      min_stack.push(item);
    } else {
      min_stack.push(min_stack.top());
    }
  }

  this.pop = function() {
    min_stack.pop();
    return data_stack.pop();
  }

  this.min = function() {
    return min_stack.top();
  }
}


let minStack = new MinStack();
minStack.push(3);
minStack.push(8);
minStack.push(6);
// minStack.push(2); 
// console.log(minStack.min()); 
// minStack.push(1); 
// console.log(minStack.min());
minStack.pop();
// minStack.pop();
minStack.pop();
console.log(minStack.min());