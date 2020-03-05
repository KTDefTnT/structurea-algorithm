function HeadlessLinklist () {
  // 创建节点
  function Node (data) {
    this.data = data;
    this.next = null;
  }
  var length = 0; // 链表长度
  var head = null; // 头节点
  var tail = null; // 尾节点

  // 查找 前一个节点元素
  var findNode = function (index) {
    if (index > length || index < 0) {
      return null;
    }
    let currNode = head;
    let currIndex = 0;
    while (currIndex < index) {
      currNode = currNode.next;
      currIndex += 1;
    }
    return currNode;
  }

  // 打印节点
  this.display = function () {
    let link = " ";
    let currNode = head;
    if (!currNode) {
      console.log(null);
    } else {
      while (currNode) {
        link += currNode.data + '->';
        currNode = currNode.next;
      }
      console.log('display', link + 'null');
    }
  }

  // 添加一个新元素
  this.append = function (data) {
    let new_node = new Node(data);
    if (head === null) { // 头节点如果为空，则直接将新节点设置为头节点，头节点也是尾结点
      head = new_node;
      tail = new_node;
    } else { // 如果链表不为空  将新节点添加在tail后面，再将尾结点重置为新节点
      tail.next = new_node;
      tail = new_node;
    }
    console.log('head', head);
    length++;
  }

  // insert 在指定位置插入一个元素
  this.insert = function (data, index) {
    let newNode = new Node(data);
    if (index === this.length) { // 说明添加到最尾部
      this.append(data);
    } else if (index < 0 || index > this.length) {
      return false;
    } else {
      if (index === 0) { // 如果index = 0，则直接插入作为头节点
        newNode.next = head;
        head = newNode;
      } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        prevNode = findNode(index - 1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
      }
    }
    length++;
    return true;
  }

  // 删除指定位置的元素 返回被删除元素的参数
  this.remove = function (index) {
    let del_node = null;
    if (index < 0 || length === 0 || index >= length) {
      return null;
    } else {
      let prevNode = findNode(index - 1);
      if (index === 0) { // 删除节点为头节点
        del_node = head;
        head = head.next;
        if (head) { // 如果链表只有一个元素
          tail = null;
        }
      } else if (index === length - 1) { // 如果删除的刚好是最后一个元素, 改变尾节点
        del_node = prevNode.next;
        prevNode.next = null;
        tail = prevNode;
      } else { // 中间节点
        prevNode.next = prevNode.next.next;
        del_node = prevNode.next;
      }
    }
    length--;
    return del_node.data;
  }

  // 删除头节点
  this.remove_head = function () {
    let del_node = null;
    if (head) {
      del_node = this.node;
      head = head.next;
      return del_node;
    }
    return null;
  }

  // 删除尾节点
  this.remove_tail = function () {
    let del_node = null;
    if (head) {
      del_node = tail;
      let prevNode = findNode(length - 1);
      tail = prevNode;
      return del_node;
    }
    return null;
  }

  // 返回头节点
  this.head = function () {
    return this.get(0);
  }

  // 返回尾节点
  this.tail = function () {
    return this.get(length - 1);
  }

  this.get = function (index) {
    var node = findNode(index);
    if (node) {
      return node.data;
    }
    return null;
  }

  this.indexOf = function (data) {
    if (length === 0) {
      return -1;
    }
    let currNode = head;
    let index = 0;
    while (currNode.data !== data) {
      currNode = currNode.next;
      index += 1;
    }
    if (currNode) {
      return index;
    }
    return -1;
  }

  this.isEmpty = function () {
    return length === 0;
  }

  this.size = function () {
    return length;
  }

  // 清空链表
  this.clear = function () {
    head = null;
    tail = null;
    length = 0;
  }
};

module.exports = {
  Linklist: HeadlessLinklist
};
// var linklist = new HeadlessLinklist();
// linklist.append('value_1');
// linklist.append('value_2');
// linklist.append('value_3');
// linklist.append('value_4');
// // console.log(linklist.display());
// linklist.insert('insert_1_2', 1);
// // console.log(linklist.display());
// // console.log(linklist.remove(3));
// console.log(linklist.display());
// console.log(linklist.get(2));
// console.log(linklist.indexOf('value_4'));