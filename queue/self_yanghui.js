let { Queue } = require('./self_test_queue.js');
function yang_hui (n) {
  let queue = new Queue();
  queue.enqueue(1);
  for (let i = 1; i <= n; i++) {
    var line = " ";
    var prev = 0;
    for (let j = 0; j < i; j++) {
      // 拿出当前一层的数据
      let item = queue.dequeue();
      line += item + " "; // string 保留当前行所有的数据
      // 计算下一行的数据
      var value = prev + item; // 下一行的第j个数据 = 当前行的 第j-1个数据与 第j个数据之和
      prev = item; // 记录当前的数据，用于计算下一行的j + 1个数据
      queue.enqueue(value);
    }
    queue.enqueue(1);
    console.log(line);
  }
}

console.log(yang_hui(5));