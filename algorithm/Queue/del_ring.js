/**
 * 约瑟夫环
 * 有一个数组a[100]存放0--99;要求每隔两个数删掉一个数，到末尾时循环至开头继续进行，求最后一个被删掉的数。
 */
const Queue = require('../../structure/queue/Queue');
function del_ring(list) {
  let queue = new Queue();
  for(let i = 0; i < list.length; i++) {
    queue.enqueue(list[i]);
  }
  let index = 0;
  while (queue.size() !== 1) {
    // 弹出一个元素,判断是否需要删除
    var item = queue.dequeue();
    index++;
    if (index % 3 !== 0) {
      queue.enqueue(item);
    }
  }

  return queue.head();
}

// 准备好数据
var arr_list = [];
for(var i=0;i< 6;i++){
    arr_list.push(i);
}

console.log(del_ring(arr_list));