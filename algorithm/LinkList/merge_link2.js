var Node = function(data){
  this.data = data;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(4);
var node3 = new Node(9);
var node4 = new Node(2);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(10);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;
node6.next = node7;

function merge_link(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;


  

}

print(merge_link(node1, node4));

function print(node){
  var curr_node = node;
  while(curr_node){
      console.log(curr_node.data);
      curr_node = curr_node.next;
  }
};