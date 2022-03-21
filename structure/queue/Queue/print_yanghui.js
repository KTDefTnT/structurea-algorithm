/**
 * 打印杨辉三角n层
 */
const Queue = require('../../structure/queue/Queue');
function getBlank(n) {
  let number = parseInt((2*n - 1)/2);
  return new Array(number).fill(' ').join('');
}

function print_triangle(n) {
  let queue = new Queue();
  // 第一个放1
  queue.enqueue(1);
  // 先创建一个杨辉三角的队列结构
  for (let i = 1; i <= n; i++) {
    // 取出上一轮中的两个  然后进行新增后添加到队列尾部
    let prev_value = 0;
    let line = '';
    for (let j = 0; j < i; j++) {
      let dequeue_value = queue.dequeue();
      // queue.print();
      line += j === 0 ? `${getBlank(n - i + 1)}${dequeue_value}` : ` ${dequeue_value}`;
      // line += dequeue_value + "  "
      // 计算下一个值
      let new_value = dequeue_value + prev_value;
      prev_value = dequeue_value;
      queue.enqueue(new_value);
    }

    // 每一层的尾部要加入一个1 
    queue.enqueue(1);
    console.log(line)
  }
}

print_triangle(10)