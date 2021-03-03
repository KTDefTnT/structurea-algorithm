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

function reverse_print(head) {
  if(!head) return null;
  // 当前节点是否为空，为空则返回
  if(head === null) {
    return;
  }
  reverse_print(head.next);
  console.log(`${head.data} ↓`);
}

reverse_print(node1);