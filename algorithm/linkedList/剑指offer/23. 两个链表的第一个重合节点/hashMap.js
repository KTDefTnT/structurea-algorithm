/**
 * 思路： 使用哈希表
 * 边界条件判断:  headA或者headB某一个为空链表时 直接返回null
 * 
 * 1. 遍历链表headA，将headA中的元素全部保存在哈希表hashMap中
 * 2. 遍历链表headB，判断headB中的节点是否存在于哈希表中，若存在则返回当前节点
 * 3. 当遍历完headB时，返回null
 * 
 * 
 * 时间复杂度 O(m+n)
 * 空间复杂度 O(1)
 */
function getIntersectionNode(headA, headB) {
  if(!headA || !headB) return null;

  let hashMap = new Map();

  while(headA) {
    hashMap.set(headA, true);
    headA = headA.next;
  }

  while(headB) {
    if(hashMap.has(headB)) return headB;
    headB = headB.next;
  }

  return null;
}