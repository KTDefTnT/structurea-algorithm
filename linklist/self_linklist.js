function LinkList() {
  function Node (element) {
    this.element = element;
    this.next = null;
  }
  this.head = new Node('head'); // 头节点
  // 打印所有的节点
  this.display = function() {
    var curr_node = this.head;
    let link = '';
    while (curr_node !== null) {
      link += curr_node.element + '->';
      curr_node = curr_node.next
    }
    link += 'null';
    console.log('link', link);
  }
  // 查找节点
  this.findCurrNode = function(node) {
    var curr_node = this.head;
    while (curr_node.element !== node) {
      curr_node = curr_node.next; // 寻找下一个节点
    }
    return curr_node;
  }
  // 插入节点, 在已知节点的后面插入
  this.insert = function (new_value, node) {
    let new_node = new Node(new_value);
    let curr_node = this.findCurrNode(node);
    new_node.next = curr_node.next;
    curr_node.next = new_node;
  }
  // 查找上一个节点
  this.findPrevNode = function (node) {
    let prevNode = this.head;
    while (prevNode.next === node && prevNode.next !== null) {
      prevNode = prevNode.next;
    }
    return prevNode;
  }
  // 删除节点 删除已知后的节点
  this.remove = function (node) {
    let prev_node = this.findPrevNode(node);
    if (prev_node.next.next !== null) {
      prev_node.next = prev_node.next.next;
    } else {
      prev_node.next = null;
    }
    prev_node.next.next = null;
  }
  // 显示列表元素
  // 头节点
  // 尾节点
}

var cities = new LinkList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.remove("Conway");
cities.display();