/**
 * 队列是一种特殊的线性表，其特殊之处在于，它只允许你在队列的头部删除元素，在队列的末尾添加新的元素

 * enqueue 从队列尾部添加一个元素（新来一个排队的人，文明礼貌，站在了队伍末尾）
 * dequeue 从队列头部删除一个元素（排队伍最前面的人刚办理完登机手续，离开了队伍）
 * head 返回头部的元素，注意，不是删除（只是看一下，谁排在最前面）
 * size 返回队列大小（数一数有多少人在排队）
 * clear 清空队列（航班取消，大家都散了吧）
 * isEmpty 判断队列是否为空 （看看是不是有人在排队）
 * tail 返回队列尾节点
 */
function Queue() {
  let items = [];

  // 加入队列
  this.enqueue = function(item) {
    items.push(item);
  }

  // 出队列
  this.dequeue = function() {
    return items.shift();
  }

  // 大小
  this.size = function() {
    return items.length;
  }

  // 清空
  this.clear = function() {
    items = [];
  }

  this.isEmpty = function() {
    return items.length === 0;
  }

  // 头节点
  this.head = function() {
    return items[0];
  }

  // 尾节点
  this.tail = function() {
    return items[items.length - 1];
  }

  this.print = function() {
    console.log(items);
  }
}

module.exports = Queue;