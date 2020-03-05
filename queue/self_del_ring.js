let { Queue } = require('./self_test_queue.js');
function del_ring (list) {
  var queue = new Queue();
  list.map(item => queue.enqueue(item));
  let index = 0;
  while (queue.size() !== 1) {
    let item = queue.dequeue();
    if (index % 3 !== 0) {
      queue.enqueue(item);
    }
    index += 1;
  }
  return queue.head();
}

var arr_list = [];
for (let i = 0; i < 10; i++) {
  arr_list.push(i);
}

console.log(del_ring(arr_list));


