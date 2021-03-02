/**
 * 栈是先进后出，队列是先进先出，但可以用两个栈来模拟一个队列，请实现enqueue，dequeue， head这三个方法
 */
// const Queue  = require("./index");
const Stack = require('../Stack/index');

function Stack2Queue() {
  var data_stack = new Stack();
  var empty_stack = new Stack();

  var reset_stack = function() {
    while(!empty_stack.isEmpty()) {
      data_stack.push(empty_stack.pop());
    }
  }

  var get_reult_item = function() {
    while(data_stack.size() !== 1) {
      empty_stack.push(data_stack.pop());
    }
    return data_stack.pop()
  }

  this.enqueue = function(item) {
    data_stack.push(item);
  }

  this.dequeue = function() {
    if (data_stack.isEmpty()) return null;
    let resItem = get_reult_item();
    reset_stack();
    return resItem;
  }

  this.head = function() {
    if (data_stack.isEmpty()) return null;
    let resItem = get_reult_item();
    empty_stack.push(resItem);
    reset_stack();
    return resItem;
  }
}

var sq = new Stack2Queue();
sq.enqueue(1);
sq.enqueue(4);
sq.enqueue(8);
console.log(sq.head()); // 1
sq.dequeue();
sq.enqueue(9);
console.log(sq.head()); // 4
sq.dequeue();
console.log(sq.head()); // 8
console.log(sq.dequeue()); // 8
console.log(sq.dequeue()); // 9