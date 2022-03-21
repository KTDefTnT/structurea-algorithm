// var largestRectangleArea = function(heights) {
//   const stack = [];
//   let maxArea = 0;
//   heights = [0, ...heights, 0];

//   for (let i = 0; i < heights.length; i++) {
//       // 找到当前最小大于当前值的那个top值
//       while(heights[i] < heights[stack[stack.length - 1]]) {
//           // 将栈顶元素弹出
//           let stackTopIndex = stack.pop();
//           maxArea = Math.max(
//             maxArea, 
//             heights[stackTopIndex] * (i - stack[stack.length - 1] - 1));
  
//       }
//       stack.push(i);
//   }

//   return maxArea;
// };

// console.log(largestRectangleArea([2,1,2]));

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
//   let curr_node1 = l1;
//   let curr_node2 = l2;
//   let next_value = 0;
//   let head = tail = null; 

//   while(curr_node1 && curr_node2) {
//       let value1 = curr_node1.val;
//       let value2 = curr_node2.val;

//       let newValue = (value1 + value2 + next_value) % 10;
//       next_value = value1 + value2 + next_value >= 10 ? 1 : 0;

//       if (head) {
//           tail.next = new ListNode(newValue);
//           tail = tail.next;
//       } else {
//           head = tail = new ListNode(newValue);
//       }

//       curr_node1 = curr_node1.next;
//       curr_node2 = curr_node2.next;
//   }

//   let resList = curr_node1 ? curr_node1 : curr_node2;

//   while(resList) {
//       let newValue = (resList.val + next_value) % 10;
//       next_value = resList.val + next_value >= 10 ? 1 : 0;
//       tail.next = new ListNode(newValue);
//       tail = tail.next;
//       resList = resList.next;
//   }

//   if (next_value) {
//     tail.next = new ListNode(1);
//   }

//   console.log(head);
//   return head;
// };


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//  var rotateRight = function(head, k) {
//   if (!k || !head || !head.next) return head;

//   let curr_node = head;
//   let link_count = 1;
//   while(curr_node.next) {
//     curr_node = curr_node.next;
//     link_count++;
//   }
//     let rotateTimes = link_count - k % link_count;
//     if (rotateTimes === link_count) {
//       return head;
//     }

//     curr_node.next = head;
//     let tail = null;
//   for (let  i = 0; i < rotateTimes; i++) {
//       tail = head;
//       // 将head往后移动
//       head = head.next;
//   }

//   tail.next = null;

//   console.log('head', head);
//   return head;
// };

// var deleteDuplicates = function(head) {
//   // 边界条件 head为空
//   if (!head) return head;

//   let hashObj = {};

//   let curr_node = head;
//   let tail = head;

//   while(curr_node) {
//       if (hashObj[curr_node.val]) {
//           tail = curr_node.next;
//       } else {
//           hashObj[curr_node.val] = true;
//           tail = curr_node;
//       }
//       curr_node = curr_node.next; 
//   }

//   console.log(head);
//   return head;
// };

var hasCycle = function(head) {
  if (!head || !head.next) return false;

  let map = new Map();
  while (head) {
      if (map.has(head)) return true;//如果当前节点在map中存在就说明有环
      map.set(head, true);//否则就加入map
      head = head.next;//迭代节点
  }
  return false;
};
node = new ListNode(-4);
node.next = new ListNode(-3);
node.next.next = new ListNode(-3);
node.next.next.next = new ListNode(1);
node.next.next.next.next = new ListNode(1);
node.next.next.next.next.next = node.next;

console.log('node', hasCycle(node));

// rotateRight(node, 20);
// deleteDuplicates(node)

