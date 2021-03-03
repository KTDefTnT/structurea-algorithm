/**
 * 查找单链表中的倒数第K个节点（k > 0）
 */
 var Node = function(data){
  this.data = data;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function reverseFind(head, k) {
  // 设置一个游标尺码
  var n = k;
  var prev_node = head;
  var curr_node = head;

  // 先让prev_node走k步
  while(n > 0) {
    prev_node = prev_node.next;
    n--;
  }

  // 同时往后走 直到prev_node为null时 则curr_node就是倒数第k个节点
  while(prev_node) {
    prev_node = prev_node.next;
    curr_node = curr_node.next;
  }
  return curr_node;
}

let findNode = reverseFind(node1, 4);
console.log(findNode.data);
