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

function DoubleLinkList(data) {
  function Node(data) {
    this.data = data; // 数据
    this.next = null; // 后继指针
    this.prev = null; // 前驱指针
  }

  let head = null;
  let tail = null;
  let length = 0;

  // 添加一个新的元素
  this.append = function(data) {
    let new_node = new Node(data);

    // 判断是否为首节点
    if (!head) {
      head = new_node;
      tail = new_node;
    } else {
      new_node.prev = tail;
      tail.next = new_node;
      tail = new_node;
    }

    length++;
    return true;
  }

  // 获取指定位置的node
  function get_node(index) {
    let search_index = 0;
    let curr_node = head;
    while(search_index < index) {
      curr_node = curr_node.next;
      search_index++;
    }

    return curr_node;
  }

  // 插入：边界条件  head为空 插入为第一个节点  插入节点为最后一个节点
  // 非法条件： index不可法
  this.insert = function(index, data) {
    let new_node = new Node(data);
    if(index < 0 || index > length || isNaN(index)) {
      throw(new TypeError('请输入合法的index'));
    }
    if (!head) {
      head = new_node;
      tail = new_node;
    }
    if (index === 0) {
      head.prev = new_node;
      new_node.next = head;
      head = new_node;
    } else {
      // 获取index节点的前一个节点
      let prev_node = get_node(index - 1);
      // ! 判断当前是否只有一个头节点
      let next_node = prev_node.next;

      // 将前一个节点的后继指向当前节点
      prev_node.next = new_node;
      // 将当前节点的前驱指向前一个节点
      new_node.prev = prev_node;
      // 将当前节点的后继指向后一个节点
      new_node.next = next_node;

      // ! prev_node.next为null， 表示当前链表只存在一个节点
      // ! new_node.next为null 表示当前插入的节点为尾节点
      if (!prev_node.next || !new_node.next) {
        tail = new_node;
      } else {
        // 将后一个节点的前驱指向当前节点
        next_node.prev = new_node;
      }
    }

    length++;
    return true;
  }

  // 删除指定位置的元素： 1、边界条件判断 删除的头节点 或者尾节点
  // 输入合法性判断： index的类型、index的合法性
  this.remove = function(index) {
    if (index < 0 || index >= length || isNaN(index)) {
      throw(new TypeError('请输入合法的index'));
    }

    if (!head) return null;

    let del_node = null;
    
    if (index === 0) {
      del_node = head;
      head.next.prev = null;
      head = head.next;
      return del_node;
    }
    const prev_node = get_node(index - 1);
    if (index === length - 1) {
      // 删除尾部元素
      del_node = prev_node.next;
      prev_node.next = null;
      tail = prev_node
    } else {
      del_node = prev_node.next;
      next_node = del_node.next;
      prev_node.next = next_node;
      next_node.prev = prev_node;
    }

    length--;
    return del_node;
  }

  // 打印链表
  this.print = function() {
    let curr_node = head;
    while(curr_node) {
      console.log(curr_node.prev ? curr_node.prev.data : null);
      console.log('当前节点：', curr_node.data.link);
      console.log(curr_node.next ? curr_node.next.data : null);
      console.log('=======================');
      curr_node = curr_node.next;
    }
  }
}

var link = new DoubleLinkList();
link.append({id: 1, link: 'head'});
link.append({id: 2, link: 'second'});
link.append({id: 3, link: 'third'});
link.insert(3, { id: 4, link: 'insert third' });

link.remove(3);

link.print();