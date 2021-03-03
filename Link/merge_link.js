/**
 * 已知有两个有序链表(链表元素从小到大)，请实现函数merge_link，将两个链表合并成一个有序链表，并返回新链表，原有的两个链表不要修改
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

// link1
node1.next = node2;
node2.next = node3;

// link2
node4.next = node5;
node5.next = node6;
node6.next = node7;

function print(node){
  var curr_node = node;
  while(curr_node){
      console.log(curr_node.data);
      curr_node = curr_node.next;
  }
};

function mergeLink(head1, head2) {
  if(!head1) {
    return head2;
  } else if(!head2) {
    return head1;
  }

  let merge_head = null;
  let merge_tail = null;
  let curr_1 = head1;
  let curr_2 = head2;
  while(curr_1 && curr_2) {
    var min_data;
    // 判断node1和node2的值
    if(curr_1.data > curr_2.data) {
      min_data = curr_2.data;      
      curr_2 = curr_2.next;
    } else {
      min_data = curr_1.data;
      curr_1 = curr_1.next;
    }

    // 将当前最小值插入mergelink中
    let new_node = new Node(min_data);
    if(!merge_head) {
      merge_head = new_node;
      merge_tail = new_node;
    } else {
      merge_tail.next = new_node;
      merge_tail = new_node;
    }
  }

  let resLink = curr_2 ? curr_2 : curr_1;
  while(resLink) {
    let new_node = new Node(resLink.data);
    merge_tail.next = new_node;
    merge_tail = new_node;
    resLink = resLink.next;
  }
  return merge_head;
}

let merge_link = mergeLink(node1, node4);
print(merge_link);