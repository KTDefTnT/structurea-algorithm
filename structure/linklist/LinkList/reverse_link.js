/**
 * 使用迭代和递归两种方法翻转链表,下面的代码已经准备好了上下文环境，请实现函数reverse_iter和reverse_digui。
 */
const LinkList = require('../../structure/linklist/LinkList');

function reverse_iter(head) {
  if (!head) return null;

  let prev_node = null;
  let curr_node = head;
  while(curr_node) {
    var next_node = curr_node.next;
    curr_node.next = prev_node;
    // 前一个节点与当前节点往后移动
    prev_node = curr_node;
    curr_node = next_node;
  }

  return prev_node;
}


// 递归处理
function reverse_recursion(head) {
  if (!head) return null;

  if (!head.next) return head;

  // 最后的尾节点
  let new_head = reverse_recursion(head.next);

  // ! 每一个节点的任务： 将下一个节点链接到自己，将自己的尾部置为null
  // 将当前节点的后一个节点 连接上
  head.next.next = head;
  // 当前节点后一个设置为空，等待下一轮被添加next 或者直接为null 结束递归
  head.next = null;
  return new_head;
}

function print(node){
  var curr_node = node;
  while(curr_node){
      console.log(curr_node.data);
      curr_node = curr_node.next;
  }
};

var link = new LinkList();
link.append({id: 1, link: 'head'});
link.append({id: 2, link: 'second'});
link.append({id: 3, link: 'third'});
// link.insert(2, { id: 4, link: 'insert third' });
// console.log(link.indexOf({id: 4, link: 'third'}, 'id'));
const head = link.head();
print(reverse_iter(head));