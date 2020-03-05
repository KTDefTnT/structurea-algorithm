function Queue () {
  let items = [];
  // 向队列尾部添加一个元素
  this.enqueue = function (item) {
    items.push(item);
  }
  // 从队列头部删除一个元素
  this.dequeue = function () {
    return item.shift();
  }
  // 查询队列头元素
  this.head  = function () {
    return items[0];
  }
  // 返回队列的大小
  this.size = function () {
    return items.length;
  }
  // 清除队列
  this.clear = function () {
    items = [];
  }
  // 判断队列是否为空
  this.isEmpty = function () {
    return items.length === 0;
  }
}

// 0-99 每隔两个数删除一个数，到末尾时循环至开头继续进行 求最后一个被删除元素

// 斐波那契数列