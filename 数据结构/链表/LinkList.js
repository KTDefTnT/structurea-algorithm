/**
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

function LinkList() {
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }

  var length = 0; // 长度
  var head = null; // 头节点
  var tail = null; // 尾节点

  // 在尾部添加一个节点
  this.append = function(data) {
    // 创建一个新节点
    var new_node = new Node(data);
    if (head === null) {
      head = new_node;
      tail = new_node;
    } else {
      tail.next = new_node;
      tail = new_node;
    }
    length++;
    return true;
  }

  // 打印链表
  this.print = function() {
    var curr_node = head;
    while(curr_node) {
      console.log(curr_node.data);
      curr_node = curr_node.next;
    }
  }

  // 插入
  this.insert = function(index, data) {
    if (index < 0 || index > length) return false;
    if (length === index) return this.append(data);

    let new_node = new Node(data);
    if (index === 0) {
      new_node.next = head;
      head = new_node;
    } else {
      var curr_node = head;
      var insert_index = 1;
      // 找到当前插入index - 1的node
      while (insert_index < index) {
        curr_node = curr_node.next;
        insert_index++;
      }

      // 循环结束 找到了上一个节点 直接插入
      var next_node = curr_node.next;
      curr_node.next = new_node;
      new_node.next = next_node;
    }

    length++;
    return true;
  }

  // 删除
  this.remove = function(index) {
    if (index < 0 || index >= length) return null;
    let remove_node = null;
    if (index === 0) {
      remove_node = head;
      head = head.next;

      // ! 判断是否只有一个节点
      if (!head) {
        tail = null;
      }
    } else {
      let remove_index = 1;
      let curr_node = head;
      while(remove_index < index) {
        remove_index++;
        curr_node = curr_node.next;
      }

      // 找到了需要删除的节点的前一个节点
      remove_node = curr_node.next;
      let prev_node = curr_node;
      let next_node = remove_node.next;
      prev_node.next = next_node;

      // ! 如果删除的是尾节点 需要将tail节点往前走一个
      if (!remove_node.next) {
        tail = prev_node;
      }
    }

    return remove_node.data;
  }

  // 删除头节点
  this.remove_head = function() {
    return this.remove(0);
  }

  // 删除尾节点
  this.remove_tail = function() {
    return this.remove(length - 1);
  }

  // 获取指定节点
  const get_node = function(index) {
    if (index < 0 || index >= length) return null;

    let get_index = 0;
    let curr_node = head;
    while(get_index < index) {
      get_index++;
      curr_node = curr_node.next;
    }

    return curr_node;
  }

  // 判断是否存在当前的节点的索引位置
  this.indexOf = function(data, key) {
    let index = - 1;
    let curr_node = head;
    while(curr_node) {
      index++;
      let flag = key ? curr_node.data[key] === data[key] : curr_node.data === data;
      if(flag) {
        return index;
      } else {
        curr_node = curr_node.next;
      }
    }

    return -1;
  }

  // 获取指定节点的数据
  this.get = function(index) {
    const node = get_node(index);
    if (node) {
      return node.data;
    }

    return null;
  }

  // 获取头节点
  this.head = function() {
    return get_node(0);
  }

  // 获取尾节点数据
  this.tail = function() {
    return get_node(length - 1);
  }

  // 判断链表是否为空
  this.isEmpty = function() {
    return length === 0;
  }

  // 清空链表
  this.clear = function() {
    head = null;
    tail = null;
    length = 0;
  }
}


module.exports = LinkList;