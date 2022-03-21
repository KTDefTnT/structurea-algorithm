// 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

/**
 * 技巧： 快慢指针
 * 边界条件思考: 
 *    1、head为空处理
 *    2、head为1，清理1个时，需要一个虚拟head(哨兵节点)进行处理
 *    3、题干外的边界条件可思考 非法n(小于等于0，非数字，大于链表长度)
 * 思路：
 *    1、先让fast指针走n次
 *    2、快慢指针一起走，当fast走到头时 slow走到倒数n + 1个数的位置
 *    3. 调整slow.next 将其置为 slow.next.next
 *    4. 返回head
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O() ????? O(n)
 * @param head 链表头节点
 */
 function removeNthFromEnd(head,n) {
  // 边界条件思考 当链表为空
  if(!head) return head;

  // 创建一个虚拟节点， 考虑边界条件 传入的head为1时 删除个数也为1  需要使用虚拟节点进行占位处理
  let new_head = fast = slow = new ListNode('head');
  new_head.next = head;

  // 快指针先走n步
  while(n > 0) {
    fast = fast.next;
    n--;
  }

  // 两者同时走 当fast到了末尾时  slow.next则是需要删除的节点
  while(fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // 将slow.next重置 修改后继，直接将slow.next = slow.next.next
  slow.next = slow.next.next;

  return new_head.next;
}


console.log(removeNthFromEnd(node, 3));