/**
 * 用两个队列实现一个栈
 * 实现 push、pop、top
 */

const Queue  = require("./index");

function Queue2Stack() {
  var queue_1 = new Queue();
  var queue_2 = new Queue();
  let data_queue = new Queue();
  let empty_queue = new Queue();

  // 初始化队列 - 引用类型，对data_queue或者empty_queue的操作会作用在queue_1与queue_2
  var init = function() {
    if(queue_1.isEmpty()) {
      data_queue = queue_2;
      empty_queue = queue_1;
    } else {
      data_queue = queue_1;
      empty_queue = queue_2;
    }
  }

  this.push = function(item) {
    init();
    data_queue.enqueue(item);
  }

  this.pop = function() {
    if (data_queue.isEmpty()) {
      return null;
    }
    while(data_queue.size() !== 1) {
      empty_queue.enqueue(data_queue.dequeue());
    }
    return data_queue.dequeue();
  }

  this.top = function() {
    init();
    return data_queue.tail();
  }
}


var q_stack = new Queue2Stack();
q_stack.push(1);
q_stack.push(2);
q_stack.push(4);
console.log(q_stack.top());   // 栈顶是 4
console.log(q_stack.pop());   // 移除 4
console.log(q_stack.top());   // 栈顶变成 2
console.log(q_stack.pop());   // 移除 2
console.log(q_stack.pop());   // 移除 2