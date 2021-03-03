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

function Link() {
  let length = 0;
  let head = null;
  let tail = null;
  // 获取指定位置的节点
  var get_node = function(index) {
    let current_node = head;
    let current_index = 0;
    while(current_index < index) {
      current_node = current_node.next;
      current_index++;
    }
    return current_node;
  }
  var Node = function(data){
    this.data = data;
    this.next = null;
  }

  // 添加新元素
  this.append = function(data) {
    let new_node = new Node(data);
    length++;
    if(head === null) {
      head = new_node;
    } else {
      tail.next = new_node;
    }
    tail = new_node;
  }

  // 在指定位置加入节点
  this.insert = function(index, data) {
    let new_node = new Node(data);
    // 判断边界条件，index必须在有效的长度范围之内
    if (index < 0 || index > length) return false;
    if(index === length) {
      tail.next = new_node;
      return true;
    }
    let prevNode = get_node(index);
    let nextNode = prevNode.next;
    prevNode.next = new_node;
    new_node.next = nextNode;
    length++;
    return true;
  }

  // 删除指定位置的节点
  this.remove = function(index) {
    // 边界条件判断
    if(index < 0 || index > length -1) return;
    // 如果要删除头节点则直接调用头节点删除方法
    if (index === 0) {
      this.remove_head();
    }
    // 找到要删除的节点的前一位
    let prevNode = get_node(index - 1);
    let delNode = prevNode.next;
    let nextNode = delNode.next;
    prevNode.next = nextNode;
    length--;
    return delNode;
  }

  // 删除头节点
  this.remove_head = function() {
    if (head === null) return null;
    let delNode = head;
    let nextNode = head.next;
    head = nextNode;
    length--;
    return delNode;
  }

  // 删除尾节点
  this.remove_tail = function() {
    if(head === null) return null;
    let curr_node = head;
    let del_node = tail;
    // 当前节点没有next时，此节点为tail的前一个节点
    while(curr_node.next.next) {
      curr_node = curr_node.next;
    }
    curr_node.next = null;
    tail = curr_node;
    length--;
    return del_node;
  }

  // indexOf，返回指定元素的索引
  this.indexOf = function(data) {
    if(head === null) return null;
    let current_node = head;
    let index = 0;
    while(current_node.next !==null) {
      if (current_node.data === data) {
        return index;
      }
      current_node = current_node.next;
      index++;
    }
    return null;
  }

  // get，返回指定索引位置的元素
  this.get = function(index) {
    // 判断边界值
    if (index < 0 || index >= length) {
      return null;
    }
    return get_node(index);
  }

  // 返回头节点
  this.head = function() {
    return head;
  }

  // 返回尾节点
  this.tail = function() {
    return tail;
  }

  // 返回链表长度
  this.length = function() {
    return length;
  }

  // 链表是否为空
  this.isEmpty = function() {
    return length === 0;
  }

  // 清空链表
  this.clear = function() {
    head = null;
    tail = null;
    length = 0;
  }

  // 打印链表
  this.print = function() {
    let current_node = head;
    let index = 0;
    while(current_node) {
      console.log(`${current_node.data} ↓ -index=${index}`);
      current_node = current_node.next;
      index++;
    }
  }
}

module.exports = Link;