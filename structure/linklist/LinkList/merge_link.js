/**
 * 
 * 已知有两个有序链表(链表元素从小到大)，
 * 请实现函数merge_link，将两个链表合并成一个有序链表，并返回新链表，原有的两个链表不要修改
 */
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

function merge_link(head1, head2){
  // 在这里实现你的代码
  // 处理特殊情况 head1或者head2为空
  if (!head1) return head2;
  if (!head2) return head1;

  let merge_head = null;
  let merge_tail = null;

  // 判断两个链表最小开始的链表
  let curr_node1 = head1;
  let curr_node2 = head2;
  while(curr_node1 && curr_node2) {
    // 两个链表都未遍历完才开始
    // 寻找两个链表当前节点的最小值
    let min_data;
    if (curr_node1.data >= curr_node2.data) {
      min_data = curr_node2.data;
      curr_node2 = curr_node2.next;
    } else {
      min_data = curr_node1.data;
      curr_node1 = curr_node1.next;
    }

    // 判断当前mergeLink是否为空
    let new_node = new Node(min_data);
    if (!merge_head) {
      merge_head = new_node;
      merge_tail = merge_head;
    } else {
      merge_tail.next = new_node;
      merge_tail = merge_tail.next;
    }
  }

  // 如果存在链表没有遍历完全 则将其追加到新链表的尾部
  let res_link;
  if (curr_node1) {
    res_link = curr_node1;
  }

  if (curr_node2) {
    res_link = curr_node2;
  }

  // 迭代 将当前剩余链表添加到新链表中
  while(res_link.next) {
    merge_tail.next = res_link.next;
    res_link = res_link.next;
    merge_tail = merge_tail.next;
  }

  return merge_head;
};

print(merge_link(node1, node4));

function print(node){
  var curr_node = node;
  while(curr_node){
      console.log(curr_node.data);
      curr_node = curr_node.next;
  }
};