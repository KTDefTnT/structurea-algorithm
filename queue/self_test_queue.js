// 先进先出
function Queue () {
  let items = [];
  // enqueue 向队列中添加一个元素
  this.enqueue = function (item) {
    items.push(item);
  }
  // dequeue 从队列中删除一个元素
  this.dequeue = function () {
    return items.shift();
  }
  // head 获取队列中的头元素 
  this.head = function () {
    return items.length > 0 ? items[0] : null;
  }
  // tail 返回队列尾部元素
  this.tail = function () {
    return items.length > 0 ? items[items.length - 1] : null
  }
  // size 返回队列的大小
  this.size = function () {
    return items.length;
  }
  // clear 清除队列
  this.clear = function () {
    items = [];
  }
  // isEmpty 判断队列是否为空
  this.isEmpty = function () {
    return items.length === 0;
  }
}

module.exports = {
  Queue
}