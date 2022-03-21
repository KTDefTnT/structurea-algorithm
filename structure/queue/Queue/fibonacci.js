/**
 * 斐波那契数列
 * 使用队列计算斐波那契数列的第n项
 */
const Queue = require('../../structure/queue/Queue');
function fibonacci(n) {
  let queue = new Queue();
  if (n === 1 || n === 2) return 1;
  queue.enqueue(1);
  queue.enqueue(1);
  let index = 2;
  while(n > index) {
    index++;
    let prev_value = queue.dequeue();
    let next_value = queue.head();
    let new_value = prev_value + next_value;
    queue.enqueue(new_value);
  }

  return queue.tail();
}

console.log(fibonacci(9));