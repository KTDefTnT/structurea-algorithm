const BinaryTree  = require("./index");
var bt = new BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
var root_node = bt.get_root();

// 对于一棵树，如果每个节点的左右子树互换位置，那么就变成了这棵树的镜像
var mirror = function(node){
  // 递归终止条件
  if(node === null) return;
  // 先左子树进行镜像改变
  mirror(node.leftChild);
  // 右子树进行镜像改变
  mirror(node.rightChild);

  let left_node = node.leftChild;
  let right_node = node.rightChild;
  node.leftChild = right_node;
  node.rightChild = left_node;
  return node;
};

mirror(root_node);
bt.in_order(root_node);