// 准备的数据
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

/**
 * // 查找单链表中的倒数第K个节点（k > 0）
 * 思路： 先使一个快的节点fast跑K步后，再添加一个慢的节点slow从头与fast同步往后移动
 * 当fast到了尾节点时，说明slow已经到了倒数第K个节点
 * @param {*} head 传入的节点
 * @param {*} k 倒数位数
 */
function reverse_find (head, k) {
  var step = k;
  var fast = head;
  while (step && fast) {
    fast = fast.next;
    step--;
  }

  if (step !== 0) { // 判断边界值，如果step到0，说明整个head没有K位  则直接返回null
    return null;
  }

  var slow = head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.data;
}
console.log('倒数第K位的节点data：', reverse_find(node1, 1));

/**
 * // 查找单链表中间的节点 偶数节点时不分左右中间
 * 思路： fast每次走两步，slow每次走一步，当fast的后一个节点为null时，slow到了中间 fast到了尾部
 * @param {*} head 传入的节点
 */
function find_middle (head) {
  var fast = head;
  var slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow.data;
}

console.log('中间节点data：', find_middle(node1));