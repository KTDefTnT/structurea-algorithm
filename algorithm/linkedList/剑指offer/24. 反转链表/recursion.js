/**
 * 递归思想： 递归的精髓在于将事情交给别人做，我只负责处理自己的事情。找准递归结束条件 即head.next为空
 * 1、递归后面的节点，默认他们能够处理好自身
 * 2、将自己的下一个节点的后继指向自己 将自己的next设置为null
 * 
 * 以1-2-3-4-5为例子，实际上不需要去仔细思考遍历的流程
 * next_node其实为head的尾节点，
 * 1、在遍历head.next(5)时，触发递归结束条件 将节点5返回
 * 2、开始处理4 当head.next.next = head 即设置为5-4-null
 * 3、处理3 即将4的后继指向自己 自己后继为null 5-4-3-null
 * 依次类推
 * 
 * 时间复杂度： O(n)
 * 空间复杂度： O(n) 每一次遍历都需要保存一个next_node
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 终止条件
  if (!head || !head.next) return head;

  // next_node为head的尾节点
  let new_head = reverseList(head.next);
  // 将当前节点的next.next设置为head
  head.next.next = head;
  // 当前节点的next设置为null，在如果后面还有节点 在下一轮时 next会被重置为上一个head
  head.next = null;

  return new_head;
};
