/**
 * A(B(D,E(G,)),C(,F))#
 */
const Stack  = require("../Stack/index");
function BinaryTree() {
  let BinTreeNode = function(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parentNode = null;
  }

  let root = null; // 根节点
  // 采用广义表表示的建立二叉树方法
  this.init_tree = function(string) {
    let stack = new Stack();
    let flag = 'left'; // left表示操作左节点  right表示操作右节点
    let new_node = null;
    for(let i = 0; i < string.length; i++) {
      if (string[i] === '#') return;
      if(string[i] === '(') {
        stack.push(new_node); // 当前节点有孩子，当前节点为最近的父节点
        flag = 'left'; // 表示开始操作的为左孩子
      } else if(string[i] === ')') {
        stack.pop(); // 当前节点的左右孩子全部操作完毕 弹出当前节点
      } else if(string[i] === ',') {
        flag = 'right'; // 表示下一个字符为右孩子
      } else {
        // 碰到字符 - 如果根节点
        new_node = new BinTreeNode(string[i]);
        if(!root) {
          root = new_node;
        } else {
          let parent_node = stack.top();
          if (flag === 'left') {
            parent_node.leftChild = new_node;
          } else if (flag === 'right') {
            parent_node.rightChild  = new_node;
          }
          new_node.parentNode = parent_node;
        }
      }
    }
  }

  // in_order 中序遍历算法
  this.in_order = function(node) {
    // 递归终止条件
    if(node === null) {
      return;
    }

    // 先打印左节点
    this.in_order(node.leftChild);
    console.log(`${node.data} ↓`);
    this.in_order(node.rightChild);
  }

  // 前序遍历
  this.pre_order = function(node) {
    // 递归终止条件
    if(node === null) return;
    // 先打印自身
    console.log(`${node.data} ↓`);
    this.pre_order(node.leftChild);
    this.pre_order(node.rightChild);
  }

  // 后序遍历
  this.post_order = function(node) {
    // 递归终止条件
    if(node === null) return;
    // 最后打印自身
    this.post_order(node.leftChild);
    this.post_order(node.rightChild0);
    console.log(`${node.data} ↓`);
  }

  // 计算节点个数
  var tree_node_count = function(node) {
    // 递归终止条件
    if(node === null) return 0;
    // 先查询左边节点个数
    let left_size = tree_node_count(node.leftChild);
    let right_size = tree_node_count(node.rightChild);
    // 返回总节点个数 左 + 右 + 1
    return left_size + right_size + 1;
  }

  // 返回节点的个数
  this.size = function() {
    return tree_node_count(root);
  }

  var tree_height_count = function(node) {
    // 递归终止条件
    if(node === null) return 0;
    // 查询左孩子和右孩子的高度
    let left_height = tree_height_count(node.leftChild);
    let right_height = tree_height_count(node.rightChild);
    return left_height + right_height + 1;
  }

  // 返回节点的高度
  this.height = function() {
    return tree_height_count(root);
  }

  // 查找指定节点
  var find_node = function(node, data) {
    // 递归终止条件
    if(node === null) return null;
    if(node.data === data) {
      return node;
    }

    // 若当前节点不是指定节点 则从左子树中开始寻找
    let result = find_node(node.leftChild, data);
    if(result) {
      return result;
    }
    // 若左子树中没有找到 则从右子树中查找
    return this.find_node(node.rightChild, data);
  }

  this.find = function(data) {
    return find_node(root, data);
  }

  // 获取根节点
  this.get_root = function() {
    return root;
  }
}

// var binaryTree = new BinaryTree();
// binaryTree.init_tree('A(B(D,E(G,)),C(,F))#');
// // let rootNode = binaryTree.get_root();
// // binaryTree.in_order(rootNode);
// // console.log('size', binaryTree.size());
// console.log(binaryTree.find('B'));

module.exports = BinaryTree;