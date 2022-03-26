function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * 
 * 
 */
var getIntersectionNode = function (headA, headB) {
    let headACount = 0;
    let headBCount = 0;
    if (!headA || !headB) return null;

    let curr_nodeA = headA;
    let curr_nodeB = headB;
    while (curr_nodeA) {
        curr_nodeA = curr_nodeA.next;
        headACount++;
    }

    while (curr_nodeB) {
        curr_nodeB = curr_nodeB.next;
        headBCount++;
    }

    if (headACount > headBCount) {
        let diffCount = headACount - headBCount;
        while (diffCount) {
            headA = headA.next;
            diffCount--;
        }
    }

    if (headBCount > headACount) {
        let diffCount = headBCount - headACount;
        while (diffCount) {
            headB = headB.next;
            diffCount--;
        }
    }

    while (headA && headB) {
        if (headA === headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }

    return null;
};

let headA = new ListNode(1);
let headB = new ListNode(2);

let node1 = new ListNode(3);
let node2 = new ListNode(4);
let node3 = new ListNode(5);
let node4 = new ListNode(6);

// 1->3->4->5
headA.next = node1;
node1.next = node2;
node2.next = node3;

// 2->6->2->4->5
headB.next = node4;
node4.next = node1;

console.log('headA', headA);
console.log('headB', headB);

console.log(getIntersectionNode(headA, headB));