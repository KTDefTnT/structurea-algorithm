/**
 * 用两个队列实现一个栈
 * push、pop、isEmpty、clear、
 */
const Queue = require('../queue/Queue');
function QueueToStack() {
  let data_queue = new Queue();
  let empty_queue = new Queue();

  this.push = function(value) {
    data_queue.enqueue(value);
  }

  this.pop = function() {
    if (data_queue.isEmpty()) return null;
    // 留一个元素 不做保留 直接删除
    while (data_queue.length > 1) {
      let item = data_queue.dequeue();
      empty_queue.enqueue(item);
    }

    let del_item = data_queue.dequeue(); // 删除元素

    while(!empty_queue.isEmpty()) {
      let item = empty_queue.dequeue();
      data_queue.enqueue(item);
    }

    return del_item;
  }

  this.clear = function() {
    data_queue.clear();
  }

  this.isEmpty = function() {
    return data_queue.isEmpty();
  }

  this.size = function() {
    return data_queue.size();
  }

  this.top = function() {
    return data_queue.tail();
  }
}


module.exports = {
  Stack: QueueToStack
}