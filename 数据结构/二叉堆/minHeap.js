/**
 * 实现一个最小堆： 所有的节点元素都大于根元素
 * 实现方法：
 *    1、insert 插入元素
 *    2、pop 删除顶部元素
 *    3、top 查看顶部元素
 *    4、size 返回当前堆的大小
 *    5、isEmpty 当前堆是否为空
 */

class MinHeap {
  constructor () {
    this.heap = [];
  }

  /**
   * 向堆中插入一个元素
   * @param {插入元素} value 
   * @returns {是否插入成功}
   */
  insert(value) {
    if (value) {
      this.heap.push(value);
      // 调整堆
      this.siftUp(this.size() - 1);
      return true;
    }
    return false;
  }

  /**
   * 新增节点后，重新调整小顶堆
   * @param {插入位置} index 
   */
  siftUp(index) {
    let parentIndex = this.getParentIndex(index);

    // 往上冒泡，如果父节点比当前节点小  则父节点与当前节点调换位置
    // 一直往上冒泡，直到父节点比当前节点小  停止
    while (this.heap[parentIndex] > this.heap[index]) {
      this.swap(this.heap, parentIndex, index);
      parentIndex = this.getParentIndex(parentIndex);
    }
  }

  swap(heap, parentIndex, index) {
    let temp = heap[parentIndex];
    heap[parentIndex] = heap[index];
    heap[index] = temp;
  }

  // 获取父元素的位置
  getParentIndex(index) {
    if (index === 0) return null;

    return Math.floor((index - 1) / 2);
  }

  // 获取左孩子的位置 
  getLeftIndex (index) {
    let leftIndex = 2 * index + 1;
    if (leftIndex > this.size()) return null;

    return leftIndex;
  }

  // 获取右孩子的位置
  getRightIndex (index) {
    let rightIndex = 2 * index + 2;
    if (rightIndex > this.size()) return null;

    return rightIndex;
  }


  /**
   * 从堆顶弹出一个元素
   * @returns 返回堆顶元素
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const removeValue = this.heap.shift();
    if (this.size() > 1) {
      // 需要调整堆
      this.shiftDown(0);
    }

    return removeValue;
  }


  shiftDown(index) {
    // 获取当前节点 当前节点已变为了 根节点的左节点
    let element = index;
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);

    if (this.heap[element] > this.heap[left]) {
      element = left;
    }

    if (this.heap[element] > this.heap[right]) {
      element = right;
    }

    if (index !== element) {
      this.swap(this.heap, index, element);
      this.shiftDown(element);
    }
  }

  /**
   * 查看堆顶元素
   * @returns 返回堆顶元素
   */
  top () {
    return this.heap[0];
  }

  /**
   * 获取堆的大小
   * @returns 返回堆的大小
   */
  size () {
    return this.heap.length;
  }

  /**
   * 判断堆是否为空堆
   * @returns 返回当前堆是否为空堆
   */
  isEmpty () {
    return this.size() === 0;
  }


  getHeap() {
    console.log('heap', this.heap);
  }
}

module.exports = MinHeap;