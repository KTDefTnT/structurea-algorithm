let { Queue } = require('./self_test_queue.js');
function QueueStack () {
  let queue_1 = new Queue();
  let queue_2 = new Queue();
  let dataQueue = null;
  let emptyQueue = null;

  function init_Queue () {
    if (queue_1.isEmpty()) {
      dataQueue = queue_2;
      emptyQueue = queue_1;
    } else {
      dataQueue = queue_1;
      emptyQueue = queue_2;
    }
  }

  this.push = function (item) {
    init_Queue();
    dataQueue.enqueue(item);
  }

  this.pop = function () {
    init_Queue();
    while (dataQueue.size() !== 1) {
      emptyQueue.enqueue(dataQueue.dequeue());
    }
    return dataQueue.dequeue();
  }

  this.top = function () {
    init_Queue();
    return dataQueue.tail();
  }
}

let q_stack = new QueueStack();
q_stack.push(1);
q_stack.push(2);
q_stack.push(3);
q_stack.push(5);
console.log(q_stack.pop());
console.log(q_stack.top());