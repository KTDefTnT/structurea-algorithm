var { Linklist } = require('./self_headless_linklist.js');

function LinkStack () {
  var linklist = new Linklist();
  console.log(linklist);
  // 元素入栈
  this.push = function (data) {
    linklist.append(data);
  }
  
  // 栈顶元素出栈
  this.pop = function () {
    return linklist.remove_tail();
  }

  // 弹出栈顶元素
  this.top = function () {
    return linklist.tail();
  }

  this.size = function () {
    return linklist.size();
  }

  this.isEmpty = function () {
    return linklist.isEmpty();
  }

  this.clear = function () {
    linklist.clear();
  }
}
var stack = new LinkStack();

stack.push('stack_one');
stack.push('stack_Two');
stack.push('stack_three');
stack.push('stack_oxxx');
console.log('stack', stack.top());