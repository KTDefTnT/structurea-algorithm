/**
 * 用两个栈实现一个队列
 */

function StackQueue() {
  let in_stack = [];
  let out_stack = [];

  function in2OutStack() {
    while(in_stack.length) {
      let res_item = in_stack.pop();
      in_stack.push(res_item);
    }
  }

  this.push = function(val) {
    in_stack.push(val);
  }

  this.pop = function() {
    if (out_stack.length === 0) {
      in2OutStack();
    }

    return out_stack.pop();
  }


  this.head = function() {
    if (out_stack.length === 0) {
      in2OutStack();
    }

    return out_stack[out_stack.length - 1];
  }

  this.tail = function() {
    if (in_stack.length > 0) {
      return in_stack[in_stack.length - 1];
    }

    return out_stack.length > 0 ? out_stack[out_stack.length - 1] : null;
  }

  this.isEmpty = function() {
    return in_stack.length === 0 && out_stack.length === 0;
  }

  this.size = function() {
    return in_stack.length + out_stack.length;
  }
}

module.exports = StackQueue;