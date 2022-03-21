/**
 * 从尾到头打印链表，不许翻转链表。
 */
const LinkList = require('../../structure/linklist/LinkList');
function reverse_print_recursion(head) {
  if (!head) return null;
  
  reverse_print_recursion(head.next);
  console.log(head.data);
}

var link = new LinkList();
link.append({id: 1, link: 'head'});
link.append({id: 2, link: 'second'});
link.append({id: 3, link: 'third'});
// link.insert(2, { id: 4, link: 'insert third' });
// console.log(link.indexOf({id: 4, link: 'third'}, 'id'));
const head = link.head();
reverse_print_recursion(head);
