/**
 * ? 二叉搜索树： 对每一棵树，左孩子都比父节点小， 右孩子都比父节点大
 * 
 * 扩展： 内部值大小的比较： 定义一个比较器给外部自定义
 * 
 * 实现:
 *  1、新增节点 insert
 *  2、树的深度、高度 height
 *  3、树的节点、size
 *  4、获取树的最大值 max
 *  5、获取树的最小值 min
 *  6、搜索树的节点 search
 *  7、删除一个节点 remove
 *  8、树的先序遍历 (迭代、递归)
 *  9、树的中序遍历 (迭代、递归)
 *  10、树的后序遍历 (迭代、递归)
 */
function Node(data) {
  this.data = data; // 节点值
  this.leftChild = null; // 左孩子
  this.rightChild = null; // 右孩子
}

class BinarySearchTree {
  constructor() {
    this.root = null; // 根节点
    this.size = 0; // 节点个数
  }

  // ? 插入节点
  insert(data) {
    // 判断根节点是否为空
    if (this.root) {
      this.insertNode(this.root, data);
    } else {
      this.root = new Node(data);
    }

    this.size++;
  }

  insertNode(node, data) {
    if (node.data === data) return; // 若已存在相同的值，不再插入
    // 若值大于当前节点 则放入当前节点的右子树
    if (node.data < data) {
      if (!node.rightChild) {
        node.rightChild = new Node(data);
      } else {
        this.insertNode(node.rightChild, data);
      }
    } else {
      // 若值小于当前节点 则放入当前节点的左子树
      if (!node.leftChild) {
        node.leftChild = new Node(data);
      } else {
        this.insertNode(node.leftChild, data);
      }
    }
  }

  // ? 删除指定节点
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  /**
   * * 删除节点存在三种节点情况
   * * 1、有两个子节点
   * * 2、只有一个子节点
   * * 3、没有子节点
   */
  removeNode(node, data) {
    if (!node) return null;
    // 先找到节点 才能删除
    if (node.data === data) {
      // ! 处理三种删除子节点的情况
      // * 1 存在两个子节点
      if (node.leftChild && node.rightChild) {
        // 当前位置由 当前节点中最小节点代替： 满足二叉搜索树的条件， 左边都比根节点小，右侧都比根节点大
        let minNode = this.minNode(node.rightChild);
        node.data = minNode.data;
        // 删除子树中的minNode
        node.right = this.removeNode(node.rightChild, minNode.data);
        return node;
      } else if (node.leftChild || node.rightChild) {
        // 两个节点都存在的情况 最终会转化成不存在子节点或只有一个子节点的情况
        this.size--;
        // * 2、存在两个子节点
        if (node.leftChild) {
          node = node.leftChild;
          return node;
        } else {
          node = node.rightChild;
          return node;
        }
      } else {
        // * 3、不存在子节点
        this.size--;
        node = null;
        // 返回null，调整父节点的指针指向
        return node;
      }
    } else if (node.data > data) {
      node.leftChild = this.removeNode(node.leftChild, data);
      return node;
    } else {
      node.rightChild = this.removeNode(node.rightChild, data);
      return node;
    }
  }

  // ? 搜索指定的节点
  search(data) {
    return  this.searchNodeIteration(this.root, data);
  }

  searchNode(node, data) {
    if (!node) return false;
    if (node.data === data) return true;
    // 若搜索节点比当前节点大 则往右子树搜索
    if (node.data < data) {
      return this.searchNode(node.rightChild, data);
    } else {
      return this.searchNode(node.leftChild, data);
    }
  }

  searchNodeIteration(node, data) {
    while (node) {
      if (node.data === data) return true;
      if (node.data > data) node = node.leftChild;
      else node = node.rightChild;
    }

    return false;
  }

  // ? 获取最大值
  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let curr_node = node;
    while (curr_node && curr_node.rightChild) {
      curr_node = curr_node.rightChild;
    }

