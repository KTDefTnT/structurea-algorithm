/**
 * 使用队列打印出杨辉三角的前n行，n >= 1
 */
// const Queue  = require("./index");
function prient_yanghui(n) {
  let queue = new Queue();
  let prev_queue = new Queue();
  let line;
  let index = 1; // 当前打印的行数
  while(index <= n) {
    line = '';
    // 初始化一个1
    prev_queue.enqueue(1);
    line = `${line} 1`;
    queue.enqueue(1);
    if (index > 1) {
      // 当index > 2时开始进行使用上一行的数据
      // 取出开头的数据
      let prev_value = prev_queue.dequeue();
      while(prev_queue.head() !== 0) {
        let next_value = prev_value + prev_queue.head();
        queue.enqueue(next_value);
        prev_queue.enqueue(next_value);
        line = `${line} ${next_value}`;
        prev_value = prev_queue.dequeue();
      }
      // 将末尾的0弹出
      prev_queue.dequeue();
      // 最末尾加入1 与结尾行表示0
      prev_queue.enqueue(1);
      // 当前行打印完毕完毕 末尾加入1
      line = `${line} 1`;
      queue.enqueue(1);
    }
    queue.enqueue(0);
    prev_queue.enqueue(0);
    prev_queue.print();
    document.write(`${line} <br />`);
    index++;
  }

  queue.print();
  // for(let k = 0; k <= queue.size(); k++) {
  //   let item = queue.dequeue();
  //   if (item === 0) {
  //     document.write('<br />');
  //   } else {
  //     document.write(`${item} `);
  //   }
  // }
}

prient_yanghui(8);