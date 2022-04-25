/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  if (!root) return [];
  let result = [];

  hepler(root, result);
  function hepler(node, result) {
      if (!node) return;

      node.left && hepler(node.left, result);
      result.push(node.val);
      node.right && hepler(node.right, result);
  }

  return result;
};