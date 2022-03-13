// 二叉树
const Stack = require('../stack/Stack');
var BinTreeNode = function(data){
  this.data = data;
  this.leftChild = null;     // 左孩子
  this.rightChild = null;    // 右孩子
  this.parentNode = null;    // 父节点
};

function BinaryTree(string) {
  var root = null; // 根节点

  this.init_tree = function(string) {
    let stack = new Stack();
    let flag = 'left';

    let new_node = null;
    for (let i = 0; i < string.length; i++) {
      let item = string[i];
      if (item === '#') break;

      if (item === '(') {
        flag = 'left';
        // 当前节点还存在子节点  需要入栈等待下一个操作
        stack.push(new_node);
      } else if (item === ',') {
        flag = 'right';
      } else if (item === ')') {
        stack.pop();
      } else {
        new_node = new BinTreeNode(item);
        if (!root) {
          root = new_node;
        } else {
          let parentNode = stack.top();
          new_node.parentNode = parentNode;
          if (flag === 'left') {
            parentNode.leftChild = new_node;
          } else if (flag === 'right') {
            parentNode.rightChild = new_node;
          }
        }
      }
    }
  }

  // 获取根节点
  this.getRoot = function() {
    return root;
  }

  // 递归中序遍历
  this.in_order = function(node) {
    if (node == null) return;

    // 处理左子树
    this.in_order(node.leftChild);
    // 处理自己
    console.log(node.data);
    // 处理右子树
    this.in_order(node.rightChild);
  }

  // 递归先序遍历
  this.prev_order = function(node) {
    if (node == null) return;

    // 处理左子树
    this.in_order(node.leftChild);
    // 处理自己
    console.log(node.data);
    // 处理右子树
    this.in_order(node.rightChild);
  }

  // 递归后续遍历
  this.post_order = function(node) {
    if (node == null) return;

    // 处理左子树
    this.in_order(node.leftChild);
    // 处理自己
    console.log(node.data);
    // 处理右子树
    this.in_order(node.rightChild);
  }

  // 获取树的所有节点数量
  var tree_node_count = function(node) {
    if (node == null) return 0;

    // 获取左子树的数量
    let leftCount = tree_node_count(node.leftChild);
    // 获取右子树的数量
    let rightCount = tree_node_count(node.rightChild);

    // 需要加上本身
    return leftCount + rightCount + 1;
  }

  // 返回节点的数量
  this.size = function() {
    return tree_node_count(root);
  }

  // 计算树的高度
  var tree_height = function(node) {
    if (node == null) return 0;

    var leftHeight = tree_height(node.leftChild);
    var rightHeight = tree_height(node.rightChild);

    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  // 返回树的高度
  this.height = function() {
    return tree_height(root);
  }

  var find_node = function(node, data) {
    if (node == null) return null;
    // 递归终止条件 处理自己
    if (node.data === data) return node;

    // 左子树找,若左子树找到了 则不再去右子树找  直接返回
    let leftNode = find_node(node.leftChild, data);
    if (leftNode) return leftNode;

    // 右子树找 直接返回右子树结果
    return find_node(node.rightChild, data);
  }

  // 寻找节点值为data的节点
  this.find = function(data) {
    return find_node(root, data);
  }
}

const string = 'A(B(D,E(G,)),C(,F))#';
let tree = new BinaryTree();
tree.init_tree(string);
console.log(tree.find('C'));

