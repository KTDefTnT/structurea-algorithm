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

function print(node){
  var curr_node = node;
  while(curr_node){
      console.log(curr_node.data);
      curr_node = curr_node.next;
  }
};

function ReverseIteration(head) {
  if(!head) return null;
  let prev_node = null;
  let curr_node = head;
  let next_node = null;
  // 当当前节点存在时，需要进行翻转 一次翻转一个节点即可
  while(curr_node) {
    next_node = curr_node.next; // 找到当前节点的后一个节点
    curr_node.next = prev_node; // 将当前节点指向前一个节点
    prev_node = curr_node; // 保存后一个节点值

    // 节点后移
    curr_node = next_node;
  }
  return prev_node;
}

// print(ReverseIteration(node1));

function ReverseRecursion(head) {
  if(!head) return null;
  // console.log('curr_node', head);
  if (head.next === null) {
    return head;
  }
  var next_node = ReverseRecursion(head.next);
  head.next.next = head;
  head.next = null;
  
  return next_node;
}
print(ReverseRecursion(node1));