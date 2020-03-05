// 需要数据设置
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

function print(node){
  let link = " ";
  var curr_node = node;
  while(curr_node){
    link += curr_node.data + '-> ';
    curr_node = curr_node.next;
  }
  console.log('link', link);
};
/**
 * 合并两个有序列表为一个有序链表 链表元素从小到大
 */
function merge_link (head1, head2) {
  var merge_head = null;   // 合并后链表头
  var merge_tail = null;   // 合并后链表尾
  if (!head1 || !head2) { // 判断边界条件  如果存在为空的链表 直接将有值链表赋值给 合并链表
    new_link = head1 ? head1 : head2;
    return new_link;
  }
  head1_node = head1;
  head2_node = head2;
  // while (head1_node && head2_node) { // 循环对比 如果链表1当前值大于链表2的当前值 则将链表1值塞入合并链表，链表1下移一位，对比链表2当前位置
  //   if (head1_node.data <= head2_node.data) {
  //     if (merge_head === null) {
  //       merge_head = new Node(head1_node.data);
  //       merge_tail = merge_head;
  //     } else {
  //       console.log(head1_node.data);
  //       let new_node = new Node(head1_node.data);
  //       merge_tail.next = new_node;
  //       merge_tail = new_node;
  //     }
  //     head1_node = head1_node.next;
  //   } else {
  //     if (merge_head === null) {
  //       merge_head = new Node(head2_node.data);
  //       merge_tail = merge_head;
  //     } else {
  //       console.log(head2_node.data);
  //       let new_node = new Node(head2_node.data);
  //       merge_tail.next = new_node;
  //       merge_tail = new_node;
  //     }
  //     head2_node = head2_node.next;
  //   }
  // }

  // 优化后的代码 减少代码冗余
  while (head1_node && head2_node) {
    var min_data = null;
    if (head1_node.data <= head2_node.data) { // 查询从当前次循环head1和head2中最小的节点
      min_data = head1_node.data;
      head1_node = head1_node.next;
    } else {
      min_data = head2_node.data;
      head2_node = head2_node.next;
    }

    let new_node = new Node(min_data);
    if (head === null) {
      merge_head = new_node;
      merge_tail = merge_head;
    } else {
      merge_tail.next = new_node; // 将新节点添加到链表尾节点后面
      merge_tail = new_node; // 将链表的尾节点指向新的尾节点
    }
  }

  // 如果两个链表的长度不一致，可能存在循环完毕后依然有链表不为空  说明当前未循环链表中的值都是最大值 直接将未循环完毕的链表加入合并链表中
  if (!head1_node || !head2_node) {
    no_empty_link = head1_node ? head1_node : head2_node;
    while (no_empty_link) {
      let new_node = new Node(no_empty_link.data);
      merge_tail.next = new_node;
      merge_tail = new_node;
      no_empty_link = no_empty_link.next;
    }
  }
  return merge_head;
}

// merge_link(node1, node4);
print(merge_link(node1, node4));