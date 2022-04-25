// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * 1、递归的参数和返回值
 * 2、确定递归的终止条件
 * 3、确定递归遍历逻辑

 * 使用中序遍历： 根据二叉搜索树的性质， 其中序遍历是递增序列
 */
// 递归的入参： 每一个节点
// 递归的返回值： 是否为合法二叉树 boolean
let preValue = Number.MIN_SAFE_INTEGER;
var isValidBST = function(root) {
    // 递归终止条件： 没有节点则为true
    if(!root) return true;

    // 判断左子树是否为合法二叉树
    let isLeftValid = isValidBST(root.left);
    // 左子树不合法，直接返回false
    if (!isLeftValid) return false;

    // 操作当前节点, 如果当前节点合法 继续遍历右子树
    // if (root.val > preValue) {
    //   preValue = root.val;
    // } else {
    //   return false;
    // }

    if (preValue >= root.val) return false;
    preValue = root.val;

    // 判断右子树是否为合法二叉树
    return isValidBST(root.right);
};


let root = new TreeNode(0);
// root.left = new TreeNode(1);
// root.right = new TreeNode(4);
// root.right.left = new TreeNode(3);
// root.right.right = new TreeNode(7);

console.log(root);
// let root = new TreeNode(2);
// root.left = new TreeNode(1);
// root.right = new TreeNode(3);

console.log('isValidBST', isValidBST(root));