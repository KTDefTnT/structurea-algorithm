function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
// node.next.next.next.next = new ListNode(5);

var reorderList = function (head) {
  if (!head || !head.next) return head;

  let count = 0;
  let map = new Map();
  while (head) {
    map.set(count, head.val);
    count++;
    head = head.next;
  }

  let new_head = new ListNode('head');
  let curr_node = new_head;

  let middle = Math.floor(count / 2);
  console.log('middle', middle);
  for (let i = 0; i < middle; i++) {
    const next_node1 = new ListNode(map.get(i));
    const next_node2 = new ListNode(map.get(count - 1 - i)) ;

    curr_node.next = next_node1;
    next_node1.next = next_node2;

    curr_node = next_node2;
  }

  if (count % 2) {
    curr_node.next = new ListNode(map.get(middle));
  }

  console.log('new_head', new_head);
  return new_head.next;
};

reorderList(node);