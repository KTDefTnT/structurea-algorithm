/**
 * 有一个数组a[100]存放0--99;要求每隔两个数删掉一个数，到末尾时循环至开头继续进行，求最后一个被删掉的数
 */
const Queue = require('./index.js');

function del_ring(arr_list, rate) {
  let index = 0;
  let queue = new Queue();
  for(let i = 0; i < arr_list.length; i++) {
    queue.enqueue(i);
  }
  
  
  while(queue.size() !== 1) {
    index++;
    // 如果当前值不是需要删除的数，则从队列头部添加到队列尾部
    let item = queue.dequeue();
    if(index % rate !== 0) {
      queue.enqueue(item);
    }
  }

  return queue.head();
}
var arr_list = [];
for(var i=0; i < 5;i++){
    arr_list.push(i);
}
console.log(arr_list);
console.log(del_ring(arr_list, 3));

