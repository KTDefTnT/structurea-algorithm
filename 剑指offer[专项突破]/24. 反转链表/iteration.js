/**
 * 思路：
 * 迭代处理，每次都将当前节点的后继节点重置为前一个节点
 * 1. 保存后继节点 next_node
 * 2. 将当前节点curr_node的后继设置为prev_node
 * 3. 将prev_node同步往后移动，prev_node = curr_node;
 * 4. 将curr_node往后移动curr_node = next_node;
 * 5. 全部遍历完成，prev_node即为入参时尾节点 即新的头节点
 * 
 * 时间复杂度: O(n)
 * 空间复杂度：O(1)
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head;

  let prev_node = null;
  let curr_node = head;
  while(curr_node) {
    // ! 保存下一个节点
    const next_node = curr_node.next;
    curr_node.next = prev_node;

    prev_node = curr_node;
    curr_node = next_node;
  }

  return prev_node;
}