/**
 * @param {数据} data 
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

function print(node){
  let link = " ";
  var curr_node = node;
  while(curr_node){
    link = curr_node.data + '-> ' + link;
    curr_node = curr_node.next;
  }
  console.log('link', 'null' + link);
};

// 递归翻转
function reverse_digui(head){
  // 如果head 为null
  if(!head){
      return null;
  }
  if(head.next==null){
      return head;
  }
  // 从下一个节点开始进行翻转
  var new_head = reverse_digui(head.next);
  head.next.next = head;   // 把当前节点连接到新链表上
  head.next = null;
  return new_head;
};
// console.log(reverse_digui(node1));
print(reverse_digui(node1));

function reverse_ditui(head) {
  let prev_node = null;
  let curr_node = head;
  while (curr_node) {
    var next_node = curr_node.next;
    curr_node.next = prev_node;
    prev_node = curr_node;
    curr_node = next_node;
  }
  return prev_node;
}
// print(reverse_ditui(node1));