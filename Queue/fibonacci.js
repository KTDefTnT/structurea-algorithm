/**
 * 使用队列计算斐波那契数列的第n项
 */
const Queue  = require("./index");

function fibonacci(n) {
  if(n === 1 || n === 2) return 1;

  var queue = new Queue();
  let index = 1;
  // 斐波那契数列 第一项和第二项都为1
  queue.enqueue(1);
  queue.enqueue(1);

  while(index <= n - 2) {
    index++;
    let del_value = queue.dequeue();
    let head_value = queue.head();
    queue.enqueue(head_value + del_value);
  }

  return queue.tail();
}

console.log(fibonacci(15));

