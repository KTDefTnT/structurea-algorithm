/**
 * 查找单链表中的倒数第K个节点（k > 0）（普通模式）
 */

function reverse_find(head, k) {
  let step = k;

  let fast_node = head;
  let slow_node = head;
  while(step > 0 && fast_node) {
    fast_node = fast_node.next;
    step--;
  }

  while(fast_node) {
    fast_node = fast_node.next;
    slow_node = slow_node.next;
  }

  return slow_node.data;
}

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

console.log(reverse_find(node1, 3));










var removeNthFromEnd = function(head, n) {
  let newListNode=new ListNode(0,head);
  let frontward=newListNode;
  let backward=newListNode;
  let tempNum=0;
  while(tempNum!=n){
      frontward=frontward.next;
      tempNum++;
  }

  while(frontward.next){//frontward指向最后一个结点即可。
      frontward=frontward.next;
      backward=backward.next;
  }
  backward.next=backward.next.next;
  return newListNode.next;

};

var removeNthFromEnd = function(head, n) {
  let step = n;
  let fast_node = head;
  let slow_node = head;

  while(step > 0) {
      fast_node = fast_node.next;
      step--;
  }

  // 找到需要删除的节点
  while(fast_node && fast_node.next) {
      fast_node = fast_node.next;
      slow_node = slow_node.next;
  }

  // 找到了倒数第N个节点的前一个节点，删除当前节点 则将前一个节点直接指向后面节点
  slow_node.next = slow_node.next ? slow_node.next.next : null;
  

  return head;
};