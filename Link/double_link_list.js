/**
 * 实现append，insert，remove，
 * append， 添加一个新的元素
 * insert，在指定位置插入一个元素
 * remove，删除指定位置的节点
 * remove_head，删除首节点
 * remove_tail，删除尾节点
 * indexOf，返回指定元素的索引
 * get，返回指定索引位置的元素
 * head，返回首节点
 * tail，返回尾节点
 * length，返回链表长度
 * isEmpty，判断链表是否为空
 * clear，清空链表
 * print，打印整个链表
 */
function DoubleLinkList() {
  var Node = function(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  let head = null; // 头节点
  let tail = null; // 尾节点
  let length = 0; // 长度

  // 获取指定位置index的元素
  let getNodeByIndex = function(index) {
    // 判断边界条件 index不能小于0 且不能大于length
    if(index < 0 || index > length || isNaN(index)) return null;
    let curr_node = head;
    let curr_index = 0;
    while(curr_index < index) {
      curr_node = curr_node.next;
      curr_index++;
    }
    return curr_node;
  }

  // 添加一个新的元素
  this.append = function(item) {
    let new_node = new Node(item);
    if(!head) {
      head = new_node;
      tail = new_node;
    } else {
      // 将尾节点 后继 指向新节点
      tail.next = new_node;
      // 新节点的 前驱 指向尾节点
      new_node.prev = tail;
      // 新节点的 后继 指向头节点
      new_node.next = head;
      // 尾节点移到新节点上
      tail = new_node;
      // 头节点的 前驱 指向新节点
      head.prev = new_node;
    }
    length++;
  }

  // 在指定位置index处添加一个元素
  this.insert = function(data, index) {
    // 判断边界条件 index不能小于0 且不能大于length
    if(index < 0 || index > length || isNaN(index)) return false;
    if(!head) {
      head = new_node;
      tail = new_node;
    }
    let new_node = new Node(data);
    let curr_node = getNodeByIndex(index);
    let prev_node = curr_node.prev;
    new_node.prev = prev_node; // 新节点前驱指向当前节点的前驱
    new_node.next = curr_node; // 新节点后继指向当前节点
    prev_node.next = new_node; // 前节点 后继 修正为新节点
    curr_node.prev = new_node; // 当前节点 前驱 修正为新节点

    length++;
    return true;
  }

  // 删除指定位置index处的节点
  this.remove = function(index) {
    // 判断边界条件 index不能小于0 且不能大于length
    if(index < 0 || index > length || isNaN(index)) return null;
    let del_node = getNodeByIndex(index);
    let prev_node = del_node.prev;
    let next_node = del_node.next;
    // 将前驱节点的 后继节点指向删除节点的后继节点
    prev_node.next = next_node;
    // 将后继节点的 前驱节点指向删除节点的前驱节点
    next_node.prev = prev_node;

    length--;
    return del_node;
  }

  // 打印整个链表
  this.print = function() {
    let curr_node = head;
    let curr_index = 0;
    while(curr_index < length) {
      let prev_node = curr_node.prev;
      let next_node = curr_node.next;
      console.log(`前驱：${prev_node ? prev_node.data : null}, 当前节点：${curr_node.data}， 后继：${next_node ? next_node.data : null} ↓`);
      curr_node = curr_node.next;
      curr_index++;
    }
  }

  // 返回指定元素的索引
  this.indexOf = function(data) {
    let index = 0;
    let curr_node = head;
    while(index < length) {
      console.log(curr_node.data, data);
      if(curr_node.data === data) {
        return index;
      }
      curr_node = curr_node.next;
      index++;
    }
    return null;
  }

  // 返回指定位置index处的元素
  this.get = function(index) {
    // 判断边界条件 index不能小于0 且不能大于length
    if(index < 0 || index > length || isNaN(index)) return null;
    return getNodeByIndex(index);
  }

  // 清空列表
  this.clear = function() {
    head = null;
    tail = null;
    length = 0;
  }

  this.size = function() {
    return length;
  }

  this.isEmpty = function() {
    return length === 0;
  }
}


var doubleLinkList = new DoubleLinkList();
doubleLinkList.append('1');
// doubleLinkList.print();
console.log('-------------');
doubleLinkList.append('2');
doubleLinkList.append('3');
console.log('-------------');
doubleLinkList.print();
doubleLinkList.insert('2+', 2);
console.log('-------------');
doubleLinkList.print();
console.log('-------------');
console.log('2的索引', doubleLinkList.indexOf('2'));