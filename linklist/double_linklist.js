/**
 * 请实现双向列表append，insert,remove这三个方法
 */
function DoubleLinkList() {
  // 定义双向列表的节点
  function Node (data, prev, next) {
    this.data = data; // 数据
    this.prev = null; // 前驱
    this.next = null; // 后继
  }
  var length = 0; // 链表长度
  var head = null; // 头节点
  var tail = null; // 尾节点
  findNode = function (index) {
    let curr_node = head;
    let curr_index = 0;
    while (curr_index < index) {
      curr_node = curr_node.next;
      curr_index++;
    }
    return curr_node;
  }

  // 新增一个节点
  this.append = function (data) {
    let new_node = new Node(data);
    if (head === null) { // 边界条件 如果head节点不存在，则塞入为头节点
      head = new_node;
      head.prev = null;
      head.next = null;
      tail = head;
    } else {
      new_node.prev = tail;
      tail.next = new_node;
      tail = new_node;
    }
    length++;
  }

  // insert 向链表的 data插入到index(下标)位上
  this.insert = function (index, data) {
    let new_node = new Node(data);
    // 边界条件 index输入非法
    if (index < 0 || index > length + 1) return false;
    if (index === 0) { // 插入当前节点为头节点
      new_node.prev = null;
      new_node.next = head.next;
      head = new_node;
    } else if (index === length + 1) {
      tail.next = new_node;
      new_node.prev = tail;
      new_node.next = null;
      tail = null;
    } else {
      let prev_node = findNode(index - 1);
      let next_node = prev_node.next;
      new_node.prev = prev_node;
      prev_node.next = new_node;
      new_node.next = next_node;
    }
    length++;
  }

  // 删除index位置的节点
  this.remove = function (index) {
    if (index < 0 || index > length) return false;
    if (index === 0) { // 边界条件 删除头节点
      let next_node = head.next;
      next_node.prev = null;
      head = next_node;
    } else if (index === length) { // 边界条件 删除尾节点
      let prev_node = tail.prev;
      prev_node.next = null;
      tail = prev_node;
    } else {
      let prev_node = findNode(index - 1);
      let next_node = findNode(index + 1);
      prev_node.next = next_node;
      next_node.prev = prev_node;
    }
    length--;
  }
  
  // 辅助函数 打印链表
  this.print = function () {
    let curr_node = head;
    link = " ";
    while (curr_node) {
      link += curr_node.data + '->';
      curr_node = curr_node.next;
    }
    console.log('link', link + 'null');
  }
}

// 下标从0开始
var doubleLinkList = new DoubleLinkList();
doubleLinkList.append(1);
doubleLinkList.print();
doubleLinkList.append(2);
doubleLinkList.print();
doubleLinkList.append(3);
doubleLinkList.print();
doubleLinkList.append(4);
doubleLinkList.print();
doubleLinkList.insert(2, '下标为2哦');
doubleLinkList.print();
doubleLinkList.remove(3); // 删除下标为3 的3
doubleLinkList.print();