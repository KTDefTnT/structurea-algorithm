var { BinaryTree } = require('./binary_tree.js');
// 对于一棵树，如果每个节点的左右子树互换位置，那么就变成了这棵树的镜像
// 数据 
var bt = new BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))");

mirror = function (node) {
  // 判断边界条件
  if (node === null) return null;
  // 互换位置
  var temp = node.leftChild;
  node.leftChild = node.rightChild;
  node.rightChild = temp;
  mirror(node.leftChild);
  mirror(node.rightChild);
}

var root_node = bt.get_root();
bt.in_order(root_node);
console.log('==========================');
mirror(root_node); // 镜像
bt.in_order(root_node);
