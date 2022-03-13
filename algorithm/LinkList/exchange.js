var swapPairs = function(head) {
  if(!head || head.length === 1) return head;

  let dummyHead = new Node('head');
  dummyHead.next = head;
  let temp = dummyHead;

  while(temp.next && temp.next.next) {
    const next_node = temp.next;
    const next_next_node = temp.next.next;

    temp.next = next_next_node;
    next_node.next = next_next_node.next;
    next_next_node.next = next_node;
    temp = next_node;
  }

  return dummyHead.next;
};


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


console.log(swapPairs(node1));