    return curr_node;
  }

  // ? 获取最小值
  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let curr_node = node;
    while (curr_node && curr_node.leftChild) {
      curr_node = curr_node.leftChild;
    }
    return curr_node;
  }

  // ? 获取树的节点个数
  size() {
    return this.size;
  }


  // ? 递归的先序遍历 - 递归
  preOrder(type = 'iteration') {
    let result = [];
    type === 'iteration' 
      ? this.preOrderIterationZuo(this.root, result) 
      : this.preOrderRecursion(this.root, result);
    console.log(type === 'iteration' ? `先序-迭代： ${result}` : `先序-递归： ${result}`);
  }

  // ! 先序-递归
  preOrderRecursion(node, result) {
    if (!node) return;
    // 先处理根节点 - 先序遍历
    result.push(node.data);
    this.preOrderRecursion(node.leftChild, result);
    this.preOrderRecursion(node.rightChild, result);
  }

  // ! 先序-迭代
  preOrderIteration(node, result) {
    let curr_node = node;
    let stack = [];

    while (curr_node) {
      // 处理当前节点, 继续往左走
      result.push(curr_node.data);
      // 判断此节点是否存在右孩子,若有 压入栈中
      if (curr_node.rightChild) {
        stack.push(curr_node.rightChild);
      }

      // 判断是否有左孩子,若有则继续遍历左孩子
      // 若没有,则从栈中获取最近的右孩子
      if (curr_node.leftChild) {
        curr_node = curr_node.leftChild;
      } else {
        curr_node = stack.pop();
      }
    }
  }

  // ! 先序-迭代-左
  preOrderIterationZuo(node, result) {
    let stack = [node]; // 辅助栈
    while (stack.length) {
      let curr_node = stack.pop();

      // 先处理当前根节点
      result.push(curr_node.data);
      if (curr_node.rightChild) stack.push(curr_node.rightChild);
      if (curr_node.leftChild) stack.push(curr_node.leftChild);
    }
  }

  // ? 中序遍历
  inOrder(type = 'iteration') {
    let result = [];
    type === 'iteration' 
      ? this.inOrderIteration(this.root, result) 
      : this.inOrderRecursion(this.root, result);

    console.log(type === 'iteration' ? `中序-迭代： ${result}` : `中序-递归： ${result}`);
  } 

  // ! 中序 - 递归
  inOrderRecursion(node, result) {
    if (!node) return;

    this.inOrderRecursion(node.leftChild, result);
    // 中间处理 - 中序遍历
    result.push(node.data);
    this.inOrderRecursion(node.rightChild, result);
  }

  // ! 中序 - 迭代
  inOrderIteration(node, result) {
    let curr_node = node;
    let stack = [];
    while (curr_node || stack.length) {
      // 若有curr_node左子树 全部压入栈中，优先处理左子树
      while (curr_node) {
        stack.push(curr_node);
        curr_node = curr_node.leftChild;
      }

      // 当前节点全部压入栈中后，依次弹出
      curr_node = stack.pop();
      result.push(curr_node.data);

      // 处理右子树
      curr_node = curr_node.rightChild;  
    }
    return result;
  }

  // ! 中序 - 迭代 - 左程云
  // 每个子树左孩子全部入栈，依次弹出的过程中， 处理当前节点(优先处理左孩子，若没右孩子  则会处理父节点)
  // 对子树的右孩子重复当前操作
  inOrderIterationZuo(node, result) {
    let stack = [];
    while (stack.length || node) {
      if (node) {
        stack.push(node);
        node = node.leftChild;
      } else {
        node = stack.pop();
        result.push(node.data);
        node = node.rightChild;
      }
    }
  }

  // ? 递归的后序遍历 
  postOrder(type = 'iteration') {
    let result = [];
    type === 'iteration' 
      ? this.postOrderIterationZuo(this.root, result) 
      : this.postOrderRecursion(this.root, result);
    console.log(type === 'iteration' ? `后序-迭代： ${result}` : `后序-递归： ${result}`);
  }

  // ! 后续 - 递归
  postOrderRecursion(node, result) {
    if (!node) return;

    this.postOrderRecursion(node.leftChild, result);
    this.postOrderRecursion(node.rightChild, result);
    result.push(node.data);
  }

  // ! 后续 - 迭代
  postOrderIteration(node, result) {
    return result;
  }
  
  // ! 后续 - 迭代 左
  postOrderIterationZuo(node, result) {
    let inStack = [node];
    let outStack = [];

    while (inStack.length) {
      node = inStack.pop();
      outStack.push(node.data);
      if (node.leftChild) inStack.push(node.leftChild);
      if (node.rightChild) inStack.push(node.rightChild);
    }

    for(let i = outStack.length - 1; i >= 0; i--) {
      result.push(outStack[i]);
    }
  }

  // ? 获取树的深度
  height() {
    return this.getHeight(this.root);
  }

  getHeight(node) {
    if (!node) return 0;

    // 获取左子树的高度
    let leftHeight = this.getHeight(node.leftChild);
    let rightHeight = this.getHeight(node.rightChild);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // ? 打印每一层的节点
  cellPrint() {
    let queue = [this.root];
    while (queue.length) {
      let result = [];
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let curr_node = queue.shift();
        result.push(curr_node.data);
        if (curr_node.leftChild) queue.push(curr_node.leftChild);
        if (curr_node.rightChild) queue.push(curr_node.rightChild);
      }

      console.log(result, '每一层的节点个数：' + result.length);
    }
  }
    
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5)
tree.insert(7)
tree.insert(14)
tree.insert(19)
tree.insert(13);
tree.insert(18);

console.log('tree', tree);
// tree.remove(14);
console.log('tree', tree);
// tree.cellPrint();
// console.log(tree.height());

tree.preOrder('递归');
tree.preOrder();

tree.inOrder('递归');
tree.inOrder()

tree.postOrder('递归');
tree.postOrder()
// console.log(tree.min());

console.log(tree.search(20));
console.log(tree.search(14));
// console.log(tree.max());