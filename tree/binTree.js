let { Stack } = require('../stack/self_test_stack.js');
var BinTreeNode = function(data){
  this.data	=	data;
  this.leftChild	= null;					//	左孩⼦
  this.rightChild	= null;				//	右孩⼦
  this.parentNode	= null;				//	⽗节点
};

function BinaryTree () {
  var root = null; // 根节点
  
  //	采⽤⼴义表表示的建⽴⼆叉树⽅法 A(B(D,E(G,)), C(,F))
  this.init_tree = function (string) {
    // 存放数据 
    var stack = new Stack();
    var k = 0; // 0, 1判断左右子树
    let parent = null;
    for (let i = 0; i < string.length; i++) {
      let item = string[i];
      if (item === '(') {
        k = 1; // 碰到括号下一个为左子树节点
        parent = stack.top();
      } else if (item === ')') {
        k = 0; // 碰到括号下一个为右子树节点
        stack.pop();
      } else {
        let new_node = new BinTreeNode(item);
        // 保留当前节点
        stack.push(new_node);
        // 边界值判断
        if (root === null) {
          root = new_node;
        } else {
          if (k === 1) {
            // 上一个节点
            parent.leftChild = new_node;
            new_node.parentNode = parent;
          } else if (k === 0) {
            parent.rightChild = new_node;
            new_node.parentNode = parent;
          }
        }
      }
    }
  }

  // 中序遍历
  this.in_order = function (node) {
    if (node === null) {
      return node;
    }
    this.in_order(node.leftChild);
    console.log(node.data);
    this.in_order(node.rightChild);
  }

  // 获取根节点
  this.get_root = function () {
    return root;
  }
}

var tree = new BinaryTree();
var string = 'A(B(D,E(G,)),C(,F))';
tree.init_tree('A(B(D,E(G,)),C(,F))');
var root = tree.get_root();
tree.in_order(root);