const BinaryTree  = require("./index");


function lowest_common_ancestor(root_node, node1, node2) {
  if(root_node === null) return null;
  if(node1.parentNode === root_node && node2.parentNode === root_node) {
    return root_node;
  }
  // 到root_node的左边寻找
  let leftResult = lowest_common_ancestor(root_node.leftChild, node1, node2);
  let rightResult = lowest_common_ancestor(root_node.rightChild, node1, node2);

  // 如果在左边找到了则返回左边结果，否则返回右边结果
  if(leftResult) return leftResult;
  return rightResult;
}

var bt = new BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
var root_node = bt.get_root();

var node1 = bt.find("D");
var node2 = bt.find("G");
// console.log(node1.data);
// console.log(node2.data);

var ancestor = lowest_common_ancestor(root_node, node1, node2);
console.log(ancestor);