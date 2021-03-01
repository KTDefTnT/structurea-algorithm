var { BinaryTree } = require('./binary_tree.js');
let { Stack } = require('../stack/self_test_stack.js');
// 对于一棵树，如果每个节点的左右子树互换位置，那么就变成了这棵树的镜像
// 数据 
var bt = new BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))");

// 用非递归实现前序遍历 先输出自己 然后再访问左子树 最后访问右子树
function pre_order (node) {
  var stack = new Stack();
  var curr_node = node;
  while (curr_node) {
    console.log(curr_node.data); // 首先输出自己
    if (curr_node.rightChild) { 
      stack.push(curr_node.rightChild);
    }
    if (curr_node.leftChild) {
      curr_node = curr_node.leftChild;
    } else {
      // 没有左子树  处理右子树
      curr_node = stack.pop();
    }
  }
}
// pre_order(bt.get_root());

// 中序遍历  先输出左子树，再处理自己 最后处理右子树
function in_order (node) {
  if (node === null) return null;
  var stack = new Stack();
  var curr_node = node;
  while (true) {
    // 处理左子树
    while (curr_node) {
      stack.push(curr_node);
      curr_node = curr_node.leftChild;
    }

    let pop_node = stack.pop();
    console.log(pop_node.data);
    // 不能直接输出当前节点，当前节点可能还存在右子树
    curr_node = pop_node.rightChild;
    
    // 如果curr_node没值 而且stack空了 代表树全部处理完了
    if (!curr_node && stack.isEmpty()) break;
  }
}

in_order(bt.get_root());