/**
 * 查找并返回链表的中间节点
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
var node6 = new Node(6);
// var node7 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
// node6.next = node7;

function findMiddle(head) {
  if(!head) return null;
  let fast = head;
  let curr_node = head;
  while(fast && fast.next) {
    curr_node = curr_node.next;
    fast = fast.next.next;
  }
  return curr_node.data;
}

var resNode = findMiddle(node1);
console.log(resNode);