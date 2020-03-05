let { Stack } = require('../stack/self_test_stack.js');
function StackQueue () {
  let stack_1 = new Stack();
  let stack_2 = new Stack();
  let data_stack = null;
  let empty_stack = null;

  function initStack() {
    if (stack_1.isEmpty()) {
      data_stack = stack_2;
      empty_stack = stack_1;
    } else {
      data_stack = stack_1;
      empty_stack = stack_2;
    }
  }

  function resetStack (data_stack, empty_stack) {
    while (!data_stack.isEmpty()) {
      empty_stack.push(data_stack.pop());
    }
  }

  this.enqueue = function (item) {
    initStack();
    data_stack.push(item);
  }

  this.dequeue = function () {
    initStack();
    while (data_stack.size() !== 1) {
      empty_stack.push(data_stack.pop());
    }
    resetStack(empty_stack, data_stack);
    return data_stack.pop();
  }

  this.head = function () {
    initStack();
    while (data_stack.size() !== 1) {
      empty_stack.push(data_stack.pop());
    }
    let item = data_stack.pop();
    empty_stack.push(item);
    resetStack(empty_stack, data_stack);
    return item;
  }

  this.tail = function () {
    initStack();
    return data_stack.top();
  }
}

let stack_queue = new StackQueue();
stack_queue.enqueue(1);
stack_queue.enqueue(2);
stack_queue.enqueue(3);
stack_queue.enqueue(4);
console.log('tail', stack_queue.tail());
console.log('head', stack_queue.head());
stack_queue.dequeue(5);
console.log('head', stack_queue.head());
console.log('tail', stack_queue.tail());