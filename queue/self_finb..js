let { Queue } = require('./self_test_queue.js');
function finb (n) {
  let index = 0;
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(1);
  if (n <= 0 || isNaN(n)) return null;
  if (n === 1 || n === 2) return 1;
  while (index < n - 2) {
    let del_value = queue.dequeue();
    let head_value = queue.head();
    let curr_value = del_value + head_value;
    queue.enqueue(curr_value);
    index += 1;
  }
  queue.dequeue();
  return queue.dequeue();
}

console.log(finb(10));