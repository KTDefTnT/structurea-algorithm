var { Stack } = require('../stack/self_test_stack.js');
var BinTreeNode = function (data) {
  this.data = data;
  this.leftChild = null; // 左孩子 
  this.rightChild = null; // 右孩子
  this.parent = null; // 父节点
}

function BinaryTree () {
  var root = null;
  
  // 初始化数 广义表表达二叉树 A(B(D,E(G,)),C(,F))#
  this.init_tree = function (string) {
    var stack = new Stack();
    var k = 0; // 标识左子树还是右子树   左子树1 右子树2
    var new_node = null;
    for (let i = 0; i < string.length; i++) {
      var item = string[i];
      if (item === '(') {
        stack.push(new_node);
        k = 1; // 左子树  而且表示上一个new_node是子树根节点 需保留栈顶继续接收右子树
      } else if (item === ',') {
        k = 2; // 右子树
      } else if (item === ')') {
        stack.pop(); // 肯定上一个new_node树已经执行完毕，将栈顶的子树根节点弹出
      } else {
        new_node = new BinTreeNode(item); // 创建节点
        if (root === null) {
          root = new_node;
        } else if (k === 1) {
          parent_node = stack.top();
          parent_node.leftChild = new_node;
          new_node.parent = parent_node;
        } else {
          parent_node = stack.top();
          parent_node.rightChild = new_node;
          new_node.parent = parent_node;
        }
      }
    }
  }

  // 返回根节点
  this.get_root = function () {
    return root;
  }

  // 中序遍历 先遍历处理左子树，然后是当前节点  最后再是右子树
  this.in_order = function (node) {
    if (node === null) return;
    this.in_order(node.leftChild)
    console.log(node.data);
    this.in_order(node.rightChild);
  }

  // 前序遍历 先处理自己，再去处理左子树，最后处理右子树
  this.pre_order = function (node) {
    if (node === null) return;
    console.log(node.data);
    this.pre_order(node.leftChild);
    this.pre_order(node.rightChild);
  }

  // 后序遍历 再去处理左子树，最后处理右子树 最后输出自己
  this.post_order = function (node) {
    if (node === null) return;
    this.post_order(node.leftChild);
    this.post_order(node.rightChild);
    console.log(node.data);
  }
  // 查找node下的所有 节点个数
  var tree_node_count = function (node) {
    if (node === null) return 0;
    // 左子树的节点数量加上右子树的节点数量
    let left_node_count = tree_node_count(node.leftChild);
    let right_node_count = tree_node_count(node.rightChild);
    return left_node_count + right_node_count + 1;
  }
  
  // 返回节点数量
  this.size = function () {
    return tree_node_count(root);
  }

  // 查找树的高度
  var tree_height = function (node) {
    if (node === null) return 0;
    // 先计算左子树的高度
    let left_node_height = tree_height(node.leftChild);
    // 再计算右子树的高度
    let right_node_height = tree_height(node.rightChild);
    let child_height = left_node_height > right_node_height ? left_node_height : right_node_height;
    return child_height + 1;
  }

  // 返回树的高度
  this.height = function () {
    return tree_height(root);
  }
  
  var find_node = function (node, data) {
    if (node === null) return false;
    // 如果当前节点的值等于data 查找的就是当前节点
    if (node.data === data) return node;
    // 先到左子树里查找
    var left_res = find_node(node.leftChild, data);
    if (left_res) return left_res;
    // 右子树没有找到 则直接返回左子树查找的结果
    return find_node(node.rightChild, data);
  }

  // 查找节点
  this.find = function (data) {

  }
}

// var bt = new BinaryTree();
// bt.init_tree("A(B(D,E(G,)),C(,F))");
// var root_node = bt.get_root();
// bt.in_order(root_node);
// console.log(bt.size());

module.exports = {
  BinaryTree
}

