/**
 * enqueue 将元素添加到队列
 * dequeue 将元素出队列
 * head 获取头节点
 * tail 获取尾节点
 * isEmpty 判断队列是否为空
 * size 获取队列长度
 * clear 清空队列
 */
function Queue() {
  let queue = [];
  this.enqueue = function(val) {
    queue.push(val);
  }

  this.dequeue = function() {
    return queue.shift();
  }

  this.head = function() {
    return queue[0];
  }

  this.tail = function() {
    return queue[queue.length - 1];
  }

  this.isEmpty = function() {
    return queue.length === 0;
  }

  this.size = function() {
    return queue.length;
  }

  this.clear = function() {
    queue = [];
    queue.length = 0;
  }

  this.print = function() {
    console.log(queue);
  }
}

module.exports = Queue;