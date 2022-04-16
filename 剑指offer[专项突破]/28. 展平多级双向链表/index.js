function Node(val,prev,next,child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
};

/**
 * @param {Node} head
 * @return {Node}
 */
// 深度优先： 先处理子节点再处理当前节点
// 可使用的数据结构： 栈
var flatten = function(head) {
  let stack = [];
  let curr_node = head;
  let newHead = new Node(null);
  let nextNode = newHead;
  while (curr_node || stack.length) {
      let new_node = new Node(curr_node.val, null, null, null);
      // 新节点为当前节点的 next，prevNode为当前节点的prev
      // 重置： prevNode为nextNode, nextNode为新节点
      nextNode.next = new_node;
      new_node.prev = nextNode;
      // prevNode = nextNode;
      nextNode = new_node;

      if (curr_node.child) {
          let node = curr_node;
          curr_node = node.child;
          // 去除child  避免陷入循环
          stack.push(node);
      } else {
        curr_node = curr_node.next;
      }

      while (!curr_node && stack.length) {
          let stackNode = stack.pop();
          // stack出来的 不再遍历其子节点
          stackNode.child = null;
          curr_node = stackNode.next;
      }
  }

  return newHead.next;
};

let node4 = new Node(4, null, null, null);
let node3 = new Node(3, null, null, null);
let node2 = new Node(2, null, null, null);
let node1 = new Node(1, null, null, null);

node1.child = node2;
node2.child = node3;
// node1.next = node2;
// node2.prev = node1;
// node3.next = node4;
// node4.prev = node3;

// console.log('node', node1);

console.log('flatten', flatten(node1